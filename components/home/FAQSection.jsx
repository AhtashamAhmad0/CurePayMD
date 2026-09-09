"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  const preview = faqs.slice(0, 6);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions about working with CurePayMD"
            />
            <Button href="/faq" variant="outlineDark" className="mt-8">
              View All FAQs
            </Button>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-navy-900/8 border-t border-b border-navy-900/8">
              {preview.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-[15px] font-medium text-navy-950">
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
                        <p className="pb-5 text-sm leading-relaxed text-ink-500 max-w-xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
