import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { companyPhone, companyPhoneHref, companyEmail } from "@/data/navigation";

const items = [
  { icon: Phone, label: "Phone", value: companyPhone, href: companyPhoneHref },
  { icon: Mail, label: "Email", value: companyEmail, href: `mailto:${companyEmail}` },
  { icon: Clock, label: "Hours", value: "Monday – Friday, 9:00 AM – 6:00 PM ET" },
  { icon: MapPin, label: "Service Area", value: "Serving practices across the United States" },
];

export default function ContactInfo() {
  return (
    <div className="rounded-3xl bg-navy-950 p-6 sm:p-8 text-white">
      <h3 className="font-display text-xl">Reach Us Directly</h3>
      <p className="mt-2 text-sm text-white/60">
        Prefer to talk it through? Call or email our team directly.
      </p>
      <div className="mt-7 space-y-5">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-300">
              <item.icon className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/40">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="mt-0.5 block text-sm font-medium text-white hover:text-green-300 transition-colors">
                  {item.value}
                </a>
              ) : (
                <p className="mt-0.5 text-sm font-medium text-white">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
