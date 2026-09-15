import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const variants = {
  primary:
<<<<<<< HEAD
    "bg-green-600 text-white hover:bg-green-700 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset]",
=======
    "bg-green-600 text-white hover:bg-green-700 shadow-sm",
>>>>>>> ali
  navy: "bg-navy-800 text-white hover:bg-navy-700",
  outline:
    "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
  outlineDark:
    "border border-navy-800/20 text-navy-900 hover:bg-navy-900 hover:text-white",
  ghost: "text-navy-900 hover:text-green-700",
};

const sizes = {
  md: "text-sm px-5 py-3",
  lg: "text-base px-6 py-3.5",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  as: Comp,
  ...props
}) {
<<<<<<< HEAD
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 ${variants[variant]} ${sizes[size]} ${className}`;
=======
  const classes = `group inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 ${variants[variant]} ${sizes[size]} ${className}`;
>>>>>>> ali

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (Comp) {
    return (
      <Comp className={classes} {...props}>
        {content}
      </Comp>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
