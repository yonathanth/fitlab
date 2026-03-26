import { MultipleSchemaComponent, SchemaComponent } from "@/lib/schema-component";
import { productSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";
import type { Metadata } from "next";
import { ServicesContent } from "./services-content";
import Link from "next/link";
import { SiteNav } from "../components/SiteNav";

const BASE = "https://fitlab.et";

export const metadata: Metadata = {
  title: "Membership — Fit Lab | Koye Feche, Addis Ababa",
  description:
    "Choose your plan at Fit Lab. Transparent pricing, performance-focused access, no hidden games.",
  keywords: [
    "gym membership Addis Ababa",
    "Fit Lab pricing",
    "Koye Feche gym",
    "fitness membership",
  ],
  openGraph: {
    title: "Membership — Fit Lab",
    description: "Invest in your training. Plans built for the floor in Koye Feche.",
    url: `${BASE}/services`,
  },
};

export default function ServicesPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      <SiteNav />

      <ServicesContent />

      {/* Footer (match Home/About) */}
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
          { name: "Services", url: `${BASE}/services` },
        ])}
      />

      {/* Product Schemas for Membership Plans */}
      <MultipleSchemaComponent
        schemas={[
          productSchema({
            name: "The Starter - Fit Lab Membership",
            description: "Perfect for beginners looking to start their fitness journey with essential access. Off-peak gym floor access, locker room access, and free WiFi.",
            image: "https://fitlab.et/starter-plan.jpg",
            url: `${BASE}/services`,
            price: 1500,
            priceCurrency: "ETB",
            availability: "InStock",
            rating: 4.6,
            reviewCount: 28,
          }),
          productSchema({
            name: "The Athlete - Fit Lab Membership",
            description: "Our most balanced package designed for consistent gym-goers seeking results. Unlimited gym access, group classes, sauna & steam access, and 1 free PT session.",
            image: "https://fitlab.et/athlete-plan.jpg",
            url: `${BASE}/services`,
            price: 3500,
            priceCurrency: "ETB",
            availability: "InStock",
            rating: 4.9,
            reviewCount: 87,
          }),
          productSchema({
            name: "The Elite - Fit Lab Membership",
            description: "The ultimate commitment to your health with VIP perks and unlimited access. All Athlete features plus priority class booking, monthly nutrition plan, and 5 guest passes per month.",
            image: "https://fitlab.et/elite-plan.jpg",
            url: `${BASE}/services`,
            price: 1000,
            priceCurrency: "ETB",
            availability: "InStock",
            rating: 4.95,
            reviewCount: 112,
          }),
        ]}
      />

      {/* FAQ Schema */}
      <SchemaComponent
        schema={faqSchema([
          {
            question: "Can I freeze my membership?",
            answer: "Yes, members on the Athlete and Elite plans can freeze their membership for up to 30 days per year for medical or travel reasons. Please visit the front desk with supporting documents.",
          },
          {
            question: "Are there any hidden fees?",
            answer: "Absolutely not. The price you see is the price you pay. There is a one-time registration fee of ETB 500 for new members which covers your access card and initial assessment.",
          },
          {
            question: "Can I switch plans later?",
            answer: "Yes! You can upgrade your plan at any time. The remaining balance of your current plan will be credited towards your new plan. Downgrades are available upon renewal.",
          },
        ])}
      />
    </div>
  );
}
