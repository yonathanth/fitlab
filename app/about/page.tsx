import Link from "next/link";
import { SchemaComponent } from "@/lib/schema-component";
import { breadcrumbSchema } from "@/lib/schemas";
import type { Metadata } from "next";
import { SiteNav } from "../components/SiteNav";

const BASE = "https://fitlab.et";

export const metadata: Metadata = {
  title: "About Fit Lab — Team & Mission | Koye Feche, Addis Ababa",
  description:
    "Meet the coaches behind Fit Lab in Koye Feche, Addis Ababa. Performance training, strength, HIIT, and recovery — built for athletes who show up.",
  keywords: [
    "about Fit Lab",
    "gym Koye Feche",
    "fitness trainers Addis Ababa",
    "HIIT gym",
    "strength training",
  ],
  openGraph: {
    title: "About Fit Lab — The training floor",
    description: "Elite programming and coaches in Koye Feche, Addis Ababa.",
    url: `${BASE}/about`,
  },
};

export default function AboutPage() {
  const currentYear = new Date().getFullYear();

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
                  className="absolute inset-0 h-full w-full object-cover grayscale opacity-70"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAypHCKA2wkbSQW5MJ-9Kk_KRvsSSfjRw6edahmzda33t6axAFd-fj-GJgL690V8EAx-zzxbjUwApMnf5_jVlGlrDMfjFzpRY0vmuQrNQjQU3VHE7WzskYBwuaW6mtcD5wsjzF8f66809yBrEJp88N6BsWR2rzSTNii9gtlAEMp3KVaI7amwTP9_o5vUemN7DPpgEEcIUisQnAyhlNFYPoDwHTKM0KFbtV-w941GSUxGn34QvozBVpeCHBRTosmiSy9PLRlWxnskkk"
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
                  name: "Dawit Kebede",
                  role: "Head Coach",
                  body: "Functional strength and conditioning.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv71iVhg12k8rkHwH6iTeEhyZKtA9NXGvbhRP7QtfhxF4zsd8NVo24eNw3bSPVlKbsKrm3TPYo_amHcxQZxFCXoYt9zqQ7pgiBknIwo4hzoAArT8kpPH86HaZ0BgMbihKKlvqUjKyu-Af8oyY8IUuq7kwzg2JbbknWB9Qs03oP9bGm2fRbZvKYdwnEbCVZQIOQf6yjKt2CVOEe6E0CgAxa2acVV1Pnn3TAvqcvFbaBLs3qWCBFflcDeo5ZcbcEyezVRg7ZnMM6CAU",
                },
                {
                  name: "Sara Tesfaye",
                  role: "Yoga & Mobility",
                  body: "Balance and flexibility for your routine.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvZnuDIFNDyl0YBYPyhmnvm_-L_bnuPmknX8xehmFjT5_2gjmnfDMWmOLJ8P5eW0RiD6luFJKFrscbyL3sD21yqJq6PCkTCzo2MZfWJ9U06gtnDDvMWwDNVyRXAIsbgHmc8WFjlRa1EoEXJHBwWkJ8sqY_6IDRkv-d0m2owwyFpoF5d9ZTP3iNtS3gD9413r8owtY3GDWSDLeg-jZdq-PpLkmbdwiYH2vOkk9rfG_zymRxD1VN3BmIgjY_m7_f6cE2M9TYnv_QzI4",
                },
                {
                  name: "Michael Alemu",
                  role: "HIIT Specialist",
                  body: "High-energy workouts to build endurance.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbyVimiohS3_BIQdPVh-F50VZJeccgNELawx1bLDbftpEafrzVBs3W-4cszYgSNuB2kaMX7Uw6VHcWmiv3RykenGvzh3sAwEERS7z6tcuiOcVOQ0LhXzUKPRUGSQ9QTLfAoh6DP-Gwv8oeUBCwNI0lm7mxuYSMhXzHDawKMiZg4A8g18xJGVdgLycXdqqvsi_xZdU0OQUkvQHy05aNXy3rzKt1BqHHAzwLxyZETwEeku412B0KKYCMf5Tfz_ueIsbPOUlUJ0ABw6w",
                },
                {
                  name: "Bethlehem Haile",
                  role: "Nutrition & Wellness",
                  body: "Fueling habits for optimal performance.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXFr8iDXP6wEI_Rdad1WmnE7RhJZ5D2DYESkUaBd9wPevNSBcC2btIFBGtJmMTGLBepaPq9RvPz2ysaDyD20bQIuG0pTywcP0AWmi6S3nymiabdV8z6pujYdo50QSccPF3BVAuic4hxHvBE0gvj4nbOd393wIC5Ju3_o9wspPDJVn70sExWXtpEPZhc8mB9gfd8ejKe33Axyqcowccv-q2_szpfwTGhCPxSW9EMZ7AE8qlJ6NNVCxg6-5GIzrb2GaH5ILsRUVnovc",
                },
              ].map((c) => (
                <div key={c.name} className="group relative aspect-[3/4] overflow-hidden bg-surface">
                  <img
                    alt={c.name}
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
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

      {/* Footer (match Home) */}
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

      {/* Breadcrumb Schema */}
      <SchemaComponent
        schema={breadcrumbSchema([
          { name: "Home", url: BASE },
          { name: "About", url: `${BASE}/about` },
        ])}
      />
    </div>
  );
}

