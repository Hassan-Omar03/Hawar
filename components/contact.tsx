"use client"

import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Office 227, AlMansoori Building, Hor AlAnz, Dubai, UAE",
      subtext: "Open Monday - Saturday",
      link: "https://maps.google.com/?q=Office+227+AlMansoori+Building+Hor+AlAnz+Dubai",
    },
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
    <section ref={sectionRef} id="contact" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to experience luxury living in Dubai? Our team is here to help you find your perfect vacation home.
            Contact us today for bookings, inquiries, or property management services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={info.title}
              className={`hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                <Link
                  href={info.link}
                  className="text-muted-foreground hover:text-accent transition-colors text-pretty break-words block mb-2 font-medium"
                >
                  {info.content}
                </Link>
                <p className="text-sm text-muted-foreground/80">{info.subtext}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="bg-gradient-to-br from-card via-card to-accent/10 p-10 rounded-2xl border-2 border-border shadow-2xl">
            <MessageSquare className="h-16 w-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Ready to Book Your Stay?</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our dedicated team is available 24/7 to assist you with bookings, answer questions, and ensure your Dubai
              experience is exceptional from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Link href="tel:+971507904560">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 h-auto hover:scale-105 transition-all bg-transparent"
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
