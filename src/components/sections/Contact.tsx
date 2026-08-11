import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile } from "@/data/cv";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-paper/50">08 / Contact</p>

        <RevealText
          as="h2"
          text={"Let’s build the next network."}
          className="mt-6 block font-display text-[13vw] leading-[0.95] tracking-tight text-paper sm:text-[8vw] lg:text-[6vw]"
        />

        <FadeIn delay={0.2} className="mt-10 max-w-lg font-mono text-sm leading-relaxed text-paper/55 sm:text-base">
          Open to conversations on outbound growth, marketplace operations, and AI-driven workflow automation.
        </FadeIn>

        <FadeIn delay={0.3} className="mt-12">
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="group inline-flex items-baseline gap-3 border-b-2 border-signal font-display text-[9vw] leading-none text-paper transition-colors hover:text-signal sm:text-6xl"
          >
            {profile.email}
          </MagneticButton>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
          <a data-cursor="link" href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="font-mono text-sm text-paper/60 hover:text-circuit">
            {profile.phone}
          </a>
          <a
            data-cursor="link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-sm text-paper/60 hover:text-circuit"
          >
            {profile.linkedinLabel} ↗
          </a>
          <a data-cursor="link" href={profile.resumeHref} download className="font-mono text-sm text-paper/60 hover:text-circuit">
            Download Résumé ↓
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
