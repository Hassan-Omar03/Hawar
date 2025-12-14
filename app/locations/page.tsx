import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Locations } from "@/components/locations"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title:
    "Dubai Holiday Home Locations | Hawar Vacation Homes Properties",
  description:
    "Discover Hawar Vacation Homes’ luxury properties in Dubai’s most prestigious locations including Downtown Dubai, Business Bay, Palm Jumeirah, Dubai Hills, Emaar Beachfront, and Bluewaters Island.",

  keywords: [
    "Dubai holiday home locations",
    "Hawar Vacation Homes properties",
    "Downtown Dubai vacation rentals",
    "Business Bay short term rentals",
    "Palm Jumeirah holiday villas",
    "Dubai Hills furnished apartments",
    "Emaar Beachfront vacation homes",
    "Bluewaters Island rentals",
  ],

  alternates: {
    canonical: "https://hawarhomes.com/locations",
  },

  openGraph: {
    title:
      "Luxury Holiday Home Locations in Dubai | Hawar Vacation Homes",
    description:
      "Explore luxury holiday homes and serviced apartments across Dubai’s most iconic neighborhoods with Hawar Vacation Homes.",
    url: "https://hawarhomes.com/locations",
    siteName: "Hawar Vacation Homes",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/hawar-logo.png",
        width: 1200,
        height: 630,
        alt: "Hawar Vacation Homes Dubai Locations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Dubai Holiday Home Locations | Hawar Vacation Homes",
    description:
      "Browse Hawar Vacation Homes’ premium properties across Dubai’s top locations.",
    images: ["/hawar-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function LocationsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Locations />
      <CTA />
      <Footer />
    </main>
  )
}
