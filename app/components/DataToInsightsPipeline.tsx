"use client";

import { motion } from "framer-motion";
import RashiLogo from "./RashiLogo";

const DATA_ICONS = [
  { label: "Globe", color: "bg-amber-400" },
  { label: "Reddit", color: "bg-red-500" },
  { label: "Twitter", color: "bg-sky-400" },
  { label: "Medium", color: "bg-gray-600" },
  { label: "GitHub", color: "bg-gray-800" },
  { label: "YouTube", color: "bg-red-600" },
  { label: "Book", color: "bg-amber-600" },
  { label: "Legal", color: "bg-slate-500" },
  { label: "Patents", color: "bg-orange-500" },
  { label: "10Q", color: "bg-amber-200" },
  { label: "News", color: "bg-blue-600" },
];

const INSIGHT_NODES = [
  { label: "Tech", color: "bg-orange-500" },
  { label: "Manufacturing", color: "bg-yellow-400" },
  { label: "Media", color: "bg-blue-500" },
  { label: "Financial Markets", color: "bg-pink-500" },
  { label: "Telco", color: "bg-blue-800" },
  { label: "Medicine", color: "bg-orange-600" },
  { label: "CPG", color: "bg-green-800" },
  { label: "Retail", color: "bg-green-400" },
];

export default function DataToInsightsPipeline() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-6 sm:p-10 lg:p-12"
        >
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
            {/* Data sources - left cluster */}
            <div className="flex flex-wrap justify-center gap-3">
              {DATA_ICONS.map((icon, i) => (
                <motion.div
                  key={icon.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className={`h-10 w-10 rounded-lg ${icon.color} flex items-center justify-center text-xs font-bold text-white shadow-lg`}
                  title={icon.label}
                >
                  {icon.label.slice(0, 1)}
                </motion.div>
              ))}
            </div>

            {/* Arrow + Rashi logo (center) */}
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-white/30 sm:w-16" />
              <div className="rounded-xl border-2 border-[var(--neon-pink)] p-3 shadow-[0_0_30px_rgba(255,0,128,0.3)]">
                <RashiLogo variant="navbar" href="/" className="[&_span]:text-white" />
              </div>
              <div className="h-px w-12 bg-white/30 sm:w-16" />
            </div>

            {/* Mind map - right (simplified grid) */}
            <div className="flex flex-wrap justify-center gap-2">
              {INSIGHT_NODES.map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.02 }}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold text-white ${node.color}`}
                >
                  {node.label}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <span className="inline-block rounded-lg bg-purple-900/80 px-6 py-3 text-sm font-medium text-white">
              Insights across industries and across functions
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
