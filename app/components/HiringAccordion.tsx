"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JOBS = [
  {
    title: "Back-end Developer",
    description:
      "We're seeking a lead back-end engineer to build out our cloud infrastructure. Someone passionate to be on the core engineering team, working with the CTO, Machine Learning engineers. Responsible for query processing, database design and management, and cloud platforms.",
    email: "jobs@rashi.ai",
    subject: "Back-end Developer",
  },
  {
    title: "Product Designer",
    description:
      "As the product designer at Rashi, your primary responsibility is to bridge the gap between product, technology, and the end user – leading UI and UX.",
    email: "jobs@rashi.ai",
    subject: "Product Designer",
  },
];

export default function HiringAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          <span className="bg-gradient-to-r from-[var(--neon-pink)] to-pink-400 bg-clip-text text-transparent">
            We are
          </span>{" "}
          <span className="bg-gradient-to-r from-[var(--neon-orange)] to-[var(--neon-yellow)] bg-clip-text text-transparent">
            Hiring
          </span>
        </h2>

        <div className="mt-12 space-y-0 border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
          {JOBS.map((job, i) => (
            <div
              key={job.title}
              className="border-b border-white/10 last:border-b-0"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-white transition-colors hover:bg-white/5"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold">{job.title}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-white/70"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-6 py-5">
                      <p className="text-sm text-white/70 leading-relaxed">{job.description}</p>
                      <a
                        href={`mailto:${job.email}?subject=${encodeURIComponent(job.subject)}`}
                        className="mt-4 inline-block font-medium text-[var(--neon-pink)] hover:underline"
                      >
                        Apply Now
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
