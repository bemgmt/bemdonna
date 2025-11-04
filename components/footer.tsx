"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-12 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <span className="text-sm font-bold">D</span>
              </div>
              <span className="font-bold gradient-text">DONNA</span>
            </div>
            <p className="text-foreground/60 text-sm">AI Office Assistant for Modern Businesses</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#products" className="text-foreground/70 hover:text-accent transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-foreground/70 hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#security" className="text-foreground/70 hover:text-accent transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>&copy; 2025 DONNA. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
