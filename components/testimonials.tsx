"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function Testimonials() {
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

  const testimonials = [
  {
    name: "Alish",
    location: "Flower Mound, Texas",
    rating: 5,
    date: "June 2025",
    text: "Saba’s place was great for our trip. It is centrally located and close to Dubai Mall. Check-in was smooth thanks to their help and they were very responsive to our queries. Overall, we really enjoyed our stay and would definitely recommend this place for your stay in Dubai.",
  },
  {
    name: "Adel",
    location: "Los Angeles, California",
    rating: 5,
    date: "March 2025",
    text: "This Airbnb was so beautiful and clean. The host is amazing and everything was so easy. The place is walking distance from the Dubai Mall and many great restaurants. I definitely recommend staying here.",
  },
  {
    name: "Merhawit Teclhaimanot",
    location: "Airbnb Guest",
    rating: 5,
    date: "March 2025",
    text: "Beautiful place with views of Burj Khalifa and walking distance to Dubai Mall. Responsive and cooperative host.",
  },
  {
    name: "Saroj Kumar",
    location: "Airbnb Guest",
    rating: 5,
    date: "March 2025",
    text: "We stayed here for about a week with family and had a really comfortable experience. The place is clean, spacious, and relatively new. Burj Khalifa is visible from the balcony and windows. The host was very responsive and helpful during check-in, check-out, and throughout the stay. Highly recommended.",
  },
  {
    name: "Fatna",
    location: "Airbnb Guest",
    rating: 5,
    date: "March 2025",
    text: "It’s a perfect one-bedroom luxury apartment, fully equipped with all comforts. Amazing views of Burj Khalifa and quick access to Dubai Mall. Host available 24/7, very friendly and professional. Thanks for everything!",
  },
  {
    name: "Sana",
    location: "Airbnb Guest",
    rating: 5,
    date: "February 2025",
    text: "Amazing place so close to Dubai Mall and all amenities. Loved seating with Saba, highly recommend to everyone.",
  },
  {
    name: "Sultan",
    location: "Airbnb Guest",
    rating: 5,
    date: "February 2025",
    text: "One of the best places in Dubai and the view is very beautiful.",
  },
  {
    name: "Mohamed",
    location: "Colombo, Sri Lanka",
    rating: 5,
    date: "February 2025",
    text: "Best place and friendly coordination. It fully fulfilled the expectation. Would love to come again.",
  },
  {
    name: "Lilia",
    location: "Airbnb Guest",
    rating: 5,
    date: "January 2025",
    text: "Stunning place downtown!",
  },
]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Guest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hear from our satisfied guests who experienced the luxury and hospitality of Hawar vacation homes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent bg-card/80 backdrop-blur-sm group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-10 w-10 text-accent/30" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">{testimonial.text}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm border-2 border-border rounded-full px-8 py-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent -mr-1" />
              ))}
            </div>
            <div className="text-left border-l border-border pl-4">
              <div className="text-2xl font-bold text-foreground">5.0 / 5.0</div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
