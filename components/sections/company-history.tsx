"use client"

import { useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const CompanyHistory = () => {
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

  const milestones = [
    {
      year: "1995",
      title: "Company Founded",
      description:
        "Elevate Engineering was established by a team of experienced elevator engineers with a vision to revolutionize vertical transportation.",
    },
    {
      year: "2003",
      title: "International Expansion",
      description:
        "After successful growth in the domestic market, we expanded our operations to Europe and Asia, bringing our innovative elevator solutions to a global audience.",
    },
    {
      year: "2010",
      title: "Smart Elevator Technology",
      description:
        "We pioneered the development of smart elevator systems with predictive maintenance capabilities, setting new industry standards for efficiency and reliability.",
    },
    {
      year: "2015",
      title: "Sustainability Initiative",
      description:
        "Launched our eco-friendly elevator line, featuring energy-regenerative drives and sustainable materials, reducing carbon footprint by up to 40%.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Implemented advanced IoT and AI technologies across our product line, enabling remote monitoring, predictive maintenance, and enhanced user experiences.",
    },
    {
      year: "Today",
      title: "Industry Leadership",
      description:
        "Recognized as an industry leader with over 10,000 installations worldwide, continuing to innovate and set new benchmarks for elevator excellence.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">{t("history.title")}</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto reveal reveal-delay-1">
            {t("history.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] rounded-lg overflow-hidden reveal">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop"
                alt="Company history"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-4 reveal">{t("history.legacy")}</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4 reveal reveal-delay-1">{t("history.description1")}</p>
            <p className="text-slate-700 dark:text-slate-300 reveal reveal-delay-2">{t("history.description2")}</p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center mb-8 reveal">{t("history.milestones")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-accent font-bold text-xl mb-2">{milestone.year}</div>
                <h4 className="text-xl font-semibold mb-3">{milestone.title}</h4>
                <p className="text-slate-700 dark:text-slate-300">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyHistory
