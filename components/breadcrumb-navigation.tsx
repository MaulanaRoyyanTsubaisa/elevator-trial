"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useLanguage } from "@/contexts/language-context"

interface BreadcrumbItemProps {
  label: string
  href?: string
}

interface BreadcrumbNavigationProps {
  items?: BreadcrumbItemProps[]
  className?: string
}

export function BreadcrumbNavigation({ items, className }: BreadcrumbNavigationProps) {
  const pathname = usePathname()
  const { t } = useLanguage()

  // Generate breadcrumb items automatically if not provided
  const generateBreadcrumbs = (): BreadcrumbItemProps[] => {
    const pathSegments = pathname.split("/").filter(Boolean)
    const breadcrumbs: BreadcrumbItemProps[] = [{ label: t("breadcrumb.home"), href: "/" }]

    let currentPath = ""
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`

      // Format segment for display
      let label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      // Special cases for better labeling
      if (segment === "products" && index === 0) {
        label = t("breadcrumb.products")
      } else if (segment === "projects" && index === 0) {
        label = t("breadcrumb.projects")
      } else if (segment === "about") {
        label = t("breadcrumb.about")
      } else if (segment === "contact") {
        label = t("breadcrumb.contact")
      }

      // Don't add href for the last item (current page)
      const isLastItem = index === pathSegments.length - 1
      breadcrumbs.push({
        label,
        href: isLastItem ? undefined : currentPath,
      })
    })

    return breadcrumbs
  }

  const breadcrumbItems = items || generateBreadcrumbs()

  // Don't show breadcrumb on home page
  if (pathname === "/") {
    return null
  }

  // For mobile, show only last 2-3 items with ellipsis
  const getMobileBreadcrumbs = () => {
    if (breadcrumbItems.length <= 3) return breadcrumbItems

    return [
      breadcrumbItems[0], // Home
      { label: "...", href: undefined }, // Ellipsis
      ...breadcrumbItems.slice(-2), // Last 2 items
    ]
  }

  const mobileBreadcrumbs = getMobileBreadcrumbs()

  // Generate breadcrumb path for screen readers
  const getBreadcrumbPath = (items: BreadcrumbItemProps[]) => {
    return items.map((item) => item.label).join(" > ")
  }

  return (
    <nav className={className} aria-label="Breadcrumb navigation" role="navigation">
      <div className="container mx-auto px-4">
        {/* Screen reader only announcement */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          You are here: {getBreadcrumbPath(breadcrumbItems)}
        </div>

        {/* Desktop Breadcrumb */}
        <div className="hidden md:block">
          <Breadcrumb>
            <BreadcrumbList className="flex-wrap" role="list" aria-label="Page navigation breadcrumb">
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1
                const isHome = index === 0

                return (
                  <div key={index} className="flex items-center">
                    <BreadcrumbItem className="flex items-center" role="listitem">
                      {isHome && <Home className="w-4 h-4 mr-1" aria-hidden="true" focusable="false" />}
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="transition-colors hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm text-sm lg:text-base truncate max-w-[150px] lg:max-w-none"
                          title={item.label}
                          aria-label={isHome ? `Go to ${item.label} page` : `Go to ${item.label}`}
                          tabIndex={0}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <BreadcrumbPage
                          className="text-sm lg:text-base font-medium truncate max-w-[150px] lg:max-w-none"
                          title={item.label}
                          aria-current="page"
                          aria-label={`Current page: ${item.label}`}
                        >
                          {item.label}
                        </BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {!isLast && (
                      <BreadcrumbSeparator className="mx-2" aria-hidden="true" role="presentation">
                        <ChevronRight className="w-4 h-4" aria-hidden="true" focusable="false" />
                      </BreadcrumbSeparator>
                    )}
                  </div>
                )
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Mobile Breadcrumb */}
        <div className="block md:hidden">
          <Breadcrumb>
            <BreadcrumbList
              className="flex-nowrap overflow-x-auto scrollbar-hide"
              role="list"
              aria-label="Page navigation breadcrumb (mobile)"
            >
              {mobileBreadcrumbs.map((item, index) => {
                const isLast = index === mobileBreadcrumbs.length - 1
                const isHome = index === 0
                const isEllipsis = item.label === "..."

                return (
                  <div key={index} className="flex items-center flex-shrink-0">
                    <BreadcrumbItem className="flex items-center" role="listitem">
                      {isHome && <Home className="w-3 h-3 mr-1" aria-hidden="true" focusable="false" />}
                      {item.href && !isEllipsis ? (
                        <Link
                          href={item.href}
                          className="transition-colors hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-sm text-xs whitespace-nowrap"
                          title={item.label}
                          aria-label={isHome ? `Go to ${item.label} page` : `Go to ${item.label}`}
                          tabIndex={0}
                        >
                          {item.label.length > 12 ? `${item.label.substring(0, 12)}...` : item.label}
                        </Link>
                      ) : isEllipsis ? (
                        <span className="text-xs text-gray-500" aria-label="More navigation items" role="presentation">
                          ...
                        </span>
                      ) : (
                        <BreadcrumbPage
                          className="text-xs font-medium whitespace-nowrap"
                          title={item.label}
                          aria-current="page"
                          aria-label={`Current page: ${item.label}`}
                        >
                          {item.label.length > 15 ? `${item.label.substring(0, 15)}...` : item.label}
                        </BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {!isLast && (
                      <BreadcrumbSeparator className="mx-1 flex-shrink-0" aria-hidden="true" role="presentation">
                        <ChevronRight className="w-3 h-3" aria-hidden="true" focusable="false" />
                      </BreadcrumbSeparator>
                    )}
                  </div>
                )
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Skip link for keyboard users */}
        <div className="sr-only">
          <a
            href="#main-content"
            className="focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 rounded-br-md z-50"
            tabIndex={0}
          >
            Skip to main content
          </a>
        </div>
      </div>
    </nav>
  )
}
