"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const TeamSection = () => {
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

  const teamMembers = [
    {
      name: "Alexander Mitchell",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sophia Reynolds",
      position: "Chief Technical Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Marcus Chen",
      position: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Olivia Patel",
      position: "Design Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">{t("team.title")}</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto reveal reveal-delay-1">
            {t("team.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-none shadow-md overflow-hidden reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{member.position}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Twitter profile`}
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
