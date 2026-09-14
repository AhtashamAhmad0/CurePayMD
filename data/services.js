export const services = [
  {
    slug: "medical-billing",
    name: "Medical Billing",
    shortName: "Medical Billing",
    tagline: "Clean claims, submitted fast, followed through to payment.",
    description:
      "Full-service medical billing that covers claim creation, scrubbing, submission, and follow-up — built to reduce denials and keep reimbursements moving.",
    heroDescription:
      "We manage the entire medical billing workflow for your practice, from charge entry to final reimbursement, so your team can spend less time on paperwork and more time with patients.",
    icon: "Stethoscope",
    highlights: [
      "Charge entry & claim scrubbing",
      "Electronic claims submission",
      "Payer-specific formatting rules",
      "Rejection correction & resubmission",
    ],
    process: [
      { title: "Charge Capture", description: "Encounter data is reviewed and translated into accurate, billable charges." },
      { title: "Claim Scrubbing", description: "Claims are checked against payer rules before submission to reduce rejections." },
      { title: "Submission", description: "Clean claims are submitted electronically to primary and secondary payers." },
      { title: "Follow-Up", description: "Outstanding claims are tracked and worked until resolved." },
    ],
    benefits: [
      "Fewer claim rejections at first submission",
      "Faster turnaround from encounter to reimbursement",
      "Clear visibility into claim status",
      "A dedicated billing team that knows your practice",
    ],
  },
  {
    slug: "dental-billing",
    name: "Dental Billing",
    shortName: "Dental Billing",
    tagline: "Billing built around dental codes, plans, and workflows.",
    description:
      "Dental billing services covering CDT coding support, insurance claims, patient statements, and collections for general and specialty dental practices.",
    heroDescription:
      "From routine cleanings to complex procedures, our dental billing team understands CDT coding, dual coverage, and the day-to-day realities of running a dental practice's front office.",
    icon: "Smile",
    highlights: [
      "CDT coding support",
      "Dental claim submission & tracking",
      "Dual coverage & coordination of benefits",
      "Patient statement management",
    ],
    process: [
      { title: "Treatment Review", description: "Treatment plans and procedure codes are reviewed for accuracy." },
      { title: "Claim Preparation", description: "Claims are prepared with required attachments and narratives." },
      { title: "Submission & Tracking", description: "Claims are submitted and monitored through to adjudication." },
      { title: "Patient Billing", description: "Remaining balances are communicated clearly to patients." },
    ],
    benefits: [
      "Reduced administrative load on front-desk staff",
      "Consistent coding aligned to current CDT standards",
      "Organized handling of dual coverage cases",
      "Predictable, easier-to-forecast cash flow",
    ],
  },
  {
    slug: "revenue-cycle-management",
    name: "Revenue Cycle Management",
    shortName: "RCM",
    tagline: "One team overseeing every stage of your revenue cycle.",
    description:
      "A complete revenue cycle management program spanning eligibility, coding, billing, payment posting, denial management, and reporting.",
    heroDescription:
      "Revenue cycle management with CurePayMD means one coordinated team overseeing the full financial journey of a patient encounter — from the moment a visit is scheduled to the moment the balance is paid in full.",
    icon: "RefreshCcw",
    highlights: [
      "Eligibility through final payment",
      "Denial prevention and recovery",
      "Monthly performance reporting",
      "Practice-specific workflow design",
    ],
    process: [
      { title: "Assessment", description: "We review your current workflow, payer mix, and pain points." },
      { title: "Implementation", description: "Processes are set up across eligibility, coding, billing, and posting." },
      { title: "Active Management", description: "Claims, denials, and A/R are actively worked on a defined cadence." },
      { title: "Reporting", description: "Regular reporting keeps your practice informed on performance." },
    ],
    benefits: [
      "A single accountable partner for your revenue cycle",
      "Reduced administrative burden on internal staff",
      "Structured, repeatable financial processes",
      "Ongoing visibility through reporting",
    ],
  },
  {
    slug: "medical-coding",
    name: "Medical Coding",
    shortName: "Coding",
    tagline: "Accurate ICD-10, CPT, and HCPCS coding support.",
    description:
      "Coding support aligned to current ICD-10, CPT, and HCPCS guidelines, helping reduce coding-related denials and compliance risk.",
    heroDescription:
      "Accurate coding is the foundation of a clean claim. Our coding support is aligned to current ICD-10, CPT, and HCPCS guidelines and tailored to your specialty.",
    icon: "FileCode2",
    highlights: [
      "ICD-10, CPT, and HCPCS coding support",
      "Specialty-specific coding knowledge",
      "Documentation review",
      "Ongoing coding accuracy checks",
    ],
    process: [
      { title: "Documentation Review", description: "Clinical documentation is reviewed to support accurate coding." },
      { title: "Code Assignment", description: "Codes are assigned according to current guidelines and payer policy." },
      { title: "Quality Check", description: "Coded claims are reviewed for consistency before submission." },
      { title: "Feedback Loop", description: "Patterns are shared back with providers to reduce future errors." },
    ],
    benefits: [
      "Lower risk of coding-related denials",
      "Coding aligned to current guidelines",
      "Specialty-aware coding practices",
      "Clearer documentation feedback for providers",
    ],
  },
  {
    slug: "denial-management",
    name: "Denial Management",
    shortName: "Denials",
    tagline: "Denied claims investigated, corrected, and resubmitted.",
    description:
      "A structured approach to identifying denial root causes, correcting claims, and resubmitting or appealing to recover revenue.",
    heroDescription:
      "Denials don't have to mean lost revenue. We investigate the root cause of each denial, correct the underlying issue, and resubmit or appeal so your practice recovers what it's owed.",
    icon: "ShieldAlert",
    highlights: [
      "Root-cause denial analysis",
      "Timely resubmission & appeals",
      "Denial trend reporting",
      "Payer-specific escalation paths",
    ],
    process: [
      { title: "Identify", description: "Denied and underpaid claims are flagged and categorized by reason." },
      { title: "Investigate", description: "The root cause of each denial is reviewed against payer policy." },
      { title: "Correct & Appeal", description: "Claims are corrected and resubmitted, or formally appealed." },
      { title: "Prevent", description: "Recurring denial patterns are addressed at the source." },
    ],
    benefits: [
      "Higher recovery rate on denied claims",
      "Fewer repeat denials over time",
      "Clear reporting on denial trends",
      "Less staff time spent chasing rejected claims",
    ],
  },
  {
    slug: "ar-follow-up",
    name: "A/R Follow-Up",
    shortName: "A/R Follow-Up",
    tagline: "Aging accounts worked systematically, not sporadically.",
    description:
      "Structured accounts receivable follow-up that prioritizes aging claims by value and payer, keeping outstanding balances moving toward resolution.",
    heroDescription:
      "Outstanding claims lose value the longer they sit. Our A/R follow-up team works aging accounts on a consistent schedule, prioritizing by balance, age, and payer.",
    icon: "ListChecks",
    highlights: [
      "Structured aging bucket follow-up",
      "Payer phone & portal follow-up",
      "Escalation of stalled claims",
      "Monthly A/R aging reports",
    ],
    process: [
      { title: "Prioritize", description: "Aging claims are sorted by balance, age, and payer." },
      { title: "Work the Queue", description: "Outstanding claims are followed up via payer portals and phone." },
      { title: "Escalate", description: "Stalled claims are escalated through appropriate payer channels." },
      { title: "Report", description: "Aging summaries keep your team informed of outstanding balances." },
    ],
    benefits: [
      "Reduced aged A/R over time",
      "Consistent, documented follow-up activity",
      "Improved cash collection cycle",
      "Fewer claims falling through the cracks",
    ],
  },
  {
    slug: "eligibility-verification",
    name: "Eligibility & Benefits Verification",
    shortName: "Eligibility",
    tagline: "Coverage confirmed before the patient is seen.",
    description:
      "Pre-visit eligibility and benefits verification to confirm active coverage, copays, deductibles, and authorization requirements.",
    heroDescription:
      "Verifying coverage before the appointment reduces denials, surprise balances, and front-desk friction. We confirm eligibility, benefits, and authorization needs ahead of each visit.",
    icon: "BadgeCheck",
    highlights: [
      "Real-time and payer-portal verification",
      "Copay, coinsurance & deductible checks",
      "Authorization requirement flagging",
      "Daily eligibility reporting to your front desk",
    ],
    process: [
      { title: "Schedule Review", description: "Upcoming appointments are reviewed against the schedule." },
      { title: "Verification", description: "Coverage, benefits, and plan details are confirmed with the payer." },
      { title: "Flagging", description: "Authorization needs or coverage issues are flagged in advance." },
      { title: "Reporting", description: "Verified details are shared with your front-desk team before the visit." },
    ],
    benefits: [
      "Fewer eligibility-related denials",
      "Clearer patient cost conversations",
      "Reduced day-of scheduling surprises",
      "Smoother front-desk workflow",
    ],
  },
  {
    slug: "credentialing",
    name: "Credentialing & Enrollment",
    shortName: "Credentialing",
    tagline: "Payer enrollment and credentialing, managed end to end.",
    description:
      "Support for provider credentialing, payer enrollment, and re-credentialing to keep providers in-network and billing without interruption.",
    heroDescription:
      "Credentialing delays can stall revenue before it starts. We manage payer enrollment, credentialing, and re-credentialing so providers can bill without interruption.",
    icon: "IdCard",
    highlights: [
      "Initial payer credentialing",
      "Re-credentialing & CAQH maintenance",
      "Application tracking & follow-up",
      "New provider enrollment support",
    ],
    process: [
      { title: "Application Prep", description: "Provider and practice information is gathered and organized." },
      { title: "Submission", description: "Applications are submitted to relevant payers." },
      { title: "Tracking", description: "Application status is monitored and followed up on regularly." },
      { title: "Maintenance", description: "CAQH profiles and re-credentialing dates are kept current." },
    ],
    benefits: [
      "Fewer delays getting providers in-network",
      "Organized tracking of enrollment status",
      "Reduced administrative burden",
      "Timely re-credentialing to avoid lapses",
    ],
  },
  {
    slug: "prior-authorization",
    name: "Prior Authorization",
    shortName: "Prior Auth",
    tagline: "Authorization requests managed proactively.",
    description:
      "Prior authorization management that identifies requirements early, submits requests, and follows up to reduce delays in care and billing.",
    heroDescription:
      "Missed or delayed authorizations can hold up both care and payment. We identify authorization requirements early, submit requests, and follow up until approval.",
    icon: "FileCheck2",
    highlights: [
      "Authorization requirement identification",
      "Request submission & tracking",
      "Payer follow-up until determination",
      "Documentation support for appeals",
    ],
    process: [
      { title: "Requirement Check", description: "Upcoming services are reviewed for authorization needs." },
      { title: "Request Submission", description: "Authorization requests are submitted with required documentation." },
      { title: "Follow-Up", description: "Requests are tracked and followed up on until a determination is made." },
      { title: "Resolution", description: "Approvals are documented; denials are routed for appeal where appropriate." },
    ],
    benefits: [
      "Fewer authorization-related denials",
      "Reduced delays in scheduled procedures",
      "Clear tracking of pending requests",
      "Less back-and-forth for clinical staff",
    ],
  },
  {
    slug: "payment-posting",
    name: "Payment Posting",
    shortName: "Payment Posting",
    tagline: "Payments posted accurately and reconciled daily.",
    description:
      "Timely, accurate posting of insurance and patient payments, with daily reconciliation to keep your financial records clean.",
    heroDescription:
      "Accurate payment posting keeps your financial picture reliable. We post insurance and patient payments promptly and reconcile daily against deposits.",
    icon: "Wallet",
    highlights: [
      "ERA & EOB payment posting",
      "Patient payment posting",
      "Daily deposit reconciliation",
      "Variance & underpayment flagging",
    ],
    process: [
      { title: "Payment Receipt", description: "ERAs, EOBs, and patient payments are collected." },
      { title: "Posting", description: "Payments are posted accurately against the correct claims." },
      { title: "Reconciliation", description: "Posted totals are reconciled against bank deposits daily." },
      { title: "Variance Review", description: "Underpayments and discrepancies are flagged for review." },
    ],
    benefits: [
      "Accurate, up-to-date financial records",
      "Early identification of underpayments",
      "Daily reconciliation discipline",
      "Cleaner reporting for practice leadership",
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
