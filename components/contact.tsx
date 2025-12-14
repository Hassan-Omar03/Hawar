"use client"

import { Phone, Mail, Clock, MessageSquare } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

/* ✅ Proper Type */
type ContactInfo = {
  icon?: LucideIcon
  title: string
  content: string
  subtext: string
  link: string
}

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  /* ✅ icon is OPTIONAL now */
  const contactInfo: ContactInfo[] = [
    
    {
      icon: Phone,
      title: "Call Us",
      content: "(+971) 50 790 4560",
      subtext: "Available 24/7 for emergencies",
      link: "tel:+971507904560",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hawarhomes@gmail.com",
      subtext: "We reply within 2 hours",
      link: "mailto:hawarhomes@gmail.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "9:00 AM - 8:00 PM",
      subtext: "Sunday - Thursday",
      link: "#",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-muted/30 py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="mb-6 text-4xl font-bold text-balance md:text-5xl lg:text-6xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Ready to experience luxury living in Dubai? Our team is here to help
            you find your perfect vacation home.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mb-16 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((info, index) => (
            <Card
              key={info.title}
              className={`group border-2 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                {/* ✅ Icon rendered ONLY if exists */}
                {info.icon && (
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 transition-transform group-hover:scale-110">
                    <info.icon className="h-8 w-8 text-primary transition-colors group-hover:text-accent" />
                  </div>
                )}

                <h3 className="mb-2 text-lg font-bold">{info.title}</h3>

                <Link
                  href={info.link}
                  className="mb-2 block break-words font-medium text-muted-foreground transition-colors hover:text-accent"
                >
                  {info.content}
                </Link>

                <p className="text-sm text-muted-foreground/80">
                  {info.subtext}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="rounded-2xl border-2 border-border bg-gradient-to-br from-card via-card to-accent/10 p-10 shadow-2xl">
            <MessageSquare className="mx-auto mb-6 h-16 w-16 text-accent" />
            <h3 className="mb-4 text-2xl font-bold">
              Ready to Book Your Stay?
            </h3>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Our dedicated team is available 24/7 to assist you with bookings
              and ensure your Dubai experience is exceptional.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-auto px-8 py-6">
                <Link href="tel:+971507904560">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-auto bg-transparent px-8 py-6"
              >
                <Link href="mailto:hawarhomes@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
