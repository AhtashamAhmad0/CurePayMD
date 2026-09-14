import Link from "next/link";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { services } from "@/data/services";
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
