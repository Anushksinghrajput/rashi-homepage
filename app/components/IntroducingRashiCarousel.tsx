"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTAINER, SECTION_BORDER, SECTION_PADDING } from "@/lib/layout";

const CARD_GAP = 24;
const CARD_MIN_HEIGHT = 220;

const CARDS = [
  {
    title: "Venture Capital",
    description: "Real-time competitive insights of top 30 Venture Capital funds",
    bgClass: "bg-[#f472b6]/95",
    borderGlow: "rgba(244, 114, 182, 0.5)",
    icon: "venture",
  },
  {
    title: "Voice of Customer",
    description:
      "Impact of social responsibility on your customer's perception of your brand",
    bgClass: "bg-[#c084fc]/95",
    borderGlow: "rgba(192, 132, 252, 0.5)",
    icon: "voice",
  },
  {
    title: "Communications",
    description: "Impact of government policies on open-RAN initiatives",
    bgClass: "bg-[#64748b]/95",
    borderGlow: "rgba(100, 116, 139, 0.5)",
    icon: "comm",
  },
  {
    title: "Sustainability",
    description: "Emerging impacts of climate change on global supply chain",
    bgClass: "bg-[#84cc16]/95",
    borderGlow: "rgba(132, 204, 22, 0.5)",
    icon: "sustain",
  },
  {
    title: "Supply Chain Intelligence",
    description:
      "Real-time visibility into global supply chain disruptions and logistics risk signals.",
    bgClass: "bg-[#f472b6]/95",
    borderGlow: "rgba(244, 114, 182, 0.5)",
    icon: "supply",
  },
  {
    title: "Macroeconomic Markets",
    description:
      "Understanding IPO performances of US companies that went public 8 quarters ago",
    bgClass: "bg-[#22d3ee]/95",
    borderGlow: "rgba(34, 211, 238, 0.5)",
    icon: "macro",
  },
];

function CardIcon({ icon }: { icon: string }) {
  const cls = "h-8 w-8 flex-shrink-0 text-black/80";
  switch (icon) {
    case "venture":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "voice":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case "comm":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      );
    case "sustain":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935" />
        </svg>
      );
    case "supply":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case "macro":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

function CarouselCard({
  card,
  index,
}: {
  card: (typeof CARDS)[number];
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="introducing-rashi-card flex min-h-[220px] flex-1 flex-shrink-0 flex-grow basis-0 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md min-w-0"
      style={{
        maxWidth: "100%",
        boxShadow: `0 8px 32px rgba(0,0,0,0.2), 0 0 16px ${card.borderGlow}`,
      }}
    >
      <div
        className={`flex h-full flex-col rounded-2xl ${card.bgClass} p-6`}
        style={{
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/40">
            <CardIcon icon={card.icon} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-black">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/85 line-clamp-3">{card.description}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function NavArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? "Previous slide" : "Next slide"}
      className={`absolute top-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--neon-pink)] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:pointer-events-none disabled:opacity-40 ${isPrev ? "left-2 sm:left-4" : "right-2 sm:right-4"}`}
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isPrev ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}

const SWIPE_THRESHOLD = 50;

export default function IntroducingRashiCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const totalPages = Math.ceil(CARDS.length / cardsPerPage);
  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  const goPrev = useCallback(() => {
    setCurrentPage((p) => Math.max(0, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentPage((p) => Math.min(totalPages - 1, p + 1));
  }, [totalPages]);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1024;
      if (w < 640) setCardsPerPage(1);
      else if (w < 768) setCardsPerPage(2);
      else if (w < 1280) setCardsPerPage(3);
      else setCardsPerPage(4);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    const total = Math.ceil(CARDS.length / cardsPerPage);
    setCurrentPage((p) => Math.min(p, Math.max(0, total - 1)));
  }, [cardsPerPage]);

  useEffect(() => {
    if (isPaused) return;
    autoplayRef.current = setInterval(() => {
      setCurrentPage((p) => (p >= totalPages - 1 ? 0 : p + 1));
    }, 4000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused, totalPages]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext]);

  const visibleCards = CARDS.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <section
      className={`relative overflow-hidden ${SECTION_BORDER} ${SECTION_PADDING}`}
      aria-labelledby="introducing-rashi-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={CONTAINER}>
        <motion.h2
          id="introducing-rashi-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="section-heading-accent mx-auto text-center text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl"
        >
          Introducing Rashi
        </motion.h2>
      </div>

      {/* Full-width carousel — spans entire section width */}
      <div
        className="relative mt-14 w-full sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8"
        role="region"
        aria-label="Use case carousel"
      >
        <div
          className="relative w-full overflow-hidden rounded-2xl touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <NavArrow direction="prev" onClick={goPrev} disabled={!canGoPrev} />
          <NavArrow direction="next" onClick={goNext} disabled={!canGoNext} />

          <div className="flex w-full gap-6" style={{ gap: CARD_GAP }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex w-full flex-1 gap-6"
                style={{ gap: CARD_GAP }}
              >
                {visibleCards.map((card, i) => (
                  <CarouselCard
                    key={`${card.title}-${i}`}
                    card={card}
                    index={i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2 px-4" aria-hidden>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentPage
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-white/50 px-4">
          {isPaused ? "Autoplay paused" : "Autoplay • Hover to pause"} • Use arrows or swipe
        </p>
      </div>
    </section>
  );
}
