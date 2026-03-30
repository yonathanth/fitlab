import type { Metadata } from "next";
import { SchemaComponent } from "@/lib/schema-component";
import { faqSchema } from "@/lib/schemas";
import { breadcrumbSchema } from "@/lib/schemas";
import { faqContent } from "@/lib/faq-content";
import { SITE_BASE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ — ${SITE_NAME} | Memberships, payments, hours`,
  description:
    `Answers about ${SITE_NAME} in Koye Feche: hours, memberships, payments, trainers, parking, and more.`,
  keywords: [
    "Fitlab Gym and Spa FAQ",
    "gym hours Addis Ababa",
    "membership freeze",
    "Koye Feche gym",
  ],
  openGraph: {
    title: `FAQ — ${SITE_NAME}`,
    description: "Memberships, payments, trainers, and gym access.",
    url: `${SITE_BASE_URL}/faq`,
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchemaData = faqSchema(
    faqContent.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <>
      <SchemaComponent
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_BASE_URL },
          { name: "FAQ", url: `${SITE_BASE_URL}/faq` },
        ])}
      />
      <SchemaComponent schema={faqSchemaData} />
      {children}
    </>
  );
}
