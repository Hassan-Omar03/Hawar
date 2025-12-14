"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground"
    >
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 py-16">
        {/* ✅ FIXED GRID */}
        <div
          className={`grid gap-12 md:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Company Info */}
          <div>
            <Image
              src="/hawar-logo.png"
              alt="Hawar Vacation Homes"
              width={140}
              height={70}
              className="mb-6 h-16 w-auto"
            />
            <p className="max-w-md leading-relaxed text-primary-foreground/90">
              Premier vacation home rentals in Dubai's most iconic locations.
              Experience luxury living with world-class hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                // { href: "/locations", label: "Prime Locations" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    <span className="h-0.5 w-0 bg-accent transition-all group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                <Link
                  href="https://maps.google.com/?q=Office+227+AlMansoori+Building+Hor+AlAnz+Dubai"
                  className="hover:text-primary-foreground"
                >
                  Office 227, AlMansoori Building, Hor AlAnz, Dubai, UAE
                </Link>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="h-5 w-5 text-accent" />
                <Link href="tel:+971507904560">
                  (+971) 50 790 4560
                </Link>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="h-5 w-5 text-accent" />
                <Link href="mailto:hawarhomes@gmail.com">
                  hawarhomes@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-12 border-t border-primary-foreground/20 pt-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div className="text-primary-foreground/80">
              <p>
                &copy; {new Date().getFullYear()} Hawar for Vacation Homes Rental
                LLC. All rights reserved.
              </p>
              <p className="text-sm">
                Trade License: 1389024 | Licensed by Dubai Department of Economy &
                Tourism (DET)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
