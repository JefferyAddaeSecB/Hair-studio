import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-rosewood/10 bg-white/70">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <div>
            <p className="font-[var(--font-heading)] text-3xl font-semibold text-rosewood">
              Abena
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.35em] text-terracotta">
              Hair Studio
            </p>
          </div>
          <p className="max-w-md text-sm leading-7 text-ink/75">
            Elevated hair care, polished styling, and a warm studio experience for women who want beauty with intention.
          </p>
        </div>

        <div className="space-y-4 text-sm text-ink/75">
          <p className="font-semibold uppercase tracking-[0.25em] text-terracotta">Visit</p>
          <p className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-rosewood" />
            Ojeine St, Accra
          </p>
          <p className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-rosewood" />
            +233 (0) 246 447 824
          </p>
          <p className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-rosewood" />
            abenahairstudio@gmail.com
          </p>
        </div>

        <div className="space-y-4 text-sm text-ink/75">
          <p className="font-semibold uppercase tracking-[0.25em] text-terracotta">Explore</p>
          <div className="flex flex-col gap-3">
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/booking">Book an Appointment</Link>
            <Link href="/contact" className="inline-flex items-center gap-2">
              <Instagram className="h-4 w-4 text-rosewood" />
              @abenahairstudio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
