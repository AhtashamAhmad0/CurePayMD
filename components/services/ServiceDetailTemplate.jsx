import * as Icons from "lucide-react";
import PracticeCTA from "@/components/shared/PracticeCTA";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ServiceDetailTemplate({ service }) {
  const Icon = Icons[service.icon] || Icons.Activity;

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.name}
        description={service.heroDescription}
      />

      <section className="py-20 lg:py-28">
        <div className="container-px mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-green-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-semibold text-navy-950">
                  What's included
                </h2>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {service.subServices.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-navy-900/8 bg-white px-4 py-3"
                  >
                    <Icons.Check className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                    <span className="text-sm text-navy-900/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-sand-50 p-7">
              <h2 className="text-lg font-semibold text-navy-950">
                Why it matters
              </h2>
              <div className="mt-5 space-y-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5">
                    <Icons.CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                    <span className="text-sm leading-relaxed text-navy-900/80">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-20 lg:py-28">
        <div className="container-px mx-auto max-w-[1400px]">
          <h2 className="text-2xl font-semibold text-navy-950">How it works</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 70}>
                <div className="rounded-2xl border border-navy-900/8 bg-white p-6">
                  <span className="text-sm font-semibold text-green-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-navy-950">
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
      </section>

      <PracticeCTA />
    </>
  );
}