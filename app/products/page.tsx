import type { Metadata } from "next"
import ProductsHero from "@/components/sections/products-hero"
import ProductsList from "@/components/sections/products-list"
import CTASection from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Products | Elevate Engineering",
  description: "Explore our range of premium elevator solutions for residential and commercial buildings.",
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full">
      <ProductsHero />
      <ProductsList />
      <CTASection />
    </div>
  )
}
