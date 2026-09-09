"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const practiceTypes = ["Medical Practice", "Dental Practice", "Both / Multi-Specialty", "Other"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-green-700/20 bg-green-100 p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="font-display mt-5 text-2xl text-navy-950">Thank you</h3>
        <p className="mt-3 text-sm text-ink-700 max-w-sm mx-auto">
          We&apos;ve received your request. A member of our team will reach out
          shortly to schedule your free billing assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-navy-900/10 bg-white p-6 sm:p-8 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-ink-500 mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm text-navy-950 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 transition"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="practice" className="block text-xs font-semibold uppercase tracking-wide text-ink-500 mb-2">
            Practice Name
          </label>
          <input
            id="practice"
            name="practice"
            type="text"
            required
            className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm text-navy-950 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 transition"
            placeholder="Riverside Family Medicine"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-ink-500 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm text-navy-950 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 transition"
            placeholder="jane@practice.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wide text-ink-500 mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm text-navy-950 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 transition"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="type" className="block text-xs font-semibold uppercase tracking-wide text-ink-500 mb-2">
          Practice Type
        </label>
        <select
          id="type"
          name="type"
          className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm text-navy-950 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 transition bg-white"
        >
          {practiceTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-ink-500 mb-2">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm text-navy-950 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 transition resize-none"
          placeholder="Tell us a bit about your current billing process..."
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-700 sm:w-auto"
      >
        Request Free Assessment
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
