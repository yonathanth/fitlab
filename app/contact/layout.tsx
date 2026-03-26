import type { Metadata } from "next";

const BASE = "https://fitlab.et";

export const metadata: Metadata = {
  title: "Contact — Fit Lab | Koye Feche, Addis Ababa",
  description:
    "Get in touch with Fit Lab in Koye Feche, Addis Ababa. Call, message, or drop by for a tour.",
  keywords: [
    "contact Fit Lab",
    "gym Addis Ababa",
    "Koye Feche gym",
    "Fit Lab location",
  ],
  openGraph: {
    title: "Contact — Fit Lab",
    description: "Visit us in Koye Feche, Addis Ababa.",
    url: `${BASE}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
