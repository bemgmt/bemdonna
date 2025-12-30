"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"

interface Domain {
  id: string
  name: string
  icon: string
  description: string
  example: string
}

const domains: Domain[] = [
  {
    id: "communication",
    name: "Communication & Interface",
    icon: "💬",
    description: "Manages multi-channel communications with context-aware, threaded interactions and memory for each contact.",
    example: "DONNA can handle conversations over chat, email, SMS, even voice calls – with context-aware, threaded interactions and memory for each contact. It can transcribe meetings or respond to customer inquiries in real-time, maintaining consistency across channels.",
  },
  {
    id: "secretary",
    name: "Secretary & Office Ops",
    icon: "📋",
    description: "Provides smart executive assistant capabilities for front-office and back-office tasks.",
    example: "DONNA triages your inbox, schedules meetings (sending calendar invites), prepares meeting agendas or summaries, and handles routine follow-ups. It coordinates front-office and back-office tasks seamlessly, essentially acting like a tireless office assistant.",
  },
  {
    id: "sales",
    name: "Sales & Lead Management",
    icon: "🤝",
    description: "Assists in sales processes and CRM management with AI-driven outreach and lead qualification.",
    example: "DONNA qualifies inbound leads from your website or email, engages prospects with AI-driven outreach, books sales calls or demos, and logs updates in your CRM. It can score leads and track customer sentiment, so your sales team can focus on closing deals.",
  },
  {
    id: "marketing",
    name: "Marketing & Growth",
    icon: "📢",
    description: "Supports marketing campaigns and growth initiatives with automated workflows and analytics.",
    example: "DONNA drafts marketing emails, generates campaign landing pages, suggests SEO keywords, and manages A/B tests. It can automate routine marketing workflows and analyze funnel data to help your team boost growth.",
  },
  {
    id: "automation",
    name: "Automation & Workflows",
    icon: "⚙️",
    description: "Acts as a business process automation engine with conditional logic and human approval routing.",
    example: "DONNA triggers actions based on events or schedules – it can send notifications, update databases or CRM records, generate documents, or call external APIs at the right times. It supports conditional logic, retries on failure, and even routes tasks to humans for approval when necessary.",
  },
  {
    id: "data",
    name: "Data & Intelligence",
    icon: "📊",
    description: "Provides memory and organizational intelligence with learning capabilities and actionable insights.",
    example: "DONNA maintains a knowledge base and conversational memory for each contact. It learns preferences and patterns over time, and can surface insights (e.g., frequently asked questions, common customer issues, or performance metrics) to continually improve operations.",
  },
]

export default function FunctionalDomains() {
  const { ref, inView } = useInView({ threshold: 0.1, once: true })

  return (
    <section id="capabilities" ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            End-to-End <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            DONNA supports your organization across six major functional domains of work.
          </p>
        </div>

        {/* Domains - Horizontal Scroll (All Devices) */}
        <div className="mb-8 md:mb-12 overflow-x-auto -mx-4 px-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 md:gap-6 w-max">
            {domains.map((domain, index) => (
              <div
                key={domain.id}
                className={`glass-card p-5 md:p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-slide-up min-w-[300px] md:min-w-[350px] snap-start ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{domain.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                  {domain.name}
                </h3>
                <p className="text-xs md:text-sm text-foreground/70 leading-relaxed mb-2 md:mb-3">
                  {domain.description}
                </p>
                <details className="mt-3 md:mt-4">
                  <summary className="text-xs md:text-sm text-accent cursor-pointer hover:text-accent/80 font-medium">
                    Learn more
                  </summary>
                  <p className="text-xs md:text-sm text-foreground/60 mt-2 leading-relaxed">
                    {domain.example}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/#demo-form"
            className="inline-block px-8 py-3 rounded-lg bg-accent text-background hover:bg-accent/90 transition-all duration-300 font-semibold text-lg glow-accent hover:shadow-[0_0_30px_rgba(61,224,255,0.5)]"
          >
            See DONNA in Action
          </Link>
        </div>
      </div>
    </section>
  )
}

