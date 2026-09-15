import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.curepaymd.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CurePayMD | Medical & Dental Billing and Revenue Cycle Management",
    template: "%s | CurePayMD",
  },
  description:
    "CurePayMD provides medical and dental billing, coding, denial management, and revenue cycle management services that help practices get paid accurately and on time.",
  keywords: [
    "medical billing services",
    "medical billing company",
    "dental billing services",
    "revenue cycle management",
    "medical RCM services",
    "medical coding services",
    "denial management",
    "A/R follow-up",
    "insurance eligibility verification",
    "provider credentialing",
    "healthcare billing services",
  ],
  authors: [{ name: "CurePayMD" }],
  openGraph: {
    type: "website",
    siteName: "CurePayMD",
    title: "CurePayMD | Medical & Dental Billing and Revenue Cycle Management",
    description:
      "Billing, coding, denial management, and revenue cycle management for medical and dental practices.",
    url: siteUrl,
    images: [
      {
        url: "/images/logo/curepaymd-logo.png",
        width: 1515,
        height: 688,
        alt: "CurePayMD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CurePayMD | Medical & Dental Billing and Revenue Cycle Management",
    description:
      "Billing, coding, denial management, and revenue cycle management for medical and dental practices.",
    images: ["/images/logo/curepaymd-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "CurePayMD",
    description:
      "CurePayMD provides medical and dental billing, coding, and revenue cycle management services for healthcare practices.",
    url: siteUrl,
    telephone: "+1-917-912-9313",
    image: `${siteUrl}/images/logo/curepaymd-logo.png`,
    areaServed: "US",
  };

  return (
    <html lang="en">
      <body className="antialiased bg-white text-navy-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
