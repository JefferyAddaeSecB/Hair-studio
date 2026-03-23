import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="pb-20 pt-8 sm:pb-24">
      <div className="section-shell">
        <div className="glass-card overflow-hidden bg-white px-6 py-10 text-black sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow border-black/20 bg-black/10 text-black">Bottom call to action</p>
              <h2 className="mt-5 max-w-2xl font-[var(--font-heading)] text-4xl font-semibold leading-tight text-black sm:text-5xl">
                Ready for a new look?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-black/80">
                Book your appointment today and let us transform your style.
              </p>
            </div>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rosewood px-6 py-4 text-sm font-semibold text-white transition hover:bg-rosewood/90"
            >
              Book your appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
