import type { LucideIcon } from "lucide-react";

export function StatCard({
  icon: Icon,
  title,
  value,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-3 text-xs font-bold uppercase tracking-wide text-muted-foreground">
        {title}
      </div>
      <div className="mt-1 font-display text-base font-bold leading-snug text-foreground">
        {value}
      </div>
    </div>
  );
}
