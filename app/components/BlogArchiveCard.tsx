"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type BlogArchiveCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  neonVariant: "pink" | "green" | "blue";
  index: number;
};

const neonStyles = {
  pink: "border-pink-500/80 shadow-[0_0_20px_rgba(236,72,153,0.2)] hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:border-pink-400",
  green: "border-emerald-400/80 shadow-[0_0_20px_rgba(52,211,153,0.2)] hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] hover:border-emerald-300",
  blue: "border-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:border-cyan-300",
};

const neonBgStyles = {
  pink: "bg-pink-500/10",
  green: "bg-emerald-500/10",
  blue: "bg-cyan-500/10",
};

export default function BlogArchiveCard({
  slug,
  title,
  excerpt,
  date,
  neonVariant,
  index,
}: BlogArchiveCardProps) {
  const style = neonStyles[neonVariant];
  const bgStyle = neonBgStyles[neonVariant];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group h-full"
    >
      <Link
        href={`/blogs/${slug}`}
        className={`block h-full rounded-xl border-2 bg-black/50 p-0 transition-all duration-300 ${style} overflow-hidden`}
      >
        {/* Neon-style imagery area: colored panel with subtle gradient */}
        <div
          className={`relative flex min-h-[160px] items-center justify-center border-b border-white/10 ${bgStyle} transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] sm:min-h-[180px]`}
        >
          <div
            className={`flex h-24 w-24 items-center justify-center rounded-xl border-2 sm:h-28 sm:w-28 ${
              neonVariant === "pink"
                ? "border-pink-400/90 shadow-[0_0_25px_rgba(236,72,153,0.3)]"
                : neonVariant === "green"
                  ? "border-emerald-400/90 shadow-[0_0_25px_rgba(52,211,153,0.3)]"
                  : "border-cyan-400/90 shadow-[0_0_25px_rgba(34,211,238,0.3)]"
            } transition-all duration-300 group-hover:scale-105`}
          >
            <span
              className="text-5xl opacity-90 sm:text-6xl"
              aria-hidden
            >
              🤖
            </span>
          </div>
        </div>
        {/* Card content */}
        <div className="flex flex-col p-5 sm:p-6">
          <time
            dateTime={date}
            className="text-xs font-medium uppercase tracking-wider text-white/50"
          >
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <h2 className="mt-2 text-lg font-bold leading-tight text-white sm:text-xl">
            {title}
          </h2>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">
            {excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--neon-pink)] transition-colors group-hover:gap-2">
            Read More
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
