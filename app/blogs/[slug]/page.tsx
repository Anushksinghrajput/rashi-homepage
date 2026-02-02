import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StarfieldBackground from "../../components/StarfieldBackground";

const posts: Record<
  string,
  { title: string; date: string; content: string }
> = {
  "where-chatgpt-composes-rashi-analyzes": {
    title:
      "Where ChatGPT is composing information, Rashi is analyzing information.",
    date: "2025-01-15",
    content: `
Deep Learning Neural Networks have exploded in breadth and depth, with apps emerging every week in this "generative AI" trend. Yet, we argue that these sequencer models excel at generating natural language but are poor choices as tools for contextual analytic insights.

Their analytic limitations will always make them best used as personal information assistants. Large Language Models like GPT-4 have a fundamental limitation in the way they compose outputs—they are optimized for fluency and coherence, not for rigorous, source-grounded analysis.

Rashi takes a different approach. Our algorithms are designed from the ground up for analytic insight: reducing research time and costs while improving accuracy and speed. By reducing human bias and generating a holistic view from various sources, our software helps analysts discover more insights and patterns to improve the quality of their analysis and make higher quality, data-driven decisions.

Powered by advanced Natural Language Processing algorithms, Rashi deciphers the language of data, identifying patterns, trends, and associations, and generating insights that matter for your business.
    `.trim(),
  },
  "algorithmic-contextualizations": {
    title: "Algorithmic Contextualizations and the future of insight.",
    date: "2025-01-10",
    content: `
Where LLMs are predictive pattern-matchers, our algorithms are trained to extract low-level signal that connect dots with precision.

Low-code dashboards to build contextual inferences and analytics of the topics you need to decode the truth. Fast, easily shared insights with real-time evolution and deep sources, custom built for your analysis needs.

Rashi's approach to algorithmic contextualization enables analysts to slice data and curate inference any which way, decoding latent narrative intelligences. Subscribe to your inferences and stay ahead of topic evolution and unknown unknowns.
    `.trim(),
  },
  "enterprise-decision-science": {
    title: "Enterprise Decision-Science: Decode how narratives evolve.",
    date: "2025-01-05",
    content: `
Run an instant and highly bespoke inference on the expanse of TikTok or YouTube, and build bespoke insights that will re-contextualize your most pressing decisions for strategy.

Decode how narratives evolve, and contextualize narratives for a new class of deep algorithmic insights. Our algorithms reduce research time and costs while improving accuracy and speed, helping analysts discover more insights and patterns for higher quality, data-driven decisions.

Powered by advanced Natural Language Processing, Rashi deciphers the language of data, identifying patterns, trends, and associations—delivering enterprise decision-science at scale.
    `.trim(),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) notFound();

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      <StarfieldBackground />
      <Header />

      <main className="relative z-10 flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-2xl">
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-2 text-white/60 hover:text-[var(--neon-pink)]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Blog Archive
          </Link>
          <time
            dateTime={post.date}
            className="text-sm text-white/50"
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-8 max-w-none text-white/90">
            {post.content.split("\n\n").map((para, i) => (
              <p key={i} className="mb-4 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <Link
            href="/blogs"
            className="mt-10 inline-block font-medium text-[var(--neon-pink)] hover:underline"
          >
            ← Read all Blogs
          </Link>
        </article>
      </main>

      <Footer />
    </div>
  );
}
