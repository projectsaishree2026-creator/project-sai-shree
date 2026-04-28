import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { StickyMobileCTA } from "@/components/shared/sticky-mobile-cta";
import { CallButton } from "@/components/shared/call-button";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: {
    default: `${clinic.name} | Advanced Multi-Specialty Care in Cuttack`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  keywords: [
    "best polyclinic in Cuttack",
    "multi-specialty clinic Cuttack",
    "Sai Shree Polyclinic",
    "best doctors Cuttack Odisha",
    "diabetes doctor Cuttack",
    "neurology clinic Cuttack",
    "dental clinic Cuttack",
    "gynecologist Cuttack",
    "clinic near me Cuttack",
    "multi-specialty clinic near me",
  ],
  metadataBase: new URL("https://saishreepolyclinic.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://saishreepolyclinic.com",
    title: clinic.name,
    description: clinic.description,
    siteName: clinic.name,
  },
  twitter: {
    card: "summary_large_image",
    title: clinic.name,
    description: clinic.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600&display=swap"
          rel="stylesheet"
        />
        {/* Favicon — all derived from logo.png */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: clinic.name,
              description: clinic.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kathagola, Ring Rd, near Shree Maa",
                addressLocality: "Cuttack",
                addressRegion: "Odisha",
                postalCode: "753110",
                addressCountry: "IN",
              },
              telephone: clinic.phoneDisplay,
              openingHours: "Mo-Sa 09:00-19:00",
              url: "https://saishreepolyclinic.com",
              priceRange: "₹₹",
              hasMap: "https://maps.google.com/?q=Sai+Shree+Polyclinic+Cuttack",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
                bestRating: "5",
              },
              medicalSpecialty: [
                "Endocrinology",
                "Neurology",
                "Pulmonology",
                "Gastroenterology",
                "Dentistry",
                "Gynecology",
                "Urology",
                "Oncology",
              ],
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Conversion floaters */}
        <WhatsAppButton />
        <CallButton />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
