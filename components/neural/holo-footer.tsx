import Link from "next/link"
import { Mail, Linkedin, Twitter, Youtube, Facebook, Music2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterLink {
  label: string
  href: string
}

interface HoloFooterProps {
  logo?: string
  links?: FooterLink[]
  social?: { platform: string; url: string }[]
  legalLinks?: FooterLink[]
  tagline?: string
  className?: string
}

export function HoloFooter({ 
  logo = "DONNA",
  links = [],
  social = [],
  legalLinks = [],
  tagline = "The digital operations layer for modern business.",
  className 
}: HoloFooterProps) {
  const currentYear = new Date().getFullYear()
  
  const defaultLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Verticals", href: "/verticals" },
    { label: "Pricing", href: "/pricing" },
    { label: "Investors", href: "/investors" },
    { label: "Contact", href: "/contact" }
  ]
  
  const defaultLegalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" }
  ]
  
  const displayLinks = links.length > 0 ? links : defaultLinks
  const displayLegalLinks = legalLinks.length > 0 ? legalLinks : defaultLegalLinks

  return (
    <footer className={cn(
      "relative border-t border-[#8A2FFF]/30 bg-gradient-to-b from-[#030314] to-[#0A0A1A]",
      className
    )}>
      <div className="circuitry-lines absolute inset-0 opacity-20" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold gradient-text mb-2">
              {logo}
            </h3>
            <p className="text-gray-400 mb-4">
              {tagline}
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:derek@bem.studio" 
                className="p-2 rounded-lg bg-[#8A2FFF]/10 hover:bg-[#8A2FFF]/20 transition-colors duration-300 hover:glow-violet"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-[#3DE0FF]" />
              </a>
              <a 
                href="https://www.linkedin.com/in/derek-talbird-65293977/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#8A2FFF]/10 hover:bg-[#8A2FFF]/20 transition-colors duration-300 hover:glow-violet"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#3DE0FF]" />
              </a>
              <a 
                href="https://x.com/donnaai_" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#8A2FFF]/10 hover:bg-[#8A2FFF]/20 transition-colors duration-300 hover:glow-violet"
                aria-label="X"
              >
                <Twitter className="w-5 h-5 text-[#3DE0FF]" />
              </a>
              <a 
                href="https://www.tiktok.com/@donnaai_?lang=en" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#8A2FFF]/10 hover:bg-[#8A2FFF]/20 transition-colors duration-300 hover:glow-violet"
                aria-label="TikTok"
              >
                <Music2 className="w-5 h-5 text-[#3DE0FF]" />
              </a>
              <a 
                href="https://www.youtube.com/@bemdonna" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#8A2FFF]/10 hover:bg-[#8A2FFF]/20 transition-colors duration-300 hover:glow-violet"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-[#3DE0FF]" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61586503540067" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#8A2FFF]/10 hover:bg-[#8A2FFF]/20 transition-colors duration-300 hover:glow-violet"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#3DE0FF]" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#3DE0FF]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {displayLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#8A2FFF] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#3DE0FF]">
              Contact
            </h4>
            <p className="text-gray-400 mb-2">
              derek@bem.studio
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#8A2FFF]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} DONNA. All rights reserved.
          </p>
          <div className="flex gap-6">
            {displayLegalLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className="text-gray-500 hover:text-[#8A2FFF] text-sm transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

