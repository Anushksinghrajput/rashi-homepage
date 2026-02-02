"use client";

import { motion } from "framer-motion";
import RashiLogo from "./RashiLogo";

export default function GradientCtaBand() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8" id="waitlist">
      <div
        className="absolute inset-0 bg-gradient-to-r from-[var(--neon-orange)] via-[#ff4080] to-[var(--neon-pink)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <RashiLogo variant="hero" href="/" className="mb-6 [&_span]:text-white [&_svg]:drop-shadow-md" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
        >
          Increasing your &quot;knowledge per unit of time&quot;
        </motion.h2>
        <motion.a
          href="#waitlist-form"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="btn-glow mt-8 inline-flex rounded-full bg-white px-8 py-4 text-lg font-semibold text-black"
        >
          Join Waitlist
        </motion.a>
      </div>
    </section>
  );
}
