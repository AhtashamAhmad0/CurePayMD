import PracticeCTA from "@/components/shared/PracticeCTA";
import PageHero from "@/components/shared/PageHero";
import FAQAccordion from "@/components/faq/FAQAccordion";
import { faqs } from "@/data/faqs";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about CurePayMD's medical and dental billing and revenue cycle management services.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Answers to the questions we hear most from medical and dental practices."
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px mx-auto max-w-[900px]">
          <FAQAccordion />
        </div>
      </section>
      <PracticeCTA />
    </>
  );
}
