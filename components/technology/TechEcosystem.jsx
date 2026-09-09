import { MonitorSmartphone, Workflow, Cable, DatabaseZap } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const nodes = [
  { icon: MonitorSmartphone, title: "Your Practice Systems", description: "We work within your existing PM or EHR platform." },
  { icon: Workflow, title: "CurePayMD Workflow", description: "Claims are reviewed, scrubbed, and routed through our billing process." },
  { icon: Cable, title: "Clearinghouse & Payers", description: "Claims are submitted electronically to clearinghouses and payers." },
  { icon: DatabaseZap, title: "Reporting Back to You", description: "Status, denials, and payments are reported back on a regular cadence." },
];

export default function TechEcosystem() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-navy-900/10" />
          {nodes.map((node, i) => (
            <ScrollReveal key={node.title} delay={i * 100}>
              <div className="relative flex flex-col items-start lg:items-center lg:text-center rounded-2xl border border-navy-900/8 bg-sand-50 p-6 h-full">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-green-300">
                  <node.icon className="h-6 w-6" />
                </span>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-green-700">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-navy-950">{node.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-500">{node.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
