import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyPhone, companyPhoneHref } from "@/data/navigation";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(15,39,69,1) 0%, rgba(10,27,46,1) 45%, rgba(35,74,38,0.9) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-dot-grid opacity-20" aria-hidden="true" />

      <div className="relative container-px mx-auto max-w-[1000px] text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
          Let&apos;s Talk Revenue
        </p>
        <h2 className="font-display mt-5 text-3xl sm:text-5xl leading-[1.1] text-balance text-white">
          Ready for billing that keeps pace with your practice?
        </h2>
        <p className="mt-6 mx-auto max-w-xl text-base sm:text-lg text-white/65">
          Get a free billing assessment and see where CurePayMD can help you
          reduce denials, speed up collections, and simplify your revenue
          cycle.
        </p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact" size="lg" variant="primary">
            Get a Free Billing Assessment
          </Button>
          <a
            href={companyPhoneHref}
            className="inline-flex items-center gap-2 text-base font-semibold text-white/85 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4 text-green-300" />
            {companyPhone}
          </a>
        </div>
      </div>
    </section>
  );
}
