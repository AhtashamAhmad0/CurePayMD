import Image from "next/image";
import partnershipImage from "@/public/images/medical/practice-partnership.png";
import { Stethoscope } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
        <ScrollReveal className="lg:col-span-6 order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
            Who We Are
          </p>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl text-navy-950 text-balance">
            A dedicated billing and revenue cycle partner for healthcare practices
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-500">
            CurePayMD was built around a simple idea: practices should be able
            to hand off the complexity of billing without losing visibility
            or control over their revenue. We work as an extension of your
            practice — handling claims, coding, denials, and collections —
            while keeping you informed every step of the way.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Our team supports both medical and dental practices, bringing
            specialty-specific billing knowledge to each engagement rather
            than a one-size-fits-all process.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100} className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 to-navy-950 aspect-[4/3]">
            <Image src={partnershipImage} alt="A doctor and practice administrator collaborating" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-navy-950/90 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-300">
                  <Stethoscope className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Built for medical & dental practices
                  </p>
                  <p className="text-xs text-white/55">
                    Specialty-aware billing, not a generic process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
