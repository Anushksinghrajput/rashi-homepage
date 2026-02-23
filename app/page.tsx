"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CONTAINER, CONTAINER_NARROW, SECTION_BORDER, SECTION_PADDING, SECTION_PADDING_TIGHT } from "@/lib/layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import WaitlistForm from "./components/WaitlistForm";
import RashiLogo from "./components/RashiLogo";
import StarfieldBackground from "./components/StarfieldBackground";
import HowRashiThinks from "./components/HowRashiThinks";
import FlowDiagramSection from "./components/FlowDiagramSection";
import GradientCtaBand from "./components/GradientCtaBand";
import UseCaseCardsSection from "./components/UseCaseCardsSection";
import IntroducingRashiCarousel from "./components/IntroducingRashiCarousel";
import ScrollReveal from "./components/ScrollReveal";

const industries =
  "Venture Capital, Financial Markets, Technology, Sustainability, Supply Chains, Market Research, Voice of Customer";

export default function Home() {
  return (
    <div className="noise-overlay relative min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      <StarfieldBackground />
      <Header />

      <main className="relative z-10">
        {/* Hero — logo above headline */}
        <section
          id="hero"
          className={`relative overflow-hidden ${CONTAINER} py-20 sm:py-28 lg:py-36`}
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-10"
            >
              <RashiLogo variant="heroXl" href="/" className="h-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
                <span className="hero-gradient-glow inline-block bg-gradient-to-r from-[var(--neon-pink)] to-[#ff4080] bg-clip-text text-transparent">
                  Generative
                </span>{" "}
                <span className="hero-gradient-glow inline-block bg-gradient-to-r from-[var(--neon-orange)] to-[var(--neon-yellow)] bg-clip-text text-transparent" style={{ animationDelay: "0.5s" }}>
                  Insights
                </span>{" "}
                <span className="text-white">at your Fingertips.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 max-w-2xl text-xl leading-relaxed text-white/90 sm:text-2xl"
              >
                Let AI do the Heavy Lifting and Unlock Deeper Insights Faster
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10"
              >
                <a
                  href="#waitlist-form"
                  className="btn-gradient btn-pulse animate-float-subtle inline-flex rounded-[9999px] px-8 py-4 text-lg font-medium text-white"
                >
                  Join Waitlist
                </a>
              </motion.div>
          </div>
        </section>

        {/* Flow diagram: three nodes + curved path with arrow (no overlap) */}
        <FlowDiagramSection />

        {/* How Rashi Thinks — accordion insights */}
        <HowRashiThinks />

        {/* Value proposition */}
        <section className={`relative ${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER}`}>
          <div className="max-w-4xl text-left">
            <ScrollReveal>
              <h2 className="section-heading-accent section-heading-accent-left text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Our algos empower people to make better decisions faster
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-white/90">
                <strong className="text-white">Rashi</strong> is a generative
                insights engine. Bespoke, contextual intelligence to your
                corpus of data, whatever you&apos;re researching. In this
                increasingly complex world, our innovative algorithms reduce
                research time and costs while improving accuracy and speed. By
                reducing human bias and generating a holistic view from various
                sources, our software helps analysts discover more insights and{" "}
                <span className="text-[var(--neon-pink)] drop-shadow-[0_0_12px_rgba(255,0,128,0.5)]">
                  patterns
                </span>{" "}
                to improve the quality of their analysis and make higher quality
                and higher velocity, data-driven decisions.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-white/90">
                Powered by advanced Natural Language Processing algorithms,
                Rashi deciphers the language of data, identifying{" "}
                <span className="text-[var(--neon-pink)] drop-shadow-[0_0_12px_rgba(255,0,128,0.5)]">
                  patterns
                </span>
                , trends, and associations, and generating insights.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Tree diagram — bloom + animated flow on connector lines, floats on starfield */}
        <section className={`relative bg-transparent ${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER}`}>
          <ScrollReveal>
            <h2 className="sr-only">
              From data sources to real-time algorithmic insights across industries
            </h2>
            <div
              className="relative mx-auto max-w-5xl overflow-hidden bg-transparent"
              style={{ mixBlendMode: "screen" }}
            >
              <div className="tree-diagram-bloom">
                <Image
                  src="https://rashi.ai/wp-content/uploads/2023/06/Group-176.svg"
                  alt="Define your data sources and topics, process with Rashi, and get algorithmic insights that update in real-time across Tech, Manufacturing, Medicine, Retail, Telco, Media, and Financial Markets"
                  width={1200}
                  height={675}
                  className="h-auto w-full object-contain"
                  priority={false}
                  unoptimized
                />
              </div>
              {/* Animated flow overlay — suggests motion along connecting lines */}
              <div
                className="tree-flow-overlay absolute inset-0"
                aria-hidden
              />
              <div
                className="tree-flow-overlay absolute inset-0"
                style={{ animationDelay: "2s" }}
                aria-hidden
              />
            </div>
          </ScrollReveal>
        </section>

        {/* Full-width orange-to-pink gradient CTA band */}
        <GradientCtaBand />

        {/* Introducing Rashi — infinite marquee carousel */}
        <IntroducingRashiCarousel />

        {/* Where ChatGPT / Rashi — use case cards with motion */}
        <UseCaseCardsSection />

        {/* Text: Rashi is developing... + LLM paragraph */}
        <section className={`relative ${SECTION_BORDER} ${SECTION_PADDING_TIGHT} ${CONTAINER}`}>
          <div className="max-w-4xl text-left">
            <ScrollReveal>
              <p className="text-lg font-medium leading-relaxed text-white sm:text-xl">
                Rashi is developing customer-centric insights for analysts
                across industries and functions in {industries}, and more.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
                Large Language Models like GPT-4 have a fundamental limitation
                in the way they compose outputs.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
                These sequencer models excel at generating natural language but
                are poor choices as tools for contextual analytic insights.
                Their analytic limitations will always make them best used as
                personal information assistants.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 text-white/60">
                Read more about how Rashi&apos;s AI is solving these problems,
                and building more profound insights for leaders in our{" "}
                <Link
                  href="/blogs"
                  className="link-gradient-underline font-medium text-[var(--neon-pink)]"
                >
                  blog
                </Link>
                .
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Blogs */}
        <section className={`relative ${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER} bg-white/[0.02]`}>
          <div>
            <ScrollReveal>
              <h2 className="section-heading-accent mx-auto text-center text-2xl font-bold leading-snug text-white sm:text-3xl">
                Blogs
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mx-auto mt-12 max-w-4xl">
                <Image
                  src="/neon-robots-blogs.png"
                  alt="Neon-style robots: pink, green, and blue futuristic characters"
                  width={1200}
                  height={400}
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mx-auto mt-12 max-w-2xl text-center">
                <p className="text-lg font-medium leading-relaxed text-white sm:text-xl">
                  Where ChatGPT is composing information, Rashi is analyzing
                  information.
                </p>
                <Link
                  href="/blogs"
                  className="link-gradient-underline mt-6 inline-block font-medium text-[var(--neon-pink)]"
                >
                  Read More →
                </Link>
                <div className="mt-8">
                <Link
                  href="/blogs"
                  className="link-gradient-underline inline-flex rounded-full border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:border-[var(--neon-pink)] hover:bg-white/5"
                >
                  Read all Blogs
                </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact us — larger, with in/out animation */}
        <section
          id="contact"
          className={`relative overflow-hidden ${SECTION_BORDER} py-20 sm:py-28 lg:py-32 ${CONTAINER} bg-white/[0.02]`}
        >
          <motion.div
            className="contact-card-breathe mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-12 backdrop-blur-sm sm:max-w-xl sm:px-10 sm:py-16 lg:max-w-2xl lg:px-14 lg:py-20"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px", amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Contact us
              </h2>
            </motion.div>
            <motion.p
              className="mt-4 whitespace-nowrap text-center text-base text-white/70 sm:text-lg lg:mt-6 lg:text-xl"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              We frequently check and reply to our inbox for your responses.
            </motion.p>
            <motion.div
              className="mt-10 sm:mt-12 lg:mt-14"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        </section>

        {/* Waitlist */}
        <section
          id="waitlist-form"
          className={`relative ${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER_NARROW}`}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold leading-snug text-white">Join the Waitlist</h2>
            <p className="mt-2 text-white/60">
              Be the first to know when Rashi launches.
            </p>
            <div className="relative mt-8 flex justify-center">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
