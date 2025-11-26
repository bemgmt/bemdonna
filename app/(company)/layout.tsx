import type { ReactNode } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { CookieConsent } from '@/components/cookie-consent'

export default function CompanyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <CookieConsent />
    </>
  )
}

