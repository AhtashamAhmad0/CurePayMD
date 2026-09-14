import { Compass, Eye } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function MissionVision() {
  return (
    <section className="bg-navy-950 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px] grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ScrollReveal>
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/15 text-green-300">
              <Compass className="h-6 w-6" />
            </span>
            <h3 className="font-display mt-6 text-2xl text-white">Our Mission</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              To give medical and dental practices a reliable, transparent
              billing partner — one that reduces administrative burden and
              helps revenue flow the way it should.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/15 text-green-300">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="font-display mt-6 text-2xl text-white">Our Vision</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A healthcare industry where providers can focus fully on patient
              care because their revenue cycle is handled by a team that
              treats it with the same care.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
