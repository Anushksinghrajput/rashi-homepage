"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white placeholder:text-white/40 focus:border-[var(--neon-pink)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-pink)] sm:max-w-xs"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gradient rounded-full px-6 py-3 font-medium text-white disabled:opacity-60"
      >
        {status === "sending" ? "Joining…" : "Join Waitlist"}
      </button>
      {status === "success" && (
        <span className="text-sm text-[var(--neon-pink)] sm:absolute sm:top-full sm:mt-2">You&apos;re on the list!</span>
      )}
      {status === "error" && (
        <span className="text-sm text-red-400 sm:absolute sm:top-full sm:mt-2">Please try again.</span>
      )}
    </form>
  );
}
