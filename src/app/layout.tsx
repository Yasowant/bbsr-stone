import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

/*
 * Fonts are loaded from the Google Fonts CDN via <link> rather than
 * `next/font/google` so that `next build` never needs network access
 * (useful in locked-down CI). To self-host them instead, swap in:
 *
 *   import { Inter, Outfit } from "next/font/google";
 *
 * and drop the <link> tags below.
 */

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Stone Aggregates, Chips, GSB & Boulders in Bhubaneswar`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "stone aggregates Bhubaneswar",
    "stone chips Odisha",
    "crushed stone supplier Bhubaneswar",
    "GSB supplier Odisha",
    "WMM supplier Bhubaneswar",
    "armour rock boulders Odisha",
    "stone dust Bhubaneswar",
    "20mm stone chips",
    "Bajuri supplier",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Stone Aggregates & Crushed Chips`,
    description: site.description,
    images: [
      {
        url: "/images/slides/slider-01.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} crushing and aggregate operations`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Stone Aggregates & Crushed Chips`,
    description: site.description,
    images: ["/images/slides/slider-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/logos/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/images/logos/apple-icon.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1116",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The inline script below adds a "js" class to <html> before React
    // hydrates, so the server HTML and the client tree differ by design.
    // suppressHydrationWarning applies to this element only.
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap"
        />
        {/* Scroll-reveal is opt-in: without JavaScript nothing is hidden. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-amber-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-ink-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <JsonLd />
      </body>
    </html>
  );
}
