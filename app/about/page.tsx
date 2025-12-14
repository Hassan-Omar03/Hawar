import type { Metadata } from "next"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { WhyChoose } from "@/components/why-choose"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title:
    "About Hawar Vacation Homes | Licensed Short-Term Rental Company in Dubai",
  description:
    "Discover Hawar for Vacation Homes Rental LLC, a DET-licensed short-term rental management company in Dubai. Luxury holiday homes, serviced apartments, and professional property management since 2024.",

  keywords: [
    "Hawar Vacation Homes",
    "about Hawar vacation homes",
    "Dubai vacation rental company",
    "short term rental management Dubai",
    "DET licensed holiday homes Dubai",
    "property management Dubai",
    "luxury serviced apartments Dubai",
    "holiday home operator Dubai",
  ],

  alternates: {
    canonical: "https://hawarhomes.com/about",
  },

  openGraph: {
    title:
      "About Hawar Vacation Homes | Dubai’s Trusted Holiday Home Operator",
    description:
      "Learn about Hawar for Vacation Homes Rental LLC — a Dubai-based, DET-licensed vacation rental management company offering premium short-term stays.",
    url: "https://hawarhomes.com/about",
    siteName: "Hawar Vacation Homes",
    locale: "en_AE",
    type: "article",
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
    title:
      "About Hawar Vacation Homes | Luxury Short-Term Rentals in Dubai",
    description:
      "DET-licensed vacation rental management company offering luxury holiday homes in Dubai.",
    images: ["/hawar-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <WhyChoose />
      <Footer />
    </main>
  )
}
