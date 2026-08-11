import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { experience } from "@/data/cv";

const featuredStats = [
  { value: "180%", label: "Network growth" },
  { value: "12", label: "People led" },
  { value: "$200K+", label: "Deal closed" },
];

export default function Experience() {
  const current = experience.find((e) => e.id === "amrytt")!;
  const earlier = experience.filter((e) => e.id !== "amrytt");

  return (
    <section id="experience" className="light-section relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="03" eyebrow="Experience" title="The Path" light />

        <div className="mt-16 sm:mt-20">
          {/* Featured: current role */}
          <FadeIn>
            <div className="rounded-3xl border-2 border-ink bg-ink px-6 py-10 sm:px-10 sm:py-14">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2 rounded-full border border-circuit/40 bg-circuit/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-circuit">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-circuit opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-circuit" />
                  </span>
                  Currently
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-paper/40">
                  {current.location}
                </span>
              </div>

              <h3 className="mt-5 font-display text-4xl text-paper sm:text-6xl">{current.company}</h3>

              <div className="mt-10 flex flex-col gap-10">
                {current.roles.map((role, i) => (
                  <FadeIn key={role.title} delay={i * 0.08} className="border-t border-paper/10 pt-8 first:border-t-0 first:pt-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h4 className="font-display text-2xl text-paper sm:text-3xl">{role.title}</h4>
                      <span className="font-mono text-xs uppercase tracking-wide text-paper/45">
                        {role.start} — {role.end}
                      </span>
                    </div>
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {role.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex gap-3 text-sm leading-relaxed text-paper/65 sm:text-base">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-paper/10 pt-8 sm:gap-6">
                {featuredStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl text-signal sm:text-4xl">{stat.value}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase leading-tight tracking-wide text-paper/45 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Earlier experience, condensed */}
          <div className="mt-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Earlier Experience</p>

            <div className="mt-6 flex flex-col gap-10">
              {earlier.map((entry) => (
                <div key={entry.id}>
                  <FadeIn>
                    <h3 className="font-display text-xl text-ink/70 sm:text-2xl">{entry.company}</h3>
                  </FadeIn>
                  <div className="mt-4 flex flex-col gap-6 sm:pl-6">
                    {entry.roles.map((role, i) => (
                      <FadeIn key={role.title} delay={i * 0.06} className="sm:border-l sm:border-ink/10 sm:pl-6">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                          <h4 className="font-display text-base text-ink/70 sm:text-lg">{role.title}</h4>
                          <span className="font-mono text-[11px] uppercase tracking-wide text-ink/35">
                            {role.start} — {role.end}
                          </span>
                        </div>
                        <ul className="mt-3 flex flex-col gap-1.5">
                          {role.bullets.map((bullet, bi) => (
                            <li key={bi} className="flex gap-3 text-sm leading-relaxed text-ink/50">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink/25" aria-hidden="true" />
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
        </div>
      </div>
    </section>
  );
}
