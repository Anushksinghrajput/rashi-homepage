"use client";

import { CONTAINER, SECTION_PADDING_TIGHT } from "@/lib/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StarfieldBackground from "../components/StarfieldBackground";
import BlogArchiveCard from "../components/BlogArchiveCard";

const blogPosts = [
  {
    slug: "where-chatgpt-composes-rashi-analyzes",
    title:
      "Where ChatGPT is composing information, Rashi is analyzing information.",
    excerpt:
      "Deep Learning Neural Networks have exploded in breadth and depth, with apps emerging every week in this \"generative AI\" trend. Yet, we argue that these sequencer models excel at generating natural language but are poor choices as tools for contextual analytic insights. Their analytic limitations will always make them best used as personal information assistants.",
    date: "2025-01-15",
  },
  {
    slug: "algorithmic-contextualizations",
    title: "Algorithmic Contextualizations and the future of insight.",
    excerpt:
      "Where LLMs are predictive pattern-matchers, our algorithms are trained to extract low-level signal that connect dots with precision. Low-code dashboards to build contextual inferences and analytics of the topics you need to decode the truth.",
    date: "2025-01-10",
  },
  {
    slug: "enterprise-decision-science",
    title: "Enterprise Decision-Science: Decode how narratives evolve.",
    excerpt:
      "Run an instant and highly bespoke inference on the expanse of TikTok or YouTube, and build bespoke insights that will re-contextualize your most pressing decisions for strategy. Deep algorithmic insights for a new class of analysis.",
    date: "2025-01-05",
  },
];

const neonVariants: ("pink" | "green" | "blue")[] = ["pink", "green", "blue"];

export default function BlogArchivePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      <StarfieldBackground />
      <Header />

      <main className="relative z-10 flex-1">
        <div className={`${SECTION_PADDING_TIGHT} ${CONTAINER}`}>
          <header className="mb-10 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl">
              Blog Archive
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
              Insights on how Rashi&apos;s AI is solving analytic problems and
              building more profound insights for leaders.
            </p>
          </header>

          {/* Responsive grid: 1 col mobile, 2 tablet, 3 desktop; even spacing */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8">
            {blogPosts.map((post, index) => (
              <BlogArchiveCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                neonVariant={neonVariants[index % neonVariants.length]}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
