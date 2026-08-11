import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { skillGroups } from "@/data/cv";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="07" eyebrow="Capability Matrix" title="The Toolkit" />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-paper/12 bg-paper/12 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.id} delay={i * 0.08} className="bg-ink p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{group.label}</p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-display text-base leading-snug text-paper/80 transition-colors hover:text-circuit sm:text-lg"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
