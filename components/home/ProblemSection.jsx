import { X, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

const problems = [
  "Claims delayed or rejected due to formatting errors",
  "Denials piling up with no consistent follow-up",
  "Front-desk staff stretched thin on billing tasks",
  "Little visibility into what's actually outstanding",
];

const solutions = [
  "Clean claims scrubbed before submission",
  "Denials investigated, corrected, and resubmitted",
  "A dedicated billing team handling the details",
  "Clear, regular reporting on revenue cycle status",
];

export default function ProblemSection() {
  return (
    <section className="bg-sand-50 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="The Problem"
          title="Billing friction quietly costs practices revenue"
          description="Most practices don't lose money in one dramatic moment — it leaks out through delayed claims, unresolved denials, and follow-up that never happens."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="h-full rounded-3xl border border-navy-900/10 bg-white p-8">
              <h3 className="font-display text-xl text-navy-950">Without a dedicated partner</h3>
              <ul className="mt-6 space-y-4">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-700">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="h-full rounded-3xl border border-green-700/15 bg-navy-950 p-8 text-white">
              <h3 className="font-display text-xl text-white">With CurePayMD</h3>
              <ul className="mt-6 space-y-4">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-300">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-white/75">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
