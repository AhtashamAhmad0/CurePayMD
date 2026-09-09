import { ShieldCheck, Users, Clock, HeartPulse } from "lucide-react";

const items = [
  { icon: HeartPulse, label: "Medical & Dental Focus" },
  { icon: Users, label: "Dedicated Billing Team" },
  { icon: Clock, label: "Consistent Claim Follow-Up" },
  { icon: ShieldCheck, label: "HIPAA-Minded Data Handling" },
];

export default function TrustBar() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden py-8 lg:py-10 border-t border-b border-navy-900/50 shadow-xl">
      {/* Subtle emerald ambient wash behind the trust items */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(95,162,87,0.4), transparent 70%)"
        }}
        aria-hidden="true"
      />

      {/* Top and bottom luxury accent lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container-px mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map(({ icon: Icon, label }, index) => (
            <div 
              key={label}
              className="group relative flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-green-500/30 transition-all duration-300 shadow-sm"
            >
              {/* Numeric indicator for an editorial, high-end look */}
              <span className="absolute -top-2.5 right-3 text-[10px] font-mono tracking-widest text-white/30 group-hover:text-green-400 transition-colors">
                0{index + 1}
              </span>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400 border border-green-500/20 group-hover:scale-105 group-hover:bg-green-500 group-hover:text-navy-950 transition-all duration-300">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <h4 className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors">
                  {label}
                </h4>
                <p className="text-[11px] text-white/50 tracking-wide mt-0.5">
                  Enterprise standard
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}