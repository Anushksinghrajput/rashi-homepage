import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StarfieldBackground from "../components/StarfieldBackground";

const blogPosts = [
  {
    slug: "where-chatgpt-composes-rashi-analyzes",
    title:
      "Where ChatGPT is composing information, Rashi is analyzing information.",
    excerpt:
      "Deep Learning Neural Networks have exploded in breadth and depth, with apps emerging every week in this \"generative AI\" trend. Yet, we argue that these sequencer models excel at generating natural language but are poor choices as tools for contextual analytic insights. Their analytic limitations will always make them best used as personal information assistants.",
    date: "2025-01-15",
  },
];

export default function BlogsPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      <StarfieldBackground />
      <Header />

      <main className="relative z-10 flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
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
            Home
          </Link>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Blogs
          </h1>
          <p className="mt-4 text-white/60">
            Insights on how Rashi&apos;s AI is solving analytic problems and
            building more profound insights for leaders.
          </p>

          <div className="mt-12 space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20"
              >
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
                <h2 className="mt-2 text-xl font-semibold text-white">
                  {post.title}
                </h2>
                <p className="mt-3 text-white/60">{post.excerpt}</p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="mt-4 inline-block font-medium text-[var(--neon-pink)] hover:underline"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
