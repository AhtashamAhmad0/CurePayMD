"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyPhone, companyPhoneHref } from "@/data/navigation";
import heroImage from "@/public/images/medical/physicians-hero.png";

const rotatingWords = ["claims resolved", "denials overturned", "collections recovered", "dollars accounted for"];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
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
