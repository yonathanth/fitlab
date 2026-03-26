"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 min-h-[var(--site-header)] border-none bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-[var(--site-header)] w-full max-w-[100rem] items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-primary lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
          <Link
            href="/"
            className="font-headline text-2xl font-black uppercase tracking-tighter text-primary"
          >
            FITLAB
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#programs"
            className="font-headline text-sm font-black uppercase tracking-widest text-primary"
          >
            Programs
          </Link>
          <Link
            href="/services"
            className="font-headline text-sm font-bold uppercase tracking-widest text-white transition-colors duration-150 hover:text-primary"
          >
            Membership
          </Link>
          <Link
            href="/about"
            className="font-headline text-sm font-bold uppercase tracking-widest text-white transition-colors duration-150 hover:text-primary"
          >
            Trainers
          </Link>
          <Link
            href="/contact"
            className="font-headline text-sm font-bold uppercase tracking-widest text-white transition-colors duration-150 hover:text-primary"
          >
            Contact
          </Link>
        </div>

        <Link
          href="/register"
          className="inline-flex items-center justify-center bg-primary px-4 py-2 font-headline text-sm font-black uppercase tracking-tighter text-on-primary transition-all hover:bg-yellow-400 hover:text-black active:scale-95 sm:px-6"
        >
          Join
        </Link>
      </nav>

      <div
        className={`border-t border-outline-variant/30 bg-black/95 px-6 py-4 md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-4">
          <Link
            href="/#programs"
            className="font-headline text-sm font-black uppercase tracking-widest text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Programs
          </Link>
          <Link
            href="/services"
            className="font-headline text-sm font-bold uppercase tracking-widest text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Membership
          </Link>
          <Link
            href="/about"
            className="font-headline text-sm font-bold uppercase tracking-widest text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Trainers
          </Link>
          <Link
            href="/contact"
            className="font-headline text-sm font-bold uppercase tracking-widest text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface-variant"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/register"
            className="bg-primary py-3 text-center font-headline text-sm font-black uppercase text-on-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join
          </Link>
        </div>
      </div>
    </header>
  );
}
