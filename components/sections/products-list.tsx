"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const ProductsList = () => {
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

  const products = [
    {
      id: "home-lift",
      name: "Home Lift",
      description:
        "Elegant and compact elevator solutions designed specifically for residential properties. Our home lifts combine style with functionality, enhancing accessibility while complementing your home's interior design.",
      image: "https://images.unsplash.com/photo-1603198132637-5c4ceb5de31f?q=80&w=600&auto=format&fit=crop",
      features: [
        "Space-efficient design",
        "Whisper-quiet operation",
        "Energy-efficient technology",
        "Customizable finishes",
        "Easy installation",
      ],
    },
    {
      id: "passenger-elevator",
      name: "Passenger Elevator",
      description:
        "High-performance elevator systems for commercial buildings, hotels, and residential complexes. Our passenger elevators offer smooth rides, energy efficiency, and can be customized to match your building's aesthetic.",
      image: "https://images.unsplash.com/photo-1567610701070-6739001d5144?q=80&w=600&auto=format&fit=crop",
      features: [
        "High-speed operation",
        "Large capacity options",
        "Advanced safety features",
        "Smart control systems",
        "Premium interior options",
      ],
    },
    {
      id: "cargo-lift",
      name: "Cargo Lift",
      description:
        "Heavy-duty elevator solutions designed for industrial applications and freight transport. Our cargo lifts combine robust construction with reliable performance to handle your most demanding material handling needs.",
      image: "https://images.unsplash.com/photo-1609942072337-c3370e820005?q=80&w=600&auto=format&fit=crop",
      features: [
        "High weight capacity",
        "Durable construction",
        "Oversized dimensions available",
        "Industrial-grade components",
        "Easy loading/unloading",
      ],
    },
    {
      id: "dumbwaiter",
      name: "Dumbwaiter",
      description:
        "Compact service elevators perfect for restaurants, hotels, and multi-level homes. Our dumbwaiters provide efficient transport of small items between floors, saving time and improving operational efficiency.",
      image: "https://images.unsplash.com/photo-1582824583927-a09e766b7b7e?q=80&w=600&auto=format&fit=crop",
      features: [
        "Compact design",
        "Multiple size options",
        "Quiet operation",
        "Easy to maintain",
        "Custom loading heights",
      ],
    },
    {
      id: "panoramic-lift",
      name: "Panoramic Lift",
      description:
        "Stunning glass elevators that combine functionality with architectural beauty. Our panoramic lifts create a visual statement while providing passengers with breathtaking views during their journey.",
      image: "https://images.unsplash.com/photo-1603198132334-9cef81c66c41?q=80&w=600&auto=format&fit=crop",
      features: [
        "Full glass enclosure options",
        "Customizable lighting",
        "Sleek, modern design",
        "Smooth, quiet operation",
        "Weather-resistant options",
      ],
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Elevator Solutions for Every Need</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto reveal reveal-delay-1">
            From residential homes to commercial complexes, we offer a comprehensive range of elevator systems tailored
            to your specific requirements.
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div
              key={product.id}
              id={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative h-[400px] rounded-lg overflow-hidden reveal">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Card className="border-none shadow-none reveal reveal-delay-1">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-3xl font-bold">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <CardDescription className="text-base text-slate-700 dark:text-slate-300 mb-6">
                      {product.description}
                    </CardDescription>
                    <h4 className="font-semibold text-lg mb-4">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="px-0 pb-0">
                    <Button asChild>
                      <Link href="/contact">
                        Request Information <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsList
