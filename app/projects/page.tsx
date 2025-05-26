import type { Metadata } from "next"
import ProjectsHero from "@/components/sections/projects-hero"
import ProjectsList from "@/components/sections/projects-list"
import ClientLogos from "@/components/sections/client-logos"
import CTASection from "@/components/sections/cta-section"
import { BreadcrumbNavigation } from "@/components/breadcrumb-navigation"

export const metadata: Metadata = {
  title: "Projects & Clients | Elevate Engineering",
  description: "View our portfolio of completed elevator installation projects and client testimonials.",
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4 mt-20">
        <div className="container mx-auto px-4">
          <BreadcrumbNavigation />
        </div>
      </div>

      <ProjectsHero />
      <ProjectsList />
      <ClientLogos />
      <CTASection />
    </div>
  )
}
