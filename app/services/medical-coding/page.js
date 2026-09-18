import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("medical-coding");

export const metadata = {
  title: `${service.name} | CurePayMD`,
  description: service.description,
  alternates: { canonical: `/services/${service.slug}` },
};

export default function MedicalCodingPage() {
  return <ServiceDetailTemplate service={service} />;
}