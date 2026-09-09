import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/curepaymd-logo.png";

export default function Logo({ className = "", priority = false }) {
  return (
    <Link
      href="/"
      aria-label="CurePayMD — Home"
      className={`relative block h-9 w-[150px] sm:h-10 sm:w-[168px] ${className}`}
    >
      <Image
        src={logo}
        alt="CurePayMD logo"
        fill
        priority={priority}
        sizes="180px"
        className="object-contain object-left"
      />
    </Link>
  );
}
