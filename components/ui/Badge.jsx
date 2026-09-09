const tones = {
  green: "bg-green-100 text-green-800 border-green-300/60",
  navy: "bg-navy-900/5 text-navy-800 border-navy-800/15",
  navyDark: "bg-white/10 text-white border-white/20",
  outline: "bg-transparent text-current border-current/30",
};

export default function Badge({ children, tone = "green", className = "", icon: Icon }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tones[tone]} ${className}`}
    >
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      {children}
    </span>
  );
}
