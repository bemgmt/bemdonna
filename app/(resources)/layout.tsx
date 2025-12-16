import type { ReactNode } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieConsent from '@/components/cookie-consent'
import NewsletterSignup from '@/components/newsletter-signup'
import Link from 'next/link'
import { BookOpen, FileText, GraduationCap, Video, Download, Briefcase } from 'lucide-react'

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  const resourceLinks = [
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/case-studies', label: 'Case Studies', icon: Briefcase },
    { href: '/tutorials', label: 'Tutorials', icon: GraduationCap },
    { href: '/docs', label: 'Documentation', icon: FileText },
    { href: '/webinars', label: 'Webinars', icon: Video },
    { href: '/downloads', label: 'Downloads', icon: Download },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <nav className="space-y-2">
                  <h3 className="text-sm font-semibold text-foreground/70 mb-3">Resources</h3>
                  {resourceLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm"
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </Link>
                    )
                  })}
                </nav>
                <div className="pt-6 border-t border-white/10">
                  <NewsletterSignup variant="sidebar" />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

