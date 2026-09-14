import { Lock, ShieldCheck, FileLock2, Eye } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const points = [
  { icon: Lock, title: "Access controls", description: "Data access is limited to team members working on your account." },
  { icon: FileLock2, title: "HIPAA-minded handling", description: "Patient and billing data is handled with HIPAA principles in mind." },
  { icon: Eye, title: "Careful data practices", description: "Information is transmitted and stored with care throughout our workflow." },
  { icon: ShieldCheck, title: "Ongoing diligence", description: "We continually review our internal practices around data handling." },
];

export default function SecuritySection() {
  return (
    <section className="security-section relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      <div
        className="absolute top-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 opacity-20 blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, rgba(74,143,69,0.6), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container-px mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Security & Compliance"
          title="Patient data handled with the care it requires"
          tone="dark"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/15 text-green-300">
                  <point.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-sm font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/55">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/security-compliance" variant="outline">
            Read Our Security Approach
          </Button>
        </div>
      </div>
    </section>
  );
}
