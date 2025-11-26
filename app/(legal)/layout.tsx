import type { ReactNode } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

