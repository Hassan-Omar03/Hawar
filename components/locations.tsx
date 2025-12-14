"use client"

import { MapPin, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function Locations() {
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

  const locations = [
    {
      name: "Downtown Dubai",
      description:
        "The heart of Dubai featuring the iconic Burj Khalifa, Dubai Mall, and Dubai Fountain. Experience world-class dining, entertainment, and the ultimate urban lifestyle in Dubai's most prestigious address.",
      properties: [
        "Grande",
        "Act One",
        "Act Two",
        "Burj Royale",
        "Boulevard Central",
        "Forte",
        "Clarens",
        "Downtown Views",
      ],
      image: "/downtown-dubai-burj-khalifa-skyline.jpg",
    },
    {
      name: "Dubai Hills",
      description:
        "A prestigious master-planned community featuring an 18-hole championship golf course, lush parks, and family-friendly amenities. Enjoy a serene lifestyle with world-class facilities and green landscapes.",
      properties: ["Premium Residences", "Golf Suites", "Park Heights"],
      image: "/dubai-hills-golf-course-community.jpg",
    },
    {
      name: "Business Bay",
      description:
        "Dubai's bustling business district with modern high-rises, waterfront promenades along Dubai Canal, and proximity to major attractions and business centers. Perfect for corporate travelers and professionals.",
      properties: ["Urban Oasis Tower", "Bay Avenue", "Executive Towers"],
      image: "/business-bay-dubai-canal-skyline.jpg",
    },
    {
      name: "Palm Jumeirah",
      description:
        "The world-famous man-made island offering exclusive beachfront living with private beaches, luxury resorts, and spectacular Arabian Gulf views. Experience the pinnacle of Dubai luxury.",
      properties: ["Fairmont Residences", "Oceana", "Shoreline Apartments"],
      image: "/palm-jumeirah-dubai-luxury-island.jpg",
    },
    {
      name: "Emaar Beachfront",
      description:
        "Pristine beachfront living at Dubai Harbour with white sandy beaches, crystal-clear waters, and stunning views of the Dubai Eye and Marina skyline. Your private beach paradise awaits.",
      properties: ["Marina Vista", "Sunrise Bay Tower", "Beach Isle", "Harbour Views"],
      image: "/dubai-marina-beachfront-luxury.jpg",
    },
    {
      name: "Bluewaters Island",
      description:
        "A vibrant waterfront destination home to Ain Dubai, the world's largest observation wheel. Featuring upscale retail, fine dining, and entertainment options with stunning island living experience.",
      properties: ["Bluewaters Residences", "Island Living", "Luxury Apartments"],
      image: "/bluewaters-island-dubai-eye-night.jpg",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Prime{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Locations</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our carefully selected properties in Dubai's most prestigious and sought-after neighborhoods, each
            offering a unique lifestyle experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={location.name}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 hover:border-accent bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${location.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <MapPin className="h-6 w-6 text-accent" />
                    <h3 className="font-bold text-2xl">{location.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Building className="h-4 w-4" />
                    <span>{location.properties.length} Properties Available</span>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">{location.description}</p>
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-foreground">Available Properties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.properties.map((property) => (
                      <span
                        key={property}
                        className="text-xs bg-gradient-to-r from-accent/20 to-primary/20 text-foreground px-3 py-1.5 rounded-full border border-accent/30 hover:border-accent transition-colors"
                      >
                        {property}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
