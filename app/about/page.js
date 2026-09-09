import PageHero from "@/components/shared/PageHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import MissionVision from "@/components/about/MissionVision";
import WhyWeExist from "@/components/about/WhyWeExist";
import HowWeWork from "@/components/about/HowWeWork";
import OurCommitment from "@/components/about/OurCommitment";

export const metadata = {
  title: "About CurePayMD",
  description:
    "Learn about CurePayMD, a dedicated medical and dental billing and revenue cycle management partner for healthcare practices.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CurePayMD"
        title="Your Revenue Cycle. Our Expertise."
        description="We partner with medical and dental practices to manage billing and revenue cycle operations with accuracy, consistency, and transparency."
      />
      <WhoWeAre />
      <MissionVision />
      <WhyWeExist />
      <HowWeWork />
      <OurCommitment />
    </>
  );
}
