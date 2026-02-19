"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const COLLAGE_IMAGES = [
  { src: "/influencer-1.png", alt: "Influencer content — makeup and product" },
  { src: "/influencer-2.png", alt: "Influencer content — beauty and engagement" },
  { src: "/influencer-3.png", alt: "Influencer content — product and audience" },
  { src: "/influencer-4.png", alt: "Influencer content — creator and community" },
];

export default function InfluencerBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl">
      {/* Top row: yellow block + collage */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left — yellow block with headline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col justify-center bg-[#facc15] px-8 py-12 sm:px-10 sm:py-14 lg:py-16"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-[2.5rem]">
              Your Influencer is Your Product
            </h2>
            <p className="mt-6 text-base font-medium leading-snug text-black/90 sm:text-lg">
              <span className="font-bold">Contextual & Unique Insights</span> into each of your{" "}
              <span className="font-bold">Influencers & their Fans</span>
            </p>
          </div>
          {/* Diagonal stripe extending right — AI / dynamic accent */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 w-full bg-[#facc15] opacity-90"
            style={{
              clipPath: "polygon(0 100%, 0 0%, 100% 100%)",
            }}
          />
        </motion.div>

        {/* Right — 4-panel collage with diagonal overlay */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative grid grid-cols-4 gap-0.5 bg-black/60 p-1.5 sm:p-2"
        >
          {COLLAGE_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 25vw, 200px"
                className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-lg ring-2 ring-[var(--neon-pink)]/0 ring-offset-2 ring-offset-black transition-all duration-300 group-hover:ring-[var(--neon-pink)]/50" />
            </motion.div>
          ))}
          {/* Diagonal yellow overlay (left side of collage) — matches reference */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 z-10 h-full w-1/3 bg-[#facc15]/20"
            style={{
              clipPath: "polygon(0 100%, 0 0%, 100% 100%)",
            }}
          />
        </motion.div>
      </div>

      {/* Bottom strip: cream + dark with CTA */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#fef9c3] px-6 py-4 sm:px-8 sm:py-5"
        >
          <p className="text-sm font-medium text-black/80 sm:text-base">
            <span className="font-bold text-black">Contextual & Unique Insights</span> into each of your{" "}
            <span className="font-bold text-black">Influencers & their Fans</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex items-center bg-slate-800 px-6 py-4 sm:px-8 sm:py-5"
        >
          <p className="text-base font-medium text-white sm:text-lg">
            <span className="font-bold text-cyan-300">Targeted Influencer Marketing</span> is the new{" "}
            <span className="font-bold text-cyan-300">Platform Ad Spend</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
