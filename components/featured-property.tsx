"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Users, Sparkles, Building2, Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function FeaturedProperty() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const propertyImages = [
    { src: "/1.jpeg", alt: "Bedroom with stunning Burj Khalifa night view" },
    { src: "/2.jpeg", alt: "Luxury bedroom with Dubai skyline view" },
    { src: "/3.jpeg", alt: "Bedroom with daytime Burj Khalifa view" },
    { src: "/4.jpeg", alt: "Master bedroom with balcony and night city views" },
    { src: "/5.jpeg", alt: "Modern bedroom with elegant furnishings" },
    { src: "/6.jpeg", alt: "Spacious bedroom with contemporary design" },
    { src: "/7.jpeg", alt: "Luxury bathroom with modern fixtures" },
    { src: "/8.jpeg", alt: "Contemporary bathroom with bathtub" },
        { src: "/9.jpeg", alt: "Bedroom with stunning Burj Khalifa night view" },
    { src: "/10.jpeg", alt: "Luxury bedroom with Dubai skyline view" },
    { src: "/11.jpeg", alt: "Bedroom with daytime Burj Khalifa view" },
    { src: "/12.jpeg", alt: "Master bedroom with balcony and night city views" },
    { src: "/13.jpeg", alt: "Modern bedroom with elegant furnishings" },
    { src: "/14.jpeg", alt: "Spacious bedroom with contemporary design" },
    { src: "/15.jpeg", alt: "Luxury bathroom with modern fixtures" },
    { src: "/16.jpeg", alt: "Contemporary bathroom with bathtub" },
    { src: "/17.jpeg", alt: "Luxury bathroom with modern fixtures" },
    { src: "/18.jpeg", alt: "Contemporary bathroom with bathtub" },
  ]

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % propertyImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [propertyImages.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % propertyImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)
  }

  return (
    <section ref={sectionRef} id="featured" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-6 py-3 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-accent/30">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span>Featured Property</span>
            <Star className="h-4 w-4 fill-accent text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Live the Dream — 2-BR Apartment with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Burj Khalifa View
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Wake up to the world's tallest skyscraper — experience stunning sunrises and glittering nights right from
            your balcony in Downtown Dubai!
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
            <div className="relative overflow-hidden rounded-3xl border-4 border-accent/20 shadow-2xl">
              <img
                src={propertyImages[currentImage].src || "/placeholder.svg"}
                alt={propertyImages[currentImage].alt}
                className="w-full h-[600px] object-cover transition-all duration-700"
              />
              <div className="absolute top-6 right-6 bg-accent/90 backdrop-blur-sm text-accent-foreground px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                <Sparkles className="inline h-5 w-5 mr-2" />
                Featured
              </div>

              {/* Gallery Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full hover:bg-background transition-all hover:scale-110 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full hover:bg-background transition-all hover:scale-110 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {propertyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage ? "bg-accent w-8" : "bg-background/60 hover:bg-background/80"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {propertyImages.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative overflow-hidden rounded-xl border-2 transition-all hover:scale-105 ${
                    index === currentImage ? "border-accent shadow-lg" : "border-border/30 hover:border-accent/50"
                  }`}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-accent/50 transition-all">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-accent" />
                Why You'll Love Staying Here
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
                  <div className="bg-primary/20 p-3 rounded-xl group-hover:bg-primary/30 transition-colors">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Iconic Burj Khalifa Views</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Spacious 2-bedroom luxury apartment with full Downtown skyline and Burj Khalifa view
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
                  <div className="bg-accent/20 p-3 rounded-xl group-hover:bg-accent/30 transition-colors">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Perfect for Groups</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Ideal for couples, friends or family — comfortably accommodates up to 4–6 guests
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
                  <div className="bg-primary/20 p-3 rounded-xl group-hover:bg-primary/30 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Prime Location</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Heart of Dubai — just minutes from major attractions, Dubai Mall, and vibrant nightlife
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
                  <div className="bg-accent/20 p-3 rounded-xl group-hover:bg-accent/30 transition-colors">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Comfort + Style</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Modern interiors, cozy balcony, and cityscape vibes you won't forget
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Link href="/contact">
                  Book This Property
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg px-8 py-6 h-auto hover:scale-105 transition-all bg-transparent"
              >
                <Link href="/locations">View All Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
