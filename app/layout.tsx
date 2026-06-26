import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varanasi Kashi Tour Package with Hotel & Darshan | Prayagraj Ayodhya Circuits | Starting ₹22,000 for Couple",
  description:
    "Looking for the best Varanasi Kashi tour package? We include Kashi Vishwanath Temple VIP darshan pass, Ganga Aarti boat ride, 3★/4★ hotel, airport/railway pickup, AC transport and expert guide — all starting at ₹22,000 for a couple. Choose from Varanasi Prayagraj, Kashi Ayodhya, or the full Sacred Ganga Circuit. Trusted by 50,000+ pilgrims. Book on WhatsApp in 2 minutes.",
  keywords: [
    "Varanasi tour packages",
    "Kashi Darshan tour package",
    "Varanasi tour with Ayodhya",
    "Kashi Prayagraj Varanasi Ayodhya package",
    "Varanasi temple tour",
    "Varanasi travel package",
    "Varanasi Prayagraj tour package",
    "Kashi darshan tour",
    "Varanasi tour package 3 days",
    "Varanasi tour package with hotel",
    "Varanasi trip package with transport",
    "Varanasi same day tour",
    "Varanasi one day tour package",
    "Kashi Vishwanath temple darshan package",
    "Varanasi pilgrimage tour",
    "Kashi tour package 2025",
    "Varanasi Prayagraj tour package",
    "spiritual tour packages India",
    "family pilgrimage tour Varanasi",
  ].join(", "),
  applicationName: "Kashi Dharshan",
  authors: [{ name: "Kashi Dharshan" }],
  creator: "Kashi Dharshan",
  publisher: "Kashi Dharshan",
  category: "Travel & Tourism",
  classification: "Pilgrimage Tours",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: "Varanasi Kashi Tour Package with Hotel & Darshan — Starting ₹22,000 for Couple",
    description:
      "Complete Kashi pilgrimage packages: hotel stay, Kashi Vishwanath VIP darshan, Ganga Aarti, AC transport, expert guide. Varanasi Prayagraj, Ayodhya circuits & same-day tours. 50,000+ pilgrims served since 2009.",
    type: "website",
    locale: "en_IN",
    siteName: "Kashi Dharshan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varanasi Kashi Tour Package with Hotel & Darshan — Starting ₹22,000 for Couple",
    description:
      "Kashi Vishwanath Temple VIP darshan + Ganga Aarti + hotel + AC transport + expert guide. Varanasi–Ayodhya, Prayagraj circuits. Book on WhatsApp in 2 minutes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://yatra.kashidharshan.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "96x96", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#FF6B00" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Varanasi" />
        <meta name="geo.position" content="25.3176;82.9739" />
        <meta name="ICBM" content="25.3176, 82.9739" />
      </head>

      <body className="font-inter bg-sacred-cream overflow-x-hidden">
        {/* GTM noscript fallback — first element in <body> per Google specification */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLJLKLNZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* GTM head script — afterInteractive loads post-hydration, preserving LCP & FID */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WLJLKLNZ');`,
          }}
        />
      </body>
    </html>
  );
}
