import PageHero from "@/components/shared/PageHero";
import SecurityPractices from "@/components/security/SecurityPractices";
<<<<<<< HEAD
import Button from "@/components/ui/Button";
=======
import PracticeCTA from "@/components/shared/PracticeCTA";
>>>>>>> ali
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Security & Compliance",
  description:
    "How CurePayMD approaches the protection of patient and billing data throughout its medical and dental billing workflow.",
  alternates: { canonical: "/security-compliance" },
};

export default function SecurityCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Security & Compliance"
        title="Patient data handled with the care it requires"
        description="Protecting patient and practice information is treated as a core part of how we operate, not an afterthought."
      />

      <section className="bg-navy-900 py-14">
        <div className="container-px mx-auto max-w-[1400px] flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-green-300">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <p className="text-sm leading-relaxed text-white/70">
            CurePayMD does not publish specific compliance certifications on
            this page. Our data handling practices are built around HIPAA
            principles, and we&apos;re happy to discuss our approach in detail
            during onboarding.
          </p>
        </div>
      </section>

      <SecurityPractices />

<<<<<<< HEAD
      <section className="bg-sand-50 py-16">
        <div className="container-px mx-auto max-w-[1400px] flex flex-col items-center gap-5 text-center">
          <p className="max-w-xl text-base text-ink-500">
            Have specific questions about how we handle data for your
            practice? We&apos;re glad to walk through it.
          </p>
          <Button href="/contact">Ask Us About Security</Button>
        </div>
      </section>
=======
      <PracticeCTA title="Confidence starts with a conversation." description="Have specific questions about how we handle data for your practice? We're glad to walk through it." buttonLabel="Ask us about security" />
>>>>>>> ali
    </>
  );
}
