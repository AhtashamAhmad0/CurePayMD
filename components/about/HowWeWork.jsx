import { Users, MessageCircle, ShieldCheck, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

const items = [
  { icon: Users, title: "Dedicated account team", description: "A consistent team that learns your practice's workflow and payer mix." },
  { icon: MessageCircle, title: "Open communication", description: "Regular check-ins and clear reporting rather than a black box." },
  { icon: ShieldCheck, title: "Careful data handling", description: "Patient and billing data handled with HIPAA-minded practices." },
  { icon: TrendingUp, title: "Continuous follow-up", description: "Claims and denials worked consistently, not just once and forgotten." },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="How We Work" title="A process built on consistency and communication" align="center" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-navy-900/8 bg-sand-50 p-6 text-center sm:text-left">
                <span className="mx-auto sm:mx-0 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-green-300">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-sm font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
