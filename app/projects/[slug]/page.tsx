import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { BreadcrumbNavigation } from "@/components/breadcrumb-navigation"

const projectData: Record<
  string,
  {
    title: string
    description: string
    projects: {
      name: string
      location: string
      year: string
      type: string
      capacity: string
      description: string
      image: string
      features: string[]
    }[]
  }
> = {
  "passenger-elevator": {
    title: "Passenger Elevator Projects",
    description: "Our premium passenger elevator installations in commercial and residential buildings worldwide.",
    projects: [
      {
        name: "Grand Plaza Tower",
        location: "Jakarta, Indonesia",
        year: "2023",
        type: "Commercial",
        capacity: "21 passengers",
        description:
          "High-speed passenger elevators for a 45-story commercial tower with advanced destination control system.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Destination control", "Energy regeneration", "Smart monitoring", "Premium finishes"],
      },
      {
        name: "Luxury Residences",
        location: "Surabaya, Indonesia",
        year: "2023",
        type: "Residential",
        capacity: "13 passengers",
        description: "Elegant passenger elevators for luxury residential complex with panoramic views.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Panoramic design", "Quiet operation", "Smart home integration", "Premium materials"],
      },
      {
        name: "Corporate Headquarters",
        location: "Bandung, Indonesia",
        year: "2022",
        type: "Commercial",
        capacity: "26 passengers",
        description: "Modern passenger elevator system for corporate headquarters with energy-efficient technology.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Energy efficient", "Advanced safety", "Modern design", "IoT connectivity"],
      },
    ],
  },
  dumbwaiter: {
    title: "Dumbwaiter Projects",
    description: "Efficient dumbwaiter installations for restaurants, hotels, and residential applications.",
    projects: [
      {
        name: "Five-Star Hotel",
        location: "Bali, Indonesia",
        year: "2023",
        type: "Hospitality",
        capacity: "100kg",
        description: "Custom dumbwaiter system for luxury hotel kitchen and room service operations.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Stainless steel finish", "Quiet operation", "Multiple stops", "Easy maintenance"],
      },
      {
        name: "Fine Dining Restaurant",
        location: "Jakarta, Indonesia",
        year: "2022",
        type: "Restaurant",
        capacity: "75kg",
        description: "Compact dumbwaiter for efficient food service between kitchen floors.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Compact design", "Food-safe materials", "Quick installation", "Reliable operation"],
      },
    ],
  },
  "freight-elevator": {
    title: "Freight Elevator Projects",
    description: "Heavy-duty freight elevator installations for industrial and commercial applications.",
    projects: [
      {
        name: "Manufacturing Plant",
        location: "Tangerang, Indonesia",
        year: "2023",
        type: "Industrial",
        capacity: "5000kg",
        description: "Heavy-duty freight elevator for manufacturing facility with multiple loading docks.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Heavy capacity", "Industrial grade", "Multiple entrances", "Robust construction"],
      },
      {
        name: "Warehouse Complex",
        location: "Bekasi, Indonesia",
        year: "2022",
        type: "Logistics",
        capacity: "3000kg",
        description: "Freight elevator system for multi-level warehouse operations.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["High efficiency", "Automated controls", "Safety systems", "Low maintenance"],
      },
    ],
  },
  "home-lift": {
    title: "Home Lift Projects",
    description: "Elegant home lift installations providing accessibility and luxury in residential properties.",
    projects: [
      {
        name: "Private Villa",
        location: "Medan, Indonesia",
        year: "2023",
        type: "Residential",
        capacity: "4 passengers",
        description: "Luxury home lift installation in private villa with custom interior design.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Custom design", "Luxury finishes", "Quiet operation", "Space efficient"],
      },
      {
        name: "Townhouse Complex",
        location: "Yogyakarta, Indonesia",
        year: "2022",
        type: "Residential",
        capacity: "3 passengers",
        description: "Compact home lifts for modern townhouse development.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Compact footprint", "Modern design", "Energy efficient", "Easy installation"],
      },
    ],
  },
  lift: {
    title: "General Lift Projects",
    description: "Versatile lift solutions for various commercial and residential applications.",
    projects: [
      {
        name: "Shopping Center",
        location: "Semarang, Indonesia",
        year: "2023",
        type: "Commercial",
        capacity: "20 passengers",
        description: "Modern lift system for busy shopping center with high traffic capacity.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["High traffic capacity", "Modern controls", "Energy efficient", "Reliable operation"],
      },
      {
        name: "Office Building",
        location: "Palembang, Indonesia",
        year: "2022",
        type: "Commercial",
        capacity: "16 passengers",
        description: "Efficient lift installation for mid-rise office building.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Smart controls", "Energy saving", "Modern design", "Low noise"],
      },
    ],
  },
  escalator: {
    title: "Escalator Projects",
    description: "High-quality escalator installations for smooth passenger flow in public and commercial spaces.",
    projects: [
      {
        name: "Metro Station",
        location: "Jakarta, Indonesia",
        year: "2023",
        type: "Transportation",
        capacity: "9000 persons/hour",
        description: "Heavy-duty escalators for busy metro station with weather protection.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Heavy duty", "Weather resistant", "High capacity", "Safety features"],
      },
      {
        name: "Airport Terminal",
        location: "Denpasar, Indonesia",
        year: "2022",
        type: "Transportation",
        capacity: "7500 persons/hour",
        description: "Modern escalator system for international airport terminal.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["International standards", "Modern design", "High reliability", "Easy maintenance"],
      },
    ],
  },
  "panoramic-elevator": {
    title: "Panoramic Elevator Projects",
    description: "Stunning panoramic elevator installations offering spectacular views and architectural appeal.",
    projects: [
      {
        name: "Luxury Hotel",
        location: "Jakarta, Indonesia",
        year: "2023",
        type: "Hospitality",
        capacity: "16 passengers",
        description: "Panoramic elevator with city views for luxury hotel atrium.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Panoramic views", "LED lighting", "Premium glass", "Architectural design"],
      },
      {
        name: "Shopping Mall",
        location: "Surabaya, Indonesia",
        year: "2022",
        type: "Commercial",
        capacity: "20 passengers",
        description: "Glass panoramic elevator as centerpiece of modern shopping mall.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Glass design", "Central atrium", "Modern aesthetics", "High visibility"],
      },
    ],
  },
  "hospital-elevator": {
    title: "Hospital Elevator Projects",
    description: "Specialized hospital elevator installations designed for medical facilities and patient transport.",
    projects: [
      {
        name: "General Hospital",
        location: "Bandung, Indonesia",
        year: "2023",
        type: "Healthcare",
        capacity: "26 passengers",
        description: "Hospital-grade elevators with infection control features and stretcher compatibility.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Infection control", "Stretcher compatible", "Emergency backup", "Antibacterial surfaces"],
      },
      {
        name: "Medical Center",
        location: "Medan, Indonesia",
        year: "2022",
        type: "Healthcare",
        capacity: "21 passengers",
        description: "Medical elevator system with specialized features for patient care facility.",
        image: "/placeholder.svg?height=300&width=400",
        features: ["Medical grade", "Smooth operation", "Large capacity", "Safety systems"],
      },
    ],
  },
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const projectCategory = projectData[params.slug]

  if (!projectCategory) {
    return {
      title: "Projects Not Found | Elevate Engineering",
    }
  }

  return {
    title: `${projectCategory.title} | Elevate Engineering`,
    description: projectCategory.description,
  }
}

export default function ProjectCategoryPage({ params }: ProjectPageProps) {
  const projectCategory = projectData[params.slug]

  if (!projectCategory) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: projectCategory.title },
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
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Project Portfolio</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{projectCategory.title}</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">{projectCategory.description}</p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {projectCategory.projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-white">{project.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                  <div className="flex items-center text-slate-600 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center text-slate-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                  <div className="flex items-center text-slate-600 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{project.capacity}</span>
                  </div>
                  <p className="text-slate-700 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let our experienced team help you design and implement the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug,
  }))
}
