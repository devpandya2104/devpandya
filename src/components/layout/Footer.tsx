"use client";

import { profile } from "@/data/cv";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact-footer" className="border-t border-paper/10 bg-ink px-5 pb-8 pt-16 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-10 border-b border-paper/10 pb-12 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">Based in</p>
            <p className="font-display text-3xl text-paper sm:text-4xl">{profile.location}</p>
          </div>
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 rounded-full border border-signal px-6 py-3 font-mono text-sm text-signal"
          >
            {profile.email}
            <span aria-hidden="true">↗</span>
          </MagneticButton>
        </div>

        <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-paper/40">
            © {year} {profile.name}. Built with intent, not a template.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-paper/50">
            <a data-cursor="link" href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-circuit">
              LinkedIn
            </a>
            <a data-cursor="link" href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="hover:text-circuit">
              {profile.phone}
            </a>
            <a data-cursor="link" href={profile.resumeHref} download className="hover:text-circuit">
              Résumé
            </a>
            <a data-cursor="link" href="#top" className="hover:text-circuit">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
