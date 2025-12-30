"use client"

import { useInView } from "react-intersection-observer"

interface Principle {
  id: string
  name: string
  icon: string
  description: string
}

const principles: Principle[] = [
  {
    id: "agentic",
    name: "Agentic",
    icon: "🧠",
    description: "Reasons, plans, and takes action autonomously rather than following pre-scripted flows.",
  },
  {
    id: "human-in-the-loop",
    name: "Human-in-the-Loop",
    icon: "🛡️",
    description: "Always keeps a human in control; you can review decisions and intervene at any time.",
  },
  {
    id: "role-fluid",
    name: "Role-Fluid",
    icon: "🔄",
    description: "Adapts to different roles or departments on the fly without needing retraining.",
  },
  {
    id: "tool-native",
    name: "Tool-Native",
    icon: "🔌",
    description: "Operates directly within your software tools and APIs (not just via chat), executing tasks in the apps you already use.",
  },
  {
    id: "network-aware",
    name: "Network-Aware",
    icon: "🌐",
    description: "Understands and communicates with other AI agents (DONNAs) as peers, enabling cross-organization workflows.",
  },
]

export default function CorePrinciples() {
  const { ref, inView } = useInView({ threshold: 0.1, once: true })

  return (
    <section id="principles" ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="gradient-text">Operating Principles</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            DONNA is built on five key operating principles that enable it to truly act as a digital operations agent.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4 w-max">
              {principles.map((principle, index) => (
                <div
                  key={principle.id}
                  className={`glass-card p-4 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-slide-up min-w-[280px] snap-start ${
                    inView ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl mb-3 text-center">{principle.icon}</div>
                  <h3 className="text-base font-bold text-foreground mb-2 text-center">
                    {principle.name}
                  </h3>
                  <p className="text-xs text-foreground/70 leading-relaxed text-center">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {principles.map((principle, index) => (
              <div
                key={principle.id}
                className={`glass-card p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-slide-up ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4 text-center">{principle.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-3 text-center">
                  {principle.name}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed text-center">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

