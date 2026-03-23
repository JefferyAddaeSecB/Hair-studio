import Image from "next/image";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { galleryImages } from "@/lib/data";

export default function GalleryPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Style gallery"
          title="Looks that show our range, texture sensitivity, and polished finish work."
          description="Use this gallery to explore mood, finish, and shape before your next appointment."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <MotionReveal
              key={image.title}
              delay={index * 0.07}
              className={index % 5 === 0 ? "sm:col-span-2" : ""}
            >
              <article className="glass-card overflow-hidden p-3">
                <div className="relative overflow-hidden rounded-[1.7rem]">
                  {image.src ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={900}
                      height={900}
                      className={`w-full object-cover transition duration-700 hover:scale-105 ${
                        index % 5 === 0 ? "h-[20rem] sm:h-[25rem]" : "h-[20rem]"
                      }`}
                    />
                  ) : (
                    <div
                      className={`w-full bg-gradient-to-br from-sand to-white/50 flex items-center justify-center text-rosewood font-semibold ${
                        index % 5 === 0 ? "h-[20rem] sm:h-[25rem]" : "h-[20rem]"
                      }`}
                    >
                      Image Placeholder
                    </div>
                  )}
                </div>
                <div className="px-2 pb-2 pt-4">
                  <p className="font-[var(--font-heading)] text-3xl font-semibold text-rosewood">
                    {image.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink/60">{image.alt}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
