"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function Testimonials() {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United Kingdom",
      rating: 5,
      text: "Our stay at Hawar's Downtown Dubai property was absolutely incredible. The apartment was immaculate, the location perfect, and the service exceptional. The team went above and beyond to ensure our comfort. Highly recommend!",
      date: "December 2024",
    },
    {
      name: "Mohammed Al-Rashid",
      location: "Saudi Arabia",
      rating: 5,
      text: "I've stayed at many vacation rentals in Dubai, but Hawar truly stands out. The Palm Jumeirah villa was luxurious, well-maintained, and the check-in process was seamless. The 24/7 support made us feel secure and cared for.",
      date: "November 2024",
    },
    {
      name: "Emily Chen",
      location: "Singapore",
      rating: 5,
      text: "Perfect for our family vacation! The apartment in Business Bay had stunning views and was close to everything. The housekeeping service was excellent, and the staff responded to our requests within minutes. Will definitely book again!",
      date: "November 2024",
    },
    {
      name: "James Thompson",
      location: "United States",
      rating: 5,
      text: "As a business traveler, I need reliable accommodation. Hawar delivered on all fronts - excellent WiFi, comfortable workspace, and professional service. The Dubai Hills property became my home away from home for three months.",
      date: "October 2024",
    },
    {
      name: "Natasha Petrov",
      location: "Russia",
      rating: 5,
      text: "The attention to detail was remarkable. From the welcome package to the daily housekeeping, everything was perfect. The Bluewaters Island location gave us stunning views of the Dubai Eye. An unforgettable experience!",
      date: "October 2024",
    },
    {
      name: "Carlos Rodriguez",
      location: "Spain",
      rating: 5,
      text: "Hawar made our Dubai holiday stress-free. The property was exactly as described, the concierge helped us book tours and restaurants, and the location in Downtown Dubai meant we could walk to the Dubai Mall. Excellent value!",
      date: "September 2024",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Guest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hear from our satisfied guests who experienced the luxury and hospitality of Hawar vacation homes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent bg-card/80 backdrop-blur-sm group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-10 w-10 text-accent/30" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">{testimonial.text}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm border-2 border-border rounded-full px-8 py-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent -mr-1" />
              ))}
            </div>
            <div className="text-left border-l border-border pl-4">
              <div className="text-2xl font-bold text-foreground">5.0 / 5.0</div>
              <div className="text-sm text-muted-foreground">Based on 500+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
