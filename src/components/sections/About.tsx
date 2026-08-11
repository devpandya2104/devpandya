import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { profile } from "@/data/cv";

export default function About() {
  return (
    <section id="about" className="light-section relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="01" eyebrow="About" title="The Summary" light />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <FadeIn className="lg:col-span-8 lg:col-start-1">
            <p className="font-display text-[7vw] leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.6vw]">
              {profile.summary}
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="flex flex-col gap-6 border-t border-ink/10 pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Role</p>
              <p className="mt-2 font-display text-xl text-ink">{profile.role}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Based in</p>
              <p className="mt-2 font-display text-xl text-ink">{profile.location}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Focus</p>
              <p className="mt-2 font-display text-xl text-ink">
                Marketplace Ops · Outbound &amp; SEO · AI Workflow Automation
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
