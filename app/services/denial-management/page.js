import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import {
  ServiceHero,
  ServiceOverview,
  ServiceProcess,
  ServiceBenefits,
  ServiceCTA,
} from "@/components/services/ServiceSections";

const SLUG = "denial-management";
const VARIANT = 0;

export function generateMetadata() {
  const service = getServiceBySlug(SLUG);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${SLUG}` },
  };
}

export default function ServicePage() {
  const service = getServiceBySlug(SLUG);
  if (!service) return notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "MedicalBusiness", name: "CurePayMD" },
    description: service.description,
    areaServed: "US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceHero service={service} variantIndex={VARIANT} />
      <ServiceOverview service={service} variantIndex={VARIANT} />
      <ServiceProcess service={service} variantIndex={VARIANT} />
      <ServiceBenefits service={service} variantIndex={VARIANT} />
      <ServiceCTA service={service} />
    </>
  );
}
