import { Gauge, Kv, Panel, Spark, StatCard } from "@/components/widgets";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { clusters, datastores, seedAlerts, useLab } from "@/lib/store";
import { DATACENTER_NAME, VCENTER_HOST } from "@/lib/seed";
import { HostBadge, PowerBadge, StateDot } from "@/lib/status";
import { formatBytesGb, formatUptime } from "@/lib/utils";
import type { Cluster, Datastore, Host, Network as Net, VirtualMachine } from "@/lib/types";

function VmTable({ list, onOpen }: { list: VirtualMachine[]; onOpen: (id: string) => void }) {
  const hosts = useLab((s) => s.hosts);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs">
        <thead className="text-2xs uppercase tracking-wide text-muted-foreground">
          <tr className="border-b border-border">
            <th className="px-2 py-2 font-medium">Name</th>
            <th className="px-2 py-2 font-medium">State</th>
            <th className="px-2 py-2 font-medium">Host</th>
            <th className="px-2 py-2 font-medium">Guest OS</th>
            <th className="px-2 py-2 font-medium">CPU</th>
            <th className="px-2 py-2 font-medium">Memory</th>
            <th className="px-2 py-2 font-medium">IP</th>
          </tr>
        </thead>
        <tbody>
          {list.map((vm) => (
            <tr
              key={vm.id}
              className="cursor-pointer border-b border-border hover:bg-row-hover"
              onClick={() => onOpen(vm.id)}
            >
              <td className="px-2 py-2">
                <span className="inline-flex items-center gap-2">
                  <StateDot state={vm.state} />
                  {vm.name}
                </span>
              </td>
              <td className="px-2 py-2">
                <PowerBadge state={vm.state} />
              </td>
              <td className="px-2 py-2 text-muted-foreground">{hosts.find((h) => h.id === vm.hostId)?.name.split(".")[0]}</td>
              <td className="px-2 py-2 text-muted-foreground">{vm.guestOs.replace(" (64-bit)", "")}</td>
              <td className="px-2 py-2 tabular">{vm.state === "poweredOn" ? `${vm.cpuUsage.toFixed(0)}%` : "—"}</td>
              <td className="px-2 py-2 tabular">{vm.state === "poweredOn" ? `${vm.memUsage.toFixed(0)}%` : "—"}</td>
              <td className="px-2 py-2 font-mono tabular">{vm.ip ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function HomeView() {
  const vms = useLab((s) => s.vms);
  const hosts = useLab((s) => s.hosts);
  const select = useLab((s) => s.select);
  const running = vms.filter((v) => v.state === "poweredOn").length;
  const suspended = vms.filter((v) => v.state === "suspended").length;
  const alerts = seedAlerts;

  return (
    <div className="space-y-4 p-4">
      <div>
        <h1 className="text-lg font-medium tracking-tight">{DATACENTER_NAME}</h1>
        <p className="text-xs text-muted-foreground">Connected to {VCENTER_HOST} · Aether Workstation 8.0</p>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Hosts" value={hosts.length} sub={`${hosts.filter((h) => h.state === "connected").length} connected`} />
        <StatCard label="Virtual machines" value={vms.length} sub={`${running} powered on`} />
        <StatCard label="Suspended" value={suspended} sub="memory reserved on datastore" />
        <StatCard label="Alerts" value={alerts.length} sub="open in this datacenter" />
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {clusters.map((cl) => {
          const clHosts = hosts.filter((h) => h.clusterId === cl.id);
          const avgCpu = clHosts.reduce((a, h) => a + h.cpuUsage, 0) / (clHosts.length || 1);
          const avgMem = clHosts.reduce((a, h) => a + h.memUsage, 0) / (clHosts.length || 1);
          return (
            <Panel
              key={cl.id}
              title={cl.name}
              action={
                <Button size="sm" variant="ghost" onClick={() => select({ kind: "cluster", id: cl.id })}>
                  Open
                </Button>
              }
            >
              <div className="mb-3 flex gap-2">
                {cl.ha ? <Badge>HA</Badge> : null}
                {cl.drs ? <Badge>DRS</Badge> : null}
                <Badge variant="outline">{clHosts.length} hosts</Badge>
              </div>
              <div className="space-y-3">
                <Gauge value={avgCpu} label="CPU" />
                <Gauge value={avgMem} label="Memory" />
              </div>
            </Panel>
          );
        })}
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        <Panel title="Datastores">
          <div className="space-y-3">
            {datastores.map((ds) => (
              <button key={ds.id} type="button" className="block w-full text-left" onClick={() => select({ kind: "datastore", id: ds.id })}>
                <Gauge value={(ds.usedGb / ds.capacityGb) * 100} label={ds.name} hint={formatBytesGb(ds.capacityGb - ds.usedGb) + " free"} />
              </button>
            ))}
          </div>
        </Panel>
        <Panel title="Alerts">
          <ul className="space-y-2">
            {alerts.map((a) => (
              <li key={a.id} className="rounded-md bg-secondary p-2">
                <div className="flex items-center gap-2">
                  <Badge variant={a.level === "critical" ? "critical" : a.level === "warning" ? "warning" : "outline"}>
                    {a.level}
                  </Badge>
                  <span className="text-xs font-medium">{a.title}</span>
                </div>
                <p className="mt-1 text-2xs text-muted-foreground">{a.body}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}

export function ClusterView({ cluster }: { cluster: Cluster }) {
  const hosts = useLab((s) => s.hosts).filter((h) => h.clusterId === cluster.id);
  const vms = useLab((s) => s.vms).filter((v) => v.clusterId === cluster.id);
  const select = useLab((s) => s.select);
  return (
    <div className="space-y-4 p-4">
      <div>
        <h1 className="text-lg font-medium">{cluster.name}</h1>
        <p className="text-xs text-muted-foreground">
          Cluster · HA {cluster.ha ? "enabled" : "off"} · DRS {cluster.drs ? "fully automated" : "off"}
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {hosts.map((h) => (
          <Panel
            key={h.id}
            title={h.name}
            action={
              <Button size="sm" variant="ghost" onClick={() => select({ kind: "host", id: h.id })}>
                Open
              </Button>
            }
          >
            <div className="mb-2"><HostBadge state={h.state} /></div>
            <div className="space-y-2">
              <Gauge value={h.cpuUsage} label="CPU" hint={`${h.cpuCores} cores`} />
              <Gauge value={h.memUsage} label="Memory" hint={formatBytesGb(h.memoryGb)} />
            </div>
          </Panel>
        ))}
      </div>
      <Panel title="Virtual machines">
        <VmTable list={vms} onOpen={(id) => select({ kind: "vm", id })} />
      </Panel>
    </div>
  );
}

export function HostView({ host }: { host: Host }) {
  const vms = useLab((s) => s.vms).filter((v) => v.hostId === host.id);
  const select = useLab((s) => s.select);
  const setMaint = useLab((s) => s.setHostMaintenance);
  const cluster = clusters.find((c) => c.id === host.clusterId);
  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-lg font-medium">{host.name}</h1>
          <p className="text-xs text-muted-foreground">{host.model} · {host.version}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <HostBadge state={host.state} />
          <Button
            size="sm"
            variant="outline"
            onClick={() => setMaint(host.id, host.state !== "maintenance")}
          >
            {host.state === "maintenance" ? "Exit maintenance" : "Enter maintenance"}
          </Button>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Panel title="CPU">
          <Gauge value={host.cpuUsage} label="Utilization" hint={`${host.cpuCores} × ${host.cpuMhz} MHz`} />
          <Spark data={host.cpuHistory} />
        </Panel>
        <Panel title="Memory">
          <Gauge value={host.memUsage} label="Utilization" hint={formatBytesGb(host.memoryGb)} />
          <Spark data={host.memHistory} color="var(--color-muted-foreground)" />
        </Panel>
      </div>
      <Panel title="Summary">
        <dl>
          <Kv k="Cluster" v={cluster?.name ?? "—"} />
          <Kv k="State" v={<HostBadge state={host.state} />} />
          <Kv k="Uptime" v={formatUptime(host.uptimeSec)} />
          <Kv k="Hypervisor" v={host.version} />
          <Kv k="Virtual machines" v={String(vms.length)} />
        </dl>
      </Panel>
      <Panel title="Virtual machines on this host">
        <VmTable list={vms} onOpen={(id) => select({ kind: "vm", id })} />
      </Panel>
    </div>
  );
}

export function DatastoreView({ ds }: { ds: Datastore }) {
  const vms = useLab((s) => s.vms).filter((v) => v.datastoreId === ds.id);
  const select = useLab((s) => s.select);
  const usedPct = (ds.usedGb / ds.capacityGb) * 100;
  return (
    <div className="space-y-4 p-4">
      <div>
        <h1 className="text-lg font-medium">{ds.name}</h1>
        <p className="text-xs text-muted-foreground">{ds.type} datastore</p>
      </div>
      <Panel title="Capacity">
        <Gauge value={usedPct} label="Used" hint={`${formatBytesGb(ds.usedGb)} of ${formatBytesGb(ds.capacityGb)}`} />
      </Panel>
      <Panel title="Virtual disks">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="text-2xs uppercase tracking-wide text-muted-foreground">
              <tr className="border-b border-border">
                <th className="px-2 py-2 font-medium">File</th>
                <th className="px-2 py-2 font-medium">VM</th>
                <th className="px-2 py-2 font-medium">Size</th>
              </tr>
            </thead>
            <tbody>
              {vms.map((vm) => (
                <tr key={vm.id} className="cursor-pointer border-b border-border hover:bg-row-hover" onClick={() => select({ kind: "vm", id: vm.id })}>
                  <td className="px-2 py-2 font-mono">{vm.name}.vmdk</td>
                  <td className="px-2 py-2">{vm.name}</td>
                  <td className="px-2 py-2 tabular">{formatBytesGb(vm.diskGb)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}

export function NetworkView({ net }: { net: Net }) {
  const vms = useLab((s) => s.vms).filter((v) => v.networkId === net.id);
  const select = useLab((s) => s.select);
  return (
    <div className="space-y-4 p-4">
      <div>
        <h1 className="text-lg font-medium">{net.name}</h1>
        <p className="text-xs text-muted-foreground">
          {net.type === "distributed" ? "Distributed port group" : "Standard port group"} · {net.vswitch} · VLAN {net.vlan}
        </p>
      </div>
      <Panel title="Connected virtual machines">
        <VmTable list={vms} onOpen={(id) => select({ kind: "vm", id })} />
        {vms.length === 0 ? <p className="text-xs text-muted-foreground">No virtual machines on this network.</p> : null}
      </Panel>
    </div>
  );
}

export function VmListView() {
  const vms = useLab((s) => s.vms);
  const select = useLab((s) => s.select);
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-lg font-medium">Virtual Machines</h1>
      <Panel title={`${vms.length} objects`}>
        <VmTable list={vms} onOpen={(id) => select({ kind: "vm", id })} />
      </Panel>
    </div>
  );
}


