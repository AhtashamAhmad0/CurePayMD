import { services } from "@/data/services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.curepaymd.com";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/specialties",
    "/technology",
    "/security-compliance",
    "/faq",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
