"use client"

import { CheckCircle2, Heart, TrendingUp, Users2, Award, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function WhyChoose() {
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

  const values = [
    {
      icon: Heart,
      title: "Hospitality First",
      description:
        "We prioritize your comfort and satisfaction above all else, treating every guest like family and ensuring memorable experiences throughout your stay.",
    },
    {
      icon: Shield,
      title: "Transparency & Trust",
      description:
        "Clear communication, honest dealings, and upfront pricing in every interaction. No hidden fees, no surprises - just straightforward service you can rely on.",
    },
    {
      icon: Award,
      title: "Compliance & Professionalism",
      description:
        "Fully licensed by Dubai DET and adhering to all local regulations. Our professional team maintains the highest standards of service excellence.",
    },
    {
      icon: TrendingUp,
      title: "Innovation in Experience",
      description:
        "Constantly improving our services with the latest hospitality technology and guest feedback to provide cutting-edge vacation rental experiences.",
    },
    {
      icon: Users2,
      title: "Owner & Guest Satisfaction",
      description:
        "We balance exceptional returns for property owners with memorable, comfortable stays for guests, creating value for everyone in our community.",
    },
    {
      icon: CheckCircle2,
      title: "Attention to Detail",
      description:
        "From immaculate cleanliness to thoughtful amenities, we ensure every detail is perfect, creating spaces that feel like a true home away from home.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-primary/5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Hawar</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our core values and commitment to excellence guide everything we do, ensuring exceptional experiences for
            every guest and maximum returns for property owners
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`flex flex-col gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-20 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Guest Satisfaction</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Happy Guests</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border">
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
