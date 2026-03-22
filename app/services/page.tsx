import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Full service menu"
          title="Salon treatments that blend style, softness, and healthy-hair care."
          description="Every service includes a consultation and finish recommendations, so your look feels tailored from the first conversation."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <MotionReveal key={service.title} delay={index * 0.08}>
              <article className="glass-card p-7 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rosewood text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h2 className="font-[var(--font-heading)] text-3xl font-semibold text-rosewood sm:text-4xl">
                      {service.title}
                    </h2>
                  </div>
                  <div className="rounded-full bg-sand px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
                    {service.price}
                  </div>
                </div>
                <p className="mt-6 max-w-2xl text-base leading-8 text-ink/75">{service.description}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
