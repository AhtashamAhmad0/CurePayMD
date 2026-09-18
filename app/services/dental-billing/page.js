import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("dental-billing");

export const metadata = {
  title: `${service.name} | CurePayMD`,
  description: service.description,
  alternates: { canonical: `/services/${service.slug}` },
};

export default function DentalBillingPage() {
  return <ServiceDetailTemplate service={service} />;
}