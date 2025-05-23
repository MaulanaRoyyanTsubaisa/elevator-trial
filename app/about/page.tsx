import type { Metadata } from "next"
import AboutHero from "@/components/sections/about-hero"
import VisionMission from "@/components/sections/vision-mission"
import CompanyHistory from "@/components/sections/company-history"
import TeamSection from "@/components/sections/team-section"
import CTASection from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "About Us | Elevate Engineering",
  description: "Learn about our vision, mission, and history in elevator construction and installation.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <VisionMission />
      <CompanyHistory />
      <TeamSection />
      <CTASection />
    </div>
  )
}
