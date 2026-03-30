import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { MultipleSchemaComponent } from "@/lib/schema-component";
import { organizationSchema, localBusinessSchema } from "@/lib/schemas";
import { SITE_BASE_URL, SITE_NAME } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE_URL),
  title: `${SITE_NAME} — Elite performance | Koye Feche, Addis Ababa`,
  description:
    `Train without limits at ${SITE_NAME}. HIIT, strength lab, recovery yoga, and combat fit — Koye Feche, Addis Ababa.`,
  keywords: [
    "gym Koye Feche",
    "Fitlab Gym and Spa Addis Ababa",
    "HIIT gym",
    "strength training",
    "membership",
    "performance gym",
  ],
  robots: "index, follow",
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    url: SITE_BASE_URL,
    title: `${SITE_NAME} — Train without limits`,
    description: "Performance programming in Koye Feche, Addis Ababa.",
    images: [
      {
        url: "/og-image.png",
        type: "image/png",
        width: 1080,
        height: 880,
        alt: `${SITE_NAME} — Koye Feche, Addis Ababa`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fitlab",
    creator: "@fitlab",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_BASE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Material Symbols Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <MultipleSchemaComponent
          schemas={[organizationSchema(), localBusinessSchema()]}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} bg-background text-on-background overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
