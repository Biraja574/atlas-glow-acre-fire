import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GUEST_CATALOG } from "@/lib/types";
import { datastores, networks, useLab } from "@/lib/store";
import { toast } from "sonner";

export function NewVmWizard({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const hosts = useLab((s) => s.hosts);
  const createVm = useLab((s) => s.createVm);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("new-vm");
  const [osId, setOsId] = useState(GUEST_CATALOG[0].id);
  const [hostId, setHostId] = useState(hosts[0]?.id ?? "h4");
  const [dsId, setDsId] = useState(datastores[0].id);
  const [netId, setNetId] = useState(networks[1].id);
  const os = GUEST_CATALOG.find((g) => g.id === osId) ?? GUEST_CATALOG[0];
  const [cpu, setCpu] = useState(String(os.cpu));
  const [mem, setMem] = useState(String(os.memoryMb / 1024));
  const [disk, setDisk] = useState(String(os.diskGb));

  const reset = () => {
    setStep(0);
    setName("new-vm");
    setOsId(GUEST_CATALOG[0].id);
  };

  const finish = () => {
    const id = createVm({
      name: name.trim() || "new-vm",
      guestOs: os.name,
      family: os.family,
      hostId,
      datastoreId: dsId,
      networkId: netId,
      cpu: Number(cpu) || 2,
      memoryMb: Math.round(Number(mem) * 1024) || 2048,
      diskGb: Number(disk) || 20,
    });
    toast.success(`Created ${name.trim() || "new-vm"}`);
    onOpenChange(false);
    reset();
    void id;
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) reset();
      }}
    >
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>New Virtual Machine</DialogTitle>
          <DialogDescription>
            Step {step + 1} of 4 — {["Name & guest OS", "Compute", "Storage & network", "Ready to complete"][step]}
          </DialogDescription>
        </DialogHeader>

        {step === 0 ? (
          <div className="grid gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="vm-name">Virtual machine name</Label>
              <Input id="vm-name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-1.5">
              <Label>Guest OS</Label>
              <Select
                value={osId}
                onValueChange={(v) => {
                  setOsId(v);
                  const g = GUEST_CATALOG.find((x) => x.id === v);
                  if (g) {
                    setCpu(String(g.cpu));
                    setMem(String(g.memoryMb / 1024));
                    setDisk(String(g.diskGb));
                  }
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {GUEST_CATALOG.map((g) => (
                    <SelectItem key={g.id} value={g.id}>
                      {g.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-3">
            <div className="grid gap-1.5">
              <Label>Host</Label>
              <Select value={hostId} onValueChange={setHostId}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {hosts.map((h) => (
                    <SelectItem key={h.id} value={h.id} disabled={h.state === "maintenance"}>
                      {h.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="cpu">vCPU</Label>
                <Input id="cpu" type="number" min={1} max={32} value={cpu} onChange={(e) => setCpu(e.target.value)} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="mem">Memory (GB)</Label>
                <Input id="mem" type="number" min={1} max={128} value={mem} onChange={(e) => setMem(e.target.value)} />
              </div>
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="disk">Disk (GB)</Label>
              <Input id="disk" type="number" min={8} max={4096} value={disk} onChange={(e) => setDisk(e.target.value)} />
            </div>
            <div className="grid gap-1.5">
              <Label>Datastore</Label>
              <Select value={dsId} onValueChange={setDsId}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {datastores.map((d) => (
                    <SelectItem key={d.id} value={d.id}>
                      {d.name} ({d.type})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1.5">
              <Label>Network</Label>
              <Select value={netId} onValueChange={setNetId}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {networks.map((n) => (
                    <SelectItem key={n.id} value={n.id}>
                      {n.name} · VLAN {n.vlan}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <dl className="rounded-md bg-secondary p-3 text-xs">
            <div className="flex justify-between py-1"><dt className="text-muted-foreground">Name</dt><dd>{name}</dd></div>
            <div className="flex justify-between py-1"><dt className="text-muted-foreground">Guest OS</dt><dd>{os.name}</dd></div>
            <div className="flex justify-between py-1"><dt className="text-muted-foreground">CPU / Memory</dt><dd>{cpu} vCPU · {mem} GB</dd></div>
            <div className="flex justify-between py-1"><dt className="text-muted-foreground">Disk</dt><dd>{disk} GB on {datastores.find((d) => d.id === dsId)?.name}</dd></div>
            <div className="flex justify-between py-1"><dt className="text-muted-foreground">Network</dt><dd>{networks.find((n) => n.id === netId)?.name}</dd></div>
            <div className="flex justify-between py-1"><dt className="text-muted-foreground">Host</dt><dd className="truncate pl-4">{hosts.find((h) => h.id === hostId)?.name}</dd></div>
          </dl>
        ) : null}

        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          {step > 0 ? (
            <Button variant="outline" onClick={() => setStep((s) => s - 1)}>
              Back
            </Button>
          ) : null}
          {step < 3 ? (
            <Button onClick={() => setStep((s) => s + 1)} disabled={step === 0 && !name.trim()}>
              Next
            </Button>
          ) : (
            <Button onClick={finish}>Finish</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
