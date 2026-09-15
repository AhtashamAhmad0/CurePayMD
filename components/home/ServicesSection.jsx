<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> ali
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { services } from "@/data/services";
<<<<<<< HEAD

export default function ServicesSection() {
  return (
    <section className="bg-navy-950 py-24 lg:py-32 relative overflow-hidden">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-px mx-auto max-w-[1400px]">
        
        {/* Header Block */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16">
          <ScrollReveal className="max-w-xl">
            <SectionHeading
              eyebrow="What We Do"
              title="Revenue cycle services built for medical & dental practices"
              tone="dark"
            />
          </ScrollReveal>
          <ScrollReveal delay={100} className="max-w-sm">
            <p className="text-sm leading-relaxed text-white/60 lg:text-right">
              Ten focused services, one coordinated team — engage a single
              service or the full revenue cycle seamlessly.
            </p>
          </ScrollReveal>
        </div>

        {/* Modern Interactive Services Cards Grid with Light Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, i) => {
            const Icon = Icons[service.icon] || Icons.Activity;
            return (
              <ScrollReveal key={service.slug} delay={(i % 5) * 60} className="h-full">
                <a
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col justify-between gap-8 rounded-3xl bg-white p-7 shadow-lg transition-all duration-300 hover:bg-slate-50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1 border border-white/20"
                >
                  {/* Top Row: Icon + Subtle Hover Arrow */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-600">
                      <Icons.ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>

                  {/* Content Block */}
                  <div>
                    <h3 className="text-base font-bold text-navy-950 leading-snug group-hover:text-green-700 transition-colors duration-300">
                      {service.shortName}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                      {service.tagline}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
=======
export default function ServicesSection() {
  return (
    <section className="services-section py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="01 / What we do" title="Every part of your revenue cycle. Taken care of." />
          <p className="max-w-sm text-sm leading-relaxed text-ink-500">Ten focused services, one coordinated team. Get support where you need it, or let us manage the complete revenue cycle.</p>
        </div>
        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = Icons[service.icon] || Icons.Activity;
            return <ScrollReveal key={service.slug} delay={(i % 5) * 50} className="h-full"><Link href={`/services/${service.slug}`} className="service-tile"><div className="flex items-start justify-between"><Icon size={27} strokeWidth={1.4} /><span className="service-number">{String(i + 1).padStart(2, "0")}</span></div><h3>{service.shortName}</h3><p>{service.tagline}</p><span className="service-link">Explore service<Icons.ArrowUpRight size={17} /></span></Link></ScrollReveal>;
          })}
        </div>
      </div>
    </section>
  );
}
>>>>>>> ali
