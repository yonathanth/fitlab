"use client";

import Link from "next/link";

type DurationKey = "1 month" | "2 month" | "3 month" | "6 month" | "yearly";

type PlanCell = {
  basePrice: number;
  aerobicsPrice?: number;
  includes: string[];
};

type TimeSlot = {
  title: string;
  hours: string;
  plans: Record<DurationKey, PlanCell>;
};

const timeSlots: TimeSlot[] = [
  {
    title: "Morning",
    hours: "12:00 - 11:00",
    plans: {
      "1 month": {
        basePrice: 2500,
        aerobicsPrice: 3000,
        includes: ["Gym", "Steam & sauna", "Treadmill"],
      },
      "2 month": {
        basePrice: 4800,
        aerobicsPrice: 5800,
        includes: ["Gym", "Steam & sauna", "Treadmill"],
      },
      "3 month": {
        basePrice: 7100,
        aerobicsPrice: 8600,
        includes: ["Gym", "Steam & sauna", "Treadmill"],
      },
      "6 month": {
        basePrice: 12000,
        aerobicsPrice: 15000,
        includes: ["Gym", "Steam & sauna", "Treadmill"],
      },
      yearly: {
        basePrice: 22000,
        aerobicsPrice: 28000,
        includes: ["Gym", "Steam & sauna", "Treadmill"],
      },
    },
  },
  {
    title: "Peak hour",
    hours: "3:00 - 11:00",
    plans: {
      "1 month": { basePrice: 1800, includes: ["Gym", "Steam & sauna"] },
      "2 month": { basePrice: 3400, includes: ["Gym", "Steam & sauna"] },
      "3 month": { basePrice: 5000, includes: ["Gym", "Steam & sauna"] },
      "6 month": { basePrice: 9000, includes: ["Gym", "Steam & sauna"] },
      yearly: { basePrice: 16000, includes: ["Gym", "Steam & sauna"] },
    },
  },
  {
    title: "Full time",
    hours: "(Any time)",
    plans: {
      "1 month": {
        basePrice: 3000,
        aerobicsPrice: 3500,
        includes: ["Gym", "Steam & sauna", "Treadmill"],
      },
      "2 month": {
        basePrice: 5600,
        aerobicsPrice: 6600,
        includes: ["Gym", "Steam & sauna", "Treadmill"],
      },
      "3 month": {
        basePrice: 8000,
        aerobicsPrice: 9500,
        includes: ["Gym", "Steam & sauna", "Treadmill"],
      },
      "6 month": {
        basePrice: 14000,
        aerobicsPrice: 17000,
        includes: ["Gym", "Steam & sauna", "Treadmill"],
      },
      yearly: {
        basePrice: 25000,
        aerobicsPrice: 31000,
        includes: ["Gym", "Steam & sauna", "Treadmill"],
      },
    },
  },
];

export function ServicesContent() {
  const durations: DurationKey[] = ["1 month", "2 month", "3 month", "6 month", "yearly"];

  return (
    <>
      <main className="flex w-full flex-col">
        {/* Hero (match Home/About) */}
        <section className="relative flex min-h-[min(100dvh,46rem)] items-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img
              alt="Gym membership"
              className="h-full w-full object-cover grayscale opacity-40 mix-blend-luminosity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQy8uWfen1a5reLmuZgSYFiVPWaMBm424J1T-y1fSD-hloamzu1EufE9yV6Dp6c2LhfmmG0Er9PX1nzJWpfH6-k9Ddj1BZ6VZcaaoT4yg4ikqJxjpiMxsaQNXQ7AUvj7rUav_wy_WSa485f00E3F51oX7VwGAVc5rGTg18i6iYsU6CpEfan62iPK1omCgATms9p9nxouniRjGrKpXiG4yX5CLlcGlLkDiAH7s_P-uJ5Ni8pxB0x2znL_mYpgf9B_Jaqd85nSHpILs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-20">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-primary" />
                <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">
                  Membership
                </span>
              </div>
              <h1 className="text-6xl font-black uppercase italic leading-[0.85] tracking-tighter md:text-8xl">
                PICK YOUR <span className="text-primary">PLAN</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-sm font-medium uppercase italic leading-relaxed text-white/60 md:text-base">
                Transparent pricing for the Fit Lab floor in Koye Feche. No
                games — just access that matches how you train.
              </p>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="bg-background py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-16">
              <span className="mb-4 block text-xs font-black uppercase italic tracking-[0.4em] text-primary">
                Membership package
              </span>
              <h2 className="text-6xl font-black uppercase italic leading-none tracking-tighter md:text-8xl">
                PRICING
              </h2>
              <p className="mt-6 max-w-2xl text-sm font-medium uppercase italic leading-relaxed text-white/60 md:text-base">
                Pick a time slot, then choose your duration. Aerobics add-on is
                available on Morning and Full time packages.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {timeSlots.map((slot) => (
                <div key={slot.title} className="bg-surface p-10">
                  <p className="text-xs font-black uppercase italic tracking-widest text-primary">
                    {slot.title}
                  </p>
                  <h3 className="mt-3 text-3xl font-black uppercase italic tracking-tighter">
                    {slot.hours}
                  </h3>

                  <div className="mt-8 space-y-3">
                    {slot.plans["1 month"].includes.map((inc) => (
                      <div
                        key={inc}
                        className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/70"
                      >
                        <span className="material-symbols-outlined text-primary">
                          check_circle
                        </span>
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 space-y-4">
                    {durations.map((d) => {
                      const plan = slot.plans[d];
                      const baseLabel = `${slot.title} • ${d}`;
                      const addOnLabel = plan.aerobicsPrice
                        ? `${slot.title} • ${d} • +Aerobics`
                        : null;

                      return (
                        <div key={d} className="border-t border-primary/10 pt-4">
                          <div className="flex items-end justify-between gap-4">
                            <span className="text-sm font-black uppercase tracking-widest text-white">
                              {d}
                            </span>
                            <span className="text-xl font-black tracking-tighter text-primary">
                              ETB {plan.basePrice.toLocaleString()}
                            </span>
                          </div>

                          {plan.aerobicsPrice && (
                            <div className="mt-2 flex items-end justify-between gap-4">
                              <span className="text-xs font-black uppercase tracking-widest text-white/60">
                                + Aerobics
                              </span>
                              <span className="text-sm font-black tracking-tighter text-primary">
                                ETB {plan.aerobicsPrice.toLocaleString()}
                              </span>
                            </div>
                          )}

                          <div className="mt-3 flex flex-col gap-2">
                            <Link
                              href={`/register?package=${encodeURIComponent(
                                baseLabel
                              )}`}
                              className="brutalist-shadow inline-flex w-full items-center justify-center bg-primary px-6 py-3 text-xs font-black uppercase tracking-widest text-on-primary transition-transform hover:-translate-y-1 hover:translate-x-1 active:scale-95"
                            >
                              Join
                            </Link>

                            {addOnLabel && (
                              <Link
                                href={`/register?package=${encodeURIComponent(
                                  addOnLabel
                                )}`}
                                className="inline-flex w-full items-center justify-center border-4 border-primary px-6 py-3 text-xs font-black uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-on-primary"
                              >
                                + Aerobics
                              </Link>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-16 text-center">
              <span className="mb-4 block text-xs font-black uppercase italic tracking-[0.4em] text-primary">
                Questions
              </span>
              <h2 className="text-6xl font-black uppercase italic leading-none tracking-tighter md:text-8xl">
                FAQ
              </h2>
            </div>

            <div className="mx-auto max-w-4xl space-y-4">
              <details className="group bg-surface-bright p-8">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-black uppercase tracking-widest text-white">
                  <span>Can I freeze my membership?</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="mt-4 text-sm font-medium uppercase italic leading-relaxed text-white/60">
                  Yes. Any member may freeze their membership by specifying the
                  maximum period they will be away. Please speak to our front
                  desk to arrange a freeze.
                </div>
              </details>

              <details className="group bg-surface-bright p-8">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-black uppercase tracking-widest text-white">
                  <span>Are there any hidden fees?</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="mt-4 text-sm font-medium uppercase italic leading-relaxed text-white/60">
                  No hidden fees, just 350 registration fee.
                </div>
              </details>

              <details className="group bg-surface-bright p-8">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-black uppercase tracking-widest text-white">
                  <span>Can I switch plans later?</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="mt-4 text-sm font-medium uppercase italic leading-relaxed text-white/60">
                  Yes. Members may switch to a different plan at any time. Please
                  visit the front desk or contact us to update your membership.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* CTA (match Home/About) */}
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
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


