import type { ReactNode } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip as RTooltip, XAxis, YAxis } from "recharts";
import { cn } from "@/lib/utils";

export function Gauge({
  value,
  label,
  hint,
}: {
  value: number;
  label: string;
  hint?: string;
}) {
  const pct = Math.max(0, Math.min(100, value));
  const tone = pct >= 85 ? "bg-destructive" : pct >= 70 ? "bg-warning" : "bg-primary";
  return (
    <div className="min-w-0">
      <div className="mb-1 flex items-baseline justify-between gap-2">
        <span className="text-2xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
        <span className="tabular text-xs text-foreground">
          {pct.toFixed(0)}%{hint ? <span className="text-muted-foreground"> · {hint}</span> : null}
        </span>
      </div>
      <div className="gauge-track h-1.5 overflow-hidden rounded-full">
        <div
          className={cn("h-full rounded-full transition-[width] duration-500 ease-out", tone)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="rounded-lg bg-card p-3 shadow-border">
      <div className="text-2xs font-medium uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-1 tabular text-xl font-medium tracking-tight">{value}</div>
      {sub ? <div className="mt-0.5 text-2xs text-muted-foreground">{sub}</div> : null}
    </div>
  );
}

export function Kv({ k, v }: { k: string; v: ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-2 border-b border-border py-1.5 last:border-0 sm:grid-cols-3">
      <dt className="text-xs text-muted-foreground">{k}</dt>
      <dd className="col-span-1 text-xs text-foreground sm:col-span-2">{v}</dd>
    </div>
  );
}

export function Panel({
  title,
  children,
  className,
  action,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}) {
  return (
    <section className={cn("rounded-lg bg-card shadow-border", className)}>
      <header className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
        <h3 className="text-xs font-medium">{title}</h3>
        {action}
      </header>
      <div className="p-3">{children}</div>
    </section>
  );
}

export function Spark({
  data,
  color = "var(--color-primary)",
}: {
  data: number[];
  color?: string;
}) {
  const rows = data.map((v, i) => ({ i, v }));
  return (
    <div className="h-36 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={rows} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id={`g-${color.replace(/[^a-z0-9]/gi, "")}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.35} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="i" hide />
          <YAxis domain={[0, 100]} tick={{ fill: "var(--color-muted-foreground)", fontSize: 10 }} width={36} />
          <RTooltip
            contentStyle={{
              background: "var(--color-popover)",
              border: "1px solid var(--color-border)",
              borderRadius: 6,
              fontSize: 12,
            }}
            formatter={(value) => [`${Number(value).toFixed(0)}%`, "Usage"]}
            labelFormatter={() => ""}
          />
          <Area type="monotone" dataKey="v" stroke={color} fill={`url(#g-${color.replace(/[^a-z0-9]/gi, "")})`} strokeWidth={1.5} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
