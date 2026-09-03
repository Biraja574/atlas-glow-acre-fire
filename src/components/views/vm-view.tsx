import { useState, type ReactNode } from "react";
import {
  Camera,
  Copy,
  MoreHorizontal,
  Pause,
  Play,
  RotateCcw,
  Square,
  Trash2,
} from "lucide-react";
import { ConsolePanel } from "@/components/console-panel";
import { Gauge, Kv, Panel, Spark } from "@/components/widgets";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { clusters, datastores, isBusy, networks, useLab } from "@/lib/store";
import { HostBadge, PowerBadge, ToolsBadge } from "@/lib/status";
import { formatMemoryMb, formatUptime } from "@/lib/utils";
import type { VirtualMachine } from "@/lib/types";
import { toast } from "sonner";

export function VmToolbar({ vm }: { vm: VirtualMachine }) {
  const powerOn = useLab((s) => s.powerOn);
  const powerOff = useLab((s) => s.powerOff);
  const suspend = useLab((s) => s.suspend);
  const resume = useLab((s) => s.resume);
  const reset = useLab((s) => s.reset);
  const cloneVm = useLab((s) => s.cloneVm);
  const deleteVm = useLab((s) => s.deleteVm);
  const migrateVm = useLab((s) => s.migrateVm);
  const hosts = useLab((s) => s.hosts);
  const busy = isBusy(vm.state);
  const on = vm.state === "poweredOn";
  const off = vm.state === "poweredOff";
  const susp = vm.state === "suspended";
  const [snapOpen, setSnapOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-1 overflow-x-auto border-b border-border bg-card px-2 py-1">
        <Button
          size="toolbar"
          variant="ghost"
          disabled={busy || on}
          onClick={() => {
            powerOn(vm.id);
            toast.message(`Power On · ${vm.name}`);
          }}
        >
          <Play className="size-3.5 text-success" />
          Power On
        </Button>
        <Button
          size="toolbar"
          variant="ghost"
          disabled={busy || off}
          onClick={() => {
            powerOff(vm.id);
            toast.message(`Power Off · ${vm.name}`);
          }}
        >
          <Square className="size-3.5 text-destructive" />
          Power Off
        </Button>
        <Button
          size="toolbar"
          variant="ghost"
          disabled={busy || !on}
          onClick={() => {
            suspend(vm.id);
            toast.message(`Suspend · ${vm.name}`);
          }}
        >
          <Pause className="size-3.5 text-warning" />
          Suspend
        </Button>
        {susp ? (
          <Button size="toolbar" variant="ghost" onClick={() => resume(vm.id)}>
            <Play className="size-3.5" />
            Resume
          </Button>
        ) : null}
        <Button size="toolbar" variant="ghost" disabled={busy || !on} onClick={() => reset(vm.id)}>
          <RotateCcw className="size-3.5" />
          Reset
        </Button>
        <Button size="toolbar" variant="ghost" onClick={() => setSnapOpen(true)}>
          <Camera className="size-3.5" />
          Snapshot
        </Button>
        <Button
          size="toolbar"
          variant="ghost"
          onClick={() => {
            cloneVm(vm.id);
            toast.message(`Cloning ${vm.name}`);
          }}
        >
          <Copy className="size-3.5" />
          Clone
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="toolbar" variant="ghost">
              <MoreHorizontal className="size-3.5" />
              More
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {hosts
              .filter((h) => h.id !== vm.hostId)
              .map((h) => (
                <DropdownMenuItem
                  key={h.id}
                  disabled={h.state === "maintenance"}
                  onSelect={() => migrateVm(vm.id, h.id)}
                >
                  Migrate to {h.name.split(".")[0]}
                </DropdownMenuItem>
              ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive" onSelect={() => setDelOpen(true)}>
              <Trash2 className="size-3.5" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <SnapshotDialog vm={vm} open={snapOpen} onOpenChange={setSnapOpen} />
      <Dialog open={delOpen} onOpenChange={setDelOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete {vm.name}?</DialogTitle>
            <DialogDescription>
              The virtual machine and its disks will be removed from inventory. This cannot be undone in this lab.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setDelOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                deleteVm(vm.id);
                setDelOpen(false);
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function SnapshotDialog({
  vm,
  open,
  onOpenChange,
}: {
  vm: VirtualMachine;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const createSnapshot = useLab((s) => s.createSnapshot);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Take snapshot</DialogTitle>
          <DialogDescription>
            Capture the current disk and, if powered on, memory state of {vm.name}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="snap-name">Name</Label>
            <Input
              id="snap-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="before-change"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="snap-desc">Description</Label>
            <Input id="snap-desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            disabled={!name.trim()}
            onClick={() => {
              createSnapshot(vm.id, name.trim(), desc);
              toast.success("Creating snapshot");
              setName("");
              setDesc("");
              onOpenChange(false);
            }}
          >
            Take snapshot
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function SnapshotTree({ vm }: { vm: VirtualMachine }) {
  const revert = useLab((s) => s.revertSnapshot);
  const remove = useLab((s) => s.deleteSnapshot);
  const roots = vm.snapshots.filter((s) => !s.parentId);
  const kids = (id: string) => vm.snapshots.filter((s) => s.parentId === id);

  const node = (id: string, depth: number): ReactNode => {
    const s = vm.snapshots.find((x) => x.id === id);
    if (!s) return null;
    const current = vm.currentSnapshotId === s.id;
    return (
      <div key={s.id} style={{ paddingLeft: depth * 16 }}>
        <div className="flex flex-wrap items-center gap-2 border-b border-border py-2">
          <div className="min-w-0 flex-1">
            <div className="text-xs font-medium">
              {s.name} {current ? <span className="text-primary">· You are here</span> : null}
            </div>
            <div className="text-2xs text-muted-foreground">
              {new Date(s.createdAt).toLocaleString()} {s.description ? `· ${s.description}` : ""}
            </div>
          </div>
          <Button size="sm" variant="outline" disabled={current} onClick={() => revert(vm.id, s.id)}>
            Revert
          </Button>
          <Button size="sm" variant="ghost" onClick={() => remove(vm.id, s.id)}>
            Delete
          </Button>
        </div>
        {kids(s.id).map((c) => node(c.id, depth + 1))}
      </div>
    );
  };

  if (vm.snapshots.length === 0) {
    return (
      <p className="text-xs text-muted-foreground">
        No snapshots. Use Snapshot in the toolbar to capture a restore point.
      </p>
    );
  }
  return <div>{roots.map((r) => node(r.id, 0))}</div>;
}

function ConfigureTab({ vm }: { vm: VirtualMachine }) {
  const update = useLab((s) => s.updateHardware);
  const off = vm.state === "poweredOff";
  const [cpu, setCpu] = useState(String(vm.cpu));
  const [mem, setMem] = useState(String(vm.memoryMb / 1024));
  const [disk, setDisk] = useState(String(vm.diskGb));
  return (
    <div className="grid max-w-lg gap-3 p-4">
      {!off ? (
        <p className="rounded-md bg-secondary px-3 py-2 text-xs text-muted-foreground">
          CPU, memory and disk can only be changed while the virtual machine is powered off.
        </p>
      ) : null}
      <div className="grid gap-1.5">
        <Label htmlFor="hw-cpu">vCPU</Label>
        <Input
          id="hw-cpu"
          type="number"
          min={1}
          max={32}
          disabled={!off}
          value={cpu}
          onChange={(e) => setCpu(e.target.value)}
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="hw-mem">Memory (GB)</Label>
        <Input
          id="hw-mem"
          type="number"
          min={1}
          max={128}
          disabled={!off}
          value={mem}
          onChange={(e) => setMem(e.target.value)}
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="hw-disk">Hard disk 1 (GB)</Label>
        <Input
          id="hw-disk"
          type="number"
          min={8}
          disabled={!off}
          value={disk}
          onChange={(e) => setDisk(e.target.value)}
        />
      </div>
      <Button
        disabled={!off}
        onClick={() => {
          update(vm.id, Number(cpu) || vm.cpu, Math.round(Number(mem) * 1024) || vm.memoryMb, Number(disk) || vm.diskGb);
          toast.success("Hardware reconfigured");
        }}
      >
        Apply
      </Button>
    </div>
  );
}

export function VmView({ vm }: { vm: VirtualMachine }) {
  const hosts = useLab((s) => s.hosts);
  const host = hosts.find((h) => h.id === vm.hostId);
  const cluster = clusters.find((c) => c.id === vm.clusterId);
  const ds = datastores.find((d) => d.id === vm.datastoreId);
  const net = networks.find((n) => n.id === vm.networkId);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2">
        <div className="min-w-0">
          <h1 className="truncate text-base font-medium">{vm.name}</h1>
          <p className="truncate text-2xs text-muted-foreground">
            {vm.guestOs} · {host?.name.split(".")[0]} · {cluster?.name}
          </p>
        </div>
        <PowerBadge state={vm.state} />
      </div>
      <VmToolbar vm={vm} />
      <Tabs defaultValue="summary" className="flex min-h-0 flex-1 flex-col">
        <div className="overflow-x-auto">
          <TabsList className="w-full justify-start px-2">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="console">Console</TabsTrigger>
            <TabsTrigger value="monitor">Monitor</TabsTrigger>
            <TabsTrigger value="snapshots">Snapshots</TabsTrigger>
            <TabsTrigger value="configure">Configure</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="summary" className="min-h-0 flex-1 overflow-auto">
          <div className="grid gap-3 p-4 lg:grid-cols-2">
            <Panel title="Guest OS">
              <dl>
                <Kv k="Guest" v={vm.guestOs} />
                <Kv k="Tools" v={<ToolsBadge status={vm.tools} />} />
                <Kv k="DNS name" v={vm.name} />
                <Kv k="IP address" v={<span className="font-mono">{vm.ip ?? "—"}</span>} />
                <Kv k="Uptime" v={formatUptime(vm.uptimeSec)} />
              </dl>
            </Panel>
            <Panel title="Resources">
              <div className="space-y-3">
                <Gauge value={vm.state === "poweredOn" ? vm.cpuUsage : 0} label="CPU" hint={`${vm.cpu} vCPU`} />
                <Gauge value={vm.state === "poweredOn" ? vm.memUsage : 0} label="Memory" hint={formatMemoryMb(vm.memoryMb)} />
              </div>
            </Panel>
            <Panel title="VM Hardware">
              <dl>
                <Kv k="Compatibility" v={vm.hardwareVersion} />
                <Kv k="CPU" v={`${vm.cpu} vCPU`} />
                <Kv k="Memory" v={formatMemoryMb(vm.memoryMb)} />
                <Kv k="Hard disk 1" v={`${vm.diskGb} GB on ${ds?.name ?? "—"}`} />
                <Kv k="Network adapter 1" v={`${net?.name ?? "—"} (${vm.mac})`} />
              </dl>
            </Panel>
            <Panel title="Related objects">
              <dl>
                <Kv k="Host" v={host?.name ?? "—"} />
                <Kv k="Host state" v={host ? <HostBadge state={host.state} /> : "—"} />
                <Kv k="Cluster" v={cluster?.name ?? "—"} />
                <Kv k="Folder" v={vm.folder} />
                <Kv k="Notes" v={vm.notes || "—"} />
              </dl>
            </Panel>
          </div>
        </TabsContent>
        <TabsContent value="console" className="min-h-0 flex-1 overflow-hidden">
          <ConsolePanel vm={vm} fill />
        </TabsContent>
        <TabsContent value="monitor" className="min-h-0 flex-1 overflow-auto p-4">
          <div className="grid gap-3 lg:grid-cols-2">
            <Panel title="CPU (%)">
              <Spark data={vm.cpuHistory} />
            </Panel>
            <Panel title="Memory (%)">
              <Spark data={vm.memHistory} color="var(--color-muted-foreground)" />
            </Panel>
          </div>
        </TabsContent>
        <TabsContent value="snapshots" className="min-h-0 flex-1 overflow-auto p-4">
          <Panel title="Snapshot manager">
            <SnapshotTree vm={vm} />
          </Panel>
        </TabsContent>
        <TabsContent value="configure" className="min-h-0 flex-1 overflow-auto">
          <ConfigureTab vm={vm} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
