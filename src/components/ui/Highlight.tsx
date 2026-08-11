"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  tone?: "signal" | "circuit";
  className?: string;
};

export default function Highlight({ children, tone = "signal", className }: Props) {
  const color = tone === "signal" ? "bg-signal" : "bg-circuit";

  return (
    <span
      className={cn(
        "relative inline-block whitespace-nowrap font-semibold text-ink transition-colors duration-200 hover:text-signal",
        className
      )}
    >
      {children}
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn("absolute -bottom-0.5 left-0 h-[3px] w-full origin-left", color)}
      />
    </span>
  );
}
