"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const IntroSection = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 reveal">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1287&auto=format&fit=crop"
                alt="Modern elevator installation"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
              Crafting Vertical Transportation Excellence Since 1995
            </h2>
            <p className="text-gray-700 mb-8 reveal reveal-delay-1">
              At Elevate Engineering, we specialize in designing, manufacturing, and installing premium elevator systems
              for residential and commercial buildings. Our commitment to quality, safety, and innovation has made us a
              trusted partner for architects, developers, and property owners worldwide.
            </p>
            <div className="space-y-4 mb-8 reveal reveal-delay-2">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-amber-500 mr-3 mt-1" />
                <span>Premium quality materials and craftsmanship</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-amber-500 mr-3 mt-1" />
                <span>Energy-efficient elevator solutions</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-amber-500 mr-3 mt-1" />
                <span>Customized designs to match your architecture</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-amber-500 mr-3 mt-1" />
                <span>Comprehensive maintenance and support</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-amber-500 mr-3 mt-1" />
                <span>Industry-leading safety standards</span>
              </div>
            </div>
            <div className="reveal reveal-delay-3">
              <Button asChild size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
