export default function PageHero({ eyebrow, title, description, tone = "navy" }) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="container-px mx-auto max-w-[1400px] relative">
        <div className="page-hero-rule"><span>CUREPAYMD</span><span>YOUR PRACTICE. OUR PRIORITY.</span></div>
        {eyebrow && <p className="eyebrow mt-10 justify-center">{eyebrow}</p>}
        <h1 className="font-display mt-5 mx-auto max-w-4xl text-center text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-balance text-navy-950">{title}</h1>
        {description && <p className="mt-6 mx-auto max-w-2xl text-center text-base sm:text-lg leading-relaxed text-ink-500">{description}</p>}
      </div>
    </section>
  );
}
