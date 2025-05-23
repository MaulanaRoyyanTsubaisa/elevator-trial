"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const ContactInfo = () => {
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

  return (
    <Card className="border-none shadow-lg reveal reveal-delay-2">
      <CardHeader>
        <CardTitle className="text-2xl">Contact Information</CardTitle>
        <CardDescription>Reach out to us through any of the following channels.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-accent mr-3 mt-1" />
            <div>
              <h4 className="font-medium">Address</h4>
              <p className="text-slate-600 dark:text-slate-400">
                123 Elevator Street, Engineering District
                <br />
                New York, NY 10001
                <br />
                United States
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-5 w-5 text-accent mr-3 mt-1" />
            <div>
              <h4 className="font-medium">Phone</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Main: +1 (555) 123-4567
                <br />
                Support: +1 (555) 987-6543
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-5 w-5 text-accent mr-3 mt-1" />
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-slate-600 dark:text-slate-400">
                General Inquiries: info@elevateengineering.com
                <br />
                Support: support@elevateengineering.com
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="h-5 w-5 text-accent mr-3 mt-1" />
            <div>
              <h4 className="font-medium">Business Hours</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
          <h4 className="font-medium mb-3">Connect With Us</h4>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
            >
              <Facebook size={22} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
            >
              <Twitter size={22} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
            >
              <Instagram size={22} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
            >
              <Linkedin size={22} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ContactInfo
