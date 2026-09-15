"use client";

import { Target, Users2, LineChart, Handshake, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import DepthCarousel from "@/components/shared/DepthCarousel";

const reasons = [
  {
    icon: Target,
    title: "Specialty-aware billing",
    description:
      "We tailor our approach to your specialty's coding patterns, payer mix, and documentation needs.",
    badge: "01 / Precision",
  },
  {
    icon: Users2,
    title: "A dedicated team, not a queue",
    description:
      "Your practice works with a consistent team that understands your workflow, not a rotating call center.",
    badge: "02 / Dedicated",
  },
  {
    icon: LineChart,
    title: "Transparent reporting",
    description:
      "Regular reporting keeps you informed on claims, denials, and A/R — no guessing where things stand.",
    badge: "03 / Clarity",
  },
  {
    icon: Handshake,
    title: "A true extension of your front office",
    description:
      "We work as part of your practice, coordinating closely with your existing staff and systems.",
    badge: "04 / Integration",
  },
];

const carouselItems = reasons.map((reason) => {
  const Icon = reason.icon;
  return {
    alt: reason.title,
    content: (
      <>
        <div>
          <div className="mb-6 flex items-center justify-between">
            <span className="rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-green-700">
              {reason.badge}
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-900">
              <Icon className="h-5 w-5" />
            </span>
          </div>

          <h3 className="text-lg font-bold text-navy-950">{reason.title}</h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {reason.description}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-400">
          <span>Learn more</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </>
    ),
  };
});

export default function WhyCurePayMD() {
  return (
<<<<<<< HEAD
    <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
=======
    <section className="why-section relative overflow-hidden bg-navy-950 py-24 lg:py-32">
>>>>>>> ali
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-32 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

      <div className="relative container-px mx-auto max-w-[1400px]">
        {/* Centered Heading */}
<<<<<<< HEAD
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-24">
=======
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-12">
>>>>>>> ali
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why CurePayMD"
              title="A billing partner your practice can actually rely on"
              tone="dark"
              align="center"
            />
          </ScrollReveal>
        </div>

        {/* Depth Carousel */}
        <ScrollReveal>
<<<<<<< HEAD
          <div style={{ height: "500px", position: "relative" }}>
            <DepthCarousel
              items={carouselItems}
              depth={220}
              spread={90}
              tilt={22}
              tiltDirection="right"
              perspective={1400}
              visibleCards={4}
              falloff={0.2}
              blur={6}
              autoplay={false}
              loop
              cardWidth={300}
              cardHeight={380}
=======
          <div style={{ height: "390px", position: "relative" }}>
            <DepthCarousel
              items={carouselItems}
              depth={60}
              spread={330}
              tilt={0}
              tiltDirection="right"
              perspective={1400}
              visibleCards={4}
              falloff={0.15}
              blur={0}
              autoplay={false}
              loop
              cardWidth={300}
              cardHeight={310}
>>>>>>> ali
              radius={18}
              tint="#05060a"
              duration={700}
              ease="power3.out"
              autoplayDelay={3200}
              showControls
              showIndicators
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}