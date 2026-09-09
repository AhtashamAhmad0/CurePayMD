"use client";

import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(faqs.map((f) => f.category)))],
    []
  );

  const filtered = useMemo(
    () => (activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory)),
    [activeCategory]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(0);
            }}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
              activeCategory === cat
                ? "bg-navy-950 border-navy-950 text-white"
                : "border-navy-900/15 text-navy-900/70 hover:border-navy-900/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 divide-y divide-navy-900/8 border-t border-b border-navy-900/8">
        {filtered.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-[15px] sm:text-base font-medium text-navy-950">
                  {faq.question}
                </span>
                <Plus
                  className={`h-4 w-4 shrink-0 text-green-700 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm leading-relaxed text-ink-500 max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
