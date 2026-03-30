import Link from "next/link";
import { SchemaComponent } from "@/lib/schema-component";
import { breadcrumbSchema } from "@/lib/schemas";
import type { Metadata } from "next";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { SITE_BASE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `About ${SITE_NAME} — Team & Mission | Koye Feche, Addis Ababa`,
  description:
    `Meet the team behind ${SITE_NAME} in Koye Feche, Addis Ababa. Performance training, strength, HIIT, and recovery — built for athletes who show up.`,
  keywords: [
    "about Fitlab Gym and Spa",
    "gym Koye Feche",
    "fitness trainers Addis Ababa",
    "HIIT gym",
    "strength training",
  ],
  openGraph: {
    title: `About ${SITE_NAME} — The training floor`,
    description: "Elite programming and coaches in Koye Feche, Addis Ababa.",
    url: `${SITE_BASE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      <SiteNav />

      <main className="flex w-full flex-col">
        {/* Hero */}
        <section className="relative flex min-h-[min(100dvh,46rem)] items-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img
              alt="Fit Lab training floor"
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
                  About Fitlab
                </span>
              </div>
              <h1 className="text-6xl font-black uppercase italic leading-[0.85] tracking-tighter md:text-8xl">
                TRAIN WITH
                <br />
                <span className="text-primary">PURPOSE</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-sm font-medium uppercase italic leading-relaxed text-white/60 md:text-base">
                Fit Lab is a performance floor in Koye Feche — coaching,
                intensity, and community for people who want more from every
                session.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/register"
                  className="brutalist-shadow inline-flex items-center gap-4 bg-primary px-10 py-5 text-lg font-black uppercase tracking-tighter text-on-primary transition-transform hover:-translate-y-1 hover:translate-x-1 active:scale-95"
                >
                  Get started
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-background py-24 md:py-32">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6">
              <div className="brutalist-shadow relative aspect-video overflow-hidden bg-surface">
                <img
                  alt="Training at Fit Lab"
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                  src="/story.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-primary" />
                <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">
                  Our origins
                </span>
              </div>
              <h2 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter md:text-6xl">
                OUR <span className="text-primary">STORY</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm font-medium uppercase italic leading-relaxed text-white/60 md:text-base">
                <p>
                  Fit Lab started as a commitment to real training — no fluff,
                  just programming that respects your time and your goals.
                </p>
                <p>
                  Today we&apos;re the floor in Koye Feche where Addis shows up to
                  lift, sprint, recover, and level up together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-surface py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-16">
              <span className="mb-4 block text-xs font-black uppercase italic tracking-[0.4em] text-primary">
                What we stand for
              </span>
              <h2 className="text-6xl font-black uppercase italic leading-none tracking-tighter md:text-8xl">
                CORE <span className="text-primary">VALUES</span>
              </h2>
              <p className="mt-6 max-w-2xl text-sm font-medium uppercase italic leading-relaxed text-white/60 md:text-base">
                Principles that drive every session and every rep.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  icon: "groups",
                  title: "Inclusivity",
                  body: "Fitness for everyone. A welcoming space for all levels, from beginners to athletes.",
                },
                {
                  icon: "emoji_events",
                  title: "Excellence",
                  body: "Top-tier equipment and certified coaches focused on results.",
                },
                {
                  icon: "fitness_center",
                  title: "Grit",
                  body: "Discipline, sweat, and consistency — the basics that change everything.",
                },
              ].map((v) => (
                <div key={v.title} className="bg-surface-bright p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-primary text-black">
                      <span className="material-symbols-outlined text-[28px]">
                        {v.icon}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium uppercase italic leading-relaxed text-white/60">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-background py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-16 flex flex-col items-baseline justify-between gap-6 md:flex-row">
              <div>
                <span className="mb-4 block text-xs font-black uppercase italic tracking-[0.4em] text-primary">
                  Coaches
                </span>
                <h2 className="text-6xl font-black uppercase italic leading-none tracking-tighter md:text-8xl">
                  MEET THE <span className="text-primary">TEAM</span>
                </h2>
              </div>
              <Link
                className="text-xs font-black uppercase tracking-widest text-primary transition-colors hover:text-white"
                href="/#programs"
              >
                View programs
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Yared",
                  role: "Founder and CEO",
                  body: "Leads Fitlab operations and ensures a great experience for every member.",
                  img: "/Yared.jpg",
                },
                {
                  name: "Henok",
                  role: "Co-founder",
                  body: "Supports daily operations and coordinates the team across programs.",
                  img: "/Henok.jpg",
                },
                {
                  name: "Kidist",
                  role: "General Manager",
                  body: "Keeps schedules on track and helps members stay consistent.",
                  img: "/Kidist.jpg",
                },
                {
                  name: "Haile",
                  role: "Certified Trainer",
                  body: "Certified trainer focused on strength, technique, and progress.",
                  img: "/Haile.jpg",
                },
                {
                  name: "Dawit",
                  role: "Certified Trainer",
                  body: "Certified trainer helping members build durable fitness and confidence.",
                  img: "/Dawit.jpg",
                },
                {
                  name: "Mehari",
                  role: "Certified Trainer",
                  body: "Certified trainer guiding members through safe and effective training.",
                  img: "/Mehari.jpg",
                },
                {
                  name: "Genet",
                  role: "Coach",
                  body: "Coach for motivation, accountability, and coaching support.",
                  img: "/Genet.jpg",
                },
                {
                  name: "Teyba",
                  role: "Coach",
                  body: "Coach helping members stay committed and train with purpose.",
                  img: "/Teyba.jpg",
                },
              ].map((c) => (
                <div key={c.name} className="group relative aspect-[3/4] overflow-hidden bg-surface">
                  <img
                    alt={c.name}
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                    src={c.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="mb-2 text-xs font-black uppercase italic tracking-widest text-primary">
                      {c.role}
                    </p>
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/50">
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-surface py-20 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { value: "200+", label: "Members" },
                { value: "5", label: "Years of Experience" },
                { value: "10+", label: "Classes Weekly" },
                { value: "7", label: "Days Open" },
              ].map((s) => (
                <div key={s.label} className="bg-surface-bright p-8 text-center">
                  <p className="text-5xl font-black tracking-tighter text-primary">
                    {s.value}
                  </p>
                  <p className="mt-3 text-xs font-black uppercase tracking-widest text-white/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA (match Home CTA style) */}
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
                    Book your spot on the floor. Join the community that shows
                    up and does the work.
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
      </main>

      <SiteFooter />

      {/* Breadcrumb Schema */}
      <SchemaComponent
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_BASE_URL },
          { name: "About", url: `${SITE_BASE_URL}/about` },
        ])}
      />
    </div>
  );
}

