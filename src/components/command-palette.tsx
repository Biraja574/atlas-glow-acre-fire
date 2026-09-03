import { useEffect, useMemo, useState } from "react";
import { Box, HardDrive, Network, Search, Server } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { clusters, datastores, networks, useLab } from "@/lib/store";
import { cn } from "@/lib/utils";

export function CommandPalette({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const vms = useLab((s) => s.vms);
  const hosts = useLab((s) => s.hosts);
  const select = useLab((s) => s.select);
  const setNavView = useLab((s) => s.setNavView);
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  const items = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const rows: { id: string; label: string; sub: string; kind: string; run: () => void }[] = [
      ...vms.map((v) => ({
        id: v.id,
        label: v.name,
        sub: `${v.guestOs} · ${v.ip ?? "no IP"}`,
        kind: "VM",
        run: () => {
          setNavView("hosts");
          select({ kind: "vm", id: v.id });
        },
      })),
      ...hosts.map((h) => ({
        id: h.id,
        label: h.name,
        sub: h.model,
        kind: "Host",
        run: () => {
          setNavView("hosts");
          select({ kind: "host", id: h.id });
        },
      })),
      ...clusters.map((c) => ({
        id: c.id,
        label: c.name,
        sub: "Cluster",
        kind: "Cluster",
        run: () => {
          setNavView("hosts");
          select({ kind: "cluster", id: c.id });
        },
      })),
      ...datastores.map((d) => ({
        id: d.id,
        label: d.name,
        sub: d.type,
        kind: "Datastore",
        run: () => {
          setNavView("storage");
          select({ kind: "datastore", id: d.id });
        },
      })),
      ...networks.map((n) => ({
        id: n.id,
        label: n.name,
        sub: `VLAN ${n.vlan}`,
        kind: "Network",
        run: () => {
          setNavView("networking");
          select({ kind: "network", id: n.id });
        },
      })),
    ];
    return needle ? rows.filter((r) => `${r.label} ${r.sub} ${r.kind}`.toLowerCase().includes(needle)) : rows;
  }, [q, vms, hosts, select, setNavView]);

  const icon = (kind: string) => {
    if (kind === "VM") return <Box className="size-3.5 text-muted-foreground" />;
    if (kind === "Host") return <Server className="size-3.5 text-muted-foreground" />;
    if (kind === "Datastore") return <HardDrive className="size-3.5 text-muted-foreground" />;
    if (kind === "Network") return <Network className="size-3.5 text-muted-foreground" />;
    return <Server className="size-3.5 text-muted-foreground" />;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="top-[18%] max-w-lg translate-y-0 gap-0 p-0">
        <DialogTitle className="sr-only">Search inventory</DialogTitle>
        <div className="flex items-center gap-2 border-b border-border px-3">
          <Search className="size-4 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search VMs, hosts, datastores…"
            className="h-11 w-full bg-transparent text-sm outline-none"
          />
        </div>
        <ul className="max-h-80 overflow-auto p-1">
          {items.length === 0 ? (
            <li className="px-3 py-6 text-center text-xs text-muted-foreground">No matching objects</li>
          ) : (
            items.slice(0, 20).map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left hover:bg-accent",
                  )}
                  onClick={() => {
                    item.run();
                    onOpenChange(false);
                  }}
                >
                  {icon(item.kind)}
                  <span className="min-w-0 flex-1 truncate text-sm">{item.label}</span>
                  <span className="text-2xs text-muted-foreground">{item.kind}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
