import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title:
    "Contact Hawar Vacation Homes Dubai | Holiday Home Rental & Support",
  description:
    "Get in touch with Hawar for Vacation Homes Rental LLC in Dubai. Call +971 50 790 4560 or email hawarhomes@gmail.com. Visit our office in Al Mansoori Building, Hor Al Anz, Dubai.",

  keywords: [
    "contact Hawar Vacation Homes",
    "Dubai holiday home contact",
    "short term rental Dubai contact",
    "vacation rental management Dubai",
    "holiday homes Dubai support",
    "DET licensed holiday homes Dubai",
  ],

  alternates: {
    canonical: "https://hawarhomes.com/contact",
  },

  openGraph: {
    title:
      "Contact Hawar Vacation Homes | Dubai Holiday Home Rental Company",
    description:
      "Contact Hawar for Vacation Homes Rental LLC for luxury holiday homes and short-term rental management in Dubai.",
    url: "https://hawarhomes.com/contact",
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
    title:
      "Contact Hawar Vacation Homes | Dubai Short-Term Rentals",
    description:
      "Call or email Hawar Vacation Homes in Dubai for luxury holiday home rentals and property management.",
    images: ["/hawar-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Contact />
      <Footer />
    </main>
  )
}
