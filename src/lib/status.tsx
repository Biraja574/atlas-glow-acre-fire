import { Badge } from "@/components/ui/badge";
import type { HostState, PowerState, ToolsStatus } from "./types";
import { isBusy } from "./store";

export function powerLabel(state: PowerState): string {
  switch (state) {
    case "poweredOn":
      return "Powered On";
    case "poweredOff":
      return "Powered Off";
    case "suspended":
      return "Suspended";
    case "starting":
      return "Powering On";
    case "stopping":
      return "Powering Off";
    case "suspending":
      return "Suspending";
    case "resuming":
      return "Resuming";
    case "resetting":
      return "Resetting";
  }
}

export function PowerBadge({ state }: { state: PowerState }) {
  const variant =
    state === "poweredOn" ? "running" :
    state === "suspended" ? "suspended" :
    isBusy(state) ? "busy" :
    "off";
  return <Badge variant={variant}>{powerLabel(state)}</Badge>;
}

export function HostBadge({ state }: { state: HostState }) {
  const variant = state === "connected" ? "running" : state === "maintenance" ? "warning" : "off";
  const label = state === "connected" ? "Connected" : state === "maintenance" ? "Maintenance" : "Disconnected";
  return <Badge variant={variant}>{label}</Badge>;
}

export function ToolsBadge({ status }: { status: ToolsStatus }) {
  const variant = status === "running" ? "running" : status === "notInstalled" ? "warning" : "off";
  const label = status === "running" ? "Guest Tools running" : status === "notInstalled" ? "Not installed" : "Not running";
  return <Badge variant={variant}>{label}</Badge>;
}

export function StateDot({ state }: { state: PowerState | HostState }) {
  const color =
    state === "poweredOn" || state === "connected" ? "bg-success" :
    state === "suspended" || state === "maintenance" || isBusy(state as PowerState) ? "bg-warning" :
    "bg-muted-foreground";
  const pulse = state === "starting" || state === "stopping" || state === "resuming" || state === "resetting";
  return (
    <span className="relative inline-flex size-2 shrink-0">
      {pulse ? <span className="absolute inline-flex size-full animate-ping rounded-full bg-warning opacity-50" /> : null}
      <span className={`relative inline-flex size-2 rounded-full ${color}`} />
    </span>
  );
}
