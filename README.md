# CurePayMD Website

## Project Overview

This repository contains the production-ready marketing website for
**CurePayMD**, a medical and dental billing and revenue cycle management
(RCM) company. The site introduces CurePayMD's services, specialties,
technology approach, and security posture, and drives visitors toward a
free billing assessment via the contact page.

The homepage and every interior page are built from small, independent,
purpose-built components rather than a single monolithic page — see
**Components** below for how the architecture supports safe, isolated
redesigns of individual sections.

## Brand

CurePayMD — medical and dental billing / revenue cycle management.

Phone: **+1 (917) 912-9313**

## Business

Medical & Dental Revenue Cycle Management.

## Tech Stack

- Next.js (App Router)
- React
- JavaScript (no TypeScript)
- Tailwind CSS v4
- Lucide React (icons)

## Project Structure

```
app/
├── layout.js                    Root layout, global SEO metadata, Organization schema
├── page.js                      Homepage — assembles all home/ section components
├── globals.css                  Brand theme (CSS variables), typography, utilities
├── sitemap.js                   Dynamic sitemap (static routes + service routes)
├── robots.js                    robots.txt rules
│
├── about/page.js                About page
├── contact/page.js              Contact page (form + direct contact info)
├── faq/page.js                  FAQ page (full accordion + FAQPage schema)
├── specialties/page.js          Medical & dental specialties
├── technology/page.js           Technology / workflow page
├── security-compliance/page.js  Security & compliance page
│
└── services/
    ├── page.js                  Services index (grid of all 10 services)
    ├── medical-billing/page.js
    ├── dental-billing/page.js
    ├── revenue-cycle-management/page.js
    ├── medical-coding/page.js
    ├── denial-management/page.js
    ├── ar-follow-up/page.js
    ├── eligibility-verification/page.js
    ├── credentialing/page.js
    ├── prior-authorization/page.js
    └── payment-posting/page.js

components/
├── ui/            Shared, generic UI primitives (Button, SectionHeading, Badge, Card)
├── shared/         Cross-page utilities (PageHero, ScrollReveal)
├── layout/         Navbar, MobileMenu, Footer, Logo
├── home/            One independent component per homepage section (see below)
├── about/           About-page-only sections
├── services/         Shared service-detail section building blocks
├── specialties/       Specialties page grid
├── technology/        Technology page sections
├── security/           Security & compliance page sections
├── faq/                 FAQ accordion
└── contact/              Contact form + contact info sidebar

data/
├── navigation.js   Nav structure, dropdown menus, footer links, phone/email
├── services.js     Full content for all 10 services (used by service pages + homepage)
├── specialties.js  Medical & dental specialty lists
└── faqs.js         FAQ question/answer/category data

public/
└── images/logo/    CurePayMD logo (untouched, original proportions/colors)
```

## Installation

```
npm install
```

## Development

```
npm run dev
```

## Production Build

```
npm run build
npm start
```

## Environment Variables

One optional environment variable is supported:

```
NEXT_PUBLIC_SITE_URL=https://www.curepaymd.com
```

Used to build absolute URLs for metadata, Open Graph tags, and the
sitemap. If not set, the site falls back to `https://www.curepaymd.com`.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — 15 independent sections |
| `/about` | Company story, mission, vision, how we work |
| `/services` | Index of all 10 services |
| `/services/medical-billing` | Medical billing service detail |
| `/services/dental-billing` | Dental billing service detail |
| `/services/revenue-cycle-management` | Full RCM service detail |
| `/services/medical-coding` | Medical coding service detail |
| `/services/denial-management` | Denial management service detail |
| `/services/ar-follow-up` | A/R follow-up service detail |
| `/services/eligibility-verification` | Eligibility & benefits verification detail |
| `/services/credentialing` | Credentialing & enrollment detail |
| `/services/prior-authorization` | Prior authorization detail |
| `/services/payment-posting` | Payment posting detail |
| `/specialties` | Medical and dental specialties supported |
| `/technology` | How our billing workflow connects to your systems |
| `/security-compliance` | Data handling and security approach |
| `/faq` | Full FAQ with category filtering |
| `/contact` | Contact form + direct contact details |

## Components

**Homepage sections** (`components/home/`) are each fully independent —
`Hero`, `TrustBar`, `ProblemSection`, `AboutPreview`, `ServicesSection`,
`MedicalBillingSection`, `DentalBillingSection`, `WhyCurePayMD`,
`RCMProcess`, `SpecialtiesSection`, `RevenueDashboard`,
`TechnologySection`, `SecuritySection`, `FAQSection`, and `FinalCTA`.
`app/page.js` simply imports and composes them in order. **Redesigning
any one section only requires editing that section's file** — no other
homepage component or `app/page.js` needs to change (beyond reordering,
if desired).

**Service detail pages** share a small set of composable section
components (`components/services/ServiceSections.jsx`:
`ServiceHero`, `ServiceOverview`, `ServiceProcess`, `ServiceBenefits`,
`ServiceCTA`) that render from each service's entry in `data/services.js`,
with a `variantIndex` prop that alternates background treatment between
services so the ten pages don't feel visually identical. Each individual
route file under `app/services/<slug>/` is intentionally thin — it wires
up metadata, schema, and composes the shared sections for its slug — so
editing a single service's **content** is a data change in
`data/services.js`, and editing a single service's **layout** can be done
without touching the other nine.

**Shared UI primitives** (`components/ui/`) — `Button`, `SectionHeading`,
`Badge`, `Card` — are only used for genuinely repeated, low-level
patterns (buttons, headings, badges). Sections with a unique visual
composition (e.g. `Hero`, `RevenueDashboard`, `DentalBillingSection`)
own their layout directly rather than being forced through a generic
"card" abstraction.

## SEO

- **Metadata API** — every route exports its own `metadata` (or
  `generateMetadata`) with a unique title and description; `app/layout.js`
  provides the site-wide default/template, Open Graph, and Twitter card
  metadata.
- **Canonical URLs** — set per-page via `alternates.canonical`.
- **Sitemap** — `app/sitemap.js` generates `/sitemap.xml` dynamically from
  static routes plus every entry in `data/services.js`.
- **Robots** — `app/robots.js` generates `/robots.txt`, allowing all
  crawlers and pointing to the sitemap.
- **Structured data** — `MedicalBusiness` schema in the root layout,
  `FAQPage` schema on `/faq`, and `Service` schema on every service page.
- **Semantic HTML & heading hierarchy** — one `<h1>` per page (in
  `PageHero` or `Hero`), section headings as `<h2>`/`<h3>`.
- **Alt text** — the logo and all meaningful imagery include descriptive
  `alt` text via `next/image`.
- Target keywords (medical billing services, dental billing services,
  revenue cycle management, medical coding services, denial management,
  A/R follow-up, insurance eligibility verification, provider
  credentialing, etc.) are used naturally in headings and body copy —
  not stuffed.

## Responsive Design

Mobile-first throughout, with layouts adapted (not just shrunk) at:

- `sm` — 640px
- `lg` — 1024px

The navbar switches from a desktop mega-menu to a dedicated slide-out
`MobileMenu` component below `lg`. No horizontal overflow is introduced
by any section; wide decorative elements are clipped with
`overflow-hidden` on their parent section.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`, `section`).
- Keyboard-operable navigation, mobile menu, and accordions (FAQ,
  mobile submenus) using real `<button>` elements with `aria-expanded`.
- Visible focus states via Tailwind's `focus-visible` utilities on
  interactive elements.
- Form fields in `ContactForm` use associated `<label>` elements.
- `prefers-reduced-motion` is respected globally in `globals.css`
  (animation/transition durations are collapsed).
- Color choices maintain strong contrast between text and background
  across both light (sand/white) and dark (navy) sections.

## Performance

- Server Components by default; `"use client"` is only added where
  interactivity is required (Navbar, MobileMenu, ContactForm,
  FAQAccordion, ScrollReveal).
- `next/image` is used for the logo with explicit sizing.
- No unnecessary third-party dependencies — only `lucide-react` beyond
  the Next.js/React/Tailwind baseline.
- Static generation: every route in this project builds to a static
  page (`next build` output shows all routes as `○ Static`).

## Deployment

This is a standard Next.js app and can be deployed to any Next.js-
compatible host (Vercel, a Node server, or a container).

```
npm install
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` in your hosting provider's environment
variables to your production domain before building, so metadata, Open
Graph tags, and the sitemap emit the correct absolute URLs.

## Future Development

**Adding a new service**
1. Add an entry to the `services` array in `data/services.js` (slug,
   name, tagline, description, icon, highlights, process, benefits).
2. Create `app/services/<new-slug>/page.js` following the pattern of any
   existing service page (thin wrapper around the shared
   `ServiceSections` components).
3. Add the route to `app/sitemap.js` (it's automatic — service routes
   are generated from `data/services.js`) and, if it should appear in
   navigation, add it to `servicesMenu` in `data/navigation.js`.

**Updating a homepage section**
Edit only the relevant file in `components/home/`. No other homepage
component or `app/page.js` needs to change.

**Adding a new specialty**
Add the specialty name as a string to `medicalSpecialties` or
`dentalSpecialties` in `data/specialties.js`.

**Updating FAQs**
Add, edit, or remove entries in `data/faqs.js`. Categories are derived
automatically for the filter pills on `/faq`.

**Adding a blog / resources section**
Create `app/resources/page.js` (or `app/blog/page.js`) plus a
`components/resources/` (or `components/blog/`) folder following the
same pattern as `about/` or `technology/`, and add the route to
`resourcesMenu` in `data/navigation.js` and to `app/sitemap.js`.

**Adding backend contact functionality**
`components/contact/ContactForm.jsx` currently simulates submission on
the client (`"use client"`, local state only — no data is sent
anywhere). To wire it up for real, add a Next.js Route Handler (e.g.
`app/api/contact/route.js`) that receives the form fields and forwards
them to an email service or CRM, and call it via `fetch` from
`handleSubmit` in `ContactForm.jsx`.
#   C u r e P a y M D  
 