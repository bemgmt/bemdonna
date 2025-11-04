"use client"

import { useInView } from "react-intersection-observer"
import { Calendar, Mail, Database, Zap, MessageSquare, Phone, DollarSign, Headphones } from "lucide-react"

const integrations = [
  { name: "Google Calendar", icon: Calendar },
  { name: "Microsoft Outlook", icon: Mail },
  { name: "Salesforce", icon: Database },
  { name: "HubSpot", icon: Database },
  { name: "Zapier", icon: Zap },
  { name: "Slack", icon: MessageSquare },
  { name: "Teams", icon: MessageSquare },
  { name: "Twilio", icon: Phone },
  { name: "Verizon Connect", icon: Phone },
  { name: "QuickBooks", icon: DollarSign },
  { name: "Gmail", icon: Mail },
  { name: "Zendesk", icon: Headphones },
]

export default function Integrations() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Integrates With Your <span className="gradient-text">Favorite Tools</span>
          </h2>
        </div>

        <div className="glass-card p-8 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon
              return (
                <div
                  key={index}
                  className="py-4 px-2 rounded-lg border border-white/5 hover:border-accent/50 transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <div className="flex justify-center mb-2">
                    <IconComponent className="w-8 h-8 text-accent/70 group-hover:text-accent transition-colors" />
                  </div>
                  <div className="text-sm font-medium text-foreground/70 group-hover:text-accent transition-colors">
                    {integration.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
