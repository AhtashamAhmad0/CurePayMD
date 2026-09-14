import PracticeCTA from "@/components/shared/PracticeCTA";
import * as Icons from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { services } from "@/data/services";

export const metadata = {
  title: "Medical & Dental Billing Services",
  description:
    "Explore CurePayMD's full range of medical and dental billing services, from claims and coding to denial management and A/R follow-up.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Revenue cycle services for medical & dental practices"
        description="Engage one service or the full revenue cycle — each is delivered by a team that knows your specialty and payer mix."
      />

      <section className="bg-sand-50 py-20 lg:py-28">
        <div className="container-px mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = Icons[service.icon] || Icons.Activity;
              return (
                <ScrollReveal key={service.slug} delay={(i % 3) * 90}>
                  <a
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-6 transition-all duration-300 hover:border-green-600/40 hover:shadow-lg hover:shadow-navy-900/5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-green-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-navy-950">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500 flex-1">
                      {service.tagline}
                    </p>
                    <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-green-700 group-hover:underline">
                      Learn More
                    </span>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
      <PracticeCTA />
    </>
  );
}
