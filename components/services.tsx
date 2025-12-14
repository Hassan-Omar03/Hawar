"use client"

import {
  Home,
  Sparkles,
  Wrench,
  HeadphonesIcon,
  KeyRound,
  Sofa,
  Wifi,
  Coffee,
  Shield,
  ClipboardCheck,
  Handshake,
  FileText,
  HomeIcon,
  CheckCircle,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

/* ================= TYPES ================= */
type CheckInItem = {
  icon: LucideIcon
  title: string
  description: string
}

type Service = {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  checkInDetails?: CheckInItem[]
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  const services: Service[] = [
    {
      icon: KeyRound,
      title: "Guest Check-in Services",
      description:
        "Stress-free, on-demand guest arrivals handled professionally — 24/7 across all Emaar buildings.",
      checkInDetails: [
        { icon: ClipboardCheck, title: "Pre-Arrival Checks", description: "Property inspected & guest-ready" },
        { icon: Handshake, title: "Meet & Greet", description: "Warm welcome at reception" },
        { icon: FileText, title: "Registration Handled", description: "No paperwork hassle" },
        { icon: HomeIcon, title: "Guided Tour", description: "Showcase amenities" },
      ],
      features: ["Emaar-compliant", "24/7 availability", "Better guest reviews"],
    },
    {
      icon: Home,
      title: "Short-Term Rentals",
      description:
        "Fully services luxury apartments and villas availabe for daily, weekly or monthly stays. Each property is thoughtfully furnished and equipped to ensure a comfortable and memorable stay. Dubai’s prime locations offer easy access to key attractions, business districts, and leisure spots.",
      features: ["Daily housekeeping", "Flexible stays", "Prime locations"],
    },
   {
  icon: Sofa,
  title: "Interior Styling & Furnishing",
  description:
    "Complete interior styling and furnishing solutions designed specifically for Dubai’s short-term rental market. Our expert designs enhance visual appeal, improve guest satisfaction, and help achieve higher booking rates and premium pricing.",
},

    {
  icon: Sparkles,
  title: "Housekeeping & Maintenance",
  description:
    "Comprehensive housekeeping and on-call maintenance services designed to meet luxury hospitality standards. From regular cleaning to prompt issue resolution, we ensure a seamless and comfortable experience for every guest.",
},

   {
  icon: HeadphonesIcon,
  title: "Concierge Services",
  description:
    "Round-the-clock multilingual concierge services designed to elevate your Dubai experience. From airport transfers and reservations to curated local experiences, we take care of every detail so you can relax and enjoy your stay.",
  features: ["Airport pickup", "Restaurant bookings", "Tour arrangements"],
},

    {
      icon: Wrench,
      title: "Property Management",
      description:
        "End-to-end property management designed to maximize returns while ensuring your property is professionally maintained at all times.",
      features: [
        "Higher ROI through dynamic & seasonal pricing",
        "Increased exposure across booking platforms & EU travel partners",
        "Owner portal access to monitor performance in real-time",
        "Well-maintained property with regular inspections",
        "Full management including guest communication & marketing",
      ],
    },
    {
      icon: Wifi,
      title: "Premium Amenities",
      description:
        "High-speed WiFi, smart home technology, and fully equipped modern kitchens.",
      features: ["High-speed internet", "Smart TVs", "Modern appliances"],
    },
    
  ]

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-2">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Premium short-term rental & guest experience services in Dubai
          </p>
        </div>

        {/* ✅ SAME HEIGHT GRID (DEFAULT STRETCH) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex h-full flex-col border-2 transition-all hover:border-accent hover:shadow-xl"
            >
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/20">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <p className="mb-4 text-muted-foreground">
                  {service.description}
                </p>

                {service.checkInDetails && (
                  <div className="mb-4 grid grid-cols-2 gap-3">
                    {service.checkInDetails.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-2 rounded-lg bg-muted/50 p-3"
                      >
                        <item.icon className="mt-0.5 h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-semibold">{item.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {service.features && (
                  <ul className="mt-auto space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
