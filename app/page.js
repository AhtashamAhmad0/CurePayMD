import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ProblemSection from "@/components/home/ProblemSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import MedicalBillingSection from "@/components/home/MedicalBillingSection";
import DentalBillingSection from "@/components/home/DentalBillingSection";
import WhyCurePayMD from "@/components/home/WhyCurePayMD";
import RCMProcess from "@/components/home/RCMProcess";
import SpecialtiesSection from "@/components/home/SpecialtiesSection";
import RevenueDashboard from "@/components/home/RevenueDashboard";
import TechnologySection from "@/components/home/TechnologySection";
import SecuritySection from "@/components/home/SecuritySection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: "Medical & Dental Billing and Revenue Cycle Management",
  description:
    "CurePayMD helps medical and dental practices reduce denials, speed up collections, and simplify revenue cycle management with a dedicated billing team.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      {/* <ProblemSection /> */}
      <AboutPreview />
      <ServicesSection />
      <MedicalBillingSection />
      <DentalBillingSection />
      <WhyCurePayMD />
      <RCMProcess />
      {/* <SpecialtiesSection /> */}
      <RevenueDashboard />
      {/* <TechnologySection /> */}
      <SecuritySection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
