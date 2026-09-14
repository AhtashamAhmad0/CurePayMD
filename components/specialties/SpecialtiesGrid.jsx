export default function SpecialtiesGrid({ title, items, tone = "light" }) {
  const isDark = tone === "dark";
  return (
    <div>
      <h2 className={`font-display text-2xl sm:text-3xl ${isDark ? "text-white" : "text-navy-950"}`}>
        {title}
      </h2>
      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className={`rounded-xl border px-4 py-3.5 text-sm font-medium transition-colors ${
              isDark
                ? "border-white/10 bg-white/5 text-white/85 hover:border-green-400/40"
                : "border-navy-900/8 bg-white text-navy-900/85 hover:border-green-600/40"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
