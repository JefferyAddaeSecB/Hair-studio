import { aboutHighlights } from "@/lib/data";

export function ExperienceStrip() {
  return (
    <section className="py-10">
      <div className="section-shell">
        <div className="glass-card grid gap-6 p-6 lg:grid-cols-3 lg:p-8">
          {aboutHighlights.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] bg-sand/70 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta text-white">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-[var(--font-heading)] text-3xl font-semibold text-rosewood">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/75">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
