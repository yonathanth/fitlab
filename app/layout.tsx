import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { MultipleSchemaComponent } from "@/lib/schema-component";
import { organizationSchema, localBusinessSchema } from "@/lib/schemas";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fit Lab — Elite performance | Koye Feche, Addis Ababa",
  description:
    "Train without limits at Fit Lab. HIIT, strength lab, recovery yoga, and combat fit — Koye Feche, Addis Ababa.",
  keywords: [
    "gym Koye Feche",
    "Fit Lab Addis Ababa",
    "HIIT gym",
    "strength training",
    "membership",
    "performance gym",
  ],
  robots: "index, follow",
  authors: [{ name: "Fit Lab" }],
  openGraph: {
    type: "website",
    url: "https://fitlab.et",
    title: "Fit Lab — Train without limits",
    description: "Performance programming in Koye Feche, Addis Ababa.",
    images: [
      {
        url: "https://fitlab.et/og-image.png",
        type: "image/png",
        width: 1080,
        height: 880,
        alt: "Fit Lab — Koye Feche, Addis Ababa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fitlab",
    creator: "@fitlab",
    images: ["https://fitlab.et/og-image.png"],
  },
  alternates: {
    canonical: "https://fitlab.et",
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
