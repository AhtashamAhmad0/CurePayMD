import { HeartHandshake } from "lucide-react";
import Button from "@/components/ui/Button";

export default function OurCommitment() {
  return (
    <section className="relative overflow-hidden bg-green-900 py-20 lg:py-28">
      <div className="absolute inset-0 bg-dot-grid opacity-20" aria-hidden="true" />
      <div className="relative container-px mx-auto max-w-[900px] text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-green-200">
          <HeartHandshake className="h-6 w-6" />
        </span>
        <h2 className="font-display mt-6 text-3xl sm:text-4xl text-white text-balance">
          Our commitment to every practice we work with
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/75">
          We commit to accurate, timely billing work; honest communication
          about what&apos;s working and what needs attention; and a partnership
          that adapts as your practice grows.
        </p>
        <div className="mt-8">
          <Button href="/contact" variant="primary" size="lg">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
