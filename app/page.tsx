import Link from "next/link";
import { SiteNav } from "./components/SiteNav";
import { SiteFooter } from "./components/SiteFooter";
import { SchemaComponent } from "@/lib/schema-component";
import { reviewSchema, breadcrumbSchema } from "@/lib/schemas";
import type { Metadata } from "next";
import {
  BUSINESS_LOCATION_LINE,
  PHONE_DISPLAY,
  PHONE_DISPLAY_SECONDARY,
  PHONE_E164,
  PHONE_E164_SECONDARY,
  SITE_BASE_URL,
  SITE_NAME,
} from "@/lib/site";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Elite Performance | Koye Feche, Addis Ababa`,
  description:
    `Train without limits at ${SITE_NAME}. Advanced athletic programming in Koye Feche, Addis Ababa — HIIT, strength, recovery yoga, and combat fit.`,
  openGraph: {
    title: `${SITE_NAME} — Train Without Limits`,
    description:
      "Addis Ababa's dedicated performance floor. HIIT, strength lab, yoga, and combat conditioning.",
    url: SITE_BASE_URL,
  },
};

const heroSrc =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBD_ubbILvAn1VdV0XBZ-NLVSyyuLxIW2utRjOhw7N6waJpLEe5oaUbicIRAlF5wF3V0KaqYDbRY8LGbTXWByUB5yGQaj94MGVgmLw7CqhoSWFbdbyPLnt5DQaFeW8ZIq6bm3AcJpIj3pAxr6iJKYEyi8eT0ppGOgYLpDOe_s_zFXmk5RtHCGJW6giVy0x8dHHouHjdyKS_H0QusXgwTVeV4nqS1eMAKSFsXHXrPt47UuOmuMaEICzeolbYspjl4ZIJvXPXywHe2Wo";

const imgAerobics =
  "https://plus.unsplash.com/premium_photo-1661611110468-c592daec0a15?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&v=2";
const imgKickboxing =
  "https://images.unsplash.com/photo-1758778932703-7bfaaf1c42cd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const imgSteam =
  "https://images.unsplash.com/photo-1755610146399-2bf78b0c1443?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const imgSauna =
  "https://images.unsplash.com/photo-1749561531832-3d79bad2ffab?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative flex min-h-[min(100dvh,46rem)] items-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Athlete Training"
            className="h-full w-full object-cover grayscale opacity-40 mix-blend-luminosity"
            src={heroSrc}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-10">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-primary" />
              <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">
                Est. 2024
              </span>
            </div>
            <h1 className="mb-12 text-6xl font-black uppercase italic leading-[0.85] tracking-tighter md:text-8xl lg:text-9xl">
              SHAPE YOUR <span className="text-primary">BODY</span>,
              <br />
              TRANSFORM YOUR <span className="text-outline">LIFE</span>
            </h1>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/register"
                className="brutalist-shadow flex items-center gap-4 bg-primary px-12 py-6 text-xl font-black uppercase tracking-tighter text-on-primary transition-all hover:scale-105 active:scale-95"
              >
                Join Now
                <span className="material-symbols-outlined font-black">
                  arrow_forward
                </span>
              </Link>
              <div className="flex flex-col justify-center">
                <p className="mb-1 text-xs font-black uppercase italic tracking-widest text-primary">
                  Open Until 9 PM
                </p>
                <p className="text-sm font-medium text-white/60">
                  Daily grinders welcome. No excuses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Kinetic Marquee */}
        <div className="absolute bottom-10 left-0 w-full overflow-hidden border-y border-white/5 bg-primary/5 py-4">
          <div className="marquee flex items-center gap-12">
            <span className="text-outline text-6xl font-black uppercase italic tracking-tighter opacity-20">
              No Pain No Gain
            </span>
            <span className="text-outline text-6xl font-black uppercase italic tracking-tighter opacity-20">
              Elite Strength
            </span>
            <span className="text-outline text-6xl font-black uppercase italic tracking-tighter opacity-20">
              Precision Recovery
            </span>
            <span className="text-outline text-6xl font-black uppercase italic tracking-tighter opacity-20">
              No Pain No Gain
            </span>
            <span className="text-outline text-6xl font-black uppercase italic tracking-tighter opacity-20">
              Elite Strength
            </span>
            <span className="text-outline text-6xl font-black uppercase italic tracking-tighter opacity-20">
              Precision Recovery
            </span>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="mx-auto max-w-[1440px] overflow-hidden px-6 py-32">
        <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <span className="mb-4 block text-xs font-black uppercase italic tracking-[0.4em] text-primary">
              What we offer
            </span>
            <h2 className="text-6xl font-black uppercase italic leading-none tracking-tighter md:text-8xl">
              Core <span className="text-primary">Services</span>
            </h2>
          </div>
          <div className="hidden text-right md:block">
            <p className="max-w-xs text-sm font-bold uppercase italic text-white/40">
              Engineered for results. Built for the dedicated.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Aerobic */}
          <div className="group relative aspect-[3/4] overflow-hidden bg-surface">
            <img
              alt="Aerobics"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              src={imgAerobics}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <p className="mb-2 text-xs font-black uppercase italic tracking-widest text-primary">
                Conditioning
              </p>
              <h3 className="text-4xl font-black uppercase italic tracking-tighter">
                Aerobics
              </h3>
            </div>
          </div>

          {/* Kick Boxing */}
          <div className="group relative aspect-[3/4] overflow-hidden bg-surface">
            <img
              alt="Kick Boxing"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              src={imgKickboxing}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <p className="mb-2 text-xs font-black uppercase italic tracking-widest text-primary">
                Combat
              </p>
              <h3 className="text-4xl font-black uppercase italic tracking-tighter">
                Kick Boxing
              </h3>
            </div>
          </div>

          {/* Steam */}
          <div className="group relative aspect-[3/4] overflow-hidden bg-surface">
            <img
              alt="Steam Room"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              src={imgSteam}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <p className="mb-2 text-xs font-black uppercase italic tracking-widest text-primary">
                Recovery
              </p>
              <h3 className="text-4xl font-black uppercase italic tracking-tighter">
                Steam
              </h3>
            </div>
          </div>

          {/* Sauna */}
          <div className="group relative aspect-[3/4] overflow-hidden bg-surface">
            <img
              alt="Sauna"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              src={imgSauna}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <p className="mb-2 text-xs font-black uppercase italic tracking-widest text-primary">
                Wellness
              </p>
              <h3 className="text-4xl font-black uppercase italic tracking-tighter">
                Sauna
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Contact Section */}
      <section className="relative overflow-hidden bg-primary py-32 text-on-primary">
        <div className="pointer-events-none absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-5">
          <span className="text-[30rem] font-black uppercase italic leading-none tracking-tighter">
            Volt
          </span>
        </div>
        <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 gap-24 px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-12 text-6xl font-black uppercase italic leading-[0.85] tracking-tighter md:text-8xl">
              YOUR WORKOUT,
              <br />
              YOUR TIME.
            </h2>
            <div className="max-w-md space-y-8">
              <div className="flex items-end justify-between border-b-4 border-on-primary/10 pb-4">
                <span className="text-2xl font-black uppercase italic tracking-tighter">
                  Mon - Sat
                </span>
                <span className="text-4xl font-black tracking-tighter">
                  05:00 - 21:00
                </span>
              </div>
              <div className="flex items-end justify-between border-b-4 border-on-primary/10 pb-4">
                <span className="text-2xl font-black uppercase italic tracking-tighter">
                  Sunday
                </span>
                <span className="text-4xl font-black tracking-tighter">
                  08:00 - 14:00
                </span>
              </div>
            </div>
          </div>

          <div className="brutalist-shadow bg-background p-12 text-on-background">
            <div className="mb-8 flex items-center gap-4">
              <span
                className="material-symbols-outlined text-4xl font-black text-primary"
                style={{ fontVariationSettings: "'FILL' 1" } as CSSProperties}
              >
                bolt
              </span>
              <h3 className="text-3xl font-black uppercase italic tracking-tighter">
                Visit Us Today
              </h3>
            </div>
            <div className="mb-12 space-y-8">
              <div>
                <p className="mb-1 text-xs font-black uppercase italic tracking-widest text-primary">
                  Location
                </p>
                <p className="text-xl font-bold uppercase">
                  {BUSINESS_LOCATION_LINE}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-black uppercase italic tracking-widest text-primary">
                  Direct Line
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                  <a
                    href={`tel:${PHONE_E164}`}
                    className="text-3xl font-black tracking-tighter text-on-background transition-colors hover:text-primary"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href={`tel:${PHONE_E164_SECONDARY}`}
                    className="text-3xl font-black tracking-tighter text-on-background transition-colors hover:text-primary"
                  >
                    {PHONE_DISPLAY_SECONDARY}
                  </a>
                </div>
              </div>
            </div>
            <button
              className="w-full bg-primary py-6 text-2xl font-black uppercase tracking-tighter text-on-primary transition-transform hover:-translate-y-2 hover:translate-x-2 shadow-[8px_8px_0px_0px_white]"
              type="button"
            >
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Call to action */}
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
                  Join the most dedicated training floor in Koyefeche. Show up.
                  Put in the work. We’ll handle the rest.
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

      <SiteFooter />

      <SchemaComponent
        schema={breadcrumbSchema([{ name: "Home", url: SITE_BASE_URL }])}
      />

      <SchemaComponent
        schema={reviewSchema({
          author: "Leul Derebe",
          rating: 5,
          reviewBody:
            "The coaching and intensity at Fit Lab are next level. Best investment I've made in my training.",
          reviewDate: "2022-03-15",
        })}
      />
      <SchemaComponent
        schema={reviewSchema({
          author: "Sara Tesfaye",
          rating: 5,
          reviewBody:
            "Schedule works for my life and the floor is always ready to train. Highly recommend.",
          reviewDate: "2023-06-20",
        })}
      />
      <SchemaComponent
        schema={reviewSchema({
          author: "Michael Alemu",
          rating: 5,
          reviewBody:
            "Serious community, serious results. I look forward to every session.",
          reviewDate: "2021-11-10",
        })}
      />
    </div>
  );
}
