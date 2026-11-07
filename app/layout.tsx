import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingContact } from "@/components/shared/floating-contact";
import { clinic } from "@/data/clinic";
import { siteConfig } from "@/config/site";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JsonLd } from "@/components/shared/json-ld";
import { ClickTracking } from "@/components/analytics/click-tracking";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { siteGraph } from "@/lib/schema";

const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a1622",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Multispecialty Polyclinic in Cuttack | Sai Shree Polyclinic",
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  applicationName: clinic.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: clinic.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: clinic.name }],
  },
  twitter: { card: "summary_large_image", images: [siteConfig.ogImage] },
  robots: { index: true, follow: true },
  verification: { google: "hnX54HYUQ7M53VbL8Nycoi2LcVT1OWf34-cXMg43jS8" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${interTight.variable} ${jetbrains.variable} ${instrument.variable}`}>
      <head>
        {/* Enables scroll-reveal styles only when JS runs; crawlers and no-JS visitors see all content */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {/* Favicons come from app/favicon.ico, app/icon.png, app/apple-icon.png and app/manifest.ts */}
        <JsonLd data={siteGraph()} />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        {GA_MEASUREMENT_ID && <ClickTracking />}
      </body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}
