import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroStats } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="hero-grid overflow-hidden pb-20 pt-10 sm:pb-24 sm:pt-16">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-rise space-y-8">
          <span className="eyebrow">Abena Hair Studio</span>
          <div className="space-y-6">
            <h1 className="max-w-3xl font-[var(--font-heading)] text-5xl font-semibold leading-[0.95] text-rosewood sm:text-6xl lg:text-7xl">
              Where Beauty Meets Confidence
            </h1>
            <p className="max-w-2xl text-base leading-8 text-ink/75 sm:text-lg">
              At Abena Hair Studio, we specialize in transforming your look with precision, creativity, and care. From everyday styling to luxury hair treatments, we bring out the best version of you.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rosewood px-6 py-4 text-sm font-semibold text-white transition hover:bg-terracotta"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-rosewood/15 bg-white/80 px-6 py-4 text-sm font-semibold text-rosewood transition hover:bg-white"
            >
              View Our Work
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="glass-card p-5">
                <p className="font-[var(--font-heading)] text-4xl font-semibold text-rosewood">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-rise lg:justify-self-end">
          <div className="absolute -left-8 top-8 hidden h-24 w-24 rounded-full bg-terracotta/20 blur-2xl sm:block" />
          <div className="absolute -right-10 bottom-10 hidden h-28 w-28 rounded-full bg-olive/20 blur-2xl sm:block" />
          <div className="glass-card relative overflow-hidden p-3">
            <div className="animate-float flex h-[28rem] items-center justify-center rounded-[1.7rem] border-2 border-dashed border-rosewood/20 bg-gradient-to-br from-white/80 via-sand to-white/50 px-8 text-center sm:h-[34rem]">
              <div className="max-w-sm space-y-3">
                <p className="font-[var(--font-heading)] text-4xl font-semibold text-rosewood">
                  Hero Image Space
                </p>
                <p className="text-sm leading-7 text-ink/65">
                  Insert a real hero photo of your salon, stylists, or client transformation here.
                </p>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 max-w-xs rounded-[1.5rem] bg-white/88 p-5 shadow-xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
                Photo placeholder
              </p>
              <p className="mt-3 text-sm leading-7 text-ink/75">
                Keep this image area for authentic salon photos. Real pictures help clients trust your work before they book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
