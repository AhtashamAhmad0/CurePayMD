import Link from "next/link";
import * as Icons from "lucide-react";
import PracticeCTA from "@/components/shared/PracticeCTA";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { services, servicesHeroTagline } from "@/data/services";

export const metadata = {
  title: "Medical & Dental Billing Services",
  description:
    "Explore CurePayMD's medical billing & RCM, medical coding, credentialing, dental billing, and specialty billing services.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Revenue cycle services for medical & dental practices"
        description={servicesHeroTagline}
      />

      <section className="bg-sand-50 py-20 lg:py-28">
        <div className="container-px mx-auto max-w-[1400px] space-y-5">
          {services.map((service, i) => {
            const Icon = Icons[service.icon] || Icons.Activity;
            const reversed = i % 2 === 1;
            return (
              <ScrollReveal key={service.slug}>
                <div className="grid grid-cols-1 gap-8 rounded-2xl border border-navy-900/8 bg-white p-8 lg:grid-cols-5 lg:gap-10 lg:p-12">
                  <div
                    className={`flex flex-col justify-center lg:col-span-2 ${
                      reversed ? "lg:order-2" : ""
                    }`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-green-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="mt-5 text-2xl font-semibold text-navy-950">
                      {service.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                      {service.heroDescription}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-green-700 hover:underline"
                    >
                      See how it works
                      <Icons.ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div
                    className={`flex flex-wrap content-start gap-2 lg:col-span-3 ${
                      reversed ? "lg:order-1" : ""
                    }`}
                  >
                    {service.subServices.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-sand-50 px-3.5 py-2 text-xs font-medium text-navy-900/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
      <PracticeCTA />
    </>
  );
}