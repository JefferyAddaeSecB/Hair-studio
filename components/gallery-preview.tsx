import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { galleryPlaceholders } from "@/lib/data";

export function GalleryPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Gallery preview"
            title="Our Work Speaks for Itself"
            description="Explore our latest styles, transformations, and happy clients. From braids to sleek installs, we deliver stunning results every time."
          />
          <Link
            href="/gallery"
            className="rounded-full border border-rosewood/15 bg-white/80 px-6 py-4 text-sm font-semibold text-rosewood transition hover:bg-white"
          >
            View gallery page
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {galleryPlaceholders.map((image, index) => (
            <MotionReveal
              key={image.title}
              delay={index * 0.08}
              className={index === 0 ? "sm:col-span-2 xl:col-span-2" : ""}
            >
              <article className="glass-card overflow-hidden p-3">
                <div
                  className={`flex items-center justify-center rounded-[1.6rem] border-2 border-dashed border-rosewood/20 bg-gradient-to-br from-white/80 via-sand to-white/50 px-6 text-center ${
                    index === 0 ? "h-[20rem] sm:h-[26rem]" : "h-[20rem]"
                  }`}
                >
                  <div className="max-w-xs space-y-3">
                    <p className="font-[var(--font-heading)] text-4xl font-semibold text-rosewood">
                      {image.title}
                    </p>
                    <p className="text-sm leading-7 text-ink/65">{image.note}</p>
                  </div>
                </div>
                <div className="px-2 pb-2 pt-4">
                  <p className="font-[var(--font-heading)] text-3xl font-semibold text-rosewood">
                    {image.title}
                  </p>
                  <p className="mt-1 text-sm text-ink/60">{image.alt}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
