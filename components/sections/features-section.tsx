"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, Settings, Award, Zap, HeartHandshake } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const FeaturesSection = () => {
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

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-accent" />,
      title: t("features.safety.title"),
      description: t("features.safety.desc"),
    },
    {
      icon: <Clock className="h-10 w-10 text-accent" />,
      title: t("features.delivery.title"),
      description: t("features.delivery.desc"),
    },
    {
      icon: <Settings className="h-10 w-10 text-accent" />,
      title: t("features.custom.title"),
      description: t("features.custom.desc"),
    },
    {
      icon: <Award className="h-10 w-10 text-accent" />,
      title: t("features.quality.title"),
      description: t("features.quality.desc"),
    },
    {
      icon: <Zap className="h-10 w-10 text-accent" />,
      title: t("features.energy.title"),
      description: t("features.energy.desc"),
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-accent" />,
      title: t("features.support.title"),
      description: t("features.support.desc"),
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">{t("features.title")}</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto reveal reveal-delay-1">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
