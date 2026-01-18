"use client"

import { useInView } from "react-intersection-observer"

interface FeatureCard {
  id: string
  icon: string
  title: string
  subtitle: string
  description: string
}

const features: FeatureCard[] = [
  {
    id: "agentic",
    icon: "⚡",
    title: "Agentic Execution",
    subtitle: "Plans, reasons, and completes work",
    description:
      "Give DONNA an objective and it determines the steps, executes across your tools, and learns from outcomes.",
  },
  {
    id: "human-loop",
    icon: "🛡️",
    title: "Human-in-the-Loop",
    subtitle: "Automation with real oversight",
    description:
      "Routine tasks run autonomously, while exceptions, approvals, and edge cases are routed to your team.",
  },
  {
    id: "role-fluid",
    icon: "🔄",
    title: "Role-Fluid AI",
    subtitle: "One AI, multiple roles",
    description:
      "Sales assistant, receptionist, operations analyst, executive secretary — all in a single deployment.",
  },
  {
    id: "tool-native",
    icon: "🔌",
    title: "Tool-Native Control",
    subtitle: "It doesn’t just suggest — it executes",
    description:
      "DONNA writes emails, updates CRMs, schedules meetings, generates documents, and triggers workflows directly.",
  },
  {
    id: "network",
    icon: "🌐",
    title: "Network-Aware",
    subtitle: "AI-to-AI coordination",
    description:
      "Secure DONNA-to-DONNA collaboration reduces handoffs across teams, vendors, and partners.",
  },
  {
    id: "multimodal",
    icon: "💬",
    title: "Multi-Modal Communication",
    subtitle: "Voice, email, SMS, and chat",
    description:
      "Interact with customers and teams in the channel they prefer — while maintaining a single shared context.",
  },
  {
    id: "enterprise",
    icon: "✓",
    title: "Enterprise-Grade Security",
    subtitle: "Built for real operations",
    description:
      "SOC 2, GDPR, encryption, permissions, and audit trails — with governance baked in.",
  },
  {
    id: "operations",
    icon: "◆",
    title: "Operational Intelligence",
    subtitle: "Decisions with context",
    description:
      "Analyzes business patterns, surfaces insights, and recommends actions in plain language.",
  },
]

export default function Features() {
  const { ref, inView } = useInView({ threshold: 0.1, once: true })

  return (
    <section id="products" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            The operational intelligence layer that runs workflows across your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group glass-card p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              {/* Icon and title */}
              <div className="mb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-accent font-medium">{feature.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-4 h-0.5 bg-gradient-to-r from-accent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
