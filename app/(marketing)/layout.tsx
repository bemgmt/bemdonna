import type { ReactNode } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieConsent from '@/components/cookie-consent'
import Breadcrumb from '@/components/breadcrumb'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Breadcrumb />
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

