import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Elevate<span className="text-accent">Engineering</span>
            </h3>
            <p className="text-slate-300 mb-4">
              Premium elevator solutions for residential and commercial buildings. Quality, safety, and innovation in
              every project.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-accent transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-accent transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-accent transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-accent transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-300 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-slate-300 hover:text-accent transition-colors">
                  Home Lift
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-accent transition-colors">
                  Passenger Elevator
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-accent transition-colors">
                  Cargo Lift
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-accent transition-colors">
                  Dumbwaiter
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-accent transition-colors">
                  Panoramic Lift
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-accent" />
                <span className="text-slate-300">123 Elevator Street, Engineering District, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-accent" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-accent" />
                <span className="text-slate-300">info@elevateengineering.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Elevate Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
