import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Contact the studio"
            title="Reach out for appointments, collaborations, or bridal styling enquiries."
            description="Whether you’re planning your first visit or something special, we’d love to hear from you."
          />

          <div className="glass-card space-y-6 p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
                Location
              </p>
              <p className="mt-2 text-base leading-8 text-ink/75">
                18 Rose Avenue, Victoria Island, Lagos
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
                Contact
              </p>
              <p className="mt-2 text-base leading-8 text-ink/75">
                hello@velvetcoilstudio.com
                <br />
                +234 800 555 0108
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
                Opening Hours
              </p>
              <p className="mt-2 text-base leading-8 text-ink/75">
                Tue - Sat: 9:00 AM to 7:00 PM
                <br />
                Sunday: Bridal appointments only
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
