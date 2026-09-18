import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("specialty-billing");

export const metadata = {
  title: `${service.name} | CurePayMD`,
  description: service.description,
  alternates: { canonical: `/services/${service.slug}` },
};

export default function SpecialtyBillingPage() {
  return <ServiceDetailTemplate service={service} />;
}