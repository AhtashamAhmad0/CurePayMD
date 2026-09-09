export const servicesMenu = [
  { label: "Medical Billing", href: "/services/medical-billing", description: "End-to-end billing for medical practices" },
  { label: "Dental Billing", href: "/services/dental-billing", description: "Specialized billing for dental offices" },
  { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management", description: "Full-cycle financial oversight" },
  { label: "Medical Coding", href: "/services/medical-coding", description: "Accurate, compliant coding" },
  { label: "Denial Management", href: "/services/denial-management", description: "Recover revenue from denied claims" },
  { label: "A/R Follow-Up", href: "/services/ar-follow-up", description: "Persistent, organized collections" },
  { label: "Eligibility & Benefits Verification", href: "/services/eligibility-verification", description: "Verify coverage before the visit" },
  { label: "Credentialing & Enrollment", href: "/services/credentialing", description: "Payer credentialing, handled" },
  { label: "Prior Authorization", href: "/services/prior-authorization", description: "Faster approvals, fewer delays" },
  { label: "Payment Posting", href: "/services/payment-posting", description: "Accurate posting, reconciled daily" },
];

export const resourcesMenu = [
  { label: "FAQ", href: "/faq", description: "Answers to common billing questions" },
  { label: "Technology", href: "/technology", description: "How our billing platform works" },
  { label: "Security & Compliance", href: "/security-compliance", description: "HIPAA-minded data protection" },
  { label: "Specialties", href: "/specialties", description: "Practices and specialties we support" },
];

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", children: servicesMenu },
  { label: "Specialties", href: "/specialties" },
  { label: "Technology", href: "/technology" },
  { label: "Resources", href: "/faq", children: resourcesMenu },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: servicesMenu.map((s) => ({ label: s.label, href: s.href })),
  company: [
    { label: "About CurePayMD", href: "/about" },
    { label: "Specialties", href: "/specialties" },
    { label: "Technology", href: "/technology" },
    { label: "Security & Compliance", href: "/security-compliance" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export const companyPhone = "+1 (917) 912-9313";
export const companyPhoneHref = "tel:+19179129313";
export const companyEmail = "info@curepaymd.com";
