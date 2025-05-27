"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

const MapSection = () => {
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

  return (
    <section className="py-12 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 reveal">{t("contact.map.title")}</h2>
          <p className="text-slate-700 dark:text-slate-300 max-w-3xl mx-auto reveal reveal-delay-1">
            {t("contact.map.subtitle")}
          </p>
        </div>

        <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-md reveal reveal-delay-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620796867932!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Elevate Engineering Location"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default MapSection
