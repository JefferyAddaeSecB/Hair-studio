import { Quote } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Reviews build trust, increase bookings, and help new clients feel confident choosing your salon."
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <MotionReveal key={item.name} delay={index * 0.1}>
              <article className="glass-card p-7">
                <Quote className="h-8 w-8 text-terracotta" />
                <p className="mt-5 text-base leading-8 text-ink/75">{item.quote}</p>
                <div className="mt-6">
                  <p className="font-semibold text-rosewood">{item.name}</p>
                  <p className="text-sm text-ink/60">{item.role}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
