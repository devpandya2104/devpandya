import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { experience } from "@/data/cv";

export default function Experience() {
  return (
    <section id="experience" className="light-section relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="03" eyebrow="Experience" title="The Path" light />

        <div className="mt-16 flex flex-col gap-16 sm:mt-20">
          {experience.map((entry) => (
            <div key={entry.id}>
              <FadeIn>
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-ink pb-4">
                  <h3 className="font-display text-3xl text-ink sm:text-5xl">{entry.company}</h3>
                  {entry.location && (
                    <span className="font-mono text-xs uppercase tracking-widest text-ink/40">
                      {entry.location}
                    </span>
                  )}
                </div>
              </FadeIn>

              <div className="mt-8 flex flex-col gap-10 sm:pl-8">
                {entry.roles.map((role, i) => (
                  <FadeIn key={role.title} delay={i * 0.08} className="relative sm:border-l sm:border-ink/15 sm:pl-8">
                    <span className="absolute -left-[5px] top-1.5 hidden h-[9px] w-[9px] rounded-full bg-signal sm:block" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h4 className="font-display text-xl text-ink sm:text-2xl">{role.title}</h4>
                      <span className="font-mono text-xs uppercase tracking-wide text-ink/45">
                        {role.start} — {role.end}
                      </span>
                    </div>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {role.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex gap-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
