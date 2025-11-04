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
    id: "voice",
    icon: "⚡",
    title: "Real-Time Voice & Chat Interface",
    subtitle: "Seamless, human-like communication across voice and chat",
    description:
      "Donna's AWS-powered voice layer handles 4,000+ concurrent users with adaptive streaming, smart call routing, and real-time transcription. WebSocket and phone integrations enable instant responses across any device.",
  },
  {
    id: "knowledge",
    icon: "◆",
    title: "Intelligent Knowledge Base (AWS Quick Suite)",
    subtitle: "Industry-specific knowledge that keeps learning",
    description:
      "Four vertical-specific knowledge bases—Real Estate, Hospitality, Construction, and Property Management—each with 200+ curated questions and semantic understanding. Powered by AWS Bedrock + Amazon Q, with automatic data ingestion from 600+ sources.",
  },
  {
    id: "multi-tenant",
    icon: "⬢",
    title: "Multi-Tenant Architecture",
    subtitle: "Built for scale, isolation, and reliability",
    description:
      "Each client runs in its own secure environment with isolated data and compute resources. Scalable containers on AWS ECS/Fargate, governed by AWS Control Tower, with Aurora RDS for structured data and DynamoDB for real-time session state.",
  },
  {
    id: "collaboration",
    icon: "∞",
    title: "AI + Human Collaboration",
    subtitle: "Automation that knows when to hand off",
    description:
      "Donna routes conversations intelligently across industries. AI manages everyday interactions, while human operators can review, approve, or step in with one click—all within a unified dashboard. Choose full automation or hybrid mode with live human support for complex inquiries and high-value interactions.",
  },
  {
    id: "integrations",
    icon: "⟿",
    title: "Automation & Integrations",
    subtitle: "Connected to the tools your business already uses",
    description:
      "Instant integration with 600+ platforms—Google Workspace, QuickBooks ('Donna Books'), Slack, Zendesk, CRMs, and document systems. Choose real-time or scheduled data refresh to keep Donna's knowledge base always current.",
  },
  {
    id: "security",
    icon: "✓",
    title: "Monitoring, Security & Compliance",
    subtitle: "Enterprise-grade protection from day one",
    description:
      "Continuous monitoring with CloudWatch, X-Ray, and CloudTrail. GuardDuty and Security Hub detect threats automatically. SSL via Certificate Manager, DNS via Route 53, and IAM least-privilege access ensure data stays secure and compliant.",
  },
  {
    id: "performance",
    icon: "⚙",
    title: "Performance & Scalability",
    subtitle: "Built for thousands of simultaneous users",
    description:
      "Auto-scaling to 5,000+ active sessions, backed by optimized WebSocket and API layers. CI/CD with GitHub + CodePipeline delivers instant updates, while cost optimization keeps operations efficient.",
  },
  {
    id: "onboarding",
    icon: "◎",
    title: "Client Onboarding & Management",
    subtitle: "Ready for rapid deployment and growth",
    description:
      "Persona-based onboarding across 12 user profiles. Guided setup for Quick Suite, connectors, and workflows. Includes monitoring dashboards, admin guides, and runbooks for self-service management.",
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
            Enterprise-grade capabilities designed for modern offices
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
