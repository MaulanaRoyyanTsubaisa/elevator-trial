"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, X, MapPin, Building, Calendar, ExternalLink, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

export type ProjectImage = {
  url: string
  alt: string
  caption?: string
}

export type ProjectTestimonial = {
  quote: string
  author: string
  position: string
  company: string
  image?: string
}

export type ProjectDetails = {
  id: number
  name: string
  location: string
  year: string
  type: string
  category: string
  description: string
  fullDescription?: string
  features?: string[]
  images: ProjectImage[]
  mainImage: string
  clientName?: string
  completionDate?: string
  projectValue?: string
  elevatorCount?: number
  floors?: number
  testimonial?: ProjectTestimonial
}

interface ProjectGalleryModalProps {
  project: ProjectDetails | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

const ProjectGalleryModal = ({ project, open, onOpenChange }: ProjectGalleryModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("gallery")

  useEffect(() => {
    if (open && project) {
      setCurrentImageIndex(0)
      setActiveTab("gallery")
    }
  }, [open, project])

  if (!project) {
    return null
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const currentImage = project.images[currentImageIndex]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-0">
        <div className="sticky top-0 z-10 flex justify-between items-center bg-white dark:bg-slate-900 p-4 border-b">
          <DialogTitle className="text-xl">{project.name}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="rounded-full">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <Tabs defaultValue="gallery" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-4 border-b">
            <TabsList className="h-12">
              <TabsTrigger value="gallery" className="data-[state=active]:bg-accent/20">
                Gallery
              </TabsTrigger>
              <TabsTrigger value="details" className="data-[state=active]:bg-accent/20">
                Project Details
              </TabsTrigger>
              {project.testimonial && (
                <TabsTrigger value="testimonial" className="data-[state=active]:bg-accent/20">
                  Client Testimonial
                </TabsTrigger>
              )}
            </TabsList>
          </div>

          <TabsContent value="gallery" className="mt-0">
            <div className="relative">
              <div className="relative h-[50vh] w-full bg-slate-100 dark:bg-slate-800">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <Image
                  src={currentImage.url || "/placeholder.svg"}
                  alt={currentImage.alt || project.name}
                  fill
                  className={cn(
                    "object-contain transition-opacity duration-300",
                    isLoading ? "opacity-0" : "opacity-100",
                  )}
                  onLoad={handleImageLoad}
                />

                {project.images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg bg-white/80 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-800 z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg bg-white/80 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-800 z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}
              </div>

              {currentImage.caption && (
                <div className="bg-slate-100 dark:bg-slate-800 p-2 text-sm text-center text-slate-600 dark:text-slate-400">
                  {currentImage.caption}
                </div>
              )}
            </div>

            <div className="p-4">
              <h4 className="font-semibold mb-3">Gallery ({project.images.length} images)</h4>
              <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "relative h-16 w-full rounded-md overflow-hidden border-2 transition-all",
                      currentImageIndex === index
                        ? "border-primary ring-2 ring-primary ring-opacity-50"
                        : "border-transparent hover:border-slate-300 dark:hover:border-slate-600",
                    )}
                  >
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="details" className="mt-0 p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent">
                {project.type}
              </Badge>
              <Badge variant="secondary">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</Badge>
              <Badge variant="outline">{project.year}</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-slate-500" />
                  <span className="font-medium">Location:</span>
                  <span className="ml-2">{project.location}</span>
                </div>
                {project.completionDate && (
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                    <span className="font-medium">Completed:</span>
                    <span className="ml-2">{project.completionDate}</span>
                  </div>
                )}
                {project.clientName && (
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 mr-2 text-slate-500" />
                    <span className="font-medium">Client:</span>
                    <span className="ml-2">{project.clientName}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                {project.elevatorCount && (
                  <div className="text-sm">
                    <span className="font-medium">Elevators:</span> {project.elevatorCount}
                  </div>
                )}
                {project.floors && (
                  <div className="text-sm">
                    <span className="font-medium">Floors:</span> {project.floors}
                  </div>
                )}
                {project.projectValue && (
                  <div className="text-sm">
                    <span className="font-medium">Project Value:</span> {project.projectValue}
                  </div>
                )}
              </div>

              <div>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Project Case Study
                  </a>
                </Button>
              </div>
            </div>

            <DialogDescription className="text-base text-slate-700 dark:text-slate-300 mb-6">
              {project.fullDescription || project.description}
            </DialogDescription>

            {project.features && project.features.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-slate-700 dark:text-slate-300">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          {project.testimonial && (
            <TabsContent value="testimonial" className="mt-0">
              <div className="p-6 md:p-8">
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 md:p-8 relative">
                  <Quote className="h-12 w-12 text-accent/20 absolute top-6 left-6" />
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl italic text-slate-700 dark:text-slate-300 mb-6 pl-8">
                      "{project.testimonial.quote}"
                    </p>

                    <div className="flex items-center mt-6">
                      {project.testimonial.image && (
                        <div className="mr-4 relative h-16 w-16 rounded-full overflow-hidden">
                          <Image
                            src={project.testimonial.image || "/placeholder.svg"}
                            alt={project.testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-lg">{project.testimonial.author}</h4>
                        <p className="text-slate-600 dark:text-slate-400">{project.testimonial.position}</p>
                        <p className="text-primary">{project.testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Project Overview</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={project.images[0].url || "/placeholder.svg"}
                        alt={`${project.name} - Main view`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
                      <Button variant="outline" onClick={() => setActiveTab("gallery")}>
                        View Project Gallery
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectGalleryModal
