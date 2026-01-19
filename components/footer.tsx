"use client"

import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Youtube, Facebook, Music2 } from "lucide-react"
import NewsletterSignup from "./newsletter-signup"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-12 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/DONNA-logo.png"
                alt="DONNA Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-bold gradient-text">DONNA</span>
            </div>
            <p className="text-foreground/60 text-sm mb-4">
              One AI. Every industry. DONNA is the digital operations layer that runs workflows, communication, and decision support quietly in the background.
            </p>
            <div className="flex gap-3 mb-4">
              <a href="https://x.com/donnaai_" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors" aria-label="DONNA on X">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/derek-talbird-65293977/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors" aria-label="DONNA on LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@donnaai_?lang=en" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors" aria-label="DONNA on TikTok">
                <Music2 className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@bemdonna" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors" aria-label="DONNA on YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61586503540067" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors" aria-label="DONNA on Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <NewsletterSignup variant="inline" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/product" className="text-foreground/70 hover:text-accent transition-colors">Overview</Link></li>
              <li><Link href="/product/voice-receptionist" className="text-foreground/70 hover:text-accent transition-colors">Voice Receptionist</Link></li>
              <li><Link href="/product/email-assistant" className="text-foreground/70 hover:text-accent transition-colors">Email Assistant</Link></li>
              <li><Link href="/product/chatbot" className="text-foreground/70 hover:text-accent transition-colors">Chatbot</Link></li>
              <li><Link href="/product/marketing-bot" className="text-foreground/70 hover:text-accent transition-colors">Marketing Bot</Link></li>
              <li><Link href="/product/knowledge-base" className="text-foreground/70 hover:text-accent transition-colors">Knowledge Base</Link></li>
              <li><Link href="/product/integrations" className="text-foreground/70 hover:text-accent transition-colors">Integrations</Link></li>
              <li><Link href="/product/security" className="text-foreground/70 hover:text-accent transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/industries" className="text-foreground/70 hover:text-accent transition-colors">All Industries</Link></li>
              <li><Link href="/industries/real-estate" className="text-foreground/70 hover:text-accent transition-colors">Real Estate</Link></li>
              <li><Link href="/industries/hospitality" className="text-foreground/70 hover:text-accent transition-colors">Hospitality</Link></li>
              <li><Link href="/industries/property-management" className="text-foreground/70 hover:text-accent transition-colors">Property Management</Link></li>
              <li><Link href="/industries/health-beauty" className="text-foreground/70 hover:text-accent transition-colors">Health & Beauty</Link></li>
              <li><Link href="/industries/insurance" className="text-foreground/70 hover:text-accent transition-colors">Insurance</Link></li>
              <li><Link href="/industries/nonprofits" className="text-foreground/70 hover:text-accent transition-colors">Nonprofits</Link></li>
              <li><Link href="/industries/nightlife" className="text-foreground/70 hover:text-accent transition-colors">Clubs & Nightlife</Link></li>
            </ul>
          </div>
          
          {/* Use Cases */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Use Cases</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/use-cases" className="text-foreground/70 hover:text-accent transition-colors">All Use Cases</Link></li>
              <li><Link href="/use-cases/lead-response" className="text-foreground/70 hover:text-accent transition-colors">Lead Response</Link></li>
              <li><Link href="/use-cases/customer-support" className="text-foreground/70 hover:text-accent transition-colors">Customer Support</Link></li>
              <li><Link href="/use-cases/appointment-scheduling" className="text-foreground/70 hover:text-accent transition-colors">Appointment Scheduling</Link></li>
              <li><Link href="/use-cases/lead-nurturing" className="text-foreground/70 hover:text-accent transition-colors">Lead Nurturing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-foreground/70 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/case-studies" className="text-foreground/70 hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link href="/tutorials" className="text-foreground/70 hover:text-accent transition-colors">Tutorials</Link></li>
              <li><Link href="/documentation" className="text-foreground/70 hover:text-accent transition-colors">Documentation</Link></li>
              <li><Link href="/webinars" className="text-foreground/70 hover:text-accent transition-colors">Webinars</Link></li>
              <li><Link href="/downloads" className="text-foreground/70 hover:text-accent transition-colors">Downloads</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/system-brief" className="text-foreground/70 hover:text-accent transition-colors">System Brief</Link></li>
              <li><Link href="/investors" className="text-foreground/70 hover:text-accent transition-colors">Investors</Link></li>
              <li><Link href="/contact" className="text-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="text-foreground/70 hover:text-accent transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="text-foreground/70 hover:text-accent transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p>&copy; {new Date().getFullYear()} DONNA. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <p className="text-foreground/50">Built with ❤️ by DONNA Team</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="/acceptable-use" className="hover:text-accent transition-colors">Acceptable Use</Link>
            <Link href="/gdpr" className="hover:text-accent transition-colors">GDPR</Link>
            <span className="hidden sm:inline text-foreground/40">•</span>
            <span className="text-xs text-foreground/50">SOC 2 Type II • GDPR Compliant • Enterprise Security</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
