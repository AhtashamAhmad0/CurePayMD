import { Zap, FileSearch, BarChart4, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

const features = [
  { icon: Zap, title: "Fast claim turnaround", description: "Claims are scrubbed and submitted quickly after charge entry to reduce delays." },
  { icon: FileSearch, title: "Rules-based claim scrubbing", description: "Payer-specific rules are checked before submission to catch errors early." },
  { icon: BarChart4, title: "Structured reporting", description: "Consistent reporting on claims, denials, and A/R keeps your practice informed." },
  { icon: Layers, title: "Works with your stack", description: "We adapt to the practice management and EHR systems you already use." },
];

export default function TechFeatures() {
  return (
    <section className="bg-navy-950 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="How It Works"
          title="A workflow designed to move claims quickly and accurately"
          tone="dark"
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 90}>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-green-300">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{f.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
