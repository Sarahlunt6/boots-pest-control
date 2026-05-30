import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boots Pest Control | St. George, Utah Pest Control Services",
  description:
    "Professional pest control services in St. George and Southern Utah. Licensed. Ant, spider, rodent, and general pest extermination. Call (435) 773-7103 for a free quote.",
  keywords: [
    "pest control St. George",
    "exterminator Utah",
    "ant control",
    "spider removal",
    "rodent extermination",
    "pest inspection",
    "Southern Utah pest control",
  ],
  authors: [{ name: "Boots Pest Control" }],
  creator: "Boots Pest Control",
  publisher: "Boots Pest Control",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bootspestcontrol.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Boots Pest Control | St. George, Utah Pest Control Services",
    description:
      "Professional pest control services in St. George and Southern Utah. Licensed. Call (435) 773-7103 for a free quote.",
    url: "https://bootspestcontrol.com",
    siteName: "Boots Pest Control",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 240,
        alt: "Boots Pest Control Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boots Pest Control | St. George, Utah",
    description:
      "Professional pest control services in St. George and Southern Utah. Call (435) 773-7103.",
    images: ["/logo.png"],
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
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
  },
};

// LocalBusiness JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bootspestcontrol.com",
  name: "Boots Pest Control",
  image: "https://bootspestcontrol.com/logo.png",
  telephone: "+1-435-773-7103",
  url: "https://bootspestcontrol.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "St. George",
    addressRegion: "UT",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.0965,
    longitude: -113.5684,
  },
  areaServed: [
    {
      "@type": "City",
      name: "St. George",
      "@id": "https://www.wikidata.org/wiki/Q109625",
    },
    { "@type": "State", name: "Utah" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  serviceType: [
    "Pest Control",
    "Ant Extermination",
    "Cockroach Extermination",
    "Spider Extermination",
    "Rodent Extermination",
    "Hornet and Wasp Control",
    "Flea and Mite Treatment",
    "General Bug Control",
    "Pest Inspection",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
