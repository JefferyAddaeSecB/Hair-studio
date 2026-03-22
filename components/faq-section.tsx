import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function FaqSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="Need to know"
          title="Helpful details before you step into the studio."
          description="A few quick answers to make booking and planning your visit feel easy."
        />

        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="glass-card group p-6">
              <summary className="cursor-pointer list-none font-[var(--font-heading)] text-2xl font-semibold text-rosewood">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-ink/75">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
