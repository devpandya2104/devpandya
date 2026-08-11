import RevealText from "@/components/ui/RevealText";
import { cn } from "@/lib/utils";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  className?: string;
  light?: boolean;
};

export default function SectionHeading({ index, eyebrow, title, className, light }: Props) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]">
        <span className={light ? "text-ink/50" : "text-paper/50"}>{index}</span>
        <span className="h-px w-8 bg-signal" />
        <span className={light ? "text-ink/50" : "text-paper/50"}>{eyebrow}</span>
      </div>
      <RevealText
        as="h2"
        text={title}
        className={cn(
          "font-display text-[12vw] leading-[0.95] tracking-tight sm:text-[6.5vw] lg:text-[4.5vw]",
          light ? "text-ink" : "text-paper"
        )}
      />
    </div>
  );
}
