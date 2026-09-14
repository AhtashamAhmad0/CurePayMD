import { Lock, FileLock2, Eye, ShieldCheck, UserCheck, ServerCog } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const practices = [
  { icon: Lock, title: "Restricted access", description: "Patient and billing data is accessible only to team members actively working on your account." },
  { icon: FileLock2, title: "HIPAA-minded handling", description: "Our processes are designed with HIPAA principles around protected health information in mind." },
  { icon: Eye, title: "Careful data transmission", description: "Data is handled with care as it moves between your systems, our workflow, and payers." },
  { icon: UserCheck, title: "Defined team roles", description: "Team members have clearly defined roles and responsibilities around data access." },
  { icon: ServerCog, title: "Ongoing process review", description: "We continually review our internal handling practices as our workflow evolves." },
  { icon: ShieldCheck, title: "Confidentiality commitment", description: "Confidentiality of patient and practice information is treated as a core responsibility." },
];

export default function SecurityPractices() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((p, i) => (
            <ScrollReveal key={p.title} delay={(i % 3) * 90}>
              <div className="h-full rounded-2xl border border-navy-900/8 bg-sand-50 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-green-300">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-sm font-semibold text-navy-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
