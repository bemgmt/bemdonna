'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SearchModal from '@/components/search-modal'

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-foreground/70 mb-4">Looking for something specific?</p>
          <div className="mb-4 flex justify-center">
            <SearchModal />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="text-sm text-accent hover:underline">
              Home
            </Link>
            <span className="text-foreground/50">•</span>
            <Link href="/product" className="text-sm text-accent hover:underline">
              Product Overview
            </Link>
            <span className="text-foreground/50">•</span>
            <Link href="/pricing" className="text-sm text-accent hover:underline">
              Pricing
            </Link>
            <span className="text-foreground/50">•</span>
            <Link href="/blog" className="text-sm text-accent hover:underline">
              Blog
            </Link>
            <span className="text-foreground/50">•</span>
            <Link href="/contact" className="text-sm text-accent hover:underline">
              Contact
            </Link>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

