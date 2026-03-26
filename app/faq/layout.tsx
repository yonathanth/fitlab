import type { Metadata } from "next";
import { SchemaComponent } from "@/lib/schema-component";
import { faqSchema } from "@/lib/schemas";
import { breadcrumbSchema } from "@/lib/schemas";
import { faqContent } from "@/lib/faq-content";

const BASE = "https://fitlab.et";

export const metadata: Metadata = {
  title: "FAQ — Fit Lab | Memberships, payments, hours",
  description:
    "Answers about Fit Lab in Koye Feche: hours, memberships, payments, trainers, parking, and more.",
  keywords: [
    "Fit Lab FAQ",
    "gym hours Addis Ababa",
    "membership freeze",
    "Koye Feche gym",
  ],
  openGraph: {
    title: "FAQ — Fit Lab",
    description: "Memberships, payments, trainers, and gym access.",
    url: `${BASE}/faq`,
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
          { name: "Home", url: BASE },
          { name: "FAQ", url: `${BASE}/faq` },
        ])}
      />
      <SchemaComponent schema={faqSchemaData} />
      {children}
    </>
  );
}
