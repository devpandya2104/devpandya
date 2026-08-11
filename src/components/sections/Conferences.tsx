import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { conferences } from "@/data/cv";

export default function Conferences() {
  return (
    <section id="conferences" className="relative bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="06" eyebrow="On the Circuit" title="Represented the Company" />
        <FadeIn delay={0.1} className="mt-6 max-w-xl font-mono text-sm text-paper/50">
          Selected as company representative at international SEO industry events across Southeast Asia.
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {conferences.map((conf, i) => (
            <FadeIn key={conf.id} delay={i * 0.1}>
              <a
                href={conf.url}
                target="_blank"
                rel="noreferrer noopener"
                data-cursor="link"
                className="group flex h-full flex-col justify-between rounded-3xl border border-paper/12 p-7 transition-colors duration-300 hover:border-signal/50 hover:bg-paper/[0.03]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 font-mono text-sm text-paper/70 transition-colors duration-300 group-hover:border-signal group-hover:text-signal">
                    {conf.monogram}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-lg text-paper/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                  >
                    ↗
                  </span>
                </div>

                <div className="mt-10">
                  <h3 className="font-display text-2xl leading-tight text-paper sm:text-3xl">{conf.name}</h3>
                  <div className="mt-3 flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-paper/45">
                    <span>{conf.location}</span>
                    <span className="text-signal">·</span>
                    <span>{conf.date}</span>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
