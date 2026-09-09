import { Cable, DatabaseZap, MonitorSmartphone, Workflow } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const nodes = [
  { icon: MonitorSmartphone, label: "Your PM / EHR System" },
  { icon: Workflow, label: "CurePayMD Billing Workflow" },
  { icon: Cable, label: "Clearinghouse & Payers" },
  { icon: DatabaseZap, label: "Reporting & Reconciliation" },
];

export default function TechnologySection() {
  return (
    <section className="bg-sand-50 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Technology"
              title="Working within the systems you already use"
              description="We adapt our workflow to your existing practice management or EHR system rather than forcing a platform switch, connecting cleanly to clearinghouses and payers along the way."
            />
            <Button href="/technology" variant="outlineDark" className="mt-8">
              See How It Works
            </Button>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {nodes.map((node, i) => (
                <ScrollReveal key={node.label} delay={i * 90}>
                  <div className="flex items-center gap-4 rounded-2xl border border-navy-900/8 bg-white p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-green-300">
                      <node.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold uppercase tracking-wide text-green-700">
                        Step {i + 1}
                      </p>
                      <p className="text-sm font-medium text-navy-950 mt-0.5">
                        {node.label}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
