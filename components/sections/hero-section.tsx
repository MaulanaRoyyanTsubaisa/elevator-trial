"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609942072337-c3370e820005?q=80&w=1920&auto=format&fit=crop')",
          filter: "brightness(0.4)",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
          Elevating Futures with Precision
        </h1>
        <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8 reveal reveal-delay-1">
          Premium elevator solutions engineered for safety, reliability, and exceptional performance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-2">
          <Button asChild size="lg" className="min-w-[160px]">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-w-[160px] bg-transparent text-white border-white hover:bg-white/10"
          >
            <Link href="/products">
              Explore Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
