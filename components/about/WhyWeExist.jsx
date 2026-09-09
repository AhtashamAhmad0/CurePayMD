import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function WhyWeExist() {
  return (
    <section className="bg-sand-50 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Why We Exist"
          title="Billing shouldn't be the reason a great practice struggles financially"
          description="Too often, strong clinical care is undercut by inefficient billing — delayed claims, missed follow-up, and denials that go unaddressed. CurePayMD exists to close that gap."
        />
        <ScrollReveal delay={100}>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "For Providers", copy: "Less time on billing administration, more time with patients." },
              { title: "For Practice Managers", copy: "A predictable, transparent revenue cycle process to rely on." },
              { title: "For Patients", copy: "Clearer billing communication and fewer avoidable errors." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-navy-900/8 bg-white p-6">
                <h3 className="text-sm font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.copy}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
