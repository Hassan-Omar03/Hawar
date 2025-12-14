"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CTA() {
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

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent" />
      <div className="absolute inset-0 bg-[url('/luxury-dubai-skyline-burj-khalifa.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground text-balance">
            Ready to Experience Luxury Living in Dubai?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed text-pretty">
            Book your perfect vacation home today and discover why thousands of guests choose Hawar for their Dubai
            stays. Premium properties, exceptional service, unforgettable experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-7 h-auto shadow-2xl hover:shadow-3xl transition-all hover:scale-105 bg-background text-foreground"
            >
              <Link href="tel:+971507904560">
                <Phone className="mr-2 h-6 w-6" />
                Call Us Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 h-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105"
            >
              <Link href="mailto:hawarhomes@gmail.com">
                <Mail className="mr-2 h-6 w-6" />
                Email Us
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Instant Booking", desc: "Quick & Easy Process" },
              { label: "Best Price Guarantee", desc: "Competitive Rates" },
              { label: "24/7 Support", desc: "Always Here for You" },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all hover:scale-105 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="font-bold text-primary-foreground text-lg mb-1">{item.label}</div>
                <div className="text-primary-foreground/80 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
