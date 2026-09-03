export type PowerState =
  | "poweredOn"
  | "poweredOff"
  | "suspended"
  | "starting"
  | "stopping"
  | "suspending"
  | "resuming"
  | "resetting";

export type GuestFamily = "linux" | "windows" | "other";

export type ToolsStatus = "running" | "notRunning" | "notInstalled";

export type HostState = "connected" | "maintenance" | "disconnected";

export type NavView = "hosts" | "vms" | "storage" | "networking";

export type TaskStatus = "queued" | "running" | "success" | "error";

export interface Snapshot {
  id: string;
  name: string;
  description: string;
  createdAt: number;
  parentId: string | null;
}

export interface VirtualMachine {
  id: string;
  name: string;
  guestOs: string;
  family: GuestFamily;
  hostId: string;
  clusterId: string;
  datastoreId: string;
  networkId: string;
  cpu: number;
  memoryMb: number;
  diskGb: number;
  state: PowerState;
  ip: string | null;
  mac: string;
  tools: ToolsStatus;
  cpuUsage: number;
  memUsage: number;
  cpuHistory: number[];
  memHistory: number[];
  uptimeSec: number;
  notes: string;
  hardwareVersion: string;
  snapshots: Snapshot[];
  currentSnapshotId: string | null;
  consoleLines: string[];
  booted: boolean;
  folder: string;
}

export interface Host {
  id: string;
  name: string;
  clusterId: string;
  cpuCores: number;
  cpuMhz: number;
  memoryGb: number;
  version: string;
  state: HostState;
  cpuUsage: number;
  memUsage: number;
  cpuHistory: number[];
  memHistory: number[];
  uptimeSec: number;
  model: string;
}

export interface Cluster {
  id: string;
  name: string;
  ha: boolean;
  drs: boolean;
}

export interface Datastore {
  id: string;
  name: string;
  type: "AetherFS" | "NFS" | "VMFS";
  capacityGb: number;
  usedGb: number;
}

export interface Network {
  id: string;
  name: string;
  type: "portgroup" | "distributed";
  vlan: number;
  vswitch: string;
}

export interface Task {
  id: string;
  title: string;
  target: string;
  status: TaskStatus;
  progress: number;
  startedAt: number;
  completedAt?: number;
  detail?: string;
}

export interface AlertItem {
  id: string;
  level: "warning" | "info" | "critical";
  title: string;
  body: string;
  objectId?: string;
  objectKind?: "vm" | "host" | "datastore";
}

export type Selection =
  | { kind: "home" }
  | { kind: "datacenter" }
  | { kind: "cluster"; id: string }
  | { kind: "host"; id: string }
  | { kind: "vm"; id: string }
  | { kind: "datastore"; id: string }
  | { kind: "network"; id: string }
  | { kind: "vms" };

export interface NewVmInput {
  name: string;
  guestOs: string;
  family: GuestFamily;
  hostId: string;
  datastoreId: string;
  networkId: string;
  cpu: number;
  memoryMb: number;
  diskGb: number;
}

export const GUEST_CATALOG: {
  id: string;
  name: string;
  family: GuestFamily;
  cpu: number;
  memoryMb: number;
  diskGb: number;
}[] = [
  { id: "ubuntu24", name: "Ubuntu Linux (64-bit)", family: "linux", cpu: 2, memoryMb: 4096, diskGb: 40 },
  { id: "debian12", name: "Debian GNU/Linux (64-bit)", family: "linux", cpu: 2, memoryMb: 2048, diskGb: 32 },
  { id: "alma9", name: "AlmaLinux 9 (64-bit)", family: "linux", cpu: 4, memoryMb: 4096, diskGb: 40 },
  { id: "win2022", name: "Microsoft Windows Server 2022 (64-bit)", family: "windows", cpu: 4, memoryMb: 8192, diskGb: 80 },
  { id: "win11", name: "Microsoft Windows 11 (64-bit)", family: "windows", cpu: 4, memoryMb: 8192, diskGb: 64 },
  { id: "freebsd", name: "FreeBSD 14 (64-bit)", family: "other", cpu: 2, memoryMb: 2048, diskGb: 20 },
];
