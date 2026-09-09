import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/public/images/logo/curepaymd-logo.png";
import { footerLinks, companyPhone, companyPhoneHref, companyEmail } from "@/data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 text-white">
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
      <div className="relative container-px mx-auto max-w-[1400px] py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="relative h-10 w-[172px] rounded-md bg-white/95 px-2 py-1.5">
              <Image
                src={logo}
                alt="CurePayMD logo"
                fill
                sizes="180px"
                className="object-contain object-left p-1"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              CurePayMD partners with medical and dental practices to manage
              billing and revenue cycle operations — so providers can focus on
              patient care while collections stay on track.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={companyPhoneHref} className="flex items-center gap-2.5 text-white/80 hover:text-green-300 transition-colors">
                <Phone className="h-4 w-4 text-green-400 shrink-0" />
                {companyPhone}
              </a>
              <a href={`mailto:${companyEmail}`} className="flex items-center gap-2.5 text-white/80 hover:text-green-300 transition-colors">
                <Mail className="h-4 w-4 text-green-400 shrink-0" />
                {companyEmail}
              </a>
              <div className="flex items-center gap-2.5 text-white/80">
                <MapPin className="h-4 w-4 text-green-400 shrink-0" />
                Serving practices across the United States
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.services.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-green-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              More Services
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.services.slice(6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-green-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-green-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center border-t border-white/10 pt-8">
          <p className="text-xs text-white/45 text-center">
            © {year} CurePayMD. All rights reserved. CurePayMD is a medical and
            dental billing and revenue cycle management service provider.
          </p>
      </div>
      </div>
    </footer>
  );
}
