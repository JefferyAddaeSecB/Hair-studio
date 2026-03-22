import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { teamMembers } from "@/lib/data";

export function TeamSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Our team"
          title="Meet Our Stylists"
          description="Our talented team of stylists is passionate about hair and dedicated to making every client feel amazing. Each stylist brings unique skills and creativity to deliver exceptional results."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member, index) => (
            <MotionReveal key={`${member.name}-${index}`} delay={index * 0.1}>
              <article className="glass-card p-7">
                <div className="flex h-72 items-center justify-center rounded-[1.7rem] border-2 border-dashed border-rosewood/20 bg-gradient-to-br from-white/80 to-sand/80">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rosewood text-white">
                      <member.icon className="h-9 w-9" />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-ink/60">{member.note}</p>
                  </div>
                </div>
                <h3 className="mt-6 font-[var(--font-heading)] text-3xl font-semibold text-rosewood">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink/70">{member.specialty}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
