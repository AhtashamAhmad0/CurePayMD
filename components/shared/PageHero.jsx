export default function PageHero({ eyebrow, title, description, tone = "navy" }) {
  const bg =
    tone === "navy"
      ? "bg-navy-950"
      : "bg-gradient-to-br from-navy-950 via-navy-900 to-green-900";

  return (
    <section className={`relative overflow-hidden ${bg} pt-36 pb-20 lg:pt-44 lg:pb-24`}>
      <div className="absolute inset-0 bg-dot-grid opacity-25" aria-hidden="true" />
      <div
        className="absolute -top-32 right-[-8%] h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(95,162,87,0.5), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container-px mx-auto max-w-[1400px]">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-balance text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/65">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
