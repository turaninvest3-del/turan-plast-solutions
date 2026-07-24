export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "light" ? "text-white" : "text-primary-deep";
  const sub = variant === "light" ? "text-white/70" : "text-muted-foreground";
  const imgBg = variant === "light" ? "bg-primary" : "bg-primary";
  return (
    <div className="flex items-center gap-3">
      <div
        className={`h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg ${imgBg} shadow-sm`}
        aria-hidden
      >
        <img
          src="/ЛОГО_ТУРАН.png"
          alt=""
          className="h-full w-full object-contain p-0.5"
        />
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
