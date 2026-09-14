export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
  titleClassName = "",
}) {
  const isCenter = align === "center";
  const eyebrowColor = tone === "dark" ? "text-green-300" : "text-green-700";
  const titleColor = tone === "dark" ? "text-white" : "text-navy-950";
  const descColor = tone === "dark" ? "text-white/70" : "text-ink-500";

  return (
    <div className={`${isCenter ? "text-center mx-auto" : "text-left"} max-w-2xl ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-balance ${titleColor} ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
