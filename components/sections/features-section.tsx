"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, Settings, Award, Zap, HeartHandshake } from "lucide-react"

const FeaturesSection = () => {
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
      title: "Safety First",
      description:
        "Our elevators exceed industry safety standards with multiple backup systems and fail-safe mechanisms.",
    },
    {
      icon: <Clock className="h-10 w-10 text-accent" />,
      title: "Timely Delivery",
      description: "We pride ourselves on meeting project deadlines with precision planning and efficient execution.",
    },
    {
      icon: <Settings className="h-10 w-10 text-accent" />,
      title: "Custom Solutions",
      description:
        "Each elevator is tailored to your specific requirements, architectural style, and building constraints.",
    },
    {
      icon: <Award className="h-10 w-10 text-accent" />,
      title: "Premium Quality",
      description: "We use only the highest quality materials and components to ensure longevity and reliability.",
    },
    {
      icon: <Zap className="h-10 w-10 text-accent" />,
      title: "Energy Efficient",
      description: "Our elevator systems are designed to minimize energy consumption without compromising performance.",
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-accent" />,
      title: "Lifetime Support",
      description:
        "We provide comprehensive maintenance and support services throughout the lifecycle of your elevator.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Why Choose Elevate Engineering</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto reveal reveal-delay-1">
            Our commitment to excellence and customer satisfaction sets us apart in the elevator industry.
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
