import { useEffect, useRef, useState } from "react";
import { Expand, Keyboard, Power, RotateCcw, Shrink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLab } from "@/lib/store";
import { poweredOffConsole, idleConsole, suspendedOverlay } from "@/lib/console-engine";
import type { VirtualMachine } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ConsolePanel({ vm, fill }: { vm: VirtualMachine; fill?: boolean }) {
  const submit = useLab((s) => s.submitCommand);
  const powerOn = useLab((s) => s.powerOn);
  const reset = useLab((s) => s.reset);
  const [input, setInput] = useState("");
  const [full, setFull] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);

  const lines =
    vm.consoleLines.length > 0
      ? vm.consoleLines
      : vm.state === "poweredOff"
        ? poweredOffConsole(vm.name)
        : vm.booted
          ? idleConsole(vm)
          : ["Waiting for firmware..."];

  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [vm.consoleLines, vm.state]);

  const interactive = vm.state === "poweredOn" && vm.booted;

  const body = (
    <div className={cn("flex min-h-0 flex-col bg-console", fill || full ? "h-full" : "h-80 md:h-96")}>
      <div className="flex h-9 items-center gap-1 border-b border-chrome-border bg-chrome px-2">
        <span className="mr-auto truncate pl-1 font-mono text-2xs text-muted-foreground">
          Remote Console — {vm.name}
        </span>
        <Button
          size="toolbar"
          variant="ghost"
          disabled={!interactive}
          onClick={() => reset(vm.id)}
          title="Ctrl-Alt-Del"
        >
          <Keyboard className="size-3.5" />
          <span className="hidden sm:inline">CAD</span>
        </Button>
        <Button size="toolbar" variant="ghost" onClick={() => setFull((v) => !v)} title="Full screen">
          {full ? <Shrink className="size-3.5" /> : <Expand className="size-3.5" />}
        </Button>
      </div>
      <div
        ref={scroller}
        className="relative min-h-0 flex-1 overflow-auto px-3 py-2 font-mono text-xs leading-relaxed text-foreground"
        onClick={() => field.current?.focus()}
      >
        {lines.map((line, i) => (
          <div key={`${i}-${line.slice(0, 24)}`} className="whitespace-pre-wrap break-all">
            {line || "\u00a0"}
          </div>
        ))}
        {interactive ? (
          <form
            className="flex items-center"
            onSubmit={(e) => {
              e.preventDefault();
              submit(vm.id, input);
              setInput("");
            }}
          >
            <input
              ref={field}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-w-0 flex-1 bg-transparent font-mono text-xs outline-none"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              aria-label="Console command"
            />
            {!input ? <span className="console-caret" aria-hidden /> : null}
          </form>
        ) : null}
        {vm.state === "suspended" ? (
          <div className="absolute inset-0 flex items-center justify-center bg-console/80">
            <p className="rounded-md border border-border bg-card px-4 py-2 text-xs text-muted-foreground">
              {suspendedOverlay()}
            </p>
          </div>
        ) : null}
        {vm.state === "poweredOff" ? (
          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <Button size="sm" onClick={() => powerOn(vm.id)}>
              <Power className="size-3.5" />
              Power On
            </Button>
          </div>
        ) : null}
        {vm.state === "starting" || vm.state === "resetting" ? (
          <div className="flex items-center gap-2 pt-2 text-2xs text-muted-foreground">
            <RotateCcw className="size-3 animate-spin" />
            POST / boot in progress
          </div>
        ) : null}
      </div>
    </div>
  );

  if (!full) return body;
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-console">
      {body}
    </div>
  );
}
