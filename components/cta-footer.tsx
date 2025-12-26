"use client"

import Link from "next/link"

export default function CTAFooter() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-primary/10 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to see <span className="gradient-text">DONNA</span> in action?
        </h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Join the waitlist to be among the first to experience the future of AI-powered business operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#demo-form"
            className="px-8 py-3 rounded-lg bg-accent text-background hover:bg-accent/90 transition-all duration-300 font-semibold text-lg glow-accent hover:shadow-[0_0_30px_rgba(132,204,255,0.5)]"
          >
            Join the Waitlist
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 font-semibold text-lg"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
