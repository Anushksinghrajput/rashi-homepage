"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CONTAINER, SECTION_BORDER, SECTION_PADDING } from "@/lib/layout";

const CARDS = [
  {
    title: "Communications",
    description: "Impact of government policies on open-RAN initiatives",
    bgColor: "bg-slate-600",
    icon: "radio",
  },
  {
    title: "Supply Chain",
    description: "Indian supply chain developments in electronic hardware manufacturing",
    bgColor: "bg-emerald-500",
    icon: "gear",
  },
  {
    title: "Media",
    description: "Understanding which platforms and content are emerging in Europe",
    bgColor: "bg-pink-500",
    icon: "play",
  },
  {
    title: "Macroeconomic Markets",
    description: "Understanding IPO performances of US companies that went public 8 quarters ago",
    bgColor: "bg-cyan-500",
    icon: "chart",
  },
  {
    title: "Voice of Customer",
    description: "Understanding the consumers lens on your brand's product prices vs. your competitors",
    bgColor: "bg-pink-600",
    icon: "voice",
  },
  {
    title: "Macroeconomic Markets",
    description: "State of Colombian coffee product impact on global markets",
    bgColor: "bg-cyan-400",
    icon: "chart",
  },
];

const CARD_WIDTH = 300;
const CARD_GAP = 24;

function CardIcon({ icon }: { icon: string }) {
  if (icon === "radio") {
    return (
      <svg className="h-8 w-8 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    );
  }
  if (icon === "gear") {
    return (
      <svg className="h-8 w-8 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }
  if (icon === "play") {
    return (
      <svg className="h-8 w-8 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    );
  }
  if (icon === "chart") {
    return (
      <svg className="h-8 w-8 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    );
  }
  if (icon === "voice") {
    return (
      <svg className="h-8 w-8 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    );
  }
  return (
    <svg className="h-8 w-8 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M21 12v-2.945a2 2 0 00-2-2 2 2 0 01-2-2V9a2 2 0 00-2-2h-1a2 2 0 01-2-2V5.5a2.5 2.5 0 00-2.5-2.5H14" />
    </svg>
  );
}

export default function IntroducingRashiCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollState() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, []);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const step = CARD_WIDTH + CARD_GAP;
    el.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  }

  return (
    <section className={`relative ${SECTION_BORDER}`}>
      <div className={`${SECTION_PADDING} ${CONTAINER}`}>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl"
        >
          Introducing Rashi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-5 text-center text-base font-semibold text-[var(--neon-pink)] sm:text-lg lg:mt-6"
        >
          Where ChatGPT is composing information, Rashi is analyzing information.
        </motion.p>

        {/* Carousel with proper padding so arrows don't overlap content */}
        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {/* Left arrow — pink gradient, overlapping edge */}
          <button
            type="button"
            onClick={() => scroll("left")}
            onFocus={updateScrollState}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 z-20 flex h-14 w-11 -translate-y-1/2 items-center justify-center rounded-l-xl bg-gradient-to-r from-[var(--neon-pink)]/90 to-transparent text-white shadow-lg transition-all hover:from-[var(--neon-pink)] hover:opacity-100 disabled:pointer-events-none disabled:opacity-30 sm:left-0 sm:h-16 sm:w-12"
            disabled={!canScrollLeft}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Right arrow — matches design */}
          <button
            type="button"
            onClick={() => scroll("right")}
            onFocus={updateScrollState}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 z-20 flex h-14 w-11 -translate-y-1/2 items-center justify-center rounded-r-xl border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20 disabled:pointer-events-none disabled:opacity-30 sm:right-0 sm:h-16 sm:w-12"
            disabled={!canScrollRight}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 py-4 pb-6 sm:gap-8 sm:px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
          >
            {CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="introducing-card-hover min-h-[200px] flex-shrink-0 snap-start rounded-xl border border-white/10 bg-black/40 shadow-lg sm:min-h-[220px]"
                style={{ width: CARD_WIDTH, maxWidth: "calc(100vw - 3rem)" }}
              >
                <div className={`flex h-full min-h-[200px] flex-col rounded-xl ${card.bgColor} p-6 sm:min-h-[220px] sm:p-6`}>
                  <div className="flex items-start gap-4">
                    <CardIcon icon={card.icon} />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-white sm:text-lg">{card.title}</h3>
                      <p className="mt-2 text-sm leading-snug text-white/95 line-clamp-2 sm:mt-3">{card.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
