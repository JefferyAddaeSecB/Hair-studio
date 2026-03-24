import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Services"
          title="Our Services"
          description="Frontal Pony, Wig Installation & Styling, Hair Cutting & Trimming, Hair Coloring & Treatments, WEAVE-ON, Wig Making, Hair Relaxing, Training, and Bridal & Event Styling."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <MotionReveal key={service.title} delay={index * 0.08}>
              <article className="glass-card group p-7 transition hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rosewood text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-[var(--font-heading)] text-3xl font-semibold text-rosewood">
                      {service.title}
                    </h3>
                    <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-ink/75">{service.description}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>

        <p className="text-sm font-medium text-ink/60">
          Tip: Adding clear prices or “Starting from...” helps build trust with new clients.
        </p>

        <div className="flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-rosewood/15 bg-white/70 px-6 py-4 text-sm font-semibold text-rosewood transition hover:bg-white"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
