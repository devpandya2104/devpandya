import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { achievements } from "@/data/cv";

export default function Impact() {
  return (
    <section id="impact" className="relative bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="02" eyebrow="Impact" title="What Moved" />

        <div className="mt-14 border-t border-paper/10">
          {achievements.map((item, i) => (
            <FadeIn key={item.id} delay={Math.min(i * 0.05, 0.3)}>
              <div className="group grid grid-cols-1 gap-3 border-b border-paper/10 py-7 transition-colors duration-300 hover:bg-paper/[0.03] sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-2">
                <span className="font-mono text-sm text-signal sm:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-2xl leading-tight text-paper transition-transform duration-300 group-hover:translate-x-1 sm:col-span-6 sm:text-[1.8vw]">
                  {item.headline}
                </p>
                <p className="font-mono text-sm leading-relaxed text-paper/45 sm:col-span-5">
                  {item.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
