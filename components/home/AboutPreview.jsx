<<<<<<< HEAD
import { Stethoscope, Smile, HandCoins, ShieldCheck, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="container-px mx-auto max-w-[1400px]">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              About CurePayMD
            </p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl text-navy-950 text-balance">
              A billing partner built around how practices actually work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              CurePayMD works alongside medical and dental practices to manage the billing and revenue cycle work that keeps your practice financially healthy.
            </p>
          </ScrollReveal>
        </div>

        {/* Core Layout: Cards Surrounding Central Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Cards Column */}
          <ScrollReveal className="lg:col-span-4 flex flex-col gap-6 lg:-translate-y-6">
            
            {/* Card 1: Medical Practices */}
            <div className="group rounded-3xl border border-navy-900/10 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                  <Stethoscope className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy-950">Medical Practices</h3>
                  <p className="text-xs text-ink-500 mt-1 leading-relaxed">
                    Tailored billing solutions designed specifically across primary care and specialty medicine.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Revenue & Security */}
            <div className="group rounded-3xl border border-navy-900/10 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                  <HandCoins className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy-950">Revenue Recovered</h3>
                  <p className="text-xs text-ink-500 mt-1 leading-relaxed">
                    Consistent follow-up on every single claim to minimize rejections and maximize cash flow.
                  </p>
                </div>
              </div>
            </div>

          </ScrollReveal>

          {/* Center Image Column */}
          <ScrollReveal delay={100} className="lg:col-span-4">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Decorative background glow blob */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-green-500/10 via-navy-900/5 to-transparent blur-2xl -z-10" />

              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white bg-navy-900">
                <div className="aspect-[4/5] w-full relative">
                  {/* Live Unsplash Image URL */}
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                    alt="Medical Professional working on billing"
                    className="h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay for Badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                  {/* Floating Badge on Image */}
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500 text-white shadow-lg">
                        <TrendingUp className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold text-white">
                          Zero Headcount Added
                        </p>
                        <p className="text-[11px] text-white/80">
                          Seamless integration with front office
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Cards Column */}
          <ScrollReveal delay={200} className="lg:col-span-4 flex flex-col gap-6 lg:-translate-y-6">
            
            {/* Card 3: Dental Practices */}
            <div className="group rounded-3xl border border-navy-900/10 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                  <Smile className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy-950">Dental Practices</h3>
                  <p className="text-xs text-ink-500 mt-1 leading-relaxed">
                    Specialized insurance verification and collection workflows for general and specialty dental offices.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Compliance / Security */}
            <div className="group rounded-3xl border border-navy-900/10 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy-950">HIPAA Compliant</h3>
                  <p className="text-xs text-ink-500 mt-1 leading-relaxed">
                    Enterprise-grade security standards safeguarding patient data and billing documentation completely.
                  </p>
                </div>
              </div>
            </div>

          </ScrollReveal>

        </div>

        {/* Action Button Footer */}
        <div className="mt-12 text-center">
          <ScrollReveal delay={300}>
            <Button href="/about" variant="outlineDark">
              Learn About Us
            </Button>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
=======
import Image from "next/image";
import partnershipImage from "@/public/images/medical/practice-partnership.png";
import { Stethoscope, Smile, HandCoins, ShieldCheck, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";
const features = [
  { icon: Stethoscope, title: "Medical practices", text: "Tailored billing solutions across primary care and specialty medicine." },
  { icon: Smile, title: "Dental practices", text: "Specialized verification and collections for general and specialty dental offices." },
  { icon: HandCoins, title: "Revenue recovered", text: "Consistent follow-up on every claim to minimize rejections and support cash flow." },
  { icon: ShieldCheck, title: "HIPAA compliant", text: "Security standards that safeguard patient data and billing documentation." },
];
export default function AboutPreview() {
  return (
    <section className="about-preview py-20 lg:py-28">
      <div className="container-px mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <ScrollReveal className="about-photo-wrap">
          <div className="about-photo"><Image src={partnershipImage} alt="A physician and practice administrator reviewing paperwork together" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" /></div>
          <div className="about-photo-note"><TrendingUp size={25} strokeWidth={1.5} /><div><strong>Zero headcount added.</strong><p>A seamless extension of your front office.</p></div></div>
          <span className="photo-index">PEOPLE FIRST. DETAILS ALWAYS.</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="eyebrow">A PARTNER IN YOUR PRACTICE</p>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl text-navy-950">You care for patients.<br /><em className="text-green-700">We care for the details.</em></h2>
          <p className="mt-5 text-base leading-relaxed text-ink-500">A billing partner built around how practices actually work. CurePayMD manages the billing and revenue cycle work that keeps your practice financially healthy.</p>
          <div className="about-features">{features.map(({ icon: Icon, title, text }) => <div key={title}><Icon size={22} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></div>)}</div>
          <Button href="/about" variant="outlineDark" className="mt-8">Learn about CurePayMD</Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
>>>>>>> ali
