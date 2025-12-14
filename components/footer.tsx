"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

 

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <Image
              src="/hawar-logo.png"
              alt="Hawar Vacation Homes"
              width={140}
              height={70}
              className="h-16 w-auto mb-6"
            />
            <p className="text-primary-foreground/90 leading-relaxed mb-6">
              Premier vacation home rentals in Dubai's most iconic locations. Experience luxury living with world-class
              hospitality.
            </p>
          
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="font-bold text-xl mb-6 text-balance">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Our Services" },
                { href: "#locations", label: "Prime Locations" },
                { href: "#contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="animate-fade-in-up animation-delay-400">
            <h3 className="font-bold text-xl mb-6 text-balance">Our Locations</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              {[
                "Downtown Dubai",
                "Business Bay",
                "Palm Jumeirah",
                "Dubai Hills",
                "Emaar Beachfront",
                "Bluewaters Island",
              ].map((location) => (
                <li key={location} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up animation-delay-600">
            <h3 className="font-bold text-xl mb-6 text-balance">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80 group">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <Link
                  href="https://maps.google.com/?q=Office+227+AlMansoori+Building+Hor+AlAnz+Dubai"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Office 227, AlMansoori Building, Hor AlAnz, Dubai, UAE
                </Link>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80 group">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <Link href="tel:+971507904560" className="hover:text-primary-foreground transition-colors">
                  (+971) 50 790 4560
                </Link>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80 group">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <Link
                  href="mailto:hawarhomes@gmail.com"
                  className="hover:text-primary-foreground transition-colors break-words"
                >
                  hawarhomes@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-primary-foreground/20 pt-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "0.8s" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-primary-foreground/80">
              <p className="mb-1">
                &copy; {new Date().getFullYear()} Hawar for Vacation Homes Rental LLC. All rights reserved.
              </p>
              <p className="text-sm">
                Trade License: 1389024 | Licensed by Dubai Department of Economy & Tourism (DET)
              </p>
            </div>
            {/* <div className="flex gap-6 text-sm text-primary-foreground/80">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Cancellation Policy
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
