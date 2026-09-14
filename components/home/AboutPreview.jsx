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
