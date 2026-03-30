"use client";

import Link from "next/link";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

export default function ContactPage() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      <SiteNav />

      <main className="flex w-full flex-col">
        {/* Hero */}
        <section className="relative flex min-h-[min(100dvh,46rem)] items-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img
              alt="Fit Lab location and training floor"
              className="h-full w-full object-cover grayscale opacity-40 mix-blend-luminosity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD_ubbILvAn1VdV0XBZ-NLVSyyuLxIW2utRjOhw7N6waJpLEe5oaUbicIRAlF5wF3V0KaqYDbRY8LGbTXWByUB5yGQaj94MGVgmLw7CqhoSWFbdbyPLnt5DQaFeW8ZIq6bm3AcJpIj3pAxr6iJKYEyi8eT0ppGOgYLpDOe_s_zFXmk5RtHCGJW6giVy0x8dHHouHjdyKS_H0QusXgwTVeV4nqS1eMAKSFsXHXrPt47UuOmuMaEICzeolbYspjl4ZIJvXPXywHe2Wo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-20">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-primary" />
                <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">
                  Contact
                </span>
              </div>
              <h1 className="text-6xl font-black uppercase italic leading-[0.85] tracking-tighter md:text-8xl">
                READY TO
                <br />
                <span className="text-primary">PUSH</span>?
              </h1>
              <p className="mt-6 max-w-2xl text-sm font-medium uppercase italic leading-relaxed text-white/60 md:text-base">
                Memberships, tours, or training questions — reach the Fit Lab
                team in Koye Feche.
              </p>
            </div>
          </div>
        </section>

        {/* Contact + Map */}
        <section className="bg-background py-24 md:py-32">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-14">
            <div className="bg-surface p-10">
              <p className="text-xs font-black uppercase italic tracking-widest text-primary">
                Direct
              </p>
              <h2 className="mt-3 text-4xl font-black uppercase italic tracking-tighter md:text-5xl">
                TALK TO US
              </h2>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="mb-2 text-xs font-black uppercase tracking-widest text-white/50">
                    Phone
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+251912967931"
                      className="block text-2xl font-black tracking-tighter text-primary transition-colors hover:text-white"
                    >
                      091 296 7931
                    </a>
                  </div>
                </div>

                <div className="border-t border-primary/10 pt-8">
                  <p className="mb-2 text-xs font-black uppercase tracking-widest text-white/50">
                    Location
                  </p>
                  <p className="text-xl font-bold uppercase">
                    Sheger city, Koye Feche, Nfas Lilk
                  </p>
                </div>

                <div className="border-t border-primary/10 pt-8">
                  <p className="mb-4 text-xs font-black uppercase tracking-widest text-white/50">
                    Social
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a className="border-4 border-primary px-6 py-3 text-xs font-black uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-on-primary" href="https://www.tiktok.com/@yaredbarch" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                    <a className="border-4 border-primary px-6 py-3 text-xs font-black uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-on-primary" href="https://www.tiktok.com/@yaredbarch" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                    <a className="border-4 border-primary px-6 py-3 text-xs font-black uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-on-primary" href="https://www.tiktok.com/@yaredbarch" target="_blank" rel="noopener noreferrer">
                      TikTok
                    </a>
                  </div>
                </div>
                <div className="border-t border-primary/10 pt-8">
                  <p className="mb-2 text-xs font-black uppercase tracking-widest text-white/50">
                    Opening Hours
                  </p>
                  <p className="text-sm font-bold uppercase text-white/80">
                    Mon - Fri: 05:00 - 21:00
                  </p>
                  <p className="mt-2 text-sm font-bold uppercase text-white/80">
                    Saturday: 06:00 - 19:00
                  </p>
                  <p className="mt-2 text-sm font-bold uppercase text-white/80">
                    Sunday: 08:00 - 14:00
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-surface">
              <iframe
                src="https://maps.google.com/maps?q=Koye+Feche,+Addis+Ababa,+Ethiopia&hl=en&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="h-[420px] w-full md:h-[520px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fit Lab — Koye Feche, Addis Ababa on Google Maps"
              />
            </div>
          </div>
        </section>

        {/* Quick answers */}
        <section className="bg-surface py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-16 text-center">
              <span className="mb-4 block text-xs font-black uppercase italic tracking-[0.4em] text-primary">
                Quick answers
              </span>
              <h2 className="text-6xl font-black uppercase italic leading-none tracking-tighter md:text-8xl">
                DETAILS
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  icon: "schedule",
                  title: "Opening Hours",
                  body: "Mon - Fri: 05:00 - 21:00, Saturday: 06:00 - 19:00, Sunday: 08:00 - 14:00.",
                },
                {
                  icon: "payments",
                  title: "Membership Fees",
                  body: "We offer packages for different periods to suit your schedule and budget.",
                },
                {
                  icon: "directions_car",
                  title: "Parking",
                  body: "Parking is available for members beside the building.",
                },
              ].map((card) => (
                <div key={card.title} className="bg-surface-bright p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-primary text-black">
                      <span className="material-symbols-outlined text-[28px]">
                        {card.icon}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium uppercase italic leading-relaxed text-white/60">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface py-28 md:py-36">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="brutalist-shadow border border-primary/10 bg-background p-10 md:p-16">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-primary" />
                <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">
                  Start today
                </span>
              </div>
              <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <h2 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter md:text-7xl">
                    READY TO GO
                    <br />
                    <span className="text-primary">ALL IN</span>?
                  </h2>
                  <p className="mt-6 max-w-2xl text-sm font-medium uppercase italic leading-relaxed text-white/50 md:text-base">
                    Drop by for a tour or register now — we’ll follow up fast.
                  </p>
                </div>
                <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
                  <Link
                    href="/register"
                    className="brutalist-shadow inline-flex w-full items-center justify-center gap-3 bg-primary px-10 py-5 text-lg font-black uppercase tracking-tighter text-on-primary transition-transform hover:-translate-y-1 hover:translate-x-1 active:scale-95 lg:w-auto"
                  >
                    Join Now
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

