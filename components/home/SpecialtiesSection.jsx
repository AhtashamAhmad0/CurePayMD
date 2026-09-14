import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { medicalSpecialties, dentalSpecialties } from "@/data/specialties";

export default function SpecialtiesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Specialties We Support"
            title="Billing knowledge across medical and dental specialties"
            className="max-w-xl"
          />
          <Button href="/specialties" variant="ghost" className="lg:mb-1">
            View All Specialties
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="rounded-3xl border border-navy-900/8 bg-sand-50 p-8">
              <h3 className="font-display text-xl text-navy-950">Medical</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {medicalSpecialties.slice(0, 12).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 text-xs font-medium text-navy-900/80"
                  >
                    {s}
                  </span>
                ))}
                <span className="rounded-full bg-navy-900 px-3.5 py-1.5 text-xs font-medium text-white">
                  +{medicalSpecialties.length - 12} more
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="rounded-3xl border border-green-700/15 bg-green-100 p-8">
              <h3 className="font-display text-xl text-navy-950">Dental</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {dentalSpecialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-green-700/20 bg-white px-3.5 py-1.5 text-xs font-medium text-green-900"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
