import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { BreadcrumbNavigation } from "@/components/breadcrumb-navigation"

const productData: Record<
  string,
  {
    title: string
    description: string
    features: string[]
    specifications: { label: string; value: string }[]
    applications: string[]
    image: string
  }
> = {
  "passenger-elevator": {
    title: "Passenger Elevator",
    description:
      "Premium passenger elevators designed for comfort, safety, and efficiency in residential and commercial buildings.",
    features: [
      "Smooth and quiet operation",
      "Energy-efficient motor systems",
      "Advanced safety features",
      "Customizable cabin designs",
      "Smart control systems",
      "Emergency communication system",
    ],
    specifications: [
      { label: "Capacity", value: "450kg - 2000kg" },
      { label: "Speed", value: "0.5 - 4.0 m/s" },
      { label: "Floors", value: "2 - 50 floors" },
      { label: "Door Type", value: "Automatic sliding doors" },
      { label: "Control", value: "Microprocessor-based" },
      { label: "Safety", value: "EN 81-20/50 compliant" },
    ],
    applications: [
      "Office buildings",
      "Residential complexes",
      "Shopping centers",
      "Hotels",
      "Hospitals",
      "Educational institutions",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  dumbwaiter: {
    title: "Dumbwaiter",
    description:
      "Compact and efficient dumbwaiter systems for transporting goods between floors in restaurants, hotels, and residential buildings.",
    features: [
      "Compact design",
      "Easy installation",
      "Quiet operation",
      "Manual or automatic doors",
      "Safety interlocks",
      "Customizable sizes",
    ],
    specifications: [
      { label: "Capacity", value: "50kg - 300kg" },
      { label: "Speed", value: "0.15 - 0.5 m/s" },
      { label: "Floors", value: "2 - 6 floors" },
      { label: "Car Size", value: "500x500mm - 1000x1000mm" },
      { label: "Door Type", value: "Manual or automatic" },
      { label: "Control", value: "Push button or automatic" },
    ],
    applications: ["Restaurants", "Hotels", "Residential kitchens", "Libraries", "Offices", "Medical facilities"],
    image: "/placeholder.svg?height=400&width=600",
  },
  "freight-elevator": {
    title: "Freight Elevator",
    description:
      "Heavy-duty freight elevators designed for industrial and commercial applications requiring high capacity and durability.",
    features: [
      "Heavy-duty construction",
      "High load capacity",
      "Reinforced car structure",
      "Industrial-grade components",
      "Multiple door configurations",
      "Robust safety systems",
    ],
    specifications: [
      { label: "Capacity", value: "1000kg - 10000kg" },
      { label: "Speed", value: "0.25 - 1.0 m/s" },
      { label: "Floors", value: "2 - 20 floors" },
      { label: "Car Size", value: "2000x2000mm - 4000x3000mm" },
      { label: "Door Type", value: "Manual or automatic" },
      { label: "Control", value: "Industrial grade controller" },
    ],
    applications: [
      "Warehouses",
      "Manufacturing facilities",
      "Distribution centers",
      "Parking garages",
      "Industrial buildings",
      "Loading docks",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  "home-lift": {
    title: "Home Lift",
    description:
      "Elegant and space-efficient home lifts designed for residential use, providing accessibility and convenience.",
    features: [
      "Compact footprint",
      "Elegant design options",
      "Quiet operation",
      "Energy efficient",
      "Easy maintenance",
      "Safety features for home use",
    ],
    specifications: [
      { label: "Capacity", value: "250kg - 630kg" },
      { label: "Speed", value: "0.15 - 0.3 m/s" },
      { label: "Floors", value: "2 - 6 floors" },
      { label: "Car Size", value: "800x1000mm - 1100x1400mm" },
      { label: "Door Type", value: "Manual or automatic" },
      { label: "Drive", value: "Hydraulic or traction" },
    ],
    applications: [
      "Private residences",
      "Villas",
      "Townhouses",
      "Elderly care homes",
      "Accessibility solutions",
      "Luxury homes",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  lift: {
    title: "Lift",
    description:
      "Versatile lift solutions for various applications, combining reliability, efficiency, and modern technology.",
    features: [
      "Versatile applications",
      "Modern technology",
      "Reliable operation",
      "Cost-effective",
      "Easy installation",
      "Comprehensive safety features",
    ],
    specifications: [
      { label: "Capacity", value: "300kg - 1600kg" },
      { label: "Speed", value: "0.5 - 2.5 m/s" },
      { label: "Floors", value: "2 - 30 floors" },
      { label: "Car Size", value: "1000x1250mm - 1600x2100mm" },
      { label: "Door Type", value: "Automatic sliding doors" },
      { label: "Control", value: "Microprocessor control" },
    ],
    applications: [
      "Commercial buildings",
      "Residential buildings",
      "Public facilities",
      "Mixed-use developments",
      "Retrofit installations",
      "Modernization projects",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  escalator: {
    title: "Escalator",
    description: "High-quality escalators designed for smooth passenger flow in commercial and public spaces.",
    features: [
      "Smooth operation",
      "Energy-efficient drive",
      "Safety sensors",
      "Durable construction",
      "Low maintenance",
      "Modern design",
    ],
    specifications: [
      { label: "Width", value: "600mm, 800mm, 1000mm" },
      { label: "Speed", value: "0.5 - 0.65 m/s" },
      { label: "Rise", value: "Up to 10m" },
      { label: "Inclination", value: "30° or 35°" },
      { label: "Capacity", value: "4500 - 9000 persons/hour" },
      { label: "Drive", value: "Chain or belt drive" },
    ],
    applications: [
      "Shopping malls",
      "Metro stations",
      "Airports",
      "Office buildings",
      "Public buildings",
      "Transportation hubs",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  "panoramic-elevator": {
    title: "Panoramic Elevator",
    description:
      "Stunning panoramic elevators with glass walls offering spectacular views while providing vertical transportation.",
    features: [
      "Glass cabin design",
      "Panoramic views",
      "Architectural appeal",
      "LED lighting options",
      "Weather-resistant",
      "Premium finishes",
    ],
    specifications: [
      { label: "Capacity", value: "450kg - 1600kg" },
      { label: "Speed", value: "0.5 - 2.5 m/s" },
      { label: "Floors", value: "2 - 40 floors" },
      { label: "Glass Type", value: "Laminated safety glass" },
      { label: "Frame", value: "Stainless steel or aluminum" },
      { label: "Control", value: "Advanced microprocessor" },
    ],
    applications: [
      "Shopping centers",
      "Hotels",
      "Office atriums",
      "Residential towers",
      "Tourist attractions",
      "Architectural landmarks",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  "hospital-elevator": {
    title: "Hospital Elevator",
    description:
      "Specialized hospital elevators designed for medical facilities with enhanced hygiene and patient transport features.",
    features: [
      "Antibacterial surfaces",
      "Smooth ride quality",
      "Large car dimensions",
      "Emergency power backup",
      "Stretcher compatibility",
      "Infection control features",
    ],
    specifications: [
      { label: "Capacity", value: "1000kg - 2500kg" },
      { label: "Speed", value: "1.0 - 3.0 m/s" },
      { label: "Car Size", value: "1600x2400mm - 2100x2800mm" },
      { label: "Door Width", value: "1200mm - 1600mm" },
      { label: "Control", value: "Hospital-specific features" },
      { label: "Compliance", value: "Medical facility standards" },
    ],
    applications: [
      "Hospitals",
      "Medical centers",
      "Clinics",
      "Nursing homes",
      "Rehabilitation centers",
      "Emergency facilities",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  "car-elevator": {
    title: "Car Elevator",
    description:
      "Heavy-duty car elevators designed for automotive applications in parking garages and service centers.",
    features: [
      "Heavy load capacity",
      "Reinforced platform",
      "Vehicle safety systems",
      "Precise leveling",
      "Robust construction",
      "Weather protection",
    ],
    specifications: [
      { label: "Capacity", value: "3000kg - 6000kg" },
      { label: "Speed", value: "0.15 - 0.5 m/s" },
      { label: "Platform Size", value: "2500x5500mm - 3000x6000mm" },
      { label: "Door Type", value: "Bi-parting or telescopic" },
      { label: "Safety", value: "Vehicle restraint systems" },
      { label: "Control", value: "Automotive-specific controls" },
    ],
    applications: [
      "Parking garages",
      "Car dealerships",
      "Service centers",
      "Residential parking",
      "Commercial parking",
      "Automotive facilities",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  "moving-walk": {
    title: "Moving Walk",
    description:
      "Horizontal and inclined moving walkways for efficient pedestrian transportation in long corridors and gentle slopes.",
    features: [
      "Horizontal or inclined",
      "Variable speed control",
      "Safety sensors",
      "Non-slip surface",
      "Energy efficient",
      "Weather resistant options",
    ],
    specifications: [
      { label: "Width", value: "800mm, 1000mm, 1200mm" },
      { label: "Speed", value: "0.5 - 0.75 m/s" },
      { label: "Length", value: "Up to 100m" },
      { label: "Inclination", value: "0° - 12°" },
      { label: "Capacity", value: "4500 - 9000 persons/hour" },
      { label: "Surface", value: "Rubber or metal pallets" },
    ],
    applications: [
      "Airports",
      "Metro stations",
      "Shopping centers",
      "Hospitals",
      "Long corridors",
      "Transportation terminals",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  schneider: {
    title: "Schneider",
    description:
      "Advanced elevator control systems and components by Schneider Electric for enhanced performance and reliability.",
    features: [
      "Advanced control technology",
      "Energy management",
      "IoT connectivity",
      "Predictive maintenance",
      "Remote monitoring",
      "Smart building integration",
    ],
    specifications: [
      { label: "Control Type", value: "Microprocessor-based" },
      { label: "Communication", value: "CAN bus, Ethernet" },
      { label: "Display", value: "LCD/LED displays" },
      { label: "Programming", value: "User-friendly interface" },
      { label: "Monitoring", value: "Remote diagnostics" },
      { label: "Integration", value: "Building management systems" },
    ],
    applications: [
      "Modern elevators",
      "Escalators",
      "Building automation",
      "Energy management",
      "Smart buildings",
      "Retrofit projects",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = productData[params.slug]

  if (!product) {
    return {
      title: "Product Not Found | Elevate Engineering",
    }
  }

  return {
    title: `${product.title} | Elevate Engineering`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productData[params.slug]

  if (!product) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.title },
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4 mt-20">
        <div className="container mx-auto px-4">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Premium Product</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{product.title}</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">{product.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-slate-700 font-medium">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Specifications</h2>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-slate-200 last:border-b-0"
                    >
                      <span className="font-medium text-slate-700">{spec.label}</span>
                      <span className="text-primary font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.applications.map((application, index) => (
                <div key={index} className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 text-center">
                  <span className="font-medium text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our experts today for a customized solution that meets your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                +1 (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({
    slug,
  }))
}
