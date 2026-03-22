import { Clock3, Sparkles } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { SectionHeading } from "@/components/section-heading";

export default function BookingPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell grid gap-10 xl:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Reserve your visit"
            title="Tell us what you need and we’ll shape the perfect appointment."
            description="Submit your preferred service and date. The studio will confirm timing, prep guidance, and any personalized recommendations."
          />

          <div className="glass-card space-y-5 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta text-white">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-[var(--font-heading)] text-3xl font-semibold text-rosewood">
                  Studio Hours
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink/75">
                  Tuesday to Saturday, 9:00 AM to 7:00 PM. Sunday appointments are available for bridal and event requests.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-olive text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-[var(--font-heading)] text-3xl font-semibold text-rosewood">
                  Before You Arrive
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink/75">
                  For color and treatment appointments, arrive with inspiration photos if you have them. We’ll handle the rest together.
                </p>
              </div>
            </div>
          </div>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}
