import { TrendingUp, FileWarning, Clock3, Wallet2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

const metrics = [
  { icon: Wallet2, label: "Payments Posted", value: "Daily", note: "Reconciled against deposits" },
  { icon: FileWarning, label: "Denials Tracked", value: "By Reason", note: "Root cause identified" },
  { icon: Clock3, label: "A/R Aging", value: "By Bucket", note: "Prioritized follow-up" },
  { icon: TrendingUp, label: "Claim Trend", value: "Illustrative", note: "Sample visualization" },
];

export default function RevenueDashboard() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      <div className="absolute inset-0 bg-dot-grid opacity-25" aria-hidden="true" />
      <div className="relative container-px mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Visibility"
          title="Your revenue cycle, visible in one place"
          description="Illustrative view of the kind of reporting your practice receives — claims, denials, aging A/R, and payment activity, tracked consistently."
          tone="dark"
        />

        <ScrollReveal delay={100}>
          <div className="mt-14 rounded-[2rem] border border-white/10 bg-navy-900/70 p-6 sm:p-8 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/45">
                  Sample Revenue Overview
                </p>
                <p className="font-display text-2xl text-white mt-1">
                  Illustrative Data Only
                </p>
              </div>
              <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-300">
                For demonstration
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <m.icon className="h-5 w-5 text-green-400" />
                  <p className="mt-4 text-sm text-white/55">{m.label}</p>
                  <p className="mt-1 font-display text-xl text-white">{m.value}</p>
                  <p className="mt-1 text-xs text-white/40">{m.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-end gap-1.5 h-32">
              {[30, 45, 38, 52, 60, 48, 66, 58, 74, 70, 82, 78].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-navy-700 to-green-500/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
