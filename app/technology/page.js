import PageHero from "@/components/shared/PageHero";
import TechEcosystem from "@/components/technology/TechEcosystem";
import TechFeatures from "@/components/technology/TechFeatures";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Technology & Workflow",
  description:
    "See how CurePayMD's billing workflow connects with your practice management or EHR system, clearinghouses, and payers.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="A workflow that fits into how your practice already operates"
        description="We connect our billing process to the systems you already use — no platform switch required."
      />
      <TechEcosystem />
      <TechFeatures />
      <section className="bg-white py-16">
        <div className="container-px mx-auto max-w-[1400px] flex flex-col items-center gap-5 text-center">
          <p className="max-w-xl text-base text-ink-500">
            Curious how our workflow would connect with your specific practice
            management system? Let&apos;s talk it through.
          </p>
          <Button href="/contact">Talk to Our Team</Button>
        </div>
      </section>
    </>
  );
}
