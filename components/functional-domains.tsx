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
    description: "Runs multi-channel communication with memory, context, and consistent tone across every touchpoint.",
    example: "DONNA answers calls, chats, emails, and SMS in one continuous thread, then follows up with the right channel and escalates when judgment is required.",
  },
  {
    id: "secretary",
    name: "Secretary & Office Ops",
    icon: "📋",
    description: "Coordinates scheduling, inboxes, and follow-ups with precise handoffs to your team.",
    example: "DONNA aligns calendars, sends invitations, tracks action items, and creates summaries so nothing slips through.",
  },
  {
    id: "sales",
    name: "Sales & Lead Management",
    icon: "🤝",
    description: "Qualifies, nurtures, and routes leads while keeping CRM data clean and current.",
    example: "DONNA engages prospects, answers questions, books meetings, and updates your CRM automatically.",
  },
  {
    id: "marketing",
    name: "Marketing & Growth",
    icon: "📢",
    description: "Creates and executes campaigns with always-on optimization and reporting.",
    example: "DONNA drafts copy, schedules releases, tracks performance, and adjusts based on results.",
  },
  {
    id: "automation",
    name: "Automation & Workflows",
    icon: "⚙️",
    description: "Executes multi-step workflows with approvals, retries, and audit-ready logs.",
    example: "DONNA triggers tasks across systems, routes exceptions for approval, and keeps execution traceable.",
  },
  {
    id: "data",
    name: "Data & Intelligence",
    icon: "📊",
    description: "Turns operational data into insights and next actions across your stack.",
    example: "DONNA spots patterns, flags anomalies, and recommends actions in plain language.",
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
            One AI layer that runs across departments, roles, and workflows without retooling.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="mb-8 md:mb-12">
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4 w-max">
              {domains.map((domain, index) => (
                <div
                  key={domain.id}
                  className={`glass-card p-5 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-slide-up min-w-[300px] snap-start ${
                    inView ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl mb-3">{domain.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {domain.name}
                  </h3>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-2">
                    {domain.description}
                  </p>
                  <details className="mt-3">
                    <summary className="text-xs text-accent cursor-pointer hover:text-accent/80 font-medium">
                      Learn more
                    </summary>
                    <p className="text-xs text-foreground/60 mt-2 leading-relaxed">
                      {domain.example}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <div
                key={domain.id}
                className={`glass-card p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-slide-up ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{domain.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {domain.name}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                  {domain.description}
                </p>
                <details className="mt-4">
                  <summary className="text-sm text-accent cursor-pointer hover:text-accent/80 font-medium">
                    Learn more
                  </summary>
                  <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
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

