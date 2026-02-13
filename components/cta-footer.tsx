"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTAFooter() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-primary/10 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to see <span className="gradient-text">DONNA</span> in action?
        </h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Join the waitlist for early access to the AI operations layer built for real business workflows.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="donnaPrimary" size="lg" asChild>
            <Link href="/#demo-form">Join the Waitlist</Link>
          </Button>
          <Button variant="donnaOutline" size="lg" asChild>
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
