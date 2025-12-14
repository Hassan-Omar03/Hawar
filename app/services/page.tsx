import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title:
    "Holiday Home & Property Management Services in Dubai | Hawar Vacation Homes",
  description:
    "Explore Hawar Vacation Homes’ professional services including short-term rental management, guest check-in, housekeeping, interior styling, maintenance, and 24/7 guest support across Dubai.",

  keywords: [
    "property management Dubai",
    "holiday home management Dubai",
    "short term rental services Dubai",
    "Airbnb management Dubai",
    "guest check in services Dubai",
    "housekeeping services Dubai",
    "interior styling holiday homes",
    "vacation rental management company Dubai",
  ],

  alternates: {
    canonical: "https://hawarhomes.com/services",
  },

  openGraph: {
    title:
      "Property Management & Holiday Home Services in Dubai | Hawar Vacation Homes",
    description:
      "Professional holiday home and short-term rental management services in Dubai. Trusted by property owners across prime locations.",
    url: "https://hawarhomes.com/services",
    siteName: "Hawar Vacation Homes",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/hawar-logo.png",
        width: 1200,
        height: 630,
        alt: "Hawar Vacation Homes Property Management Services Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Property Management Services in Dubai | Hawar Vacation Homes",
    description:
      "Short-term rental and holiday home management services across Dubai.",
    images: ["/hawar-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}
