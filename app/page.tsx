import Link from "next/link";
import { SiteNav } from "./components/SiteNav";
import { SchemaComponent } from "@/lib/schema-component";
import { reviewSchema, breadcrumbSchema } from "@/lib/schemas";
import type { Metadata } from "next";

const BASE = "https://fitlab.et";

export const metadata: Metadata = {
  title: "Fit Lab — Elite Performance | Koye Feche, Addis Ababa",
  description:
    "Train without limits at Fit Lab. Advanced athletic programming in Koye Feche, Addis Ababa — HIIT, strength, recovery yoga, and combat fit.",
  openGraph: {
    title: "Fit Lab — Train Without Limits",
    description:
      "Addis Ababa's dedicated performance floor. HIIT, strength lab, yoga, and combat conditioning.",
    url: BASE,
  },
};

const heroSrc =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD469nI9SR-9vzl6pW6iuFZgxR80M78Yfc5xqcgIc4ui9VGiFlHoaQaz8XffBIOP6pfgIuCt4oVp6FnJENRbrf2AT_E0THJuw9VFdTmmOnjzjBtju0nBCqQqDJatuuM7WKCNo6c-3GoLrmZl3wkSr6s5RLcjOzA1SI8OsumM9fpccscy93pjjIn1fE8XZ6xRlLc3xmeBut7B3qDU5vIcfVYe65XvedxIZm8q7H2uVQF4USmZvvpeniNQ3nP6AFpv3qWawCglmgBHAmJ";

const imgAerobics =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAtRe5sHyVUtUYBJycS9S78Z5J-jBYkAbOu_vW9Yyu14MuYvhRb13IJ4GKsHlg_ZN96ND3a5UY_uVn8x_u3TT8Disj56FH17GBvMMkWFn8OYECA18o4jMLeAmvj8ZouMZC-zhDbAqb2eR_M0TDSiX_D710P2xDB3SqUgnHoZGktCEeO0ap17E_zB0DOw88PL8V357B_i6bq_VCeOz4sAd4ssTwqkA3LoP8f-B_46PaD87s6BE0Hzc1Nn2kbWx6xpSWa_VHys9zY2Zc4";
const imgKickboxing =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAAkLgdF1hrxKdfUVx8-917aFdZD3j44Ryq9vxCUjnHXJ81IH7fsolSARVpFqKCp1tf7YPJkW3dSaYNU2_BswfCd2ioHkZQ--xKPrpTkmMJgWfdeTE3NBMps9Ppd2EeSCxwR3qVb5jALiJa3gGAmxiryw1rhrxfVlLwTRcmM6hfcEz4GwKSUns-HXx_t_6sn_ZEXu67rkQCzsFEfbUBasz64DIA_9CvP7xoj8Q5gdLpr0_v8A5ogrWOnXSpvPRMJzWJ2uO8m9wL8yvR";
const imgSteam =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuASzAprv6YNHvZ6xUsTbjqC_CBg1AJEHQsnSxyCX9v-NxohpxyeimV3L6o09Rlap7tdprROBfHBT0P8mQRpkOGzvRoZKIcGwHG3UpLDkWg4p7YlNEwHFKmA8XnB-XV8_VwY4RrZ1s7yaibZ7908DAzar78dOIyH1_bKQ3lrzlvIqYH9oR0QCiVbdqCjrPxWiaDo5QnFEQonJ_170cm1qPKGEytsOTGnTU-MmTlfgaYqNtHVAIBeZbJ_RHtuLtaFS198Xdooo6iNABYI";
const imgSauna =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAhs8bkCOxnCk_K6G_Do_5fqM2DmhpxXwxM_dl1oKchXv0UsDsctQv3El6DUApNq4xPbjaCa5bjzTjRy9pyJK1o9JKoXxH5ueH6UoYDI0eZO9TcvgkgjSQ54aaO3esrxZNpsZI8rN4NGO9_T3x62DBGwcW5s0t2wx_NR9cDh6VeCcqeG5diaP1uVpb-WD4sVK0QVw-H8xFHXVbkvEnIEeXv-SzVMzNK0AKZGeEOo1I_hoTqKUnfNjGuP5Lkyilp7QBDdsqVqhsqtgd8";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
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
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-6 lg:grid-cols-12">
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
                  Mon - Fri
                </span>
                <span className="text-4xl font-black tracking-tighter">
                  05:00 - 21:00
                </span>
              </div>
              <div className="flex items-end justify-between border-b-4 border-on-primary/10 pb-4">
                <span className="text-2xl font-black uppercase italic tracking-tighter">
                  Saturday
                </span>
                <span className="text-4xl font-black tracking-tighter">
                  06:00 - 19:00
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
                style={{ fontVariationSettings: "'FILL' 1" } as any}
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
                  Sheger city, Koye Feche, nfas lilk
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-black uppercase italic tracking-widest text-primary">
                  Direct Line
                </p>
                <p className="text-3xl font-black tracking-tighter">
                  091 296 7931
                </p>
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

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-background px-6 py-28 md:py-32">
        <div className="mx-auto max-w-[1440px] px-10 md:px-16">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-8 text-4xl font-black uppercase italic tracking-tighter text-primary">
              Fitlab Gym &amp; Spa
            </div>
            <p className="max-w-sm text-sm font-medium uppercase italic leading-relaxed text-white/40">
              Elite performance facility dedicated to physical excellence and
              holistic recovery in the heart of Koyefeche. Built for those who
              demand more from themselves.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-black uppercase italic tracking-widest text-primary">
              Social Channels
            </h4>
            <div className="flex flex-col gap-4">
              <a
                className="text-xl font-black uppercase italic tracking-tighter transition-colors hover:text-primary"
                href="#"
              >
                Instagram
              </a>
              <a
                className="text-xl font-black uppercase italic tracking-tighter transition-colors hover:text-primary"
                href="#"
              >
                Facebook
              </a>
              <a
                className="text-xl font-black uppercase italic tracking-tighter transition-colors hover:text-primary"
                href="#"
              >
                Telegram
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-black uppercase italic tracking-widest text-primary">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-bold uppercase">091 296 7931</p>
              <p className="text-sm font-bold uppercase">hello@fitlabgym.com</p>
              <p className="mt-8 text-xs font-black uppercase tracking-widest text-white/40">
                © {currentYear} Fitlab Gym &amp; Spa
              </p>
              <Link
                href="/admin/login"
                className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-white/30 transition-colors hover:text-primary"
                title="Admin portal"
              >
                <span className="material-symbols-outlined text-sm">lock</span>
                Admin login
              </Link>
            </div>
          </div>
          </div>
        </div>
      </footer>

      <SchemaComponent
        schema={breadcrumbSchema([{ name: "Home", url: BASE }])}
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
