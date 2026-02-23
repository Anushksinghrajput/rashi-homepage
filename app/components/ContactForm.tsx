"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-white/90">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[var(--neon-pink)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-pink)] sm:py-3.5"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-white/90">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[var(--neon-pink)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-pink)] sm:py-3.5"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-white/90">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[var(--neon-pink)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-pink)] sm:py-3.5"
          placeholder="Your message"
        />
      </div>
      {status === "success" && (
        <p className="text-sm text-[var(--neon-pink)]">Thank you! We&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="contact-send-btn w-full rounded-lg px-6 py-3.5 font-semibold disabled:opacity-60 sm:py-4"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
