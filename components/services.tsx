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
  Briefcase,
  DoorOpen,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
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
      features: [
        "Emaar-compliant",
        "24/7 availability",
        "Better guest reviews",
       
      ],
    },
    {
      icon: Home,
      title: "Short-Term Rentals",
      description:
        "Fully serviced luxury apartments and villas available for daily, weekly, or monthly stays.",
      features: ["Daily housekeeping", "Flexible stays", "Prime locations"],
    },
    {
      icon: Sofa,
      title: "Interior Styling & Furnishing",
      description:
        "Turnkey furnishing and professional design services tailored for Dubai’s luxury rental market.",
    },
    {
      icon: Sparkles,
      title: "Housekeeping & Maintenance",
      description:
        "Professional cleaning services and responsive maintenance support throughout your stay.",
    },
    {
      icon: HeadphonesIcon,
      title: "Concierge Services",
      description:
        "24/7 multilingual support, airport transfers, reservations, and personalized local assistance.",
      features: ["Airport pickup", "Restaurant bookings", "Tour arrangements"],
    },
    {
      icon: Wrench,
      title: "Property Management",
      description:
        "Complete solutions to maximize occupancy, guest satisfaction, and revenue performance.",
      features: ["Revenue optimization", "Guest screening", "Marketing"],
    },
    {
      icon: Wifi,
      title: "Premium Amenities",
      description:
        "High-speed WiFi, smart home technology, and fully equipped modern kitchens.",
      features: ["High-speed internet", "Smart TVs", "Modern appliances"],
    },
    {
      icon: Shield,
      title: "Security & Insurance",
      description:
        "Comprehensive security measures and insured property protection for peace of mind.",
      features: ["24/7 security", "Full insurance", "Secure payments"],
    },
    {
      icon: Coffee,
      title: "Welcome Services",
      description:
        "Complimentary refreshments, local SIM cards, and detailed area guides.",
      features: ["Welcome basket", "Local guides", "SIM cards"],
    },
  ]

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-32">
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

        {/* ✅ IMPORTANT FIX: items-start */}
        <div className="grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isOpen = expandedIndex === index

            return (
              <Card
                key={service.title}
                className="border-2 transition-all duration-300 hover:border-accent hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/20">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    {service.description}
                  </p>

                  {/* EXPANDED CONTENT */}
                  {isOpen && (
                    <>
                      {service.checkInDetails && (
                        <div className="mb-4 grid grid-cols-2 gap-3">
                          {service.checkInDetails.map((item) => (
                            <div
                              key={item.title}
                              className="flex items-start gap-2 rounded-lg bg-muted/50 p-3"
                            >
                              <item.icon className="mt-0.5 h-5 w-5 text-primary" />
                              <div>
                                <p className="text-sm font-semibold">
                                  {item.title}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {service.features && (
                        <ul className="space-y-2">
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
                    </>
                  )}

                  {/* READ MORE / LESS */}
                  {(service.features || service.checkInDetails) && (
                    <button
                      onClick={() =>
                        setExpandedIndex(isOpen ? null : index)
                      }
                      className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      {isOpen ? (
                        <>
                          Read less <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Read more <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
