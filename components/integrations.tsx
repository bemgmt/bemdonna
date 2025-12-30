"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"

const integrations = [
  { id: "1", name: "Salesforce" },
  { id: "2", name: "HubSpot" },
  { id: "3", name: "Gmail" },
  { id: "4", name: "Outlook" },
  { id: "5", name: "Slack" },
  { id: "6", name: "Zapier" },
  { id: "7", name: "Calendly" },
  { id: "8", name: "Zoom" },
  { id: "9", name: "Stripe" },
  { id: "10", name: "QuickBooks" },
  { id: "11", name: "Mailchimp" },
  { id: "12", name: "Twilio" }
]

export default function Integrations() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Integrates With Your <span className="gradient-text">Favorite Tools</span>
          </h2>
          <p className="text-foreground/60">Connect DONNA with the tools you already use</p>
        </div>

        <div className="glass-card p-4 md:p-8 rounded-xl">
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4 w-max">
              {integrations.map((integration, index) => (
                <div
                  key={integration.id}
                  className="py-3 px-3 rounded-lg border border-white/5 hover:border-accent/50 transition-all duration-300 animate-fade-in group min-w-[120px] snap-start"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-base font-bold text-accent">
                      {integration.name.charAt(0)}
                    </div>
                  </div>
                  <div className="text-xs font-medium text-foreground/70 group-hover:text-accent transition-colors">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {integrations.map((integration, index) => (
                <div
                  key={integration.id}
                  className="py-4 px-2 rounded-lg border border-white/5 hover:border-accent/50 transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-lg font-bold text-accent">
                      {integration.name.charAt(0)}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-foreground/70 group-hover:text-accent transition-colors">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/product/integrations"
              className="text-accent hover:text-accent/80 transition-colors font-medium"
            >
              View All Integrations →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
