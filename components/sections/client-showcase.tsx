"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const ClientShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const clients = [
    {
      id: 1,
      name: "Skyline Tower",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
      testimonial:
        "Elevate Engineering delivered exceptional quality and service for our 50-story office tower. Their passenger elevators have been running flawlessly since installation.",
      person: "Michael Johnson",
      title: "Facilities Director",
    },
    {
      id: 2,
      name: "Grand Meridian Hotel",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      testimonial:
        "The panoramic elevators installed by Elevate Engineering have become a signature feature of our hotel, providing guests with stunning views while ensuring smooth and reliable operation.",
      person: "Sarah Williams",
      title: "General Manager",
    },
    {
      id: 3,
      name: "Oceanview Residences",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
      testimonial:
        "Our luxury condominium residents are extremely satisfied with the custom home lifts. The attention to detail and premium finishes align perfectly with our high-end residential standards.",
      person: "David Chen",
      title: "Property Developer",
    },
    {
      id: 4,
      name: "Central Medical Center",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1200&auto=format&fit=crop",
      testimonial:
        "The medical-grade elevators provided by Elevate Engineering have significantly improved our hospital's efficiency. Their reliability is crucial for our 24/7 operations.",
      person: "Dr. Emily Rodriguez",
      title: "Hospital Administrator",
    },
    {
      id: 5,
      name: "Gourmet Heights Restaurant",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
      testimonial:
        "The dumbwaiter system has revolutionized our kitchen operations. Food service is now seamless between floors, improving both efficiency and customer satisfaction.",
      person: "Thomas Laurent",
      title: "Executive Chef",
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === clients.length - 1 ? 0 : prev + 1))
  }, [clients.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? clients.length - 1 : prev - 1))
  }, [clients.length])

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
      }, 6000)
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
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Our Valued Clients</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto reveal reveal-delay-1">
            Discover what our clients have to say about their experience working with Elevate Engineering.
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
              {clients.map((client) => (
                <div key={client.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-full min-h-[300px] md:min-h-[400px]">
                      <Image
                        src={client.image || "/placeholder.svg"}
                        alt={client.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 flex flex-col justify-center">
                      <div className="mb-6">
                        <Quote className="h-10 w-10 text-accent opacity-50" />
                      </div>
                      <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-6">"{client.testimonial}"</p>
                      <div className="mt-auto">
                        <h3 className="font-bold text-xl">{client.person}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{client.title}</p>
                        <p className="text-primary font-medium mt-1">{client.name}</p>
                      </div>
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
            aria-label="Previous client"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg bg-white/80 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-800"
            onClick={nextSlide}
            aria-label="Next client"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentSlide === index
                    ? "bg-primary w-8"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500",
                )}
                aria-label={`Go to client ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientShowcase
