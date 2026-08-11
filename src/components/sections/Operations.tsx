import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { markets, platforms } from "@/data/cv";

export default function Operations() {
  return (
    <section id="operations" className="light-section relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="05" eyebrow="Operations" title="Global Reach" light />

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <FadeIn className="lg:col-span-5">
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

          <FadeIn delay={0.1} className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Marketplaces &amp; Platforms</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-ink/15 px-4 py-2 font-mono text-sm text-ink/70"
                >
                  {platform}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
