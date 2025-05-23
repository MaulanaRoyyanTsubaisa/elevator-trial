"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const ProductShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const products = [
    {
      id: 1,
      name: "Premium Home Lift",
      description: "Elegant design with premium finishes for luxury homes",
      image: "https://images.unsplash.com/photo-1603198132637-5c4ceb5de31f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Commercial Passenger Elevator",
      description: "High-capacity elevators for office buildings and commercial spaces",
      image: "https://images.unsplash.com/photo-1567610701070-6739001d5144?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Industrial Cargo Lift",
      description: "Heavy-duty cargo elevators for industrial applications",
      image: "https://images.unsplash.com/photo-1609942072337-c3370e820005?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Panoramic Glass Elevator",
      description: "Stunning glass elevators with panoramic views",
      image: "https://images.unsplash.com/photo-1603198132334-9cef81c66c41?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Hospital Medical Elevator",
      description: "Specialized elevators for healthcare facilities",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1))
  }, [products.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1))
  }, [products.length])

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

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, nextSlide])

  const handleMouseEnter = () => {
    setAutoplay(false)
  }

  const handleMouseLeave = () => {
    setAutoplay(true)
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Featured Products</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto reveal reveal-delay-1">
            Explore our premium elevator solutions designed for various applications and environments.
          </p>
        </div>

        <div
          className="relative max-w-5xl mx-auto reveal reveal-delay-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="relative h-[500px] w-full">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-lg text-slate-200 mb-4">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg bg-white/80 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-800"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg bg-white/80 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-800"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentSlide === index
                    ? "bg-primary w-8"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
