export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "light" ? "text-white" : "text-primary-deep";
  const sub = variant === "light" ? "text-white/70" : "text-muted-foreground";
  return (
    <div className="flex items-center gap-3">
      <div
        className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-lg font-black shadow-sm"
        aria-hidden
      >
        ТП
      </div>
      <div className="leading-tight">
        <div className={`font-display text-base font-extrabold ${color}`}>
          Туран Инвест Пласт
        </div>
        <div className={`text-[11px] ${sub}`}>
          производство полиэтиленовых пакетов
        </div>
      </div>
    </div>
  );
}