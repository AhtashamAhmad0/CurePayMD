<<<<<<< HEAD
=======
import PracticeCTA from "@/components/shared/PracticeCTA";
>>>>>>> ali
import * as Icons from "lucide-react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const bgVariants = [
  { section: "bg-sand-50", process: "bg-white", benefits: "bg-navy-950" },
  { section: "bg-green-100", process: "bg-sand-50", benefits: "bg-navy-900" },
];

export function ServiceHero({ service, variantIndex = 0 }) {
  const Icon = Icons[service.icon] || Icons.Activity;
  const dark = variantIndex % 2 === 0;

  return (
    <section
<<<<<<< HEAD
      className={`relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24 ${
=======
      className={`service-page-hero relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24 ${
>>>>>>> ali
        dark ? "bg-navy-950" : "bg-gradient-to-br from-navy-950 to-green-900"
      }`}
    >
      <div className="absolute inset-0 bg-dot-grid opacity-25" aria-hidden="true" />
      <div className="relative container-px mx-auto max-w-[1400px] grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/15 text-green-300">
            <Icon className="h-6 w-6" />
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
            {service.shortName}
          </p>
          <h1 className="font-display mt-4 max-w-2xl text-4xl sm:text-5xl leading-[1.08] text-balance text-white">
            {service.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/65">
            {service.heroDescription}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Get a Free Billing Assessment
            </Button>
            <Button href="/services" variant="outline" size="lg" icon={false}>
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceOverview({ service, variantIndex = 0 }) {
  const bg = bgVariants[variantIndex % bgVariants.length].section;
  return (
    <section className={`${bg} py-20 lg:py-24`}>
      <div className="container-px mx-auto max-w-[1400px] grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
            Overview
          </p>
          <h2 className="font-display mt-4 text-3xl text-navy-950 text-balance">
            {service.description}
          </h2>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.highlights.map((h) => (
              <div key={h} className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-white p-4">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-green-700" />
                <span className="text-sm text-ink-700">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceProcess({ service, variantIndex = 0 }) {
  const bg = bgVariants[variantIndex % bgVariants.length].process;
  return (
    <section className={`${bg} py-20 lg:py-24`}>
      <div className="container-px mx-auto max-w-[1400px]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
          Our Process
        </p>
        <h2 className="font-display mt-4 max-w-xl text-3xl text-navy-950 text-balance">
          How {service.shortName.toLowerCase()} works with CurePayMD
        </h2>

        <div className="relative mt-14">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-navy-900/10" />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {service.process.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100}>
                <div>
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-white font-display text-sm">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-navy-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceBenefits({ service, variantIndex = 0 }) {
  const bg = bgVariants[variantIndex % bgVariants.length].benefits;
  return (
    <section className={`${bg} py-20 lg:py-24`}>
      <div className="container-px mx-auto max-w-[1400px]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
          Benefits
        </p>
        <h2 className="font-display mt-4 max-w-xl text-3xl text-white text-balance">
          What practices gain from our {service.shortName.toLowerCase()} service
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {service.benefits.map((b, i) => (
            <ScrollReveal key={b} delay={i * 90}>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-green-300" />
                <span className="text-sm leading-relaxed text-white/75">{b}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCTA({ service }) {
<<<<<<< HEAD
  return (
    <section className="bg-white py-20">
      <div className="container-px mx-auto max-w-[900px] text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-navy-950 text-balance">
          Ready to simplify {service.shortName.toLowerCase()} for your practice?
        </h2>
        <p className="mt-5 text-base text-ink-500 max-w-lg mx-auto">
          Get a free billing assessment and see exactly where CurePayMD can
          help.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact" size="lg">
            Get a Free Billing Assessment
          </Button>
        </div>
      </div>
    </section>
  );
=======
  return <PracticeCTA title={`Ready to simplify ${service.shortName.toLowerCase()} for your practice?`} description="Get a free billing assessment and see exactly where CurePayMD can help." />;
>>>>>>> ali
}
