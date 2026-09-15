"use client";

import { useState, useEffect } from "react";
<<<<<<< HEAD
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyPhone, companyPhoneHref } from "@/data/navigation";

// Words to cycle through dynamically on the second line
const rotatingWords = [
  "claims resolved",
  "denials overturned",
  "collections recovered",
  "dollars accounted for",
];
=======
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyPhone, companyPhoneHref } from "@/data/navigation";
import heroImage from "@/public/images/medical/physicians-hero.png";

const rotatingWords = ["claims resolved", "denials overturned", "collections recovered", "dollars accounted for"];
>>>>>>> ali

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
<<<<<<< HEAD

  // Handle the word-changing animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Fade out
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true); // Fade in
      }, 300); // Match this with transition duration
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-36 text-center">
      {/* Ledger-line texture: subtle horizontal rules */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 48px)",
        }}
        aria-hidden="true"
      />

      {/* Balanced, centered soft background glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(95,162,87,0.5), transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative container-px mx-auto max-w-4xl flex flex-col items-center">
        

        {/* Centered Main Heading with Static First Line and Dynamic Changing Second Line */}
        <h1 className="font-display text-[2.5rem] leading-[1.2] text-white sm:text-5xl lg:text-[4rem] max-w-3xl">
          <span className="block font-normal">Every claim followed through,</span>
          <span className="block mt-2 font-semibold text-green-400 min-h-[1.2em]">
            <span
              className={`inline-block transition-all duration-300 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              {rotatingWords[currentWordIndex]}
            </span>
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
          CurePayMD handles the billing complexity behind your practice 
          coding, submission, denials, and full-cycle collections.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg" variant="primary">
            Get a free billing assessment
          </Button>
          <a
            href={companyPhoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors"
          >
            Or call {companyPhone}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
=======
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timeout;
    const interval = setInterval(() => {
      setIsVisible(false);
      timeout = setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);
    }, 3000);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, []);
  return (
    <section className="clinical-hero">
      <div className="clinical-hero-image">
        <Image src={heroImage} alt="Two physicians reviewing a chart together in a medical practice" fill preload sizes="100vw" className="object-cover" />
      </div>
      <div className="clinical-hero-shade" aria-hidden="true" />
      <div className="clinical-hero-inner container-px mx-auto max-w-[1400px]">
        <div className="clinical-hero-copy">
          <p className="clinical-eyebrow">MEDICAL & DENTAL BILLING. PERSONAL ATTENTION.</p>
          <h1>Behind your practice.<br />Beside you, <em>always.</em></h1>
          <p className="clinical-description">You give your patients your full attention. We give your billing the same care — so you can focus on what you do best.</p>
          <div className="clinical-actions">
            <Button href="/contact" size="lg">Get a free billing assessment</Button>
            <a href={companyPhoneHref}>Or call {companyPhone}<ArrowUpRight size={15} /></a>
          </div>
          <div className="clinical-followthrough"><Check size={17} /><p>Every claim followed through.<br /><span className={`rotating-word ${isVisible ? "is-visible" : ""}`}>{rotatingWords[currentWordIndex]}.</span></p></div>
        </div>
        <div className="clinical-hero-bottom"><span>Medical billing <span>/</span> Dental billing <span>/</span> Revenue cycle management</span><span>One team. Every step.</span></div>
      </div>
    </section>
  );
}
>>>>>>> ali
