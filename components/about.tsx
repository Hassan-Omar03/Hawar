"use client"

import { Building2, Award, Shield, Users, TrendingUp, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function About() {
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

  const features = [
    {
      icon: Building2,
      title: "Premier Properties",
      description:
        "Carefully curated selection of high-quality vacation homes in prime Dubai locations with stunning views and premium amenities",
    },
    {
      icon: Award,
      title: "Licensed & Trusted",
      description: "Fully licensed by Dubai Department of Economy & Tourism (DET) - Trade License 1389024",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every property meets the highest standards of comfort, safety, cleanliness, and contemporary style",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Professional management team with years of hospitality experience dedicated to your complete satisfaction",
    },
    {
      icon: TrendingUp,
      title: "Market Leaders",
      description: "Pioneering innovative solutions in Dubai's short-term rental market since 2024",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "International hospitality standards combined with authentic Arabian warmth and service",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Hawar</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Hawar for Vacation Homes Rental LLC is a premier short-term rental management company based in Dubai, UAE.
            We specialize in providing fully furnished, high-quality vacation homes and serviced apartments across
            Dubai's most iconic neighborhoods, delivering exceptional experiences for travelers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`border-2 hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/80 backdrop-blur-sm ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`max-w-5xl mx-auto bg-gradient-to-br from-card via-card to-accent/5 p-8 md:p-12 rounded-2xl border-2 border-border shadow-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-2xl mb-6 text-primary">Company Details</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <strong className="text-foreground block">Legal Form:</strong>
                    Limited Liability Company (LLC)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <strong className="text-foreground block">Year Established:</strong>
                    2024
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <strong className="text-foreground block">Trade License:</strong>
                    1389024
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <strong className="text-foreground block">Headquarters:</strong>
                    Dubai, United Arab Emirates
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <strong className="text-foreground block">Service Area:</strong>
                    All of Dubai's premium neighborhoods
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-6 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To offer a seamless and luxurious experience for travelers, tourists, and corporate clients seeking a
                home away from home, blending world-class hospitality with professional property management expertise.
              </p>
              <h3 className="font-bold text-2xl mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and recognized name in Dubai's vacation rental industry, setting new
                standards for quality, service excellence, and guest satisfaction while maximizing returns for property
                owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
