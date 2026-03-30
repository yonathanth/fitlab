import { MultipleSchemaComponent, SchemaComponent } from "@/lib/schema-component";
import { productSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";
import type { Metadata } from "next";
import { ServicesContent } from "./services-content";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { SITE_BASE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Membership — ${SITE_NAME} | Koye Feche, Addis Ababa`,
  description:
    `Choose your plan at ${SITE_NAME}. Transparent pricing, performance-focused access, no hidden games.`,
  keywords: [
    "gym membership Addis Ababa",
    "Fitlab Gym and Spa pricing",
    "Koye Feche gym",
    "fitness membership",
  ],
  openGraph: {
    title: `Membership — ${SITE_NAME}`,
    description: "Invest in your training. Plans built for the floor in Koye Feche.",
    url: `${SITE_BASE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      <SiteNav />

      <ServicesContent />

      <SiteFooter />

      {/* Breadcrumb Schema */}
      <SchemaComponent
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_BASE_URL },
          { name: "Services", url: `${SITE_BASE_URL}/services` },
        ])}
      />

      {/* Product Schemas for Membership Plans */}
      <MultipleSchemaComponent
        schemas={[
          productSchema({
            name: `The Starter - ${SITE_NAME} Membership`,
            description: "Perfect for beginners looking to start their fitness journey with essential access. Off-peak gym floor access, locker room access, and free WiFi.",
            image: `${SITE_BASE_URL}/starter-plan.jpg`,
            url: `${SITE_BASE_URL}/services`,
            price: 1500,
            priceCurrency: "ETB",
            availability: "InStock",
            rating: 4.6,
            reviewCount: 28,
          }),
          productSchema({
            name: `The Athlete - ${SITE_NAME} Membership`,
            description: "Our most balanced package designed for consistent gym-goers seeking results. Unlimited gym access, group classes, sauna & steam access, and 1 free PT session.",
            image: `${SITE_BASE_URL}/athlete-plan.jpg`,
            url: `${SITE_BASE_URL}/services`,
            price: 3500,
            priceCurrency: "ETB",
            availability: "InStock",
            rating: 4.9,
            reviewCount: 87,
          }),
          productSchema({
            name: `The Elite - ${SITE_NAME} Membership`,
            description: "The ultimate commitment to your health with VIP perks and unlimited access. All Athlete features plus priority class booking, monthly nutrition plan, and 5 guest passes per month.",
            image: `${SITE_BASE_URL}/elite-plan.jpg`,
            url: `${SITE_BASE_URL}/services`,
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
