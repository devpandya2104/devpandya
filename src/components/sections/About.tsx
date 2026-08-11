import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Highlight from "@/components/ui/Highlight";
import { profile } from "@/data/cv";

export default function About() {
  return (
    <section id="about" className="light-section relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="01" eyebrow="About" title="The Summary" light />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-8 lg:col-start-1">
            <FadeIn>
              <p className="font-display text-[6.5vw] leading-[1.25] tracking-tight text-ink/80 sm:text-3xl lg:text-[2.1vw]">
                E-commerce and digital outreach leader with <Highlight>4+ years</Highlight> of progressive
                experience across marketplace operations, outbound marketing, brand partnerships, and
                SEO-driven outreach.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="font-display text-[6.5vw] leading-[1.25] tracking-tight text-ink/80 sm:text-3xl lg:text-[2.1vw]">
                Currently leads a <Highlight>12-person outbound team</Highlight> and scaled a publisher
                network from <Highlight tone="circuit">25,000 to 70,000 partners (180% growth)</Highlight> within
                one year through process redesign and <Highlight>AI-driven workflow automation</Highlight>.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-display text-[6.5vw] leading-[1.25] tracking-tight text-ink/60 sm:text-2xl lg:text-[1.7vw]">
                Recognized as a company representative at <Highlight>international SEO conferences</Highlight> across
                Southeast Asia. Combines operational discipline, relationship-building, and data-backed execution.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="flex flex-col gap-6 border-t border-ink/10 pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Role</p>
              <p className="mt-2 font-display text-xl text-ink">{profile.role}</p>
              <p className="mt-1 font-mono text-xs text-ink/45">@ Amrytt Media LLC</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Based in</p>
              <p className="mt-2 font-display text-xl text-ink">{profile.location}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Focus</p>
              <p className="mt-2 font-display text-xl text-ink">
                Outbound Growth · SEO &amp; Publisher Outreach · Marketplace Ops
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
