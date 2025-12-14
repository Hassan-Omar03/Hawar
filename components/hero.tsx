"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, MapPin, Star, Home, Award } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[url('/luxury-dubai-skyline-burj-khalifa.jpg')] bg-cover bg-center " />

      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float animation-delay-400" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent-foreground px-6 py-3 rounded-full text-sm font-medium mb-8 border border-accent/30 animate-fade-in">
            <MapPin className="h-4 w-4" />
            <span>Licensed by Dubai DET</span>
            <Award className="h-4 w-4 ml-2" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-balance leading-tight animate-fade-in-up">
            Your Luxury Home Away From Home in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Dubai</span>
          </h1>

          <p className="text-xl md:text-2xl text-medium text-black mb-12 max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up animation-delay-200">
            Experience unparalleled comfort in fully furnished vacation homes and serviced apartments across Dubai's
            most iconic neighborhoods. Where luxury meets hospitality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-400">
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-7 h-auto shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link href="#locations">
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-10 py-7 h-auto bg-background/80 backdrop-blur-sm "
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { number: "2024", label: "Established", icon: Award },
              { number: "100+", label: "Properties", icon: Home },
              { number: "24/7", label: "Support", icon: MapPin },
              { number: "5.0", label: "Guest Rating", icon: Star },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all hover:scale-105 animate-scale-in`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mx-auto animate-float" />
        </div>
      </div>
    </section>
  )
}
