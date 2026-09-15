"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, Menu } from "lucide-react";
import Logo from "./Logo";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import { primaryNav, companyPhone, companyPhoneHref } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-navy-900/8 shadow-[0_1px_10px_rgba(10,27,46,0.05)]"
            : "bg-white border-b border-navy-900/8 shadow-sm"
        }`}
      >
<<<<<<< HEAD
        <nav className="container-px mx-auto flex h-18 max-w-[1400px] items-center justify-between py-3">
          <Logo priority />

          <ul className="hidden lg:flex items-center gap-1">
=======
        <nav className="container-px mx-auto flex h-22 max-w-[1400px] items-center justify-between py-3">
          <Logo priority />

          <ul className="hidden xl:flex items-center gap-1">
>>>>>>> ali
            {primaryNav.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => item.children && setOpenDropdown(null)}
<<<<<<< HEAD
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-medium transition-colors text-navy-900/80 hover:text-navy-950 ${
=======
                onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null); }}
              >
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onFocus={() => setOpenDropdown(item.children ? item.label : null)}
                  onKeyDown={(event) => { if (event.key === "Escape") setOpenDropdown(null); }}
                  className={`flex items-center gap-1 rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors text-navy-900/80 hover:text-navy-950 ${
>>>>>>> ali
                    openDropdown === item.label ? "text-navy-950" : ""
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {item.children && (
                  <div
                    className={`absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                      openDropdown === item.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-xl shadow-navy-950/10">
                      <ul className="max-h-[70vh] overflow-y-auto py-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2.5 hover:bg-sand-50 transition-colors"
                            >
                              <span className="block text-[13.5px] font-semibold text-navy-950">
                                {child.label}
                              </span>
                              <span className="block text-[12px] text-ink-500 mt-0.5">
                                {child.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

<<<<<<< HEAD
          <div className="hidden lg:flex items-center gap-3">
=======
          <div className="hidden xl:flex items-center gap-3">
>>>>>>> ali
            <a
              href={companyPhoneHref}
              className="flex items-center gap-2 text-[13.5px] font-semibold transition-colors text-navy-900 hover:text-green-700"
            >
              <Phone className="h-4 w-4" />
              {companyPhone}
            </a>
            <Button href="/contact" size="md" variant="primary">
              Free Assessment
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
<<<<<<< HEAD
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-colors"
=======
            className="xl:hidden flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-colors"
>>>>>>> ali
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}