"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

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

  // Logos for the first row
  const clientLogos1 = [
    {
      id: 1,
      name: "Skyline Properties",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Global Construction",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Luxury Homes",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "City Developers",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Modern Architects",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Premier Hotels",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&auto=format&fit=crop",
    },
  ]

  // Logos for the second row (scrolling in opposite direction)
  const clientLogos2 = [
    {
      id: 7,
      name: "Healthcare Systems",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Urban Planning",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "Retail Spaces",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 10,
      name: "Industrial Solutions",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 11,
      name: "Eco Buildings",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 12,
      name: "Smart Homes",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&auto=format&fit=crop",
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Our Trusted Clients</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto reveal reveal-delay-1">
            We're proud to work with leading companies and organizations across various industries.
          </p>
        </div>

        <div className="reveal reveal-delay-2">
          {/* First row - scrolling left to right */}
          <div className="flex space-x-12 mb-12 overflow-hidden">
            <div className="flex space-x-12 animate-marquee">
              {[...clientLogos1, ...clientLogos1].map((client, index) => (
                <div key={`${client.id}-${index}`} className="flex-shrink-0 w-40 h-20 relative">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second row - scrolling right to left */}
          <div className="flex space-x-12 overflow-hidden">
            <div className="flex space-x-12 animate-marquee-reverse">
              {[...clientLogos2, ...clientLogos2].map((client, index) => (
                <div key={`${client.id}-${index}`} className="flex-shrink-0 w-40 h-20 relative">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
