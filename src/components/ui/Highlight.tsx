"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  tone?: "signal" | "circuit";
  className?: string;
};

export default function Highlight({ children, tone = "signal", className }: Props) {
  const decorationColor = tone === "signal" ? "var(--signal)" : "var(--circuit)";

  return (
    <motion.span
      initial={{ color: "var(--ink-soft)" }}
      whileInView={{ color: "var(--ink)" }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.4, delay: 0.2 }}
      style={{
        textDecorationLine: "underline",
        textDecorationColor: decorationColor,
        textDecorationThickness: "3px",
        textUnderlineOffset: "4px",
      }}
      className={cn(
        "font-semibold transition-colors duration-200 hover:text-signal",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
