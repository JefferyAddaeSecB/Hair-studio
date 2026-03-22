import { Mail, Phone } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { locationInfo } from "@/lib/data";

export function ContactSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Visit Us Today"
            description="Reach out, find us easily, and make space for your next salon appointment."
          />

          <div className="glass-card space-y-5 p-6 sm:p-8">
            {locationInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base leading-8 text-ink/75">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-olive text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
                  Phone
                </p>
                <p className="mt-2 text-base leading-8 text-ink/75">[Your Number]</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rosewood text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
                  Email
                </p>
                <p className="mt-2 text-base leading-8 text-ink/75">[Your Email]</p>
              </div>
            </div>
          </div>
        </div>

        <MotionReveal className="glass-card p-3">
          <div className="flex h-[24rem] items-center justify-center rounded-[1.7rem] border-2 border-dashed border-rosewood/20 bg-gradient-to-br from-white/80 via-sand to-white/50 px-8 text-center sm:h-[32rem]">
            <div className="max-w-sm space-y-3">
              <p className="font-[var(--font-heading)] text-4xl font-semibold text-rosewood">
                Google Map Space
              </p>
              <p className="text-sm leading-7 text-ink/65">
                Keep this area for your Google Map embed or a real storefront photo to help local discovery.
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
