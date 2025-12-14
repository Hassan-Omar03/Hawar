"use client"

import { Home, Sparkles, Wrench, HeadphonesIcon, KeyRound, Sofa, Wifi, Coffee, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: KeyRound,
      title: "Guest Check-in Services",
      description:
        "Seamless check-in experience for all Emaar Buildings with professional assistance, digital keys, and personalized welcome packages",
      features: ["Contactless check-in", "Welcome packages", "Property orientation"],
    },
    {
      icon: Home,
      title: "Short-Term Rentals",
      description:
        "Fully serviced luxury apartments and villas available for daily, weekly, or monthly stays with flexible booking options",
      features: ["Daily housekeeping", "Flexible stays", "Prime locations"],
    },
    {
      icon: Sofa,
      title: "Interior Styling & Furnishing",
      description:
        "Turnkey furnishing and professional design services tailored specifically to Dubai's luxury short-term rental market",
      features: ["Modern design", "Premium furniture", "Complete setup"],
    },
    {
      icon: Sparkles,
      title: "Housekeeping & Maintenance",
      description:
        "Professional cleaning services, regular linen changes, and responsive on-call maintenance support throughout your stay",
      features: ["Daily cleaning", "Linen service", "24/7 maintenance"],
    },
    {
      icon: HeadphonesIcon,
      title: "Concierge Services",
      description:
        "24/7 multilingual customer support, airport transfers, restaurant reservations, and personalized local recommendations",
      features: ["Airport pickup", "Restaurant bookings", "Tour arrangements"],
    },
    {
      icon: Wrench,
      title: "Property Management",
      description:
        "Complete property management solutions to maximize occupancy rates, guest satisfaction, and revenue performance",
      features: ["Revenue optimization", "Guest screening", "Marketing"],
    },
    {
      icon: Wifi,
      title: "Premium Amenities",
      description:
        "High-speed WiFi, smart home technology, premium entertainment systems, and fully equipped modern kitchens",
      features: ["High-speed internet", "Smart TVs", "Modern appliances"],
    },
    {
      icon: Shield,
      title: "Security & Insurance",
      description:
        "Comprehensive security measures, property insurance, and secure payment processing for complete peace of mind",
      features: ["24/7 security", "Full insurance", "Secure payments"],
    },
    {
      icon: Coffee,
      title: "Welcome Services",
      description:
        "Complimentary welcome refreshments, local SIM cards, and detailed area guides to start your Dubai experience",
      features: ["Welcome basket", "Local guides", "SIM cards available"],
    },
  ]

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive vacation rental management services designed to exceed your expectations and deliver
            unforgettable experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent bg-card/80 backdrop-blur-sm group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
