"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const RASHI_LOGO_SRC =
  "https://rashi.ai/wp-content/uploads/2023/06/Rashi-Logo-Transparent-e1685619567554-1024x632.png";

export default function GradientCtaBand() {
  return (
    <section className="cta-band-shine relative overflow-hidden py-20 sm:py-24 lg:py-28" id="waitlist">
      {/* Orange-dominant gradient left → right: orange → coral → pink → magenta → purple */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, #ff9500 0%, #ff8c00 20%, #ff7b35 45%, #ff5c7c 65%, #e91e8c 82%, #9c27b0 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, transparent 45%, rgba(0,0,0,0.08) 100%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-6 sm:mb-8"
        >
          <Image
            src={RASHI_LOGO_SRC}
            alt="Rashi"
            width={320}
            height={198}
            className="h-auto w-full max-w-[280px] object-contain sm:max-w-[320px]"
            priority
            sizes="(max-width: 640px) 280px, 320px"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="whitespace-nowrap text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[2.75rem] 2xl:text-[3.25rem]"
        >
          Increasing your &quot;knowledge per unit of time&quot;
        </motion.h2>
        <motion.a
          href="https://tally.so/r/3qaazk"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="cta-join-btn relative z-10 mt-8 inline-flex rounded-full border border-white/40 px-10 py-4 text-lg font-bold text-black transition-all duration-300 hover:border-white/60 hover:brightness-105"
        >
          <span className="relative z-10">Join Waitlist</span>
        </motion.a>
      </div>
    </section>
  );
}
