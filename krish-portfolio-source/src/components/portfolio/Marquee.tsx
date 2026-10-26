interface MarqueeProps {
  items: string[];
  variant?: "dark" | "acid" | "ghost";
  slow?: boolean;
  className?: string;
}

export default function Marquee({ items, variant = "dark", slow = false, className = "" }: MarqueeProps) {
  const styles =
    variant === "acid"
      ? "border-y border-ink/20 bg-acid text-ink"
      : variant === "ghost"
        ? "border-y border-line bg-transparent text-fog"
        : "border-y border-line bg-panel text-paper";

  const row = [...items, ...items, ...items, ...items];

  return (
    <div className={`marquee-paused overflow-hidden py-3.5 ${styles} ${className}`} aria-hidden="true">
      <div className={`flex w-max items-center gap-8 pr-8 ${slow ? "animate-marquee-slow" : "animate-marquee"}`}>
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center gap-8">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em]">
                {item}
                <span className={variant === "acid" ? "text-ink/60" : "text-acid"}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
