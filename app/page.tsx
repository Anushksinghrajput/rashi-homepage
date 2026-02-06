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
import DataToInsightsPipeline from "./components/DataToInsightsPipeline";
import GradientCtaBand from "./components/GradientCtaBand";
import IntroducingRashiCarousel from "./components/IntroducingRashiCarousel";
import ScrollReveal from "./components/ScrollReveal";

const industries =
  "Venture Capital, Financial Markets, Technology, Sustainability, Supply Chains, Market Research, Voice of Customer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      <StarfieldBackground />
      <Header />

      <main className="relative z-10">
        {/* Hero — no top border; next section provides boundary */}
        <section
          id="hero"
          className={`relative overflow-hidden ${CONTAINER} py-20 sm:py-28 lg:py-36`}
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <RashiLogo variant="heroLarge" href="/" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
                <span className="bg-gradient-to-r from-[var(--neon-pink)] to-[#ff4080] bg-clip-text text-transparent">
                  Generative
                </span>{" "}
                <span className="bg-gradient-to-r from-[var(--neon-orange)] to-[var(--neon-yellow)] bg-clip-text text-transparent">
                  Insights
                </span>{" "}
                <span className="text-white">at your Fingertips.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-2xl text-xl text-white/90 sm:text-2xl"
              >
                Let AI do the Heavy Lifting and Unlock Deeper Insights Faster
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10"
              >
                <a
                  href="#waitlist-form"
                  className="btn-gradient btn-pulse inline-flex rounded-[9999px] px-8 py-4 text-lg font-medium text-white"
                >
                  Join Waitlist
                </a>
              </motion.div>
          </div>
        </section>

        {/* How Rashi Thinks — accordion insights */}
        <HowRashiThinks />

        {/* Flow diagram: Universe of Data → Unique Insights → Accelerated Decision Making */}
        <section className={`relative ${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER}`}>
          <ScrollReveal>
            <h2 className="sr-only">
              Data flow: Universe of Data to Unique Insights to Accelerated Decision Making
            </h2>
            <div className="mx-auto max-w-5xl">
              <Image
                src="/flow-diagram.svg"
                alt="Universe of Data, Analyze & Cluster; Unique Insights, Extract & Generate; Accelerated Decision Making, Interpret & Learn"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg object-contain"
                priority={false}
              />
            </div>
          </ScrollReveal>
        </section>

        {/* Value proposition */}
        <section className={`relative ${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER}`}>
          <div className="max-w-4xl text-left">
            <ScrollReveal>
              <h2 className="text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl">
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

        {/* Data sources to algorithmic insights — tree vision (after our algos text) */}
        <section className={`relative ${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER}`}>
          <ScrollReveal>
            <h2 className="sr-only">
              From data sources to real-time algorithmic insights across industries
            </h2>
            <div className="mx-auto max-w-5xl">
              <Image
                src="/rashi-tree-vision.png"
                alt="Define your data sources and topics, process with Rashi, and get algorithmic insights that update in real-time across Tech, Manufacturing, Medicine, Retail, Telco, Media, and Financial Markets"
                width={1200}
                height={675}
                className="h-auto w-full rounded-lg object-contain"
                priority={false}
              />
            </div>
          </ScrollReveal>
        </section>

        {/* Data-to-insights pipeline graphic */}
        <DataToInsightsPipeline />

        {/* Full-width orange-to-pink gradient CTA band */}
        <GradientCtaBand />

        {/* Introducing Rashi - horizontal carousel */}
        <IntroducingRashiCarousel />

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
                  className="font-medium text-[var(--neon-pink)] hover:underline"
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
              <h2 className="text-center text-2xl font-bold leading-snug text-white sm:text-3xl">
                Blogs
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
                {/* Neon robot placeholders - pink, green, blue */}
                {[
                  { color: "border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.4)]", label: "Pink" },
                  { color: "border-green-400 shadow-[0_0_30px_rgba(74,222,128,0.4)]", label: "Green" },
                  { color: "border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)]", label: "Blue" },
                ].map((robot, i) => (
                  <div
                    key={i}
                    className={`flex h-24 w-24 items-center justify-center rounded-xl border-2 bg-black/50 ${robot.color} text-2xl transition-all hover:scale-105`}
                    title={`Neon ${robot.label} robot`}
                  >
                    <span className="text-3xl opacity-80">🤖</span>
                  </div>
                ))}
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
                  className="mt-6 inline-block font-medium text-[var(--neon-pink)] hover:underline"
                >
                  Read More →
                </Link>
                <div className="mt-8">
                  <Link
                    href="/blogs"
                    className="inline-flex rounded-full border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:border-[var(--neon-pink)] hover:bg-white/5"
                  >
                    Read all Blogs
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact us */}
        <section
          id="contact"
          className={`relative ${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER_NARROW} bg-white/[0.02]`}
        >
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-bold leading-snug text-white">Contact us</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-2 text-white/60">
                We frequently check and reply for our inbox for your responses.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-10">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
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
