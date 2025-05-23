"use client"

import { useEffect } from "react"

const ProjectsHero = () => {
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
    <section className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1603198132334-9cef81c66c41?q=80&w=1920&auto=format&fit=crop')",
          filter: "brightness(0.4)",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">Our Projects & Clients</h1>
        <p className="text-xl text-slate-200 max-w-3xl mx-auto reveal reveal-delay-1">
          Explore our portfolio of successful elevator installations and the prestigious clients who trust our
          expertise.
        </p>
      </div>
    </section>
  )
}

export default ProjectsHero
