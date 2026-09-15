"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown, Phone } from "lucide-react";
import Logo from "./Logo";
import Button from "@/components/ui/Button";
import { primaryNav, companyPhone, companyPhoneHref } from "@/data/navigation";

export default function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] xl:hidden transition-visibility ${
        open ? "visible" : "invisible delay-300"
      }`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-navy-950/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-navy-950 text-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <div className="rounded-lg bg-white/95 px-2 py-1.5">
            <Logo />
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-4 no-scrollbar">
          <ul className="space-y-1">
            {primaryNav.map((item) => (
              <li key={item.label} className="border-b border-white/8 last:border-none">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex-1 py-3.5 text-[16px] font-medium text-white/90"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded(expanded === item.label ? null : item.label)
                      }
                      aria-label={`Toggle ${item.label} submenu`}
                      className="p-3.5 text-white/70"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && (
                  <div
                    className={`grid transition-all duration-300 ${
                      expanded === item.label
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <ul className="overflow-hidden pl-3 pb-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="block py-2 text-[14px] text-white/65 hover:text-green-300"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-white/10 px-5 py-5 space-y-3">
          <a
            href={companyPhoneHref}
            className="flex items-center gap-2 text-[15px] font-semibold text-white"
          >
            <Phone className="h-4 w-4 text-green-400" />
            {companyPhone}
          </a>
          <Button href="/contact" className="w-full" onClick={onClose}>
            Get a Free Assessment
          </Button>
        </div>
      </div>
    </div>
  );
}

