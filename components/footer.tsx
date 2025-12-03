"use client"

import Link from "next/link"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-12 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <span className="text-sm font-bold">D</span>
              </div>
              <span className="font-bold gradient-text">DONNA</span>
            </div>
            <p className="text-foreground/60 text-sm mb-4">
              AI-powered business communication platform that never misses a lead.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com/bemdonna" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/bemdonna" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/bemgmt" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:derek@bem.studio" className="text-foreground/60 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/product/voice-receptionist" className="text-foreground/70 hover:text-accent transition-colors">Voice Receptionist</Link></li>
              <li><Link href="/product/email-assistant" className="text-foreground/70 hover:text-accent transition-colors">Email Assistant</Link></li>
              <li><Link href="/product/chatbot" className="text-foreground/70 hover:text-accent transition-colors">Chatbot</Link></li>
              <li><Link href="/product/integrations" className="text-foreground/70 hover:text-accent transition-colors">Integrations</Link></li>
              <li><Link href="/product/security" className="text-foreground/70 hover:text-accent transition-colors">Security</Link></li>
              <li><Link href="/pricing" className="text-foreground/70 hover:text-accent transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/industries/real-estate" className="text-foreground/70 hover:text-accent transition-colors">Real Estate</Link></li>
              <li><Link href="/industries/hospitality" className="text-foreground/70 hover:text-accent transition-colors">Hospitality</Link></li>
              <li><Link href="/industries/property-management" className="text-foreground/70 hover:text-accent transition-colors">Property Management</Link></li>
              <li><Link href="/industries/legal" className="text-foreground/70 hover:text-accent transition-colors">Legal</Link></li>
              <li><Link href="/industries/healthcare" className="text-foreground/70 hover:text-accent transition-colors">Healthcare</Link></li>
              <li><Link href="/industries" className="text-foreground/70 hover:text-accent transition-colors">View All</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-foreground/70 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/case-studies" className="text-foreground/70 hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link href="/docs" className="text-foreground/70 hover:text-accent transition-colors">Documentation</Link></li>
              <li><Link href="/tutorials" className="text-foreground/70 hover:text-accent transition-colors">Tutorials</Link></li>
              <li><Link href="/webinars" className="text-foreground/70 hover:text-accent transition-colors">Webinars</Link></li>
              <li><Link href="/downloads" className="text-foreground/70 hover:text-accent transition-colors">Downloads</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-foreground/70 hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="/press" className="text-foreground/70 hover:text-accent transition-colors">Press</Link></li>
              <li><Link href="/contact" className="text-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="text-foreground/70 hover:text-accent transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="text-foreground/70 hover:text-accent transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} DONNA. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="/acceptable-use" className="hover:text-accent transition-colors">Acceptable Use</Link>
            <Link href="/gdpr" className="hover:text-accent transition-colors">GDPR</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
