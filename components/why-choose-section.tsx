import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { whyChooseUs } from "@/lib/data";

export function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Why us"
          title="Why Choose Abena Hair Studio"
          description="A salon experience built around quality service, warm care, and styling that feels personal from start to finish."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {whyChooseUs.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.08}>
              <article className="glass-card h-full p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rosewood text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[var(--font-heading)] text-2xl font-semibold text-rosewood">
                  {item.title}
                </h3>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
