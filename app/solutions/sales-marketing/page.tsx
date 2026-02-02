"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StarfieldBackground from "../../components/StarfieldBackground";
import RashiLogo from "../../components/RashiLogo";
import ScrollReveal from "../../components/ScrollReveal";

const SECTION_PADDING = "py-16 sm:py-20 lg:py-24";
const CONTAINER = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const GRID_GAP = "gap-8 lg:gap-12";

export default function SalesMarketingPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      <StarfieldBackground />
      <Header />

      <main className="relative z-10 flex-1">
        {/* Hero: Sales & Marketing + Rashi logo — centered grid */}
        <section className={`${SECTION_PADDING} ${CONTAINER}`}>
          <div className="grid grid-cols-1 items-center lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-white/60 transition-colors hover:text-[var(--neon-pink)]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Home
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                <span className="bg-gradient-to-r from-lime-400 to-[var(--neon-yellow)] bg-clip-text text-transparent">
                  Sales & Marketing
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg text-white/70"
              >
                Rashi delivers generative insights for sales and marketing teams.
                Unlock deeper understanding of markets, competitors, and customer
                voice—faster and with less bias.
              </motion.p>
            </div>
            <div className="mt-10 flex justify-center lg:col-span-4 lg:mt-0 lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <RashiLogo variant="hero" href="/" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Full-width magenta band */}
        <section className="w-full bg-[var(--neon-pink)] py-6 sm:py-8">
          <div className={CONTAINER}>
            <p className="text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              Today&apos;s content is tomorrow&apos;s business
            </p>
          </div>
        </section>

        {/* Your Influencer + thumbnails — symmetrical grid */}
        <section className={`${SECTION_PADDING} ${CONTAINER} border-t border-white/10`}>
          <div className={`grid grid-cols-1 ${GRID_GAP} lg:grid-cols-2`}>
            <ScrollReveal>
              <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-amber-500/90 px-8 py-12 text-center sm:min-h-[240px]">
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  Your Influencer is Your Product
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] rounded-lg border border-white/20 bg-white/5"
                    aria-hidden
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <div className="mt-8 rounded-xl bg-cyan-600/80 px-6 py-5 text-center sm:px-8 sm:py-6">
              <p className="text-lg font-medium text-white sm:text-xl">
                Targeted Influencer Marketing is the new Platform Ad Spend
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Speak to CEO CTA — visually anchored grid */}
        <section id="speak-to-ceo" className={`${SECTION_PADDING} ${CONTAINER} border-t border-white/10`}>
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Who is the best influencer to lift your GTM strategy?
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="mt-4 text-center text-lg font-semibold text-emerald-400 sm:text-xl">
              Speak to the CEO of Rashi today
            </p>
          </ScrollReveal>
          <div className={`mt-12 grid grid-cols-1 ${GRID_GAP} lg:grid-cols-[auto_auto_1fr] lg:items-center`}>
            <ScrollReveal delay={0.1}>
              <div className="flex justify-center">
                <RashiLogo variant="navbar" href="/" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="flex justify-center">
                <div
                  className="h-24 w-24 rounded-full border-2 border-white/30 bg-white/10 sm:h-28 sm:w-28"
                  title="Tommy Mehl, Founder CEO"
                >
                  <span className="flex h-full w-full items-center justify-center text-lg font-bold text-white/80 sm:text-xl">
                    TM
                  </span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <form
                className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white px-4 py-3 text-black placeholder:text-gray-500 focus:border-[var(--neon-pink)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-pink)]"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-[var(--neon-yellow)] px-6 py-3 font-semibold text-black transition-opacity hover:opacity-95"
                >
                  Get in contact
                </button>
              </form>
            </ScrollReveal>
          </div>
        </section>

        {/* TikTok + YouTube — even distribution */}
        <section className={`${SECTION_PADDING} ${CONTAINER} border-t border-white/10`}>
          <div className={`grid grid-cols-1 ${GRID_GAP} md:grid-cols-2`}>
            <ScrollReveal>
              <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.3)] sm:h-20 sm:w-20">
                  <span className="text-2xl font-bold text-white sm:text-3xl">TT</span>
                </div>
                <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
                  Mine thousands of relevant TikTok accounts to identify who exactly is the most contextual influencer for your product category.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.3)] sm:h-20 sm:w-20">
                  <svg className="h-8 w-8 text-white sm:h-10 sm:w-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
                  Insights to tailor your content to generate the best engagement with specific influencers & their communities, mining exactly what content performs best with each influencer-partner.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Yellow CTA band */}
        <section className="w-full bg-gradient-to-r from-amber-400 to-[var(--neon-yellow)] py-8 sm:py-10">
          <div className={CONTAINER}>
            <p className="text-center text-lg font-bold uppercase tracking-wide text-black sm:text-xl lg:text-2xl">
              Curate your analysis and create bespoke and contextual inferences of machine insights.
            </p>
          </div>
        </section>

        {/* What makes our algorithm different — four circles + labels */}
        <section className={`${SECTION_PADDING} ${CONTAINER} border-t border-white/10`}>
          <div className="w-full bg-[var(--neon-pink)] py-5 sm:py-6">
            <h2 className="text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              What makes our algorithm different?
            </h2>
          </div>
          <div className={`mt-12 grid grid-cols-1 ${GRID_GAP} sm:grid-cols-2 lg:grid-cols-4`}>
            {[
              {
                label: "Topic Evolution",
                bg: "bg-lime-500",
                text: "Slice your data and curate your inference any which way, to decode the latent narrative intelligences.",
              },
              {
                label: "Unknown Unknowns",
                bg: "bg-blue-500",
                text: "Where LLMs are predictive pattern-matchers, our algorithms are trained to extract low-level signal that connect dots with precision.",
              },
              {
                label: "Algorithmic Contextualizations",
                bg: "bg-[var(--neon-yellow)]",
                text: "Low-code dashboards to build contextual inferences and analytics of the topics you need to decode the truth.",
              },
              {
                label: "Subscribe to your inferences",
                bg: "bg-[var(--neon-pink)]",
                text: "Fast, easily shared insights with real-time evolution and deep sources, custom built for your analysis needs.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.05}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-full ${item.bg} px-3 text-center text-sm font-bold text-white shadow-lg sm:h-32 sm:w-32 sm:text-base`}
                  >
                    {item.label}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-white/80 sm:text-base">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Enterprise Decision-Science + flow diagram */}
        <section className={`${SECTION_PADDING} ${CONTAINER} border-t border-white/10`}>
          <ScrollReveal>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
              Enterprise Decision-Science
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
              Run an instant and highly bespoke inference on the expanse of TikTok or YouTube, and build bespoke insights that will re-contextualize your most pressing decisions for strategy.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-white sm:text-xl">
              Decode how narratives evolve, and contextualize narratives for a new class of{" "}
              <span className="bg-gradient-to-r from-[var(--neon-pink)] to-red-500 bg-clip-text text-transparent">
                deep algorithmic insights.
              </span>
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {[
                  "Ground truth topic creation",
                  "Topic convergence & divergence",
                  "Turning topics into trends",
                  "Information Overlay & Context Retrieval",
                  "Ranking trends to user query",
                  "Generate Sharable Insight reports",
                ].map((label, i) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["#22c55e", "#eab308", "#3b82f6", "#a855f7", "#f97316"].map((color, i) => (
                  <div
                    key={i}
                    className="h-3 flex-1 min-w-[60px] rounded-full opacity-80"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Bottom CTA */}
        <section className={`${SECTION_PADDING} ${CONTAINER} border-t border-white/10`}>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href="/#waitlist-form"
              className="btn-gradient inline-flex rounded-full px-8 py-4 text-lg font-medium text-white"
            >
              Join Waitlist
            </a>
            <a
              href="/#contact"
              className="inline-flex rounded-full border border-white/20 px-8 py-4 text-lg font-medium text-white transition-colors hover:border-[var(--neon-pink)] hover:bg-white/5"
            >
              Contact us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
