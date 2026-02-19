"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CONTAINER, SECTION_PADDING } from "@/lib/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StarfieldBackground from "../components/StarfieldBackground";
import ScrollReveal from "../components/ScrollReveal";

const SOLUTIONS = [
  {
    href: "/solutions/sales-marketing",
    title: "Sales & Marketing",
    description: "Contextual & unique insights into your influencers and their fans. Targeted influencer marketing as the new platform ad spend.",
    image: "/influencer-1.png",
    imageAlt: "Influencer marketing — your influencer is your product",
    accent: "from-lime-400 to-[var(--neon-yellow)]",
  },
  {
    href: "/solutions/product-design",
    title: "Product Design",
    description: "Rashi powers product design with contextual intelligence from user research, feedback, and market data.",
    image: null,
    imageAlt: "",
    accent: "from-[var(--neon-pink)] to-purple-500",
  },
];

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      <StarfieldBackground />
      <Header />

      <main className={`relative z-10 flex-1 ${SECTION_PADDING} ${CONTAINER}`}>
        <ScrollReveal>
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-white/60 transition-colors hover:text-[var(--neon-pink)]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Generative insights for sales, marketing, and product—powered by AI to unlock deeper understanding and faster decisions.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:gap-14">
          {SOLUTIONS.map((sol, i) => (
            <ScrollReveal key={sol.href} delay={i * 0.1}>
              <Link
                href={sol.href}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-[var(--neon-pink)]/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr]">
                  <div className="relative flex min-h-[200px] items-center justify-center bg-black/40 p-8 md:min-h-[280px]">
                    {sol.image ? (
                      <>
                        <Image
                          src={sol.image}
                          alt={sol.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <span className="relative z-10 text-xl font-bold text-white drop-shadow-lg md:text-2xl">
                          Your Influencer is Your Product
                        </span>
                      </>
                    ) : (
                      <span className={`bg-gradient-to-r ${sol.accent} bg-clip-text text-2xl font-bold text-transparent md:text-3xl`}>
                        {sol.title}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <h2 className={`text-2xl font-bold bg-gradient-to-r ${sol.accent} bg-clip-text text-transparent sm:text-3xl`}>
                      {sol.title}
                    </h2>
                    <p className="mt-4 text-white/80">{sol.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-medium text-[var(--neon-pink)] transition-transform group-hover:translate-x-1">
                      Explore
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
