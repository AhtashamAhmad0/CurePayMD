import PageHero from "@/components/shared/PageHero";
import TechEcosystem from "@/components/technology/TechEcosystem";
import TechFeatures from "@/components/technology/TechFeatures";
import PracticeCTA from "@/components/shared/PracticeCTA";

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
      <PracticeCTA title="Let’s make your systems work together." description="Curious how our workflow would connect with your specific practice management system? Let's talk it through." buttonLabel="Talk to our team" />
    </>
  );
}
