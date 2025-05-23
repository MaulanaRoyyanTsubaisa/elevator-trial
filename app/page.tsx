import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import CTASection from "@/components/sections/cta-section"
import ClientsSection from "@/components/sections/clients-section"
import IntroSection from "@/components/sections/intro-section"
import ProductShowcase from "@/components/sections/product-showcase"
import ClientShowcase from "@/components/sections/client-showcase"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <IntroSection />
      <ProductShowcase />
      <FeaturesSection />
      <ClientShowcase />
      <ClientsSection />
      <CTASection />
    </div>
  )
}
