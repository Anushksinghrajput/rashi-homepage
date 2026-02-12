"use client";

import { motion } from "framer-motion";
import { CONTAINER, SECTION_BORDER, SECTION_PADDING } from "@/lib/layout";

const CARDS = [
  {
    title: "Venture Capitalist",
    description: "Insights into quarterly fund performance of the top 30 Venture Capital funds",
    bgClass: "bg-[#f8b4c4]",
    icon: "money-check",
  },
  {
    title: "Supply Chain",
    description: "Impact of Bank of England policies on British food and commodity prices",
    bgClass: "bg-[#86efac]",
    icon: "chart-line",
  },
  {
    title: "Medicine",
    description: "State of Generative AI's impact in healthcare and life-sciences",
    bgClass: "bg-[#fef08a]",
    icon: "hand-medical",
  },
  {
    title: "Media",
    description: "Impact of App Tracking Transparency policies on social media advertising",
    bgClass: "bg-[#c084fc]",
    icon: "comments",
  },
  {
    title: "Supply Chain",
    description: "The impacts of climate change on global supply chain",
    bgClass: "bg-[#86efac]",
    icon: "business-time",
  },
  {
    title: "Communications",
    description: "Understanding acquisitions & transaction trends in networking technology",
    bgClass: "bg-[#475569]",
    icon: "network",
  },
] as const;

function MoneyCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M2 5h20v2H2V5zm0 10h20v2H2v-2zm4-6h4v6H6V9zm14 0h-2v6h2V9z" />
    </svg>
  );
}

function ChartLineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function HandMedicalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2L8 6h3v4H8l4 4 4-4h-3V6h3L12 2zm-1 14v2h2v-2h-2zm4-2h-2v2h2v-2zm-6 0H7v2h2v-2z" />
    </svg>
  );
}

function CommentsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </svg>
  );
}

function BusinessTimeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
  );
}

function NetworkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
    </svg>
  );
}

function CardIcon({ icon, className }: { icon: (typeof CARDS)[number]["icon"]; className?: string }) {
  const c = className ?? "h-8 w-8 flex-shrink-0 text-black/80";
  switch (icon) {
    case "money-check":
      return <MoneyCheckIcon className={c} />;
    case "chart-line":
      return <ChartLineIcon className={c} />;
    case "hand-medical":
      return <HandMedicalIcon className={c} />;
    case "comments":
      return <CommentsIcon className={c} />;
    case "business-time":
      return <BusinessTimeIcon className={c} />;
    case "network":
      return <NetworkIcon className={c} />;
    default:
      return null;
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function UseCaseCardsSection() {
  return (
    <section className={`relative ${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl"
      >
        Where ChatGPT is composing information, Rashi is analyzing information.
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {CARDS.map((card, i) => (
          <motion.article
            key={i}
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group flex overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:ring-white/10"
          >
            <div
              className={`flex min-h-[140px] w-full flex-1 gap-4 p-5 transition-all duration-300 group-hover:brightness-[1.02] sm:min-h-[160px] sm:p-6 ${card.bgClass}`}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-black/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-black/15">
                <CardIcon icon={card.icon} className="h-7 w-7 text-black/90 sm:h-8 sm:w-8" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-black sm:text-lg">{card.title}</h3>
                <p className="mt-1.5 text-sm leading-snug text-black/85 sm:mt-2">{card.description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
