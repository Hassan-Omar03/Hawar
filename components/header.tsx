"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/locations", label: "Locations" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/hawar2.png"
                alt="Hawar Vacation Homes"
                width={120}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors font-medium ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="lg" className="ml-4">
                <Link href="tel:+971507904560">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-2">
                <Link href="tel:+971507904560">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Link>
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* ✅ Floating WhatsApp Button (NO LIBRARY) */}
      <a
        href="https://wa.me/971507904560"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="h-7 w-7"
        >
          <path d="M16 0C7.163 0 0 6.627 0 14.8c0 3.35 1.23 6.44 3.275 8.85L2.1 32l8.6-2.875c1.65.45 3.4.675 5.3.675 8.837 0 16-6.627 16-14.8S24.837 0 16 0zm0 27.2c-1.75 0-3.45-.25-5.05-.75l-.35-.1-5.1 1.7 1.7-4.85-.25-.4C5.1 21.15 4 18.1 4 14.8 4 8.15 9.825 2.8 16 2.8S28 8.15 28 14.8 22.175 27.2 16 27.2zm6.35-7.4c-.35-.15-2.05-.95-2.375-1.05-.325-.125-.55-.15-.775.15-.225.3-.9 1.05-1.1 1.25-.2.2-.425.225-.775.075-.35-.15-1.475-.5-2.8-1.6-1.05-.85-1.75-1.9-1.95-2.2-.2-.3-.025-.45.15-.6.15-.15.35-.35.525-.525.175-.175.225-.3.35-.5.125-.2.075-.375-.025-.525-.1-.15-.775-1.8-1.075-2.45-.275-.65-.55-.55-.775-.55h-.65c-.2 0-.525.075-.8.375-.275.3-1.05 1.05-1.05 2.55s1.075 2.95 1.225 3.15c.15.2 2.1 3.3 5.1 4.6.7.3 1.25.5 1.675.65.7.225 1.35.2 1.85.125.55-.075 1.7-.675 1.95-1.35.25-.65.25-1.2.175-1.35-.075-.15-.3-.225-.65-.375z" />
        </svg>
      </a>
    </>
  )
}
