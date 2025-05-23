"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target } from "lucide-react"

const VisionMission = () => {
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
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Our Vision & Mission</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto reveal reveal-delay-1">
            Guided by our core values, we strive to transform vertical transportation through innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg reveal">
            <CardHeader className="flex flex-row items-center gap-4">
              <Eye className="h-10 w-10 text-accent" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300">
                To be the global leader in innovative elevator solutions, setting new standards for safety, efficiency,
                and design excellence. We envision a world where vertical transportation enhances the architectural
                beauty of buildings while providing seamless mobility for all.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-4">
                We strive to pioneer sustainable elevator technologies that minimize environmental impact while
                maximizing performance and reliability, contributing to smarter, more connected buildings of the future.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg reveal reveal-delay-2">
            <CardHeader className="flex flex-row items-center gap-4">
              <Target className="h-10 w-10 text-accent" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300">
                To deliver exceptional elevator solutions that exceed client expectations through engineering
                excellence, innovative design, and uncompromising quality. We are committed to creating safe, reliable,
                and aesthetically pleasing elevator systems that enhance the value and functionality of every building.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-4">
                We accomplish this by fostering a culture of continuous improvement, investing in our team's
                development, embracing cutting-edge technologies, and maintaining strong relationships with our clients
                and partners throughout the entire project lifecycle.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
