import { tickerItems } from "@/data/cv";

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-y border-paper/10 bg-ink py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-8">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-paper/50">
            {item}
            <span className="text-signal">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
