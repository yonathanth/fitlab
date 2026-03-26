"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { faqContent } from "@/lib/faq-content";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All", icon: "star" },
    { id: "membership", label: "Membership", icon: "card_membership" },
    { id: "trainers", label: "Trainers", icon: "fitness_center" },
    { id: "payments", label: "Payments", icon: "payments" },
    { id: "timings", label: "Timings", icon: "schedule" },
  ];

  const faqs = [...faqContent];

  const filteredFAQs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <main className="flex w-full flex-col">
        <section className="relative isolate min-h-[min(100dvh,38rem)] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat bg-[center_22%] opacity-45 grayscale"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBi2AbKrUfHAPWfH7raXm44atZxmUr1fnJlKWKmY-qT0_fgSAERVdCAYnpGyC4qYEHmYZM2vsWTE7qkSYuh3FqATfVDF_ITKRRsfai2psESYK3VfslGYRqA7r47c3Jq2D-8T-TXuw0gKupCIVR5b0t5IVfzvEiOE5bEZNhBDP3OjDpt_K4-l8GbjS1J3I8TkENFDI4HUQAgo2zPLn-NGrAPMe1kTva3ZjTfITqfq6oWjl4YiHvzaxdG2n0kAdvsUQzdETgQShoyC3Y')",
              }}
            />
            <div className="hero-gradient pointer-events-none absolute inset-0 z-[1]" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-surface via-surface/35 to-transparent" />
          </div>
          <div
            className="relative z-10 flex min-h-[min(100dvh,38rem)] flex-col"
            style={{ paddingTop: "var(--site-header)" }}
          >
            <div className="site-container flex flex-1 flex-col justify-center py-14 md:py-20">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="font-headline text-4xl font-black uppercase leading-tight tracking-tighter text-white sm:text-5xl lg:text-6xl">
                  Got questions? <br />
                  <span className="text-glow italic text-primary">
                    We&apos;ve got answers.
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-on-surface-variant sm:text-lg">
                  Memberships, payments, trainers, and access — everything about
                  Fit Lab in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-background-dark pb-20 pt-10 md:pt-14">
          <div className="site-container">
            <div className="mx-auto max-w-4xl">
          {/* Category Filters */}
          <div className="flex overflow-x-auto no-scrollbar gap-3 pb-8 justify-start md:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`font-headline flex items-center gap-2 whitespace-nowrap border-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all ${
                  activeCategory === category.id
                    ? "border-primary bg-primary text-on-primary"
                    : "border-outline-variant bg-card-dark text-white/70 hover:border-primary hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {category.icon}
                </span>
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="flex flex-col gap-4">
            {filteredFAQs.map((faq) => (
              <details
                key={faq.id}
                className="group overflow-hidden border border-outline-variant bg-surface-dark open:border-primary transition-all duration-300"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 list-none outline-none focus:bg-card-dark">
                  <span className="text-white font-bold text-lg">
                    {faq.question}
                  </span>
                  <div className="flex size-8 items-center justify-center bg-card-dark transition-colors group-open:bg-primary group-open:text-on-primary">
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-300">
                      expand_more
                    </span>
                  </div>
                </summary>
                <div className="px-5 pb-6 text-white/70 leading-relaxed border-t border-surface-dark-lighter group-open:border-transparent pt-2">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
            </div>
          </div>
        </section>

        <section className="border-t border-outline-variant/30 bg-surface-container-low">
          <div className="site-container py-16 md:py-20">
            <div className="relative overflow-hidden border border-outline-variant bg-card-dark p-8 md:p-12">
              <div className="absolute -right-10 -top-10 size-40 bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 size-40 bg-primary/10 blur-3xl" />
              <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
                <div className="flex-1">
                  <h2 className="font-headline mb-3 text-3xl font-black uppercase tracking-tighter text-white">
                    Still stuck?
                  </h2>
                  <p className="text-lg text-white/70">
                    Telegram or phone — our front desk will point you in the right
                    direction.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                  <a
                    href="https://t.me/Brightgym2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-headline flex min-w-[200px] items-center justify-center gap-2 bg-primary px-6 py-3 font-black uppercase tracking-wider text-on-primary transition-colors hover:bg-yellow-400 hover:text-black"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      chat
                    </span>
                    <span>Telegram</span>
                  </a>
                  <a
                    href="tel:+251977363636"
                    className="font-headline flex min-w-[200px] items-center justify-center gap-2 border-2 border-outline-variant bg-surface-dark-lighter px-6 py-3 font-black uppercase tracking-wider text-white transition-colors hover:border-primary"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      call
                    </span>
                    <span>Call Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}









