import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  Host,
  NavView,
  NewVmInput,
  PowerState,
  Selection,
  Task,
  VirtualMachine,
} from "./types";
import {
  clusters,
  datastores,
  defaultExpanded,
  hosts as seedHosts,
  networks,
  seedAlerts,
  vms as seedVms,
} from "./seed";
import {
  assignedIp,
  getBootSequence,
  poweredOffConsole,
  runCommand,
} from "./console-engine";
import { clamp, shortId } from "./utils";

const timers = new Map<string, number[]>();

function clearTimers(key: string) {
  const list = timers.get(key);
  if (!list) return;
  for (const t of list) window.clearTimeout(t);
  timers.delete(key);
}

function later(key: string, ms: number, fn: () => void) {
  const id = window.setTimeout(fn, ms);
  const list = timers.get(key) ?? [];
  list.push(id);
  timers.set(key, list);
}

function pushHist(prev: number[], next: number): number[] {
  const n = [...prev.slice(-23), Math.round(next)];
  return n;
}

function nextTaskId() {
  return `t-${Date.now()}-${shortId()}`;
}

export interface LabState {
  vms: VirtualMachine[];
  hosts: Host[];
  selection: Selection;
  navView: NavView;
  expanded: Record<string, boolean>;
  tasks: Task[];
  search: string;
  tasksOpen: boolean;
  powerOn: (id: string) => void;
  powerOff: (id: string) => void;
  suspend: (id: string) => void;
  resume: (id: string) => void;
  reset: (id: string) => void;
  submitCommand: (id: string, cmd: string) => void;
  appendConsole: (id: string, lines: string[]) => void;
  createSnapshot: (id: string, name: string, description: string) => void;
  revertSnapshot: (id: string, snapId: string) => void;
  deleteSnapshot: (id: string, snapId: string) => void;
  cloneVm: (id: string) => void;
  deleteVm: (id: string) => void;
  createVm: (input: NewVmInput) => string;
  migrateVm: (id: string, hostId: string) => void;
  updateHardware: (id: string, cpu: number, memoryMb: number, diskGb: number) => void;
  renameVm: (id: string, name: string) => void;
  setHostMaintenance: (id: string, on: boolean) => void;
  select: (s: Selection) => void;
  setNavView: (v: NavView) => void;
  toggleExpanded: (id: string) => void;
  setSearch: (q: string) => void;
  setTasksOpen: (on: boolean) => void;
  tick: () => void;
  resetLab: () => void;
}

function patchVm(vms: VirtualMachine[], id: string, patch: Partial<VirtualMachine>): VirtualMachine[] {
  return vms.map((v) => (v.id === id ? { ...v, ...patch } : v));
}

function makeTask(title: string, target: string): Task {
  return {
    id: nextTaskId(),
    title,
    target,
    status: "running",
    progress: 8,
    startedAt: Date.now(),
  };
}

function finishTask(tasks: Task[], id: string, status: Task["status"] = "success", detail?: string): Task[] {
  return tasks.map((t) =>
    t.id === id
      ? { ...t, status, progress: status === "success" ? 100 : t.progress, completedAt: Date.now(), detail }
      : t,
  );
}

function advanceTask(tasks: Task[], id: string, progress: number): Task[] {
  return tasks.map((t) => (t.id === id ? { ...t, progress } : t));
}

function ipFor(vms: VirtualMachine[], vm: VirtualMachine): string {
  return vm.ip ?? assignedIp(vms.map((v) => v.ip));
}

export const useLab = create<LabState>()(
  persist(
    (set, get) => ({
      vms: seedVms,
      hosts: seedHosts,
      selection: { kind: "home" },
      navView: "hosts",
      expanded: defaultExpanded,
      tasks: [
        {
          id: "t-seed-1",
          title: "Refresh storage policy",
          target: "vsanDatastore",
          status: "success",
          progress: 100,
          startedAt: Date.now() - 1000 * 60 * 18,
          completedAt: Date.now() - 1000 * 60 * 17,
        },
      ],
      search: "",
      tasksOpen: true,

      select: (selection) => set({ selection }),
      setNavView: (navView) => set({ navView }),
      toggleExpanded: (id) =>
        set((s) => ({ expanded: { ...s.expanded, [id]: !s.expanded[id] } })),
      setSearch: (search) => set({ search }),
      setTasksOpen: (tasksOpen) => set({ tasksOpen }),

      appendConsole: (id, lines) =>
        set((s) => ({
          vms: patchVm(s.vms, id, {
            consoleLines: [...(s.vms.find((v) => v.id === id)?.consoleLines ?? []), ...lines].slice(-200),
          }),
        })),

      powerOn: (id) => {
        const vm = get().vms.find((v) => v.id === id);
        if (!vm) return;
        if (vm.state === "poweredOn" || vm.state === "starting") return;
        const host = get().hosts.find((h) => h.id === vm.hostId);
        if (host?.state === "maintenance") return;
        clearTimers(id);
        const task = makeTask("Power On virtual machine", vm.name);
        set((s) => ({
          tasks: [task, ...s.tasks].slice(0, 40),
          vms: patchVm(s.vms, id, {
            state: "starting",
            booted: false,
            consoleLines: [],
            tools: "notRunning",
            uptimeSec: 0,
          }),
        }));
        const seq = getBootSequence(vm);
        let acc = 80;
        seq.forEach((step, i) => {
          acc += step.delay;
          later(id, acc, () => {
            get().appendConsole(id, [step.line]);
            const pct = Math.min(96, 10 + Math.round(((i + 1) / seq.length) * 80));
            set((s) => ({ tasks: advanceTask(s.tasks, task.id, pct) }));
            if (i === seq.length - 1) {
              set((s) => ({
                vms: patchVm(s.vms, id, {
                  state: "poweredOn",
                  booted: true,
                  tools: "running",
                  ip: ipFor(s.vms, vm),
                  cpuUsage: 8 + Math.random() * 12,
                  memUsage: 22 + Math.random() * 18,
                  uptimeSec: 1,
                }),
                tasks: finishTask(s.tasks, task.id),
              }));
            }
          });
        });
        later(id, 400, () => set((s) => ({ tasks: advanceTask(s.tasks, task.id, 28) })));
      },

      powerOff: (id) => {
        const vm = get().vms.find((v) => v.id === id);
        if (!vm) return;
        if (vm.state === "poweredOff" || vm.state === "stopping") return;
        clearTimers(id);
        const task = makeTask("Power Off virtual machine", vm.name);
        set((s) => ({
          tasks: [task, ...s.tasks].slice(0, 40),
          vms: patchVm(s.vms, id, { state: "stopping", tools: "notRunning" }),
        }));
        later(id, 280, () => set((s) => ({ tasks: advanceTask(s.tasks, task.id, 45) })));
        later(id, 720, () => {
          set((s) => ({
            vms: patchVm(s.vms, id, {
              state: "poweredOff",
              booted: false,
              cpuUsage: 0,
              memUsage: 0,
              uptimeSec: 0,
              ip: vm.ip,
              consoleLines: poweredOffConsole(vm.name),
            }),
            tasks: finishTask(s.tasks, task.id),
          }));
        });
      },

      suspend: (id) => {
        const vm = get().vms.find((v) => v.id === id);
        if (!vm || vm.state !== "poweredOn") return;
        clearTimers(id);
        const task = makeTask("Suspend virtual machine", vm.name);
        set((s) => ({
          tasks: [task, ...s.tasks].slice(0, 40),
          vms: patchVm(s.vms, id, { state: "suspending" }),
        }));
        later(id, 900, () => {
          set((s) => ({
            vms: patchVm(s.vms, id, {
              state: "suspended",
              tools: "notRunning",
              cpuUsage: 0,
              memUsage: 0,
            }),
            tasks: finishTask(s.tasks, task.id),
          }));
        });
      },

      resume: (id) => {
        const vm = get().vms.find((v) => v.id === id);
        if (!vm || vm.state !== "suspended") return;
        const task = makeTask("Resume virtual machine", vm.name);
        set((s) => ({
          tasks: [task, ...s.tasks].slice(0, 40),
          vms: patchVm(s.vms, id, { state: "resuming" }),
        }));
        later(id, 700, () => {
          set((s) => ({
            vms: patchVm(s.vms, id, {
              state: "poweredOn",
              booted: true,
              tools: "running",
              cpuUsage: 10,
              memUsage: 40,
            }),
            tasks: finishTask(s.tasks, task.id),
          }));
        });
      },

      reset: (id) => {
        const vm = get().vms.find((v) => v.id === id);
        if (!vm) return;
        if (vm.state !== "poweredOn" && vm.state !== "starting") return;
        clearTimers(id);
        const task = makeTask("Reset virtual machine", vm.name);
        set((s) => ({
          tasks: [task, ...s.tasks].slice(0, 40),
          vms: patchVm(s.vms, id, { state: "resetting", booted: false, consoleLines: [], tools: "notRunning" }),
        }));
        later(id, 400, () => {
          set((s) => ({ tasks: finishTask(s.tasks, task.id) }));
          get().powerOn(id);
        });
      },

      submitCommand: (id, cmd) => {
        const vm = get().vms.find((v) => v.id === id);
        if (!vm || !vm.booted || vm.state !== "poweredOn") return;
        const lines = runCommand(vm, cmd);
        if (lines[0] === "__CLEAR__") {
          set((s) => ({
            vms: patchVm(s.vms, id, { consoleLines: [lines[1] ?? `root@${vm.name}:~# `] }),
          }));
          return;
        }
        if (lines.includes("__RESET__")) {
          set((s) => ({
            vms: patchVm(s.vms, id, { consoleLines: [...vm.consoleLines, ...lines.filter((l) => l !== "__RESET__")] }),
          }));
          later(id, 500, () => get().reset(id));
          return;
        }
        set((s) => ({
          vms: patchVm(s.vms, id, { consoleLines: [...vm.consoleLines, ...lines].slice(-200) }),
        }));
      },

      createSnapshot: (id, name, description) => {
        const vm = get().vms.find((v) => v.id === id);
        if (!vm) return;
        const task = makeTask("Create snapshot", vm.name);
        const snap = {
          id: `sn-${shortId()}`,
          name,
          description,
          createdAt: Date.now(),
          parentId: vm.currentSnapshotId,
        };
        set((s) => ({
          tasks: [task, ...s.tasks].slice(0, 40),
        }));
        later(id + "-snap", 800, () => {
          set((s) => ({
            vms: patchVm(s.vms, id, {
              snapshots: [...(s.vms.find((v) => v.id === id)?.snapshots ?? []), snap],
              currentSnapshotId: snap.id,
            }),
            tasks: finishTask(s.tasks, task.id),
          }));
        });
      },

      revertSnapshot: (id, snapId) => {
        const vm = get().vms.find((v) => v.id === id);
        if (!vm) return;
        const snap = vm.snapshots.find((x) => x.id === snapId);
        if (!snap) return;
        const task = makeTask("Revert to snapshot", `${vm.name} / ${snap.name}`);
        set((s) => ({
          tasks: [task, ...s.tasks].slice(0, 40),
          vms: patchVm(s.vms, id, { state: vm.state === "poweredOn" ? "resetting" : vm.state }),
        }));
        later(id + "-rev", 1100, () => {
          set((s) => ({
            vms: patchVm(s.vms, id, { currentSnapshotId: snapId, state: vm.state === "resetting" || vm.state === "poweredOn" ? "poweredOn" : vm.state }),
            tasks: finishTask(s.tasks, task.id),
          }));
          if (vm.state === "poweredOn" || vm.state === "resetting") get().reset(id);
        });
      },

      deleteSnapshot: (id, snapId) => {
        const vm = get().vms.find((v) => v.id === id);
        if (!vm) return;
        const task = makeTask("Delete snapshot", vm.name);
        set((s) => ({ tasks: [task, ...s.tasks].slice(0, 40) }));
        later(id + "-ds", 500, () => {
          set((s) => {
            const cur = s.vms.find((v) => v.id === id);
            if (!cur) return s;
            const remaining = cur.snapshots.filter((x) => x.id !== snapId).map((x) =>
              x.parentId === snapId ? { ...x, parentId: cur.snapshots.find((p) => p.id === snapId)?.parentId ?? null } : x,
            );
            return {
              vms: patchVm(s.vms, id, {
                snapshots: remaining,
                currentSnapshotId: cur.currentSnapshotId === snapId ? remaining.at(-1)?.id ?? null : cur.currentSnapshotId,
              }),
              tasks: finishTask(s.tasks, task.id),
            };
          });
        });
      },

      cloneVm: (id) => {
        const vm = get().vms.find((v) => v.id === id);
        if (!vm) return;
        const task = makeTask("Clone virtual machine", vm.name);
        set((s) => ({ tasks: [task, ...s.tasks].slice(0, 40) }));
        later(id + "-clone", 1400, () => {
          const cloneId = `vm-${shortId()}`;
          const name = `${vm.name}-clone`;
          const clone: VirtualMachine = {
            ...vm,
            id: cloneId,
            name,
            state: "poweredOff",
            booted: false,
            ip: null,
            tools: "notRunning",
            cpuUsage: 0,
            memUsage: 0,
            uptimeSec: 0,
            consoleLines: poweredOffConsole(name),
            snapshots: [],
            currentSnapshotId: null,
            notes: `Clone of ${vm.name}`,
            mac: `00:50:56:${shortId().slice(0, 2)}:${shortId().slice(0, 2)}:${shortId().slice(0, 2)}`,
          };
          set((s) => ({
            vms: [...s.vms, clone],
            tasks: finishTask(s.tasks, task.id),
            selection: { kind: "vm", id: cloneId },
          }));
        });
      },

      deleteVm: (id) => {
        const vm = get().vms.find((v) => v.id === id);
        if (!vm) return;
        clearTimers(id);
        const task = makeTask("Delete virtual machine", vm.name);
        set((s) => ({ tasks: [task, ...s.tasks].slice(0, 40) }));
        later(id + "-del", 600, () => {
          set((s) => ({
            vms: s.vms.filter((v) => v.id !== id),
            tasks: finishTask(s.tasks, task.id),
            selection: { kind: "home" },
          }));
        });
      },

      createVm: (input) => {
        const id = `vm-${shortId()}`;
        const task = makeTask("Create virtual machine", input.name);
        const mac = `00:50:56:${shortId().slice(0, 2)}:${shortId().slice(0, 2)}:${shortId().slice(0, 2)}`;
        const created: VirtualMachine = {
          id,
          name: input.name,
          guestOs: input.guestOs,
          family: input.family,
          hostId: input.hostId,
          clusterId: get().hosts.find((h) => h.id === input.hostId)?.clusterId ?? "cl-lab",
          datastoreId: input.datastoreId,
          networkId: input.networkId,
          cpu: input.cpu,
          memoryMb: input.memoryMb,
          diskGb: input.diskGb,
          state: "poweredOff",
          ip: null,
          mac,
          tools: "notInstalled",
          cpuUsage: 0,
          memUsage: 0,
          cpuHistory: Array.from({ length: 24 }, () => 0),
          memHistory: Array.from({ length: 24 }, () => 0),
          uptimeSec: 0,
          notes: "",
          hardwareVersion: "AHW 21",
          snapshots: [],
          currentSnapshotId: null,
          consoleLines: poweredOffConsole(input.name),
          booted: false,
          folder: get().hosts.find((h) => h.id === input.hostId)?.clusterId === "cl-prod" ? "Production" : "Lab",
        };
        set((s) => ({
          vms: [...s.vms, created],
          tasks: [{ ...task, status: "success" as const, progress: 100, completedAt: Date.now() }, ...s.tasks].slice(0, 40),
          selection: { kind: "vm", id },
          expanded: { ...s.expanded, [input.hostId]: true, [created.clusterId]: true, dc: true },
        }));
        return id;
      },

      migrateVm: (id, hostId) => {
        const vm = get().vms.find((v) => v.id === id);
        const host = get().hosts.find((h) => h.id === hostId);
        if (!vm || !host || vm.hostId === hostId) return;
        const task = makeTask("Relocate virtual machine", `${vm.name} → ${host.name}`);
        set((s) => ({ tasks: [task, ...s.tasks].slice(0, 40) }));
        later(id + "-mig", 500, () => set((s) => ({ tasks: advanceTask(s.tasks, task.id, 40) })));
        later(id + "-mig", 1400, () => {
          set((s) => ({
            vms: patchVm(s.vms, id, { hostId, clusterId: host.clusterId }),
            tasks: finishTask(s.tasks, task.id),
            expanded: { ...s.expanded, [hostId]: true, [host.clusterId]: true },
          }));
        });
      },

      updateHardware: (id, cpu, memoryMb, diskGb) => {
        const vm = get().vms.find((v) => v.id === id);
        if (!vm || vm.state !== "poweredOff") return;
        const task = makeTask("Reconfigure virtual machine", vm.name);
        set((s) => ({
          vms: patchVm(s.vms, id, { cpu, memoryMb, diskGb }),
          tasks: [{ ...task, status: "success" as const, progress: 100, completedAt: Date.now() }, ...s.tasks].slice(0, 40),
        }));
      },

      renameVm: (id, name) => {
        set((s) => ({ vms: patchVm(s.vms, id, { name }) }));
      },

      setHostMaintenance: (id, on) => {
        const host = get().hosts.find((h) => h.id === id);
        if (!host) return;
        const task = makeTask(on ? "Enter maintenance mode" : "Exit maintenance mode", host.name);
        set((s) => ({ tasks: [task, ...s.tasks].slice(0, 40) }));
        later(id + "-mm", 700, () => {
          set((s) => ({
            hosts: s.hosts.map((h) => (h.id === id ? { ...h, state: on ? "maintenance" : "connected" } : h)),
            tasks: finishTask(s.tasks, task.id),
          }));
        });
      },

      tick: () => {
        set((s) => {
          const vms = s.vms.map((vm) => {
            if (vm.state !== "poweredOn") {
              if (vm.cpuUsage === 0 && vm.memUsage === 0) return vm;
              return { ...vm, cpuUsage: 0, memUsage: 0 };
            }
            const cpuUsage = clamp(vm.cpuUsage + (Math.random() - 0.48) * 6, 3, 92);
            const memUsage = clamp(vm.memUsage + (Math.random() - 0.5) * 2.2, 14, 91);
            return {
              ...vm,
              cpuUsage,
              memUsage,
              uptimeSec: vm.uptimeSec + 2,
              cpuHistory: pushHist(vm.cpuHistory, cpuUsage),
              memHistory: pushHist(vm.memHistory, memUsage),
            };
          });
          const hosts = s.hosts.map((h) => {
            const on = vms.filter((v) => v.hostId === h.id && v.state === "poweredOn");
            const cpuShare = on.reduce((a, v) => a + (v.cpu / h.cpuCores) * v.cpuUsage, 0);
            const memShare = on.reduce((a, v) => a + (v.memoryMb / 1024 / h.memoryGb) * v.memUsage, 0);
            const cpuUsage = h.state === "maintenance" ? 4 : clamp(cpuShare, 4, 96);
            const memUsage = h.state === "maintenance" ? 8 : clamp(memShare, 8, 96);
            return {
              ...h,
              cpuUsage,
              memUsage,
              cpuHistory: pushHist(h.cpuHistory, cpuUsage),
              memHistory: pushHist(h.memHistory, memUsage),
              uptimeSec: h.state === "disconnected" ? h.uptimeSec : h.uptimeSec + 2,
            };
          });
          return { vms, hosts };
        });
      },

      resetLab: () => {
        for (const key of timers.keys()) clearTimers(key);
        set({
          vms: seedVms,
          hosts: seedHosts,
          selection: { kind: "home" },
          navView: "hosts",
          expanded: defaultExpanded,
          tasks: [],
          search: "",
        });
      },
    }),
    {
      name: "aether-workstation-v1",
      skipHydration: true,
      partialize: (s) => ({
        vms: s.vms,
        hosts: s.hosts,
        selection: s.selection,
        navView: s.navView,
        expanded: s.expanded,
      }),
    },
  ),
);

export { clusters, datastores, networks, seedAlerts };

export function isBusy(state: PowerState): boolean {
  return state === "starting" || state === "stopping" || state === "suspending" || state === "resuming" || state === "resetting";
}
