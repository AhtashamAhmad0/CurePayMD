import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyPhone, companyPhoneHref } from "@/data/navigation";

export default function PracticeCTA({
  eyebrow = "LET’S TALK ABOUT YOUR PRACTICE",
  title = "A healthier revenue cycle starts with a conversation.",
  description = "Get a free billing assessment and see where CurePayMD can help you reduce denials, speed up collections, and simplify your revenue cycle.",
  buttonLabel = "Get a free billing assessment",
  href = "/contact",
}) {
  return (
    <section className="practice-cta">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="practice-cta-panel">
          <div className="practice-cta-copy">
            <p className="practice-cta-eyebrow">{eyebrow}</p>
            <h2 className="font-display">{title}</h2>
            <p className="practice-cta-description">{description}</p>
          </div>
          <div className="practice-cta-actions">
            <Button href={href} size="lg">{buttonLabel}</Button>
            <a href={companyPhoneHref}><Phone size={16} />{companyPhone}</a>
            <p>Medical & dental practices welcome.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
