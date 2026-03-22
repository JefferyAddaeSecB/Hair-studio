import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { aboutHighlights } from "@/lib/data";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="About"
            title="About Abena Hair Studio"
            description="Abena Hair Studio is a modern hairdressing salon dedicated to delivering high-quality hair care and styling services. We combine creativity, professionalism, and attention to detail to give every client a unique and satisfying experience."
          />
          <p className="max-w-2xl text-base leading-8 text-ink/75 sm:text-lg">
            Whether you&apos;re looking for a simple touch-up or a complete transformation, our skilled stylists are here to make you feel confident and beautiful.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutHighlights.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <div className="glass-card h-full p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-semibold text-rosewood">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-ink/70">{item.copy}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>

        <MotionReveal className="glass-card p-3">
          <div className="flex h-[24rem] items-center justify-center rounded-[1.7rem] border-2 border-dashed border-rosewood/20 bg-gradient-to-br from-white/80 via-sand to-white/50 px-8 text-center sm:h-[30rem]">
            <div className="max-w-sm space-y-3">
              <p className="font-[var(--font-heading)] text-4xl font-semibold text-rosewood">
                Salon Photo Space
              </p>
              <p className="text-sm leading-7 text-ink/65">
                Replace this area with a real interior, stylist-at-work, or client transformation photo from Abena Hair Studio.
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
