"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import SearchModal from "./search-modal"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navigation = {
    product: {
      label: "Product",
      items: [
        { label: "Voice Receptionist", href: "/product/voice-receptionist" },
        { label: "Email Assistant", href: "/product/email-assistant" },
        { label: "Chatbot", href: "/product/chatbot" },
        { label: "Secretary Bot", href: "/product/secretary-bot" },
        { label: "Marketing Bot", href: "/product/marketing-bot" },
        { label: "Knowledge Base", href: "/product/knowledge-base" },
        { label: "Integrations", href: "/product/integrations" },
        { label: "Security", href: "/product/security" },
        { label: "Analytics", href: "/product/analytics" },
      ],
    },
    industries: {
      label: "Industries",
      items: [
        { label: "Real Estate", href: "/industries/real-estate" },
        { label: "Hospitality", href: "/industries/hospitality" },
        { label: "Property Management", href: "/industries/property-management" },
        { label: "Salons & Spas", href: "/industries/salons-spas" },
        { label: "Legal", href: "/industries/legal" },
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Entertainment", href: "/industries/entertainment" },
      ],
    },
    useCases: {
      label: "Use Cases",
      items: [
        { label: "Lead Response", href: "/use-cases/lead-response" },
        { label: "Customer Support", href: "/use-cases/customer-support" },
        { label: "Appointment Scheduling", href: "/use-cases/appointment-scheduling" },
        { label: "Marketing Automation", href: "/use-cases/marketing-automation" },
      ],
    },
    resources: {
      label: "Resources",
      items: [
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Documentation", href: "/docs" },
        { label: "Tutorials", href: "/tutorials" },
        { label: "Webinars", href: "/webinars" },
      ],
    },
  }

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">D</span>
            </div>
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
          <nav className="lg:hidden pb-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
            {Object.entries(navigation).map(([key, section]) => (
              <div key={key}>
                <div className="font-semibold text-sm text-foreground/90 py-2 px-2">{section.label}</div>
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-foreground/70 hover:text-accent transition-colors py-2 pl-4"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
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
