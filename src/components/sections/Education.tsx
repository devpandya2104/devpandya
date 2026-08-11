import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { education, languages } from "@/data/cv";

export default function Education() {
  return (
    <section id="education" className="light-section relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <SectionHeading index="07" eyebrow="Education" title="Foundation" light />
          <div className="mt-12 flex flex-col gap-8">
            {education.map((item) => (
              <FadeIn key={item.id} className="border-b border-ink/10 pb-6">
                <p className="font-display text-xl text-ink sm:text-2xl">{item.degree}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wide text-ink/45">
                  <span>{item.school}</span>
                  <span className="text-signal">·</span>
                  <span>{item.period}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.15} className="lg:col-span-4 lg:col-start-9">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Languages</p>
          <ul className="mt-5 flex flex-col gap-3">
            {languages.map((lang) => (
              <li key={lang} className="font-display text-2xl text-ink sm:text-3xl">
                {lang}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
