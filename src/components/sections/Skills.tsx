import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { skillGroups } from "@/data/cv";
import { cn } from "@/lib/utils";

const layout: Record<string, { span: string; label: string; chip: string }> = {
  seo: {
    span: "lg:col-span-7",
    label: "text-signal",
    chip: "border-paper/20 text-paper/85 text-base px-4 py-2 sm:text-lg hover:-translate-y-0.5 hover:border-signal hover:text-signal",
  },
  tools: {
    span: "lg:col-span-5",
    label: "text-circuit",
    chip: "border-paper/20 text-paper/80 text-sm px-3.5 py-1.5 sm:text-base hover:-translate-y-0.5 hover:border-circuit hover:text-circuit",
  },
  leadership: {
    span: "lg:col-span-6",
    label: "text-signal",
    chip: "border-paper/20 text-paper/80 text-sm px-3.5 py-1.5 sm:text-base hover:-translate-y-0.5 hover:border-signal hover:text-signal",
  },
  ecommerce: {
    span: "lg:col-span-6",
    label: "text-paper/35",
    chip: "border-paper/10 text-paper/40 text-xs px-3 py-1.5 sm:text-sm hover:border-paper/25 hover:text-paper/60",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="06" eyebrow="Capability Matrix" title="The Toolkit" />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {skillGroups.map((group, i) => {
            const style = layout[group.id];
            const muted = group.id === "ecommerce";
            return (
              <FadeIn
                key={group.id}
                delay={i * 0.08}
                className={cn(
                  "rounded-3xl border p-7 sm:p-8",
                  style.span,
                  muted ? "border-paper/10 bg-paper/[0.015]" : "border-paper/15 bg-paper/[0.03]"
                )}
              >
                <p className={cn("font-mono text-xs uppercase tracking-[0.25em]", style.label)}>{group.label}</p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={cn("rounded-full border font-display transition-all duration-200", style.chip)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
