"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Scissors, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

// Add prefetch for critical navigation links
const criticalLinks = ["/", "/services", "/gallery", "/booking", "/contact"];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rosewood/10 bg-sand/85 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rosewood text-sand shadow-glow">
            <Scissors className="h-5 w-5" />
          </div>
          <div>
            <p className="font-[var(--font-heading)] text-2xl font-semibold leading-none text-rosewood">
              Abena
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.35em] text-terracotta">
              Hair Studio
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={criticalLinks.includes(link.href)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-white/80 hover:text-rosewood",
                pathname === link.href ? "bg-white text-rosewood shadow-sm" : "text-ink/75"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="ml-2 rounded-full bg-rosewood px-5 py-3 text-sm font-semibold text-white transition hover:bg-terracotta"
          >
            Book Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-rosewood/10 bg-white/70 text-rosewood md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-rosewood/10 bg-white/90 md:hidden">
          <div className="section-shell flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={criticalLinks.includes(link.href)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-semibold transition",
                  pathname === link.href ? "bg-sand text-rosewood" : "text-ink/80"
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
