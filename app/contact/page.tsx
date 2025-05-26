import type { Metadata } from "next"
import ContactHero from "@/components/sections/contact-hero"
import ContactForm from "@/components/sections/contact-form"
import ContactInfo from "@/components/sections/contact-info"
import MapSection from "@/components/sections/map-section"
import { BreadcrumbNavigation } from "@/components/breadcrumb-navigation"

export const metadata: Metadata = {
  title: "Contact Us | Elevate Engineering",
  description: "Get in touch with our team for elevator installation, maintenance, and consultation services.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4 mt-20">
        <div className="container mx-auto px-4">
          <BreadcrumbNavigation />
        </div>
      </div>

      <ContactHero />
      <div className="container mx-auto px-4 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
      <MapSection />
    </div>
  )
}
