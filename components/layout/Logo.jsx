import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/curepaymd-logo.png";

export default function Logo({ className = "", priority = false }) {
  return (
    <Link
      href="/"
      aria-label="CurePayMD — Home"
<<<<<<< HEAD
      className={`relative block h-9 w-[150px] sm:h-10 sm:w-[168px] ${className}`}
=======
      className={`relative block h-14 w-[145px] sm:h-16 sm:w-[170px] ${className}`}
>>>>>>> ali
    >
      <Image
        src={logo}
        alt="CurePayMD logo"
        fill
        priority={priority}
<<<<<<< HEAD
        sizes="180px"
=======
        sizes="170px"
>>>>>>> ali
        className="object-contain object-left"
      />
    </Link>
  );
}
