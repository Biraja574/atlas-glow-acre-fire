import type { ReactNode } from "react";
import {
  Box,
  ChevronDown,
  ChevronRight,
  Folder,
  HardDrive,
  Network,
  Server,
  Building2,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { clusters, datastores, networks, useLab } from "@/lib/store";
import { DATACENTER_NAME } from "@/lib/seed";
import { StateDot } from "@/lib/status";
import type { NavView } from "@/lib/types";

const navItems: { id: NavView; label: string; icon: typeof Server }[] = [
  { id: "hosts", label: "Hosts & Clusters", icon: Server },
  { id: "vms", label: "VMs & Templates", icon: Box },
  { id: "storage", label: "Storage", icon: HardDrive },
  { id: "networking", label: "Networking", icon: Network },
];

function Row({
  depth,
  active,
  onClick,
  onToggle,
  open,
  expandable,
  children,
}: {
  depth: number;
  active: boolean;
  onClick: () => void;
  onToggle?: () => void;
  open?: boolean;
  expandable?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className="tree-row flex min-h-10 items-center gap-0.5 pr-2 text-xs md:min-h-7"
      data-active={active}
      style={{ paddingLeft: 8 + depth * 12 }}
    >
      {expandable ? (
        <button
          type="button"
          className="flex size-6 items-center justify-center text-muted-foreground md:size-5"
          onClick={(e) => {
            e.stopPropagation();
            onToggle?.();
          }}
          aria-label={open ? "Collapse" : "Expand"}
        >
          {open ? <ChevronDown className="size-3.5" /> : <ChevronRight className="size-3.5" />}
        </button>
      ) : (
        <span className="inline-block size-6 md:size-5" />
      )}
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "flex min-w-0 flex-1 items-center gap-1.5 rounded-sm px-1 py-1 text-left hover:bg-accent",
          active && "text-foreground",
        )}
      >
        {children}
      </button>
    </div>
  );
}

export function Inventory({ onNavigate }: { onNavigate?: () => void }) {
  const navView = useLab((s) => s.navView);
  const setNavView = useLab((s) => s.setNavView);
  const expanded = useLab((s) => s.expanded);
  const toggle = useLab((s) => s.toggleExpanded);
  const select = useLab((s) => s.select);
  const selection = useLab((s) => s.selection);
  const vms = useLab((s) => s.vms);
  const hosts = useLab((s) => s.hosts);
  const q = useLab((s) => s.search).trim().toLowerCase();

  const go = (sel: Parameters<typeof select>[0]) => {
    select(sel);
    onNavigate?.();
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-chrome">
      <div className="grid grid-cols-4 border-b border-border">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = navView === item.id;
          return (
            <button
              key={item.id}
              type="button"
              title={item.label}
              onClick={() => setNavView(item.id)}
              className={cn(
                "flex h-12 flex-col items-center justify-center gap-0.5 overflow-hidden text-muted-foreground md:h-14",
                active && "bg-tree-active text-foreground",
              )}
            >
              <Icon className="size-4" />
              <span className="hidden text-2xs md:block">{item.label.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>
      <ScrollArea className="flex-1">
        <div className="py-1">
          {navView === "hosts" ? (
            <>
              <Row depth={0} active={selection.kind === "datacenter" || selection.kind === "home"} expandable open={expanded.dc} onToggle={() => toggle("dc")} onClick={() => go({ kind: "datacenter" })}>
                <Building2 className="size-3.5 text-primary" />
                <span className="truncate">{DATACENTER_NAME}</span>
              </Row>
              {expanded.dc
                ? clusters.map((cl) => {
                    const clHosts = hosts.filter((h) => h.clusterId === cl.id);
                    return (
                      <div key={cl.id}>
                        <Row
                          depth={1}
                          active={selection.kind === "cluster" && selection.id === cl.id}
                          expandable
                          open={expanded[cl.id]}
                          onToggle={() => toggle(cl.id)}
                          onClick={() => go({ kind: "cluster", id: cl.id })}
                        >
                          <Server className="size-3.5 text-muted-foreground" />
                          <span className="truncate">{cl.name}</span>
                        </Row>
                        {expanded[cl.id]
                          ? clHosts.map((h) => {
                              const hVms = vms.filter((v) => v.hostId === h.id).filter((v) => !q || v.name.toLowerCase().includes(q));
                              return (
                                <div key={h.id}>
                                  <Row
                                    depth={2}
                                    active={selection.kind === "host" && selection.id === h.id}
                                    expandable
                                    open={expanded[h.id]}
                                    onToggle={() => toggle(h.id)}
                                    onClick={() => go({ kind: "host", id: h.id })}
                                  >
                                    <StateDot state={h.state} />
                                    <span className="truncate">{h.name.split(".")[0]}</span>
                                  </Row>
                                  {expanded[h.id]
                                    ? hVms.map((vm) => (
                                        <Row
                                          key={vm.id}
                                          depth={3}
                                          active={selection.kind === "vm" && selection.id === vm.id}
                                          onClick={() => go({ kind: "vm", id: vm.id })}
                                        >
                                          <StateDot state={vm.state} />
                                          <span className="truncate">{vm.name}</span>
                                        </Row>
                                      ))
                                    : null}
                                </div>
                              );
                            })
                          : null}
                      </div>
                    );
                  })
                : null}
            </>
          ) : null}

          {navView === "vms" ? (
            <>
              <Row depth={0} active={selection.kind === "vms"} expandable open={expanded.folders} onToggle={() => toggle("folders")} onClick={() => go({ kind: "vms" })}>
                <Folder className="size-3.5 text-primary" />
                <span>VM Folders</span>
              </Row>
              {expanded.folders
                ? ["Production", "Lab"].map((folder) => {
                    const list = vms.filter((v) => v.folder === folder).filter((v) => !q || v.name.toLowerCase().includes(q));
                    const key = `folder-${folder}`;
                    return (
                      <div key={folder}>
                        <Row
                          depth={1}
                          active={false}
                          expandable
                          open={expanded[key]}
                          onToggle={() => toggle(key)}
                          onClick={() => toggle(key)}
                        >
                          <Folder className="size-3.5 text-muted-foreground" />
                          <span>{folder}</span>
                          <span className="ml-auto tabular text-2xs text-muted-foreground">{list.length}</span>
                        </Row>
                        {expanded[key]
                          ? list.map((vm) => (
                              <Row
                                key={vm.id}
                                depth={2}
                                active={selection.kind === "vm" && selection.id === vm.id}
                                onClick={() => go({ kind: "vm", id: vm.id })}
                              >
                                <StateDot state={vm.state} />
                                <span className="truncate">{vm.name}</span>
                              </Row>
                            ))
                          : null}
                      </div>
                    );
                  })
                : null}
            </>
          ) : null}

          {navView === "storage"
            ? datastores.map((ds) => (
                <Row
                  key={ds.id}
                  depth={0}
                  active={selection.kind === "datastore" && selection.id === ds.id}
                  onClick={() => go({ kind: "datastore", id: ds.id })}
                >
                  <HardDrive className="size-3.5 text-muted-foreground" />
                  <span className="truncate">{ds.name}</span>
                </Row>
              ))
            : null}

          {navView === "networking"
            ? networks.map((n) => (
                <Row
                  key={n.id}
                  depth={0}
                  active={selection.kind === "network" && selection.id === n.id}
                  onClick={() => go({ kind: "network", id: n.id })}
                >
                  <Network className="size-3.5 text-muted-foreground" />
                  <span className="truncate">{n.name}</span>
                </Row>
              ))
            : null}
        </div>
      </ScrollArea>
    </div>
  );
}
