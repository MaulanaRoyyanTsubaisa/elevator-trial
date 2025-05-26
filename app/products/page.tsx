import type { Metadata } from "next"
import ProductsHero from "@/components/sections/products-hero"
import ProductsList from "@/components/sections/products-list"
import CTASection from "@/components/sections/cta-section"
import { BreadcrumbNavigation } from "@/components/breadcrumb-navigation"

export const metadata: Metadata = {
  title: "Our Products | Elevate Engineering",
  description: "Explore our range of premium elevator solutions for residential and commercial buildings.",
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4 mt-20">
        <div className="container mx-auto px-4">
          <BreadcrumbNavigation />
        </div>
      </div>

      <ProductsHero />
      <ProductsList />
      <CTASection />
    </div>
  )
}
