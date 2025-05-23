"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md dark:bg-slate-900/90" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              Elevate<span className="text-accent">Engineering</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-slate-700 dark:text-slate-200",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 dark:text-slate-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-white dark:bg-slate-900 z-50 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <span className="text-2xl font-bold text-primary">
                Elevate<span className="text-accent">Engineering</span>
              </span>
            </Link>
            <button className="text-slate-700 dark:text-slate-200" onClick={toggleMenu} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-slate-700 dark:text-slate-200",
                )}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-4">
              <Link href="/contact" onClick={closeMenu}>
                Get a Quote
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
