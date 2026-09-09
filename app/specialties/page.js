import PageHero from "@/components/shared/PageHero";
import SpecialtiesGrid from "@/components/specialties/SpecialtiesGrid";
import Button from "@/components/ui/Button";
import { medicalSpecialties, dentalSpecialties } from "@/data/specialties";

export const metadata = {
  title: "Specialties We Support",
  description:
    "CurePayMD supports billing for a wide range of medical specialties and dental practice types, from primary care to oral surgery.",
  alternates: { canonical: "/specialties" },
};

export default function SpecialtiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title="Billing expertise across medical and dental specialties"
        description="Every specialty bills differently. Our team brings coding and payer knowledge specific to your practice type."
      />

      <section className="bg-navy-900 py-20 lg:py-24">
        <div className="container-px mx-auto max-w-[1400px]">
          <SpecialtiesGrid title="Medical Specialties" items={medicalSpecialties} tone="dark" />
        </div>
      </section>

      <section className="bg-sand-50 py-20 lg:py-24">
        <div className="container-px mx-auto max-w-[1400px]">
          <SpecialtiesGrid title="Dental Specialties" items={dentalSpecialties} tone="light" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-px mx-auto max-w-[1400px] flex flex-col items-center gap-5 text-center">
          <p className="max-w-xl text-base text-ink-500">
            Don&apos;t see your specialty listed? We work with practices across a
            wide range of specialties — reach out and we&apos;ll discuss your
            specific billing needs.
          </p>
          <Button href="/contact">Talk to Our Team</Button>
        </div>
      </section>
    </>
  );
}
