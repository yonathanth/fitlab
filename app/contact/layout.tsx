import type { Metadata } from "next";
import { SITE_BASE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact — ${SITE_NAME} | Koye Feche, Addis Ababa`,
  description:
    `Get in touch with ${SITE_NAME} in Koye Feche, Addis Ababa. Call, message, or drop by for a tour.`,
  keywords: [
    "contact Fitlab Gym and Spa",
    "gym Addis Ababa",
    "Koye Feche gym",
    "Fitlab Gym and Spa location",
  ],
  openGraph: {
    title: `Contact — ${SITE_NAME}`,
    description: "Visit us in Koye Feche, Addis Ababa.",
    url: `${SITE_BASE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
