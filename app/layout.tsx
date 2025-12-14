import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hawar Vacation Homes | Luxury Short-Term Rentals in Dubai",
  description:
    "Premier vacation home rentals in Dubai. Fully furnished luxury apartments and villas in Downtown Dubai, Business Bay, Palm Jumeirah, Dubai Hills, and Bluewaters Island. Licensed by Dubai DET.",

  keywords: [
    "Dubai vacation rentals",
    "short-term rentals Dubai",
    "furnished apartments Dubai",
    "luxury vacation homes",
    "Downtown Dubai apartments",
    "Business Bay rentals",
    "Palm Jumeirah villas",
    "Dubai holiday homes",
    "serviced apartments Dubai",
  ],

  authors: [{ name: "Hawar for Vacation Homes Rental LLC" }],
  creator: "Hawar for Vacation Homes Rental LLC",
  publisher: "Hawar for Vacation Homes Rental LLC",

  openGraph: {
    title: "Hawar Vacation Homes | Luxury Short-Term Rentals in Dubai",
    description:
      "Experience luxury living in Dubai's most iconic neighborhoods. Fully furnished vacation homes and serviced apartments.",
    url: "https://hawarhomes.com",
    siteName: "Hawar Vacation Homes",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/hawar-logo.png",
        width: 1200,
        height: 630,
        alt: "Hawar Vacation Homes Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hawar Vacation Homes | Luxury Short-Term Rentals in Dubai",
    description:
      "Premier vacation home rentals in Dubai's most iconic locations.",
    images: ["/hawar-logo.png"],
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
    canonical: "https://hawarhomes.com",
  },

  verification: {
    google: "google-site-verification-code",
  },

  generator: "v0.app",

  // ✅ FAVICON CONFIG (FROM /public/hawar-logo.png)
  icons: {
    icon: "/hawar-logo.png",
    apple: "/hawar-logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#35407E" />

  {/* ✅ Explicit crawl + indexing hint */}
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="googlebot" content="index, follow, max-image-preview:large" />

  {/* ✅ Sitemap discovery */}
  <link rel="sitemap" type="application/xml" href="https://hawarhomes.com/sitemap.xml" />

  {/* ✅ Performance = better crawl */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
</head>

      <body
        className={`${geist.className} ${geistMono.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
