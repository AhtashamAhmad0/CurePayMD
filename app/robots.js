const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.curepaymd.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
