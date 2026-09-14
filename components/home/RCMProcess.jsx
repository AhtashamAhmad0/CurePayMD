import { ClipboardList, Settings2, ActivitySquare, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  {
    icon: ClipboardList,
    title: "Assessment",
    description: "We review your current billing workflow, systems, and payer mix.",
  },
  {
    icon: Settings2,
    title: "Implementation",
    description: "Processes are set up across eligibility, coding, billing, and posting.",
  },
  {
    icon: ActivitySquare,
    title: "Active Management",
    description: "Claims, denials, and A/R are worked on a consistent, defined cadence.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Regular reporting keeps your practice informed on performance.",
  },
];

export default function RCMProcess() {
  return (
    <section className="process-section bg-sand-50 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Our Process"
          title="How we take on your revenue cycle"
          description="A structured onboarding and management process designed to bring order to your billing operation from day one."
        />

        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-navy-900/10" />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100}>
                <div className="relative">
                  <div className="flex items-center gap-4 lg:block">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-lg text-green-700 lg:hidden">
                      Step {i + 1}
                    </span>
                  </div>
                  <p className="hidden lg:block mt-5 text-xs font-semibold uppercase tracking-wide text-green-700">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-3 lg:mt-2 text-base font-semibold text-navy-950">
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
