<<<<<<< HEAD
=======
import Image from "next/image";
import dentalImage from "@/public/images/medical/dental-consultation.png";
>>>>>>> ali
import { Smile, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const list = [
  "CDT coding support for general & specialty procedures",
  "Dual coverage and coordination of benefits",
  "Clear, patient-friendly billing statements",
  "Consistent claim tracking through payment",
];

export default function DentalBillingSection() {
  return (
<<<<<<< HEAD
    <section className="relative overflow-hidden bg-green-100 py-20 lg:py-28">
=======
    <section className="dental-section relative overflow-hidden bg-green-100 py-20 lg:py-28">
>>>>>>> ali
      <div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(74,143,69,0.5), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container-px mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
        <ScrollReveal className="lg:col-span-5 order-2 lg:order-1">
<<<<<<< HEAD
          <div className="rounded-[2rem] border border-green-700/15 bg-white p-8 shadow-sm">
=======
          <div className="dental-photo"><Image src={dentalImage} alt="A dentist discussing care with a patient before treatment" fill sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover" /></div>
          <div className="dental-details border border-green-700/15 bg-white p-8">
>>>>>>> ali
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-700 text-white">
              <Smile className="h-6 w-6" />
            </span>
            <p className="mt-6 font-display text-2xl text-navy-950">
              Built for how dental offices actually bill
            </p>
            <ul className="mt-6 space-y-3">
              {list.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-green-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-800">
            Dental Billing
          </p>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl text-navy-950 text-balance">
            Billing that understands dental workflows, not just medical ones
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-900/70">
            Dental billing has its own codes, plan structures, and patient
            expectations. Our dental billing team works within CDT coding
            standards and handles claims, statements, and collections
            specific to general and specialty dental practices.
          </p>
          <Button href="/services/dental-billing" variant="navy" className="mt-8">
            Explore Dental Billing
          </Button>
        </div>
      </div>
    </section>
  );
}
