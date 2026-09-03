import { useEffect, useState } from "react";
import { Bell, Menu, Plus, Search, User } from "lucide-react";
import { Group as PanelGroup, Panel, Separator as PanelResizeHandle } from "react-resizable-panels";
import { Toaster } from "sonner";
import { CommandPalette } from "@/components/command-palette";
import { Inventory } from "@/components/inventory";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  ClusterView,
  DatastoreView,
  HomeView,
  HostView,
  NetworkView,
  VmListView,
} from "@/components/views/object-views";
import { VmView } from "@/components/views/vm-view";
import { NewVmWizard } from "@/components/wizard";
import { Badge } from "@/components/ui/badge";
import {
  clusters,
  datastores,
  networks,
  seedAlerts,
  useLab,
} from "@/lib/store";
import { VCENTER_HOST } from "@/lib/seed";
import { formatClock } from "@/lib/utils";
import { cn } from "@/lib/utils";

function LogoMark() {
  return (
    <span className="flex size-7 flex-col justify-center gap-0.5 rounded-md bg-secondary p-1" aria-hidden>
      <span className="h-1 rounded-sm bg-primary" />
      <span className="mx-0.5 h-1 rounded-sm bg-primary/70" />
      <span className="mx-1 h-1 rounded-sm bg-primary/40" />
    </span>
  );
}

function Workspace() {
  const selection = useLab((s) => s.selection);
  const vms = useLab((s) => s.vms);
  const hosts = useLab((s) => s.hosts);

  if (selection.kind === "home" || selection.kind === "datacenter") return <HomeView />;
  if (selection.kind === "vms") return <VmListView />;
  if (selection.kind === "cluster") {
    const cl = clusters.find((c) => c.id === selection.id);
    return cl ? <ClusterView cluster={cl} /> : <HomeView />;
  }
  if (selection.kind === "host") {
    const host = hosts.find((h) => h.id === selection.id);
    return host ? <HostView host={host} /> : <HomeView />;
  }
  if (selection.kind === "vm") {
    const vm = vms.find((v) => v.id === selection.id);
    return vm ? <VmView vm={vm} /> : <HomeView />;
  }
  if (selection.kind === "datastore") {
    const ds = datastores.find((d) => d.id === selection.id);
    return ds ? <DatastoreView ds={ds} /> : <HomeView />;
  }
  if (selection.kind === "network") {
    const net = networks.find((n) => n.id === selection.id);
    return net ? <NetworkView net={net} /> : <HomeView />;
  }
  return <HomeView />;
}

function TasksPane() {
  const tasks = useLab((s) => s.tasks);
  const open = useLab((s) => s.tasksOpen);
  const setOpen = useLab((s) => s.setTasksOpen);
  const running = tasks.filter((t) => t.status === "running").length;

  return (
    <div className="flex h-full min-h-0 flex-col border-t border-border bg-chrome">
      <button
        type="button"
        className="flex h-8 items-center justify-between px-3 text-2xs font-medium uppercase tracking-wide text-muted-foreground"
        onClick={() => setOpen(!open)}
      >
        <span>Recent Tasks {running ? `· ${running} running` : ""}</span>
        <span>{open ? "Hide" : "Show"}</span>
      </button>
      {open ? (
        <ScrollArea className="flex-1">
          <table className="w-full text-left text-2xs">
            <thead className="sticky top-0 bg-chrome text-muted-foreground">
              <tr>
                <th className="px-3 py-1 font-medium">Task</th>
                <th className="px-3 py-1 font-medium">Target</th>
                <th className="px-3 py-1 font-medium">Status</th>
                <th className="px-3 py-1 font-medium">Progress</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-3 py-4 text-muted-foreground">
                    No recent tasks
                  </td>
                </tr>
              ) : (
                tasks.map((t) => (
                  <tr key={t.id} className="border-t border-border">
                    <td className="px-3 py-1.5">{t.title}</td>
                    <td className="px-3 py-1.5 text-muted-foreground">{t.target}</td>
                    <td className="px-3 py-1.5">
                      <Badge
                        variant={
                          t.status === "success" ? "running" : t.status === "error" ? "critical" : "busy"
                        }
                      >
                        {t.status}
                      </Badge>
                    </td>
                    <td className="px-3 py-1.5">
                      <div className="flex items-center gap-2">
                        <Progress value={t.progress} className="w-24" />
                        <span className="tabular text-muted-foreground">{t.progress}%</span>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </ScrollArea>
      ) : null}
    </div>
  );
}

function AlertsMenu({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const select = useLab((s) => s.select);
  if (!open) return null;
  return (
    <div className="absolute right-2 top-12 z-40 w-80 rounded-lg border border-border bg-popover p-2 shadow-elevated">
      <div className="px-2 py-1 text-xs font-medium">Alerts</div>
      <ul>
        {seedAlerts.map((a) => (
          <li key={a.id}>
            <button
              type="button"
              className="w-full rounded-md px-2 py-2 text-left hover:bg-accent"
              onClick={() => {
                if (a.objectKind === "vm" && a.objectId) select({ kind: "vm", id: a.objectId });
                if (a.objectKind === "datastore" && a.objectId) select({ kind: "datastore", id: a.objectId });
                if (a.objectKind === "host" && a.objectId) select({ kind: "host", id: a.objectId });
                onOpenChange(false);
              }}
            >
              <div className="flex items-center gap-2">
                <Badge variant={a.level === "warning" ? "warning" : "outline"}>{a.level}</Badge>
                <span className="text-xs">{a.title}</span>
              </div>
              <p className="mt-1 text-2xs text-muted-foreground">{a.body}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AppShell() {
  const [navOpen, setNavOpen] = useState(false);
  const [wizard, setWizard] = useState(false);
  const [palette, setPalette] = useState(false);
  const [alerts, setAlerts] = useState(false);
  const [clock, setClock] = useState("");
  const tick = useLab((s) => s.tick);
  const tasksOpen = useLab((s) => s.tasksOpen);
  const vms = useLab((s) => s.vms);
  const running = vms.filter((v) => v.state === "poweredOn").length;

  useEffect(() => {
    setClock(formatClock(Date.now()));
    const id = window.setInterval(() => {
      tick();
      setClock(formatClock(Date.now()));
    }, 2000);
    return () => window.clearInterval(id);
  }, [tick]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-background text-foreground">
      <header className="relative flex h-12 shrink-0 items-center gap-2 border-b border-chrome-border bg-chrome px-2 md:px-3">
        <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setNavOpen(true)} aria-label="Open inventory">
          <Menu className="size-4" />
        </Button>
        <button type="button" className="flex items-center gap-2" onClick={() => useLab.getState().select({ kind: "home" })}>
          <LogoMark />
          <span className="hidden text-sm font-medium tracking-tight sm:inline">Aether Workstation</span>
        </button>
        <Button size="sm" variant="outline" className="ml-1 hidden md:inline-flex" onClick={() => setWizard(true)}>
          <Plus className="size-3.5" />
          New VM
        </Button>
        <button
          type="button"
          onClick={() => setPalette(true)}
          className="ml-auto flex h-9 min-w-0 max-w-sm flex-1 items-center gap-2 rounded-md border border-border bg-background px-3 text-xs text-muted-foreground md:ml-8 md:flex-none md:w-72"
        >
          <Search className="size-3.5" />
          <span className="truncate">Search inventory</span>
          <kbd className="ml-auto hidden rounded-sm border border-border px-1 text-2xs md:inline">Ctrl K</kbd>
        </button>
        <Button size="icon" variant="ghost" className="relative" onClick={() => setAlerts((v) => !v)} aria-label="Alerts">
          <Bell className="size-4" />
          <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-warning" />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setWizard(true)} aria-label="New virtual machine">
          <Plus className="size-4" />
        </Button>
        <div className="hidden items-center gap-2 pl-1 text-xs text-muted-foreground md:flex">
          <User className="size-3.5" />
          <span>admin</span>
        </div>
        <AlertsMenu open={alerts} onOpenChange={setAlerts} />
      </header>

      <div className="flex min-h-0 flex-1">
        <div className="hidden h-full w-64 shrink-0 border-r border-border md:block">
          <Inventory />
        </div>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <div className="hidden min-h-0 flex-1 md:flex md:flex-col">
            <PanelGroup orientation="vertical" className="h-full">
              <Panel defaultSize={tasksOpen ? "72" : "94"} minSize="40">
                <div className="h-full min-h-0 overflow-auto">
                  <Workspace />
                </div>
              </Panel>
              <PanelResizeHandle className="h-1 bg-border hover:bg-primary/40" />
              <Panel defaultSize={tasksOpen ? "28" : "6"} minSize="6" maxSize="40">
                <TasksPane />
              </Panel>
            </PanelGroup>
          </div>
          <div className="flex min-h-0 flex-1 flex-col md:hidden">
            <div className="min-h-0 flex-1 overflow-auto">
              <Workspace />
            </div>
            <div className={cn("shrink-0", tasksOpen ? "h-40" : "h-8")}>
              <TasksPane />
            </div>
          </div>
        </div>
      </div>

      <footer className="flex h-7 shrink-0 items-center gap-3 border-t border-chrome-border bg-chrome px-3 text-2xs text-muted-foreground">
        <span className="truncate">Connected to {VCENTER_HOST}</span>
        <span className="ml-auto tabular">{running} VMs running</span>
        <span className="tabular">{clock}</span>
      </footer>

      <Sheet open={navOpen} onOpenChange={setNavOpen}>
        <SheetContent side="left" className="p-0">
          <SheetHeader>
            <SheetTitle>Inventory</SheetTitle>
          </SheetHeader>
          <div className="min-h-0 flex-1">
            <Inventory onNavigate={() => setNavOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>

      <NewVmWizard open={wizard} onOpenChange={setWizard} />
      <CommandPalette open={palette} onOpenChange={setPalette} />
      <Toaster theme="dark" position="bottom-right" richColors={false} />
    </div>
  );
}
