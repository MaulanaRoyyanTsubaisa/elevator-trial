"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const ClientsSection = () => {
  const { t } = useLanguage()

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

  const clientLogos = Array.from({ length: 6 }, (_, i) => i + 1)

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal"> {t("clients.title")}</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto reveal reveal-delay-1">
            {t("clients.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {clientLogos.map((index) => (
            <div
              key={index}
              className="flex items-center justify-center reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-16 w-full">
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=Client ${index}`}
                  alt={`Client ${index} logo`}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal reveal-delay-3">
          <Button asChild size="lg">
            <Link href="/projects">
              {t("clients.viewProjects")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
