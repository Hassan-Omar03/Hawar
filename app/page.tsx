import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProperty } from "@/components/featured-property"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProperty />
      <Footer />
    </main>
  )
}
