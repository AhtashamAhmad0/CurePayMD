import PracticeCTA from "@/components/shared/PracticeCTA";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact CurePayMD",
  description:
    "Get in touch with CurePayMD to request a free billing assessment or schedule a consultation for your medical or dental practice.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your revenue cycle"
        description="Request a free billing assessment or schedule a consultation — we'll walk through where CurePayMD can help."
      />
      <section id="assessment" className="bg-sand-50 py-20 lg:py-28">
        <div className="container-px mx-auto max-w-[1400px] grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
          <div className="lg:col-span-4">
            <ContactInfo />
          </div>
        </div>
      </section>
      <PracticeCTA title="Prefer to talk it through?" description="Call our team to discuss your practice, billing questions, or next steps. We’re here to help." buttonLabel="Request an assessment" href="#assessment" />
    </>
  );
}
