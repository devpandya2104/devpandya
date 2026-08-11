"use client";

import { motion } from "framer-motion";
import NetworkCanvas from "@/components/ui/NetworkCanvas";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { heroStats, profile } from "@/data/cv";

const nameLine1 = "DEV";
const nameLine2 = "PANDYA";

const cardTilt = [-3, 2, -1.5, 2.5];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-28 sm:pt-32">
      <NetworkCanvas className="absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/10 to-ink" />

      <div className="relative z-10 flex flex-1 flex-col justify-between px-5 pb-10 sm:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xs font-mono text-xs uppercase tracking-[0.25em] text-paper/60 sm:max-w-sm"
          >
            {profile.role} · {profile.location}
          </motion.p>

          <h1 className="mt-4 select-none font-display font-bold uppercase leading-[0.82] tracking-tight text-paper">
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[19vw] sm:text-[15vw] lg:text-[12vw]"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {nameLine1}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[19vw] text-outline sm:text-[15vw] lg:text-[12vw]"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                {nameLine2}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-xl font-display text-2xl leading-snug text-paper/90 sm:text-3xl lg:text-4xl"
          >
            {profile.positioning}
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4 sm:gap-4">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: cardTilt[i % cardTilt.length] }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-paper/15 bg-ink/50 p-4 backdrop-blur-sm sm:p-5"
            >
              <p className="font-display text-3xl text-signal sm:text-4xl">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase leading-tight tracking-wide text-paper/60">
                {stat.label}
              </p>
              <p className="mt-1 font-mono text-[10px] leading-tight text-paper/35">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="relative z-10 flex items-center justify-center gap-2 pb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        Scroll
      </motion.div>
    </section>
  );
}
