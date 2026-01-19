"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import SearchModal from "./search-modal"

function MobileNavItem({ section, onItemClick }: { section: { label: string; items: Array<{ label: string; href: string }> }; onItemClick: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between font-semibold text-sm text-foreground/90 py-2 px-2 hover:text-accent transition-colors"
      >
        <span>{section.label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      {isExpanded && (
        <div className="pb-2">
          {section.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onItemClick}
              className="block text-sm text-foreground/70 hover:text-accent transition-colors py-1.5 pl-4"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navigation = {
    product: {
      label: "Product",
      items: [
        { label: "Communications Layer", href: "/product/communications-layer" },
        { label: "DONNA Tools/Features", href: "/product/donna-tools" },
        { label: "Custom Knowledge Base", href: "/product/custom-knowledge-base" },
        { label: "Integrations & Architecture", href: "/product/integrations-architecture" },
        { label: "Security & Infrastructure", href: "/product/security-infrastructure" },
      ],
    },
    industries: {
      label: "Industries",
      items: [
        { label: "Real Estate", href: "/industries/real-estate" },
        { label: "Hospitality", href: "/industries/hospitality" },
        { label: "Property Management", href: "/industries/property-management" },
        { label: "Health & Beauty", href: "/industries/health-beauty" },
        { label: "Insurance", href: "/industries/insurance" },
        { label: "Nightlife", href: "/industries/nightlife" },
        { label: "Nonprofits", href: "/industries/nonprofits" },
      ],
    },
    useCases: {
      label: "Use Cases",
      items: [
        { label: "Lead Response", href: "/use-cases/lead-response" },
        { label: "Customer Support", href: "/use-cases/customer-support" },
        { label: "Appointment Scheduling", href: "/use-cases/appointment-scheduling" },
      ],
    },
  }

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/DONNA-logo.png"
              alt="DONNA Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span className="text-lg font-bold gradient-text">DONNA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {Object.entries(navigation).map(([key, section]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current)
                    timeoutRef.current = null
                  }
                  setActiveDropdown(key)
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => {
                    setActiveDropdown(null)
                  }, 200) // 200ms delay before closing
                }}
              >
                <button className="flex items-center gap-1 text-sm text-foreground/70 hover:text-accent transition-colors py-2 px-1">
                  {section.label}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {activeDropdown === key && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-56 glass-card border border-white/10 rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={() => {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current)
                        timeoutRef.current = null
                      }
                    }}
                    onMouseLeave={() => {
                      timeoutRef.current = setTimeout(() => {
                        setActiveDropdown(null)
                      }, 200)
                    }}
                  >
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground/70 hover:text-accent hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/donna-network" className="text-sm text-foreground/70 hover:text-accent transition-colors px-1">
              DONNA Network
            </Link>
            <Link href="/pricing" className="text-sm text-foreground/70 hover:text-accent transition-colors px-1">
              Pricing
            </Link>
            <Link href="/about" className="text-sm text-foreground/70 hover:text-accent transition-colors px-1">
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4 ml-4">
            <SearchModal />
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/#demo-form"
              className="px-4 py-2 rounded-lg bg-accent text-background hover:bg-accent/90 transition-colors text-sm font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
            {Object.entries(navigation).map(([key, section]) => (
              <MobileNavItem
                key={key}
                section={section}
                onItemClick={() => setIsOpen(false)}
              />
            ))}
            <Link
              href="/donna-network"
              onClick={() => setIsOpen(false)}
              className="text-sm text-foreground/70 hover:text-accent transition-colors py-2 px-2"
            >
              DONNA Network
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="text-sm text-foreground/70 hover:text-accent transition-colors py-2 px-2"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-sm text-foreground/70 hover:text-accent transition-colors py-2 px-2"
            >
              About
            </Link>
            <div className="flex flex-col gap-2 pt-2 px-2">
              <div className="px-2">
                <SearchModal />
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg border border-accent text-accent text-center text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                href="/#demo-form"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-accent text-background text-center text-sm font-medium"
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
