"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building, Calendar, ImageIcon, MessageSquareQuote } from "lucide-react"
import ProjectGalleryModal, { type ProjectDetails } from "@/components/project-gallery-modal"

const ProjectsList = () => {
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

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

  const projects: ProjectDetails[] = [
    // Commercial Projects
    {
      id: 1,
      name: "Azure Tower",
      location: "New York, NY",
      year: "2023",
      type: "Passenger Elevator",
      category: "commercial",
      description:
        "Installation of 12 high-speed passenger elevators for a 45-story luxury office building in downtown Manhattan.",
      fullDescription:
        "The Azure Tower project involved the installation of 12 high-speed passenger elevators for a 45-story luxury office building in downtown Manhattan. Our team worked closely with the architects to design a system that could efficiently handle the high traffic volume while maintaining the premium aesthetic of the building. The elevators feature smart dispatching technology, energy-efficient drives, and custom interior finishes that complement the building's modern design.",
      features: [
        "High-speed operation (6 meters per second)",
        "Smart dispatching system with AI traffic management",
        "Energy-regenerative drives reducing power consumption by 35%",
        "Custom glass and brushed steel interiors with ambient lighting",
        "Integrated building management system connectivity",
        "Touchless operation with mobile app control",
      ],
      mainImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=600&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
          alt: "Azure Tower exterior view",
          caption: "Azure Tower - 45-story luxury office building in downtown Manhattan",
        },
        {
          url: "https://images.unsplash.com/photo-1567610701070-6739001d5144?q=80&w=1200&auto=format&fit=crop",
          alt: "Passenger elevator interior",
          caption: "Custom interior with premium finishes and ambient lighting",
        },
        {
          url: "https://images.unsplash.com/photo-1603198132334-9cef81c66c41?q=80&w=1200&auto=format&fit=crop",
          alt: "Elevator control panel",
          caption: "Modern touchscreen control panel with building management integration",
        },
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
          alt: "Building lobby with elevators",
          caption: "Main lobby featuring elevator bank with smart dispatching system",
        },
        {
          url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
          alt: "Nighttime building view",
          caption: "Azure Tower illuminated at night, showcasing the building's iconic design",
        },
      ],
      clientName: "Skyline Development Group",
      completionDate: "June 2023",
      projectValue: "$8.5 million",
      elevatorCount: 12,
      floors: 45,
      testimonial: {
        quote:
          "Elevate Engineering exceeded our expectations with their innovative approach to our high-traffic elevator needs. Their smart dispatching system has significantly reduced wait times during peak hours, and the energy-efficient technology aligns perfectly with our sustainability goals. The custom finishes in the elevator cabins have received numerous compliments from our tenants and visitors.",
        author: "Jonathan Reynolds",
        position: "Director of Facilities",
        company: "Skyline Development Group",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
      },
    },
    {
      id: 2,
      name: "Metropolitan Business Center",
      location: "Los Angeles, CA",
      year: "2023",
      type: "Passenger Elevator",
      category: "commercial",
      description:
        "Modern elevator system for a 30-story commercial complex with smart building integration and energy-efficient technology.",
      fullDescription:
        "The Metropolitan Business Center project featured the installation of a comprehensive elevator system for a 30-story commercial complex in downtown Los Angeles. The project required a solution that could integrate with the building's smart systems while providing exceptional energy efficiency. Our team designed and implemented a system of 8 passenger elevators and 2 service elevators, all featuring state-of-the-art technology for optimal performance and sustainability.",
      features: [
        "Destination dispatch system reducing wait times by up to 30%",
        "Solar-supplemented power system for emergency operation",
        "Ultra-quiet operation with advanced vibration dampening",
        "Real-time monitoring and predictive maintenance",
        "Integrated with building security and access control",
        "LED status indicators and digital information displays",
      ],
      mainImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=600&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
          alt: "Metropolitan Business Center exterior",
          caption: "Metropolitan Business Center - 30-story commercial complex in Los Angeles",
        },
        {
          url: "https://images.unsplash.com/photo-1603198132637-5c4ceb5de31f?q=80&w=1200&auto=format&fit=crop",
          alt: "Elevator interior with digital display",
          caption: "Modern elevator interior with digital information display and status indicators",
        },
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
          alt: "Lobby with destination dispatch terminals",
          caption: "Main lobby featuring destination dispatch terminals for efficient traffic management",
        },
        {
          url: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop",
          alt: "Technical room with elevator controls",
          caption: "Technical control room with advanced monitoring systems",
        },
        {
          url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
          alt: "Building exterior at dusk",
          caption: "Metropolitan Business Center illuminated at dusk",
        },
      ],
      clientName: "Pacific Commercial Properties",
      completionDate: "March 2023",
      projectValue: "$6.2 million",
      elevatorCount: 10,
      floors: 30,
      testimonial: {
        quote:
          "The integration of Elevate Engineering's elevator system with our building's smart technology has been seamless. Their predictive maintenance capabilities have virtually eliminated downtime, and the energy efficiency has contributed significantly to our LEED certification goals. The destination dispatch system has transformed how people move through our building, creating a more efficient and pleasant experience for everyone.",
        author: "Maria Chen",
        position: "Chief Operations Officer",
        company: "Pacific Commercial Properties",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
      },
    },
    {
      id: 3,
      name: "Tech Innovation Hub",
      location: "San Francisco, CA",
      year: "2022",
      type: "Panoramic Lift",
      category: "commercial",
      description:
        "Glass panoramic elevators for a cutting-edge technology campus, providing stunning views of the city skyline.",
      fullDescription:
        "The Tech Innovation Hub project involved the design and installation of four glass panoramic elevators for a cutting-edge technology campus in San Francisco. These elevators serve as both functional transportation and architectural focal points, offering stunning views of the city skyline and bay. The transparent design creates a sense of openness and connection between floors while showcasing the innovative spirit of the campus.",
      features: [
        "Full glass enclosures with UV protection and thermal insulation",
        "Structural glass walls requiring no additional framing",
        "Programmable LED lighting system with 16 million color options",
        "Ultra-smooth ride with advanced hydraulic systems",
        "Integrated touchscreen controls with campus navigation",
        "Voice-activated operation for hands-free use",
      ],
      mainImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
          alt: "Tech Innovation Hub exterior",
          caption: "Tech Innovation Hub campus with visible panoramic elevators",
        },
        {
          url: "https://images.unsplash.com/photo-1603198132334-9cef81c66c41?q=80&w=1200&auto=format&fit=crop",
          alt: "Panoramic elevator with city view",
          caption: "Panoramic elevator offering stunning views of the San Francisco skyline",
        },
        {
          url: "https://images.unsplash.com/photo-1567610701070-6739001d5144?q=80&w=1200&auto=format&fit=crop",
          alt: "Glass elevator interior",
          caption: "Interior of the glass elevator with minimalist design",
        },
        {
          url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
          alt: "Night view of illuminated elevators",
          caption: "Panoramic elevators illuminated at night with programmable LED lighting",
        },
        {
          url: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop",
          alt: "Elevator machinery room",
          caption: "Advanced hydraulic systems powering the panoramic elevators",
        },
      ],
      clientName: "NovaTech Developments",
      completionDate: "November 2022",
      projectValue: "$4.8 million",
      elevatorCount: 4,
      floors: 12,
      testimonial: {
        quote:
          "The panoramic elevators have become a signature feature of our innovation campus. Elevate Engineering understood our vision for creating a space that embodies transparency and connectivity. The glass elevators not only provide stunning views but also serve as a physical manifestation of our company culture. Visitors consistently mention the elevator experience as a highlight of their tour.",
        author: "David Park",
        position: "Head of Campus Development",
        company: "NovaTech Developments",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
      },
    },

    // Residential Projects
    {
      id: 4,
      name: "Oceanview Residences",
      location: "Miami, FL",
      year: "2023",
      type: "Panoramic Lift",
      category: "residential",
      description: "Custom panoramic elevators with ocean views for an exclusive beachfront condominium complex.",
      fullDescription:
        "The Oceanview Residences project featured the installation of six custom panoramic elevators for an exclusive beachfront condominium complex in Miami. These elevators were designed to maximize the stunning ocean views while providing residents with a luxurious vertical transportation experience. The glass-walled elevators travel along the exterior of the building, offering breathtaking panoramas of the Atlantic Ocean and Miami skyline throughout the journey.",
      features: [
        "Curved glass walls with salt-air resistant framing",
        "Smart glass technology that adjusts tint based on sunlight intensity",
        "Biometric access control for enhanced security",
        "Custom lighting that adjusts based on time of day",
        "Whisper-quiet operation with advanced sound dampening",
        "Climate-controlled cabins maintaining ideal temperature despite sun exposure",
      ],
      mainImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
          alt: "Oceanview Residences exterior",
          caption: "Oceanview Residences - Exclusive beachfront condominium complex in Miami",
        },
        {
          url: "https://images.unsplash.com/photo-1603198132334-9cef81c66c41?q=80&w=1200&auto=format&fit=crop",
          alt: "Panoramic elevator with ocean view",
          caption: "Panoramic elevator offering stunning views of the Atlantic Ocean",
        },
        {
          url: "https://images.unsplash.com/photo-1567610701070-6739001d5144?q=80&w=1200&auto=format&fit=crop",
          alt: "Elevator interior with luxury finishes",
          caption: "Interior featuring premium materials and smart glass technology",
        },
        {
          url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
          alt: "Condominium lobby with elevator access",
          caption: "Main lobby with biometric access control for the panoramic elevators",
        },
        {
          url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
          alt: "Aerial view of the building",
          caption: "Aerial view showing the panoramic elevators along the building exterior",
        },
      ],
      clientName: "Coastal Luxury Developments",
      completionDate: "August 2023",
      projectValue: "$7.2 million",
      elevatorCount: 6,
      floors: 32,
      testimonial: {
        quote:
          "The panoramic elevators have become a defining feature of our property and a major selling point for potential buyers. Elevate Engineering's innovative use of smart glass technology ensures comfort despite the intense Miami sun, while the salt-air resistant materials have proven durable in our oceanfront environment. Our residents frequently comment on how the elevator ride itself has become an enjoyable experience rather than just a means of transportation.",
        author: "Sophia Martinez",
        position: "Development Director",
        company: "Coastal Luxury Developments",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
      },
    },
    {
      id: 5,
      name: "Hillside Mansion",
      location: "Beverly Hills, CA",
      year: "2023",
      type: "Home Lift",
      category: "residential",
      description:
        "Luxury home elevator with custom finishes for a multi-level private residence in an exclusive neighborhood.",
      fullDescription:
        "The Hillside Mansion project involved the design and installation of a bespoke home elevator for a multi-level private residence in Beverly Hills. This custom solution seamlessly integrates with the home's luxurious interior design while providing convenient access to all four levels of the property. The elevator features premium materials and finishes selected to complement the home's aesthetic, along with state-of-the-art technology for smooth, quiet operation.",
      features: [
        "Custom wood paneling with hand-carved details",
        "Italian marble flooring matching the home's main foyer",
        "Integrated home automation system control",
        "Pneumatic vacuum drive system requiring no machine room",
        "Custom lighting designed by renowned lighting artist",
        "Automatic doors with motion sensors and safety features",
      ],
      mainImage: "https://images.unsplash.com/photo-1600607687644-c7531e489ece?q=80&w=600&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1600607687644-c7531e489ece?q=80&w=1200&auto=format&fit=crop",
          alt: "Hillside Mansion exterior",
          caption: "Hillside Mansion - Luxury private residence in Beverly Hills",
        },
        {
          url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
          alt: "Home elevator with custom wood paneling",
          caption: "Custom home elevator featuring hand-carved wood paneling and marble flooring",
        },
        {
          url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
          alt: "Elevator integrated with home design",
          caption: "Elevator entrance seamlessly integrated with the home's interior design",
        },
        {
          url: "https://images.unsplash.com/photo-1600566752447-f4c9fb5d2b27?q=80&w=1200&auto=format&fit=crop",
          alt: "Control panel with home automation",
          caption: "Custom control panel with integrated home automation controls",
        },
        {
          url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
          alt: "View from elevator to living area",
          caption: "View from the elevator showing seamless transition to the main living area",
        },
      ],
      clientName: "Private Homeowner",
      completionDate: "May 2023",
      projectValue: "$850,000",
      elevatorCount: 1,
      floors: 4,
      testimonial: {
        quote:
          "Elevate Engineering transformed my multi-level home with their custom elevator solution. The attention to detail in matching the elevator's aesthetics to my home's design is remarkable—guests often don't realize it's an elevator until the doors open. The pneumatic system operates silently, and the integration with my home automation system allows me to call the elevator from any room. It's not just functional; it's a work of art.",
        author: "Robert Anderson",
        position: "Homeowner",
        company: "Hillside Mansion",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      },
    },
    {
      id: 6,
      name: "Skyline Condominiums",
      location: "Seattle, WA",
      year: "2022",
      type: "Passenger Elevator",
      category: "residential",
      description:
        "High-speed passenger elevators for a 40-story luxury residential tower with premium interior finishes.",
      fullDescription:
        "The Skyline Condominiums project involved the installation of six high-speed passenger elevators for a 40-story luxury residential tower in downtown Seattle. These elevators combine exceptional performance with sophisticated design, featuring premium interior finishes that reflect the building's upscale character. The system incorporates advanced technology for efficient traffic management, ensuring minimal wait times for residents even during peak hours.",
      features: [
        "High-speed operation at 5 meters per second",
        "Destination control system reducing wait times by up to 40%",
        "Premium interior finishes including backlit onyx panels",
        "Customizable cabin lighting with resident preferences stored in access cards",
        "Ultra-smooth acceleration and deceleration for passenger comfort",
        "Integrated security with resident access control",
      ],
      mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
          alt: "Skyline Condominiums exterior",
          caption: "Skyline Condominiums - 40-story luxury residential tower in Seattle",
        },
        {
          url: "https://images.unsplash.com/photo-1567610701070-6739001d5144?q=80&w=1200&auto=format&fit=crop",
          alt: "Elevator interior with premium finishes",
          caption: "Elevator interior featuring backlit onyx panels and custom lighting",
        },
        {
          url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
          alt: "Residential lobby with elevator bank",
          caption: "Main lobby featuring destination control system terminals",
        },
        {
          url: "https://images.unsplash.com/photo-1603198132334-9cef81c66c41?q=80&w=1200&auto=format&fit=crop",
          alt: "Control panel with resident access",
          caption: "Control panel with integrated resident access and preference settings",
        },
        {
          url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
          alt: "Night view of the building",
          caption: "Skyline Condominiums illuminated at night",
        },
      ],
      clientName: "Northwest Development Group",
      completionDate: "December 2022",
      projectValue: "$5.4 million",
      elevatorCount: 6,
      floors: 40,
      testimonial: {
        quote:
          "The elevator system installed by Elevate Engineering has significantly enhanced our residents' daily experience. The destination control system has virtually eliminated wait times, even during morning and evening rush hours. Residents particularly appreciate the customizable lighting settings that remember their preferences. From a management perspective, the reliability and minimal maintenance requirements have exceeded our expectations.",
        author: "Thomas Wilson",
        position: "Property Manager",
        company: "Northwest Development Group",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
      },
    },

    // Healthcare Projects
    {
      id: 10,
      name: "Grand Central Hospital",
      location: "Chicago, IL",
      year: "2023",
      type: "Cargo Lift",
      category: "healthcare",
      description:
        "Medical-grade cargo elevators designed for efficient transport of equipment and supplies throughout a major hospital facility.",
      fullDescription:
        "The Grand Central Hospital project involved the installation of specialized medical-grade cargo elevators designed for the efficient transport of equipment, supplies, and medical materials throughout this major hospital facility. These elevators play a critical role in the hospital's operations, ensuring timely delivery of essential items between departments. The system includes four dedicated cargo elevators strategically positioned to serve all wings of the hospital complex.",
      features: [
        "Antimicrobial surfaces and easy-to-clean stainless steel interiors",
        "Extra-wide doors for oversized medical equipment",
        "Precision floor leveling for smooth gurney and cart movement",
        "Priority override system for emergency situations",
        "HEPA filtration system maintaining clean air quality",
        "Shock-absorbing flooring for sensitive equipment transport",
      ],
      mainImage: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=600&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1200&auto=format&fit=crop",
          alt: "Grand Central Hospital exterior",
          caption: "Grand Central Hospital - Major medical facility in Chicago",
        },
        {
          url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
          alt: "Medical cargo elevator interior",
          caption: "Medical-grade cargo elevator with antimicrobial surfaces and wide doors",
        },
        {
          url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop",
          alt: "Hospital corridor with elevator access",
          caption: "Hospital corridor showing cargo elevator access point with priority controls",
        },
        {
          url: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1200&auto=format&fit=crop",
          alt: "Medical equipment being transported",
          caption: "Medical equipment being transported via the specialized cargo elevator",
        },
        {
          url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop",
          alt: "Control panel with emergency override",
          caption: "Control panel featuring emergency override system for critical situations",
        },
      ],
      clientName: "Midwest Healthcare Systems",
      completionDate: "April 2023",
      projectValue: "$3.8 million",
      elevatorCount: 4,
      floors: 18,
      testimonial: {
        quote:
          "The specialized cargo elevators have dramatically improved our hospital's operational efficiency. The antimicrobial surfaces and HEPA filtration align perfectly with our infection control protocols, while the priority override system has proven invaluable during emergency situations. Elevate Engineering understood the unique demands of a healthcare environment and delivered a solution that supports our mission of providing exceptional patient care.",
        author: "Dr. Emily Johnson",
        position: "Chief of Operations",
        company: "Midwest Healthcare Systems",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop",
      },
    },
    {
      id: 11,
      name: "Children's Medical Center",
      location: "Dallas, TX",
      year: "2023",
      type: "Passenger Elevator",
      category: "healthcare",
      description:
        "Specialized pediatric hospital elevators with child-friendly designs and enhanced safety features for young patients.",
      fullDescription:
        "The Children's Medical Center project featured the installation of specialized pediatric hospital elevators designed specifically for the unique needs of a children's hospital environment. These elevators combine enhanced safety features with child-friendly designs to create a positive experience for young patients and their families. The colorful, engaging interiors help reduce anxiety while the advanced technical features ensure safe, efficient transportation throughout the facility.",
      features: [
        "Interactive wall panels with games and activities for children",
        "Custom artwork and themes on each elevator to aid in wayfinding",
        "Extra sensors for detecting small children and objects",
        "Gentle acceleration and deceleration for patient comfort",
        "UV-C light sanitization system operating between uses",
        "Audio system with calming music and nature sounds",
      ],
      mainImage: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=600&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1200&auto=format&fit=crop",
          alt: "Children's Medical Center exterior",
          caption: "Children's Medical Center - Specialized pediatric hospital in Dallas",
        },
        {
          url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop",
          alt: "Child-friendly elevator interior",
          caption: "Child-friendly elevator interior with interactive wall panels and colorful design",
        },
        {
          url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop",
          alt: "Hospital corridor with themed elevators",
          caption: "Hospital corridor showing themed elevator entrances aiding in wayfinding",
        },
        {
          url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
          alt: "Elevator with extra safety sensors",
          caption: "Elevator entrance showing extra safety sensors for detecting small children",
        },
        {
          url: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1200&auto=format&fit=crop",
          alt: "Hospital building at dusk",
          caption: "Children's Medical Center illuminated at dusk",
        },
      ],
      clientName: "Texas Children's Healthcare",
      completionDate: "July 2023",
      projectValue: "$2.9 million",
      elevatorCount: 8,
      floors: 12,
      testimonial: {
        quote:
          "Elevate Engineering transformed what could be a scary experience for our young patients into something fun and engaging. The themed elevators have become an unexpected highlight for children visiting our facility, helping to reduce anxiety and create positive associations. From a clinical perspective, the gentle motion and enhanced safety features are perfectly suited for our vulnerable patient population. This project demonstrates how thoughtful design can contribute to the healing environment.",
        author: "Dr. Sarah Williams",
        position: "Pediatric Department Head",
        company: "Texas Children's Healthcare",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&auto=format&fit=crop",
      },
    },

    // Hospitality Projects
    {
      id: 16,
      name: "Riverside Hotel",
      location: "London, UK",
      year: "2023",
      type: "Passenger Elevator",
      category: "hospitality",
      description:
        "Installation of 8 high-capacity passenger elevators for a 5-star hotel, featuring custom interiors that reflect the hotel's elegant aesthetic.",
      fullDescription:
        "The Riverside Hotel project involved the installation of 8 high-capacity passenger elevators for this prestigious 5-star hotel in London. Each elevator features custom interiors that reflect the hotel's elegant aesthetic, with materials and finishes selected to complement the overall design scheme. The system combines luxury with efficiency, ensuring guests experience minimal wait times while enjoying a premium vertical transportation experience.",
      features: [
        "Custom brass and walnut interiors matching the hotel's heritage design",
        "Smart dispatching system reducing guest wait times",
        "Hidden service mode for staff operations",
        "Integrated with hotel key card system for floor access control",
        "Custom soundscape with hotel's signature music",
        "Energy-efficient operation with sleep mode during low-traffic periods",
      ],
      mainImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
          alt: "Riverside Hotel exterior",
          caption: "Riverside Hotel - 5-star luxury accommodation in London",
        },
        {
          url: "https://images.unsplash.com/photo-1567610701070-6739001d5144?q=80&w=1200&auto=format&fit=crop",
          alt: "Luxury elevator interior",
          caption: "Luxury elevator interior featuring custom brass and walnut finishes",
        },
        {
          url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop",
          alt: "Hotel lobby with elevator bank",
          caption: "Hotel lobby featuring elegant elevator entrances with smart dispatching system",
        },
        {
          url: "https://images.unsplash.com/photo-1603198132334-9cef81c66c41?q=80&w=1200&auto=format&fit=crop",
          alt: "Elevator control panel with key card access",
          caption: "Control panel with integrated key card access for floor control",
        },
        {
          url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
          alt: "Hotel corridor with elevator access",
          caption: "Hotel corridor showing elegant elevator entrance design",
        },
      ],
      clientName: "European Luxury Hospitality Group",
      completionDate: "February 2023",
      projectValue: "$4.2 million",
      elevatorCount: 8,
      floors: 22,
      testimonial: {
        quote:
          "The elevator experience at Riverside Hotel now matches the premium service we provide throughout our property. Elevate Engineering understood that for our guests, every touchpoint matters. The custom finishes and soundscape create a seamless transition between our lobby and guest rooms, while the smart dispatching ensures our guests never wait long. The hidden service mode has been particularly valuable, allowing our staff to operate efficiently without impacting the guest experience.",
        author: "James Harrington",
        position: "General Manager",
        company: "Riverside Hotel",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=300&auto=format&fit=crop",
      },
    },
    {
      id: 17,
      name: "Grand Palace Resort",
      location: "Las Vegas, NV",
      year: "2023",
      type: "Panoramic Lift",
      category: "hospitality",
      description:
        "Spectacular glass elevators for a luxury resort with LED lighting systems and panoramic views of the Strip.",
      fullDescription:
        "The Grand Palace Resort project featured the installation of four spectacular glass panoramic elevators for this luxury resort in Las Vegas. These elevators serve as both functional transportation and a visual attraction, offering guests breathtaking views of the Las Vegas Strip throughout their journey. The custom LED lighting system creates dynamic visual effects that complement the resort's entertainment-focused atmosphere.",
      features: [
        "Full glass cabins providing 360-degree views",
        "Programmable LED lighting system synchronized with the resort's shows",
        "Transparent glass hoistway structure requiring specialized engineering",
        "High-speed operation at 4 meters per second",
        "Custom sound system with directional speakers",
        "Interactive digital displays with resort information and entertainment schedules",
      ],
      mainImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
          alt: "Grand Palace Resort exterior",
          caption: "Grand Palace Resort - Luxury entertainment destination in Las Vegas",
        },
        {
          url: "https://images.unsplash.com/photo-1603198132334-9cef81c66c41?q=80&w=1200&auto=format&fit=crop",
          alt: "Panoramic glass elevator",
          caption: "Panoramic glass elevator with LED lighting system and Strip views",
        },
        {
          url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
          alt: "Resort atrium with glass elevators",
          caption: "Resort atrium featuring the glass elevators as a central design element",
        },
        {
          url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop",
          alt: "Night view with illuminated elevators",
          caption: "Night view showing the elevators illuminated with the synchronized LED system",
        },
        {
          url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
          alt: "View from inside the glass elevator",
          caption: "View from inside the glass elevator looking out at the Las Vegas Strip",
        },
      ],
      clientName: "Luxury Entertainment Resorts",
      completionDate: "October 2023",
      projectValue: "$6.8 million",
      elevatorCount: 4,
      floors: 52,
      testimonial: {
        quote:
          "Our glass elevators have become one of the most photographed features of the resort, creating countless social media moments for our guests. Elevate Engineering delivered a perfect blend of spectacle and functionality that aligns with our brand promise. The synchronized LED lighting with our entertainment schedule creates a cohesive experience throughout the property. These aren't just elevators—they're an attraction that enhances our guests' overall experience and creates memorable moments.",
        author: "Alexandra Rivera",
        position: "Director of Guest Experience",
        company: "Grand Palace Resort",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
      },
    },
    {
      id: 20,
      name: "Gourmet Restaurant Chain",
      location: "Multiple Locations",
      year: "2022",
      type: "Dumbwaiter",
      category: "hospitality",
      description:
        "Custom dumbwaiter systems for a chain of upscale restaurants, improving kitchen efficiency and service flow.",
      fullDescription:
        "The Gourmet Restaurant Chain project involved the design and installation of custom dumbwaiter systems for a chain of upscale restaurants across multiple locations. These specialized elevators have revolutionized kitchen operations by providing efficient transport of food, dishes, and supplies between floors. The system was carefully designed to integrate with each restaurant's unique layout while maintaining consistent performance standards across all locations.",
      features: [
        "Compact design fitting within existing kitchen layouts",
        "Stainless steel construction meeting food safety standards",
        "Programmable stops with customizable timing for different meal services",
        "Quiet operation to maintain dining atmosphere",
        "Integrated communication system between kitchen levels",
        "Easy-clean surfaces and removable shelving for maintenance",
      ],
      mainImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
          alt: "Gourmet restaurant interior",
          caption: "One of the upscale restaurants featuring our dumbwaiter system",
        },
        {
          url: "https://images.unsplash.com/photo-1582824583927-a09e766b7b7e?q=80&w=1200&auto=format&fit=crop",
          alt: "Dumbwaiter in kitchen setting",
          caption: "Custom dumbwaiter integrated into the restaurant kitchen workflow",
        },
        {
          url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
          alt: "Chef using the dumbwaiter system",
          caption: "Chef utilizing the dumbwaiter system during food service",
        },
        {
          url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop",
          alt: "Multi-level restaurant layout",
          caption: "Multi-level restaurant layout showing dumbwaiter placement",
        },
        {
          url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
          alt: "Restaurant exterior",
          caption: "Exterior of one of the restaurant locations in the chain",
        },
      ],
      clientName: "Global Fine Dining Group",
      completionDate: "September 2022",
      projectValue: "$1.2 million",
      elevatorCount: 12,
      floors: "Multiple (2-3 per location)",
      testimonial: {
        quote:
          "The dumbwaiter systems have transformed our kitchen operations across all locations. Food delivery times have decreased by nearly 40%, and we've seen a significant reduction in accidents and breakage during transport between floors. Elevate Engineering worked closely with our chefs to understand workflow patterns, resulting in a solution that feels custom-designed for each location despite being part of a standardized rollout. The ROI has exceeded our projections, with the systems paying for themselves within the first year.",
        author: "Chef Laurent Dubois",
        position: "Executive Culinary Director",
        company: "Global Fine Dining Group",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=300&auto=format&fit=crop",
      },
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  // Count projects by category
  const projectCounts = {
    all: projects.length,
    commercial: projects.filter((p) => p.category === "commercial").length,
    residential: projects.filter((p) => p.category === "residential").length,
    healthcare: projects.filter((p) => p.category === "healthcare").length,
    hospitality: projects.filter((p) => p.category === "hospitality").length,
  }

  const openGallery = (project: ProjectDetails) => {
    setSelectedProject(project)
    setIsGalleryOpen(true)
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Our Featured Projects</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto reveal reveal-delay-1">
            Browse through our portfolio of successful elevator installations across various industries and building
            types.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal reveal-delay-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="min-w-[120px]"
          >
            All ({projectCounts.all})
          </Button>
          <Button
            variant={filter === "commercial" ? "default" : "outline"}
            onClick={() => setFilter("commercial")}
            className="min-w-[120px]"
          >
            Commercial ({projectCounts.commercial})
          </Button>
          <Button
            variant={filter === "residential" ? "default" : "outline"}
            onClick={() => setFilter("residential")}
            className="min-w-[120px]"
          >
            Residential ({projectCounts.residential})
          </Button>
          <Button
            variant={filter === "healthcare" ? "default" : "outline"}
            onClick={() => setFilter("healthcare")}
            className="min-w-[120px]"
          >
            Healthcare ({projectCounts.healthcare})
          </Button>
          <Button
            variant={filter === "hospitality" ? "default" : "outline"}
            onClick={() => setFilter("hospitality")}
            className="min-w-[120px]"
          >
            Hospitality ({projectCounts.hospitality})
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="border-none shadow-md overflow-hidden reveal hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-60 w-full group cursor-pointer" onClick={() => openGallery(project)}>
                <Image src={project.mainImage || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 dark:bg-slate-800/90 rounded-full p-2">
                    <ImageIcon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="sr-only">View gallery</span>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-800 font-medium">
                    {project.year}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <Badge variant="secondary" className="bg-white/90 text-slate-800 font-medium">
                    <ImageIcon className="h-3 w-3 mr-1" /> {project.images.length}
                  </Badge>
                  {project.testimonial && (
                    <Badge variant="secondary" className="bg-white/90 text-slate-800 font-medium">
                      <MessageSquareQuote className="h-3 w-3 mr-1" /> Testimonial
                    </Badge>
                  )}
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent">
                    {project.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <Building className="h-4 w-4 mr-2" />
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </div>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    Completed in {project.year}
                  </div>
                </div>
                <CardDescription className="text-base text-slate-700 dark:text-slate-300">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => openGallery(project)}>
                  <ImageIcon className="h-4 w-4 mr-2" /> View Project Gallery
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-slate-600 dark:text-slate-400">No projects found for the selected category.</p>
          </div>
        )}
      </div>

      <ProjectGalleryModal project={selectedProject} open={isGalleryOpen} onOpenChange={setIsGalleryOpen} />
    </section>
  )
}

export default ProjectsList
