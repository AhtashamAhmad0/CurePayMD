import Link from "next/link";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { services, whyCurePayMD } from "@/data/services";

export default function ServicesSection() {
  const [featured, ...rest] = services;
  const FeaturedIcon = Icons[featured.icon] || Icons.Activity;

  return (
    <section className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Every part of your revenue cycle. Taken care of."
          />
          <p className="max-w-sm text-sm leading-relaxed text-ink-500">
            Five focused service lines, one coordinated team. Bring us the
            whole revenue cycle, or the one piece that's causing the most pain.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-2">
            <Link
              href={`/services/${featured.slug}`}
              className="group flex h-full flex-col justify-between rounded-2xl bg-navy-950 p-8 transition-colors duration-300 hover:bg-navy-900 sm:p-10"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-green-300">
                  <FeaturedIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 max-w-md text-2xl font-semibold text-white sm:text-3xl">
                  {featured.name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                  {featured.tagline}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {featured.subServices.slice(0, 5).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded-full px-3 py-1 text-xs font-semibold text-green-300">
                  +{featured.subServices.length - 5} more
                </span>
              </div>

              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-green-300">
                Explore Medical Billing & RCM
                <Icons.ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </ScrollReveal>

          {rest.map((service, i) => {
            const Icon = Icons[service.icon] || Icons.Activity;
            return (
              <ScrollReveal key={service.slug} delay={(i + 1) * 60}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-6 transition-all duration-300 hover:border-green-600/40 hover:shadow-lg hover:shadow-navy-900/5 sm:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-50 text-navy-950">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-navy-950">
                    {service.shortName}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {service.tagline}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.subServices.slice(0, 2).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-sand-50 px-2.5 py-1 text-[11px] text-ink-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-green-700 group-hover:underline">
                    Explore service
                    <Icons.ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={240}>
          <div className="mt-5 rounded-2xl bg-sand-50 px-6 py-8 sm:px-10 sm:py-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyCurePayMD.slice(0, 6).map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <Icons.CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-green-700" />
                  <div>
                    <p className="text-sm font-semibold text-navy-950">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}