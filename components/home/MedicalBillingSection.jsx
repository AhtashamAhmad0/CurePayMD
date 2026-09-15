"use client";

import { useState } from "react";
import { ClipboardCheck, SendHorizonal, Search, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  { 
    icon: ClipboardCheck, 
    title: "Charge Capture", 
    description: "Encounter data reviewed and converted into accurate charges.",
    highlight: "Phase 01 — Documentation & Entry"
  },
  { 
    icon: Search, 
    title: "Claim Scrubbing", 
    description: "Claims checked against payer rules before they're sent.",
    highlight: "Phase 02 — Error Prevention"
  },
  { 
    icon: SendHorizonal, 
    title: "Submission", 
    description: "Clean claims submitted electronically to payers.",
    highlight: "Phase 03 — Electronic Delivery"
  },
  { 
    icon: RotateCcw, 
    title: "Follow-Up", 
    description: "Outstanding claims tracked and worked until resolved.",
    highlight: "Phase 04 — Resolution & Recovery"
  },
];

export default function MedicalBillingSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const currentStep = steps[activeIndex];
  const ActiveIcon = currentStep.icon;

  return (
    <section className="medical-section bg-white py-20 lg:py-28 overflow-hidden">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
          
          {/* Left Side: Section Info + Interactive Content Changer & Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Medical Billing"
                title="Claims handled with precision, start to finish"
                description="Our medical billing process is built to reduce rejections and keep reimbursement moving — from the first charge entry to the final payment."
              />
            </ScrollReveal>

            {/* Dynamic Content Display controlled by arrows */}
            <ScrollReveal delay={100} className="mt-8 rounded-3xl border border-navy-900/10 bg-sand-50/60 p-7 transition-all duration-300">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-green-700 mb-2">
                {currentStep.highlight}
              </span>
              <h3 className="text-xl font-bold text-navy-950 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-900 text-green-300">
                  <ActiveIcon className="h-4 w-4" />
                </span>
                {currentStep.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {currentStep.description}
              </p>
            </ScrollReveal>

            {/* Left/Right Navigation Controls & Counter */}
            <ScrollReveal delay={150} className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-navy-900/15 bg-white text-navy-950 hover:bg-navy-900 hover:text-white transition-all shadow-sm"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-navy-900/15 bg-white text-navy-950 hover:bg-navy-900 hover:text-white transition-all shadow-sm"
                  aria-label="Next step"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Step indicator dots / counter */}
              <div className="flex items-center gap-2">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? "w-8 bg-green-600" : "w-2.5 bg-navy-900/20 hover:bg-navy-900/40"
                    }`}
                    aria-label={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="mt-8">
              <Button href="/services/medical-billing" variant="outlineDark">
                Explore Medical Billing
              </Button>
            </ScrollReveal>
          </div>

          {/* Right Side: Grid Cards Layout */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === activeIndex;
                return (
                  <ScrollReveal key={step.title} delay={i * 80}>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveIndex(i)}
                      className={`relative w-full text-left h-full rounded-3xl border p-7 cursor-pointer transition-all duration-300 ${
                        isActive
                          ? "border-green-600 bg-white shadow-xl shadow-green-950/5 ring-2 ring-green-600/20 -translate-y-1"
                          : "border-navy-900/8 bg-sand-50/50 hover:border-navy-900/20 hover:bg-white"
                      }`}
                    >
                      <span className="absolute top-6 right-6 font-display text-3xl text-navy-900/10">
                        0{i + 1}
                      </span>
                      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 ${
                        isActive ? "bg-green-600 text-white" : "bg-navy-900 text-green-300"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-6 text-base font-semibold text-navy-950">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">
                        {step.description}
                      </p>
                    </button>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}