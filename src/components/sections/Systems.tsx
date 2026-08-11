import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { builds } from "@/data/cv";

export default function Systems() {
  return (
    <section id="systems" className="relative bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="04" eyebrow="Systems &amp; Automation" title="Built to Scale" />
        <FadeIn delay={0.1} className="mt-6 max-w-2xl font-mono text-sm text-paper/50">
          When manual process couldn&apos;t keep up with outreach targets, the answer was to build the tooling
          rather than add headcount.
        </FadeIn>

        <div className="mt-14 flex flex-col gap-6">
          {builds.map((build) => (
            <FadeIn key={build.id}>
              <article className="group grid grid-cols-1 gap-8 rounded-3xl border border-paper/12 p-6 transition-colors duration-300 hover:border-circuit/50 sm:p-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-circuit">{build.tag}</p>
                  <h3 className="mt-3 font-display text-3xl text-paper sm:text-4xl">{build.name}</h3>

                  <dl className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-paper/65 sm:text-base">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-wide text-paper/35">Problem</dt>
                      <dd className="mt-1">{build.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-wide text-paper/35">Solution</dt>
                      <dd className="mt-1">{build.solution}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-wide text-paper/35">Impact</dt>
                      <dd className="mt-1">{build.impact}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {build.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-paper/15 px-3 py-1 font-mono text-[11px] text-paper/55"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 rounded-2xl bg-paper/[0.04] px-6 py-10 lg:col-span-5">
                  <div className="text-center">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-paper/35">Before</p>
                    <p className="mt-2 font-display text-2xl text-paper/50 sm:text-3xl">{build.before}</p>
                    <p className="font-mono text-[10px] text-paper/30">{build.unit}</p>
                  </div>
                  <span className="font-display text-2xl text-signal sm:text-3xl" aria-hidden="true">
                    →
                  </span>
                  <div className="text-center">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-circuit/70">After</p>
                    <p className="mt-2 font-display text-2xl text-circuit sm:text-3xl">{build.after}</p>
                    <p className="font-mono text-[10px] text-paper/30">{build.unit}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
