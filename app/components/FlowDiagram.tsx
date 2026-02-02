"use client";

import { motion } from "framer-motion";

export default function FlowDiagram() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
        >
          {/* First circle - Universe of Data (hot pink) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#ff0080] shadow-[0_0_40px_rgba(255,0,128,0.4)] sm:h-40 sm:w-40">
              <span className="max-w-[90%] text-center text-sm font-bold text-white sm:text-base">
                Universe of Data
              </span>
            </div>
            <span className="mt-3 text-sm font-medium text-white/90">Analyze & Cluster</span>
          </motion.div>

          {/* Animated wave line + Extract & Generate label */}
          <div className="relative hidden flex-shrink-0 items-center lg:flex" style={{ width: 140 }}>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-white/90">
              Extract & Generate
            </span>
            <svg
              viewBox="0 0 140 80"
              className="h-20 w-full text-white"
              aria-hidden
            >
              <motion.path
                d="M 0 20 Q 35 0 70 20 T 140 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />
              <motion.path
                d="M 120 18 L 140 20 L 120 22 Z"
                fill="currentColor"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.3 }}
              />
            </svg>
          </div>

          {/* Second circle - Unique Insights (white) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.2)] sm:h-40 sm:w-40">
              <span className="max-w-[90%] text-center text-sm font-bold text-black sm:text-base">
                Unique Insights
              </span>
            </div>
          </motion.div>

          {/* Second segment of wave */}
          <div className="relative hidden flex-shrink-0 items-center lg:flex" style={{ width: 140 }}>
            <svg viewBox="0 0 140 80" className="h-20 w-full text-white" aria-hidden>
              <motion.path
                d="M 0 20 Q 35 40 70 20 T 140 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
              />
              <motion.path
                d="M 120 18 L 140 20 L 120 22 Z"
                fill="currentColor"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.3 }}
              />
            </svg>
          </div>

          {/* Third circle - Accelerated Decision Making (orange/amber) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#ff8c00] shadow-[0_0_40px_rgba(255,140,0,0.4)] sm:h-40 sm:w-40">
              <span className="max-w-[90%] text-center text-sm font-bold text-white sm:text-base">
                Accelerated Decision Making
              </span>
            </div>
            <span className="mt-3 text-sm font-medium text-white/90">Interpret & Learn</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
