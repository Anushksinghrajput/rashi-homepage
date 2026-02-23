"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTAINER, SECTION_BORDER, SECTION_PADDING } from "@/lib/layout";

type Accent = "pink" | "orange" | "yellow" | "white";

const items: Array<{
  id: string;
  title: string;
  accent: Accent;
  icon: React.ReactNode;
  body: string;
}> = [
  {
    id: "narrative",
    title: "Narrative Intelligence",
    accent: "pink",
    icon: (
      <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    body: "Rashi doesn't just search—it reads. Our engine identifies storylines, cause-and-effect, and shifting narratives across your corpus so you see the full picture, not isolated data points.",
  },
  {
    id: "topic-evolution",
    title: "Topic Evolution",
    accent: "orange",
    icon: (
      <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 011.414 1.414l2.25 2.25M3.75 4.5h.21a2.25 2.25 0 012.016.336l.356.388c.453.504.921.99 1.402 1.456l.293.293" />
      </svg>
    ),
    body: "Themes and themes-of-themes emerge over time. We track how topics branch, merge, and fade so you can anticipate what matters next instead of reacting to yesterday's news.",
  },
  {
    id: "contextual-inference",
    title: "Contextual Inference",
    accent: "yellow",
    icon: (
      <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    body: "Meaning depends on context. Rashi infers intent, domain, and relevance from surrounding language and metadata so insights stay grounded in your actual use case.",
  },
  {
    id: "signal-extraction",
    title: "Signal Extraction",
    accent: "pink",
    icon: (
      <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
    ),
    body: "Large-scale data is noisy. We separate signal from noise using NLP and statistical relevance so you get actionable patterns and trends instead of random correlations.",
  },
  {
    id: "decision-acceleration",
    title: "Decision Acceleration",
    accent: "orange",
    icon: (
      <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    body: "Insights are only useful when they reach decisions. Rashi structures output for speed: clear takeaways, confidence cues, and traceability so leaders can act with clarity.",
  },
];

const accentStyles: Record<Accent, { border: string; glow: string; panelBg: string; icon: string; divider: string }> = {
  pink: {
    border: "border-[var(--neon-pink)]/60",
    glow: "shadow-[0_0_28px_rgba(255,0,128,0.2)]",
    panelBg: "from-[var(--neon-pink)]/10 via-transparent to-transparent",
    icon: "text-[var(--neon-pink)]",
    divider: "from-transparent via-[var(--neon-pink)]/40 to-transparent",
  },
  orange: {
    border: "border-[var(--neon-orange)]/60",
    glow: "shadow-[0_0_28px_rgba(255,107,0,0.2)]",
    panelBg: "from-[var(--neon-orange)]/10 via-transparent to-transparent",
    icon: "text-[var(--neon-orange)]",
    divider: "from-transparent via-[var(--neon-orange)]/40 to-transparent",
  },
  yellow: {
    border: "border-[var(--neon-yellow)]/50",
    glow: "shadow-[0_0_28px_rgba(255,255,0,0.15)]",
    panelBg: "from-[var(--neon-yellow)]/10 via-transparent to-transparent",
    icon: "text-[var(--neon-yellow)]",
    divider: "from-transparent via-[var(--neon-yellow)]/40 to-transparent",
  },
  white: {
    border: "border-white/40",
    glow: "shadow-[0_0_24px_rgba(255,255,255,0.12)]",
    panelBg: "from-white/10 via-transparent to-transparent",
    icon: "text-white",
    divider: "from-transparent via-white/30 to-transparent",
  },
};

const hoverGlow: Record<Accent, string> = {
  pink: "hover:shadow-[0_0_24px_rgba(255,0,128,0.15)] hover:border-[var(--neon-pink)]/40",
  orange: "hover:shadow-[0_0_24px_rgba(255,107,0,0.15)] hover:border-[var(--neon-orange)]/40",
  yellow: "hover:shadow-[0_0_24px_rgba(255,255,0,0.12)] hover:border-[var(--neon-yellow)]/40",
  white: "hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-white/30",
};

export default function HowRashiThinks() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "ArrowDown" && index < items.length - 1) {
        e.preventDefault();
        const next = document.getElementById(`${items[index + 1].id}-trigger`);
        next?.focus();
      } else if (e.key === "ArrowUp" && index > 0) {
        e.preventDefault();
        const prev = document.getElementById(`${items[index - 1].id}-trigger`);
        prev?.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        document.getElementById(`${items[0].id}-trigger`)?.focus();
      } else if (e.key === "End") {
        e.preventDefault();
        document.getElementById(`${items[items.length - 1].id}-trigger`)?.focus();
      }
    },
    []
  );

  return (
    <section
      className={`relative overflow-hidden ${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER}`}
      aria-labelledby="how-rashi-heading"
    >
      {/* Gradient divider line - top */}
      <div className="absolute left-1/2 top-0 h-px w-full max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-2xl">
        {/* Section header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="how-rashi-heading"
            className="section-heading-accent mx-auto text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
          >
            How{" "}
            <span className="bg-gradient-to-r from-[var(--neon-pink)] via-[var(--neon-orange)] to-[var(--neon-yellow)] bg-clip-text text-transparent">
              Rashi
            </span>{" "}
            Thinks
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            From large-scale data to actionable intelligence—how we extract meaning and surface what matters.
          </p>
        </motion.div>

        {/* Single-column insight menu */}
        <div className="mt-12 flex flex-col" role="list">
          {items.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            const triggerId = `${item.id}-trigger`;
            const style = accentStyles[item.accent];
            const hover = hoverGlow[item.accent];
            const expandedStr = isOpen ? "true" : "false";

            return (
              <div key={item.id} role="listitem" className="flex flex-col">
                {/* Gradient accent divider between items */}
                {index > 0 && (
                  <div
                    className={`h-px w-full bg-gradient-to-r ${style.divider}`}
                    aria-hidden
                  />
                )}

                <motion.div
                  className={`
                    rounded-xl border-2 bg-white/[0.02] backdrop-blur-sm transition-colors duration-300
                    ${isOpen ? `${style.border} ${style.glow} bg-white/[0.04]` : `border-white/10 ${hover}`}
                  `}
                >
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={expandedStr}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="flex w-full cursor-pointer items-center gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-6 sm:py-5"
                  >
                    {/* Animated icon */}
                    <motion.span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 transition-colors ${isOpen ? style.icon : "text-white/80"}`}
                      animate={{ scale: isOpen ? 1.05 : 1 }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                    >
                      {item.icon}
                    </motion.span>

                    <span className="min-w-0 flex-1 font-semibold text-white">
                      {item.title}
                    </span>

                    {/* Directional indicator */}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className={`shrink-0 ${isOpen ? style.icon : "text-white/50"}`}
                      aria-hidden
                    >
                      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { type: "spring", stiffness: 300, damping: 35 },
                          opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className={`border-t border-white/10 bg-gradient-to-b ${style.panelBg} px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5`}>
                          <motion.p
                            className="text-sm leading-relaxed text-white/95 sm:text-base"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                          >
                            {item.body}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bottom gradient line */}
        <div className="mt-8 h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
      </div>
    </section>
  );
}
