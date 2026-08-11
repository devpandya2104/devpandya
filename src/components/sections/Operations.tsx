import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { conferences, markets, platforms } from "@/data/cv";

export default function Operations() {
  return (
    <section id="operations" className="light-section relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="05" eyebrow="Operations" title="Global Reach" light />

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <FadeIn className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Markets Operated</p>
            <ul className="mt-5 flex flex-col gap-3">
              {markets.map((market, i) => (
                <li key={market} className="flex items-baseline gap-4 border-b border-ink/10 pb-3">
                  <span className="font-mono text-xs text-ink/30">0{i + 1}</span>
                  <span className="font-display text-2xl text-ink sm:text-3xl">{market}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Marketplaces &amp; Platforms</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-ink/15 px-3.5 py-1.5 font-mono text-xs text-ink/70"
                >
                  {platform}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">
              Represented Company At
            </p>
            <ul className="mt-5 flex flex-col gap-4">
              {conferences.map((conf) => (
                <li key={conf.name} className="flex items-center justify-between gap-3 rounded-2xl border border-ink/15 px-4 py-3">
                  <span className="font-display text-lg text-ink">{conf.name}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-signal">{conf.location}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
