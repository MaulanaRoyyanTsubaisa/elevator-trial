"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Reset accordion states when closing menu
    if (isOpen) {
      setIsProductsOpen(false)
      setIsProjectsOpen(false)
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    setIsProductsOpen(false)
    setIsProjectsOpen(false)
  }

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen)
  }

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen)
  }

  const productItems = [
    "Passenger Elevator",
    "Dumbwaiter",
    "Freight Elevator",
    "Home Lift",
    "Lift",
    "Escalator",
    "Panoramic Elevator",
    "Hospital Elevator",
    "Car Elevator",
    "Moving Walk",
    "Schneider",
  ]

  const projectItems = [
    "Passenger Elevator",
    "Dumbwaiter",
    "Freight Elevator",
    "Home Lift",
    "Lift",
    "Escalator",
    "Panoramic Elevator",
    "Hospital Elevator",
    "All Project",
  ]

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  const slugify = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "-")
  }

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
              QQ<span className="text-accent">Elevator</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
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

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-slate-700 dark:text-slate-200">
                <span>{t("nav.products")}</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {productItems.map((item) => (
                  <DropdownMenuItem key={item} asChild>
                    <Link href={`/products/${slugify(item)}`} className="w-full">
                      {item}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Projects Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-slate-700 dark:text-slate-200">
                <span>{t("nav.projects")}</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {projectItems.map((item) => (
                  <DropdownMenuItem key={item} asChild>
                    <Link href={item === "All Project" ? "/projects" : `/projects/${slugify(item)}`} className="w-full">
                      {item}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Switcher */}
            <LanguageSwitcher />

            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button className="text-slate-700 dark:text-slate-200" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Backdrop */}
      {isOpen && <div className="md:hidden fixed inset-0 bg-black/20 z-40" onClick={closeMenu} />}

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg transition-all duration-300 ease-in-out border-t",
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2",
        )}
      >
        <div className="container mx-auto px-4 py-6 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary py-2",
                  pathname === link.href ? "text-primary" : "text-slate-700 dark:text-slate-200",
                )}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Products Accordion */}
            <div className="space-y-2">
              <button
                onClick={toggleProducts}
                className="flex items-center justify-between w-full text-base font-medium text-slate-700 dark:text-slate-200 py-2 hover:text-primary transition-colors"
                aria-expanded={isProductsOpen}
              >
                <span>{t("nav.products")}</span>
                {isProductsOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isProductsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="pl-4 space-y-1 pb-2">
                  {productItems.map((item) => (
                    <Link
                      key={item}
                      href={`/products/${slugify(item)}`}
                      className="block text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors py-1"
                      onClick={closeMenu}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Projects Accordion */}
            <div className="space-y-2">
              <button
                onClick={toggleProjects}
                className="flex items-center justify-between w-full text-base font-medium text-slate-700 dark:text-slate-200 py-2 hover:text-primary transition-colors"
                aria-expanded={isProjectsOpen}
              >
                <span>{t("nav.projects")}</span>
                {isProjectsOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isProjectsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="pl-4 space-y-1 pb-2">
                  {projectItems.map((item) => (
                    <Link
                      key={item}
                      href={item === "All Project" ? "/projects" : `/projects/${slugify(item)}`}
                      className="block text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors py-1"
                      onClick={closeMenu}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Button asChild className="mt-4 w-fit">
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
