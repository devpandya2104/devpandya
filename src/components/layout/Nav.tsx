"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { profile } from "@/data/cv";

const sections = [
  { href: "#about", label: "About", index: "01" },
  { href: "#impact", label: "Impact", index: "02" },
  { href: "#experience", label: "Experience", index: "03" },
  { href: "#systems", label: "Systems", index: "04" },
  { href: "#conferences", label: "Conferences", index: "05" },
  { href: "#skills", label: "Skills", index: "06" },
  { href: "#contact", label: "Contact", index: "07" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleNavigate(href: string) {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="h-[2px] origin-left bg-signal"
        style={{ scaleX: progress }}
      />
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-6">
        <a
          href="#top"
          data-cursor="link"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("#top");
          }}
          className="flex h-11 items-center rounded-full border border-paper/30 bg-ink/40 px-4 font-display text-lg font-bold tracking-tight text-paper backdrop-blur"
        >
          {profile.initials}<span className="text-signal">.</span>
        </a>

        <button
          type="button"
          data-cursor="link"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="site-menu"
          className="group relative z-[80] flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-paper/30 bg-ink/40 backdrop-blur"
        >
          <span
            className={`block h-[1.5px] w-5 bg-paper transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-paper transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="site-menu"
            aria-label="Section navigation"
            initial={{ clipPath: "circle(2% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(2% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[70] flex flex-col justify-center bg-ink px-6 sm:px-16"
          >
            <ul className="flex flex-col gap-2">
              {sections.map((s, i) => (
                <motion.li
                  key={s.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                >
                  <a
                    href={s.href}
                    data-cursor="link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(s.href);
                    }}
                    className="group flex items-baseline gap-4 py-2 sm:py-3"
                  >
                    <span className="font-mono text-sm text-signal">{s.index}</span>
                    <span className="font-display text-[13vw] leading-[0.95] text-paper/90 transition-colors duration-200 group-hover:text-signal sm:text-[6vw]">
                      {s.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-paper/15 pt-6 font-mono text-xs text-paper/60 sm:mt-16"
            >
              <a data-cursor="link" href={`mailto:${profile.email}`} className="hover:text-circuit">
                {profile.email}
              </a>
              <a
                data-cursor="link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-circuit"
              >
                LinkedIn
              </a>
              <span>{profile.location}</span>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
