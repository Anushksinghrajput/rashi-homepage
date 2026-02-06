import Link from "next/link";
import { CONTAINER, SECTION_PADDING } from "@/lib/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StarfieldBackground from "../../components/StarfieldBackground";

export default function ProductDesignPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      <StarfieldBackground />
      <Header />

      <main className={`relative z-10 flex-1 ${SECTION_PADDING} ${CONTAINER}`}>
        <div className="max-w-3xl">
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
            Product Design
          </h1>
          <p className="mt-6 text-lg text-white/60">
            Rashi powers product design with contextual intelligence from user
            research, feedback, and market data. Turn your corpus of data into
            actionable insights for better product decisions.
          </p>
          <div className="mt-10">
            <a
              href="/#waitlist"
              className="btn-gradient inline-flex rounded-full px-6 py-3 font-medium text-white"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
