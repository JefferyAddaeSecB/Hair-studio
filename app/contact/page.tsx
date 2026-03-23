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
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
