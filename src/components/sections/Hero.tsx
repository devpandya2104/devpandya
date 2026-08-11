"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import NetworkCanvas from "@/components/ui/NetworkCanvas";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { heroStats, profile } from "@/data/cv";

const nameLine1 = "DEV";
const nameLine2 = "PANDYA";

const cardTilt = [-3, 2, -1.5, 2.5];

const portraitMask =
  "lg:[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_18%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_18%)]";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-28 sm:pt-32">
      <NetworkCanvas className="absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/10 to-ink" />

      {/* Portrait — full-bleed on desktop, tucked behind the outlined name */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-none absolute inset-y-0 right-0 z-[3] hidden w-[40vw] max-w-[560px] items-end justify-end lg:flex ${portraitMask}`}
      >
        <div className="relative h-[86%] w-full">
          <Image
            src="/images/dev-pandya.webp"
            alt="Dev Pandya"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 0px"
            className="object-contain object-bottom"
          />
        </div>
      </motion.div>

      <div className="relative z-10 flex flex-1 flex-col justify-between px-5 pb-10 sm:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xs font-mono text-xs uppercase tracking-[0.25em] text-paper/60 sm:max-w-sm"
          >
            {profile.role} <span className="text-signal">@</span> {profile.company} · {profile.location}
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
                className="relative z-[4] block text-[19vw] text-outline sm:text-[15vw] lg:text-[12vw]"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                {nameLine2}
              </motion.span>
            </span>
          </h1>

          {/* Portrait — contained card on mobile/tablet */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mt-6 w-40 overflow-hidden rounded-2xl border border-paper/15 bg-paper/5 sm:w-48 lg:hidden"
          >
            <Image
              src="/images/dev-pandya.webp"
              alt="Dev Pandya"
              width={843}
              height={922}
              sizes="(max-width: 1023px) 192px, 0px"
              className="h-auto w-full"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="relative z-10 mt-6 max-w-xl font-display text-2xl leading-snug text-paper/90 sm:text-3xl lg:text-4xl"
          >
            {profile.positioning}
          </motion.p>
        </div>

        <div className="relative z-10 mt-14 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4 sm:gap-4">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: cardTilt[i % cardTilt.length] }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-paper/15 bg-ink/60 p-4 backdrop-blur-sm sm:p-5"
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
