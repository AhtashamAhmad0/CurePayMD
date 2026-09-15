import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/curepaymd-logo.png";

export default function Logo({ className = "", priority = false }) {
  return (
    <Link
      href="/"
      aria-label="CurePayMD — Home"
      className={`relative block h-14 w-[145px] sm:h-16 sm:w-[170px] ${className}`}
    >
      <Image
        src={logo}
        alt="CurePayMD logo"
        fill
        priority={priority}
        sizes="170px"
        className="object-contain object-left"
      />
    </Link>
  );
}
