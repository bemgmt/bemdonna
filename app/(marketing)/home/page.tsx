import { HeroNeural } from "@/components/neural/hero-neural"
import { SectionTitleGlow } from "@/components/neural/section-title-glow"
import { HoloFeatureCard } from "@/components/neural/holo-feature-card"
import { CapabilitiesGrid } from "@/components/neural/capabilities-grid"
import { PricingTierCard } from "@/components/neural/pricing-tier-card"
import { HoloFooter } from "@/components/neural/holo-footer"
import { NeonButton } from "@/components/neural/neon-button"
import {
  Bot, Mail, Phone, MessageSquare, Users, Zap,
  TrendingUp, FileText, Database, Search, Workflow,
  Sparkles, Brain, Shield, Clock, Target, Rocket
} from "lucide-react"

export default function HomePage() {
  const capabilities = [
    {
      icon: Mail,
      title: "Email Bot",
      description: "Intelligent email management with context-aware responses and automated follow-ups"
    },
    {
      icon: Phone,
      title: "Voice Bot",
      description: "Natural voice interactions with advanced speech recognition and synthesis"
    },
    {
      icon: MessageSquare,
      title: "SMS Bot",
      description: "Automated text messaging for customer engagement and notifications"
    },
    {
      icon: Bot,
      title: "Secretary Bot",
      description: "Operational agent for scheduling, reminders, and administrative tasks"
    },
    {
      icon: Users,
      title: "Chatbot",
      description: "24/7 customer support with intelligent conversation handling"
    },
    {
      icon: Zap,
      title: "Lead Gen Engine",
      description: "Automated lead capture, qualification, and nurturing workflows"
    },
    {
      icon: TrendingUp,
      title: "Marketing Bot",
      description: "Campaign automation, content distribution, and analytics"
    },
    {
      icon: Target,
      title: "Sales Agent Bot",
      description: "AI-powered sales conversations and deal progression"
    },
    {
      icon: FileText,
      title: "Landing Page Generator",
      description: "Create high-converting pages with AI-driven design and copy"
    },
    {
      icon: Database,
      title: "Knowledge Base",
      description: "Centralized information hub with intelligent search and retrieval"
    },
    {
      icon: Search,
      title: "Scraper Module",
      description: "Automated data collection and competitive intelligence"
    },
    {
      icon: Workflow,
      title: "Agentic Workflows",
      description: "Complex multi-step automations with decision-making capabilities"
    }
  ]

  const differentiators = [
    {
      icon: Brain,
      title: "Agentic Execution",
      description: "Reasons through objectives, creates plans, and completes tasks without scripts."
    },
    {
      icon: Workflow,
      title: "Tool-Native Control",
      description: "Executes directly inside your tools and APIs, not just recommendations."
    },
    {
      icon: Shield,
      title: "Enterprise Governance",
      description: "Security, permissions, and audit trails designed for real operations."
    },
    {
      icon: Clock,
      title: "Multi-Modal, 24/7",
      description: "Voice, email, SMS, and chat — always on, always consistent."
    }
  ]

  return (
    <main className="min-h-screen bg-[#030314] bg-radial-glow relative overflow-hidden">
      {/* Hero Section */}
      <HeroNeural
        title="One AI. Every Industry."
        subtitle="DONNA is the digital operations layer that runs workflows, communication, and decision support across your business."
        primaryCTA={{ label: "Join the Waitlist", link: "/#demo-form" }}
        secondaryCTA={{ label: "Watch Demo", link: "#demo" }}
      />

      {/* What is DONNA */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="What is DONNA?"
            subtitle="Operational intelligence embedded inside your business"
          />
          <div className="glass-panel p-12 rounded-2xl text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              DONNA is infrastructure your business runs on. It integrates with your tools, understands context,
              and executes work end-to-end while keeping humans in control.
            </p>
            <p className="text-lg text-gray-400">
              This is not a chatbot or CRM. It is an AI operator that plans, acts, and improves over time.
            </p>
          </div>
        </div>
      </section>

      {/* Why DONNA Is Different */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="Why DONNA Is Different"
            subtitle="The future of business automation is here"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <HoloFeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Verticals Preview */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="Industry Solutions"
            subtitle="Tailored automation for your vertical"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Health & Beauty", icon: Sparkles },
              { name: "Hospitality", icon: Users },
              { name: "Real Estate", icon: Target },
              { name: "Professional Services", icon: Rocket }
            ].map((vertical, index) => {
              const Icon = vertical.icon
              return (
                <div
                  key={index}
                  className="holo-panel p-6 rounded-xl text-center hover-lift group"
                >
                  <div className="mb-4 inline-block p-4 rounded-lg bg-gradient-to-br from-[#8A2FFF]/20 to-[#3DE0FF]/20 group-hover:glow-violet transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#3DE0FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {vertical.name}
                  </h3>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <NeonButton label="Explore All Verticals" link="/verticals" variant="outline" />
          </div>
        </div>
      </section>

      {/* Real-Time Agentic Actions */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="Agentic Actions in Production"
            subtitle="DONNA doesn’t just respond — it executes"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-panel p-8 rounded-xl">
              <Zap className="w-8 h-8 text-[#3DE0FF] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#3DE0FF]">Instant Response</h3>
              <p className="text-gray-300">
                Multi-modal responses across voice, email, chat, and SMS without delay.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-xl">
              <Brain className="w-8 h-8 text-[#8A2FFF] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#8A2FFF]">Contextual Understanding</h3>
              <p className="text-gray-300">
                Shared memory across systems and conversations for consistent decisions.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-xl">
              <Target className="w-8 h-8 text-[#8A2FFF] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#8A2FFF]">Autonomous Execution</h3>
              <p className="text-gray-300">
                From lead qualification to scheduling, DONNA runs workflows end-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="Product Roadmap"
            subtitle="The future is being built today"
          />
          <div className="space-y-6">
            {[
              { quarter: "Q1 2025", title: "Advanced Voice AI", status: "In Development" },
              { quarter: "Q2 2025", title: "Multi-Language Support", status: "Planned" },
              { quarter: "Q3 2025", title: "Predictive Analytics", status: "Planned" },
              { quarter: "Q4 2025", title: "Custom AI Training", status: "Research" }
            ].map((item, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl flex items-center justify-between hover-lift">
                <div>
                  <span className="text-[#3DE0FF] font-bold">{item.quarter}</span>
                  <h4 className="text-xl font-semibold text-white mt-1">{item.title}</h4>
                </div>
                <span className="px-4 py-2 rounded-full bg-[#8A2FFF]/20 text-[#8A2FFF] text-sm font-semibold">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <SectionTitleGlow
            title="Simple, Transparent Pricing"
            subtitle="Plans that scale with your operations"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <PricingTierCard
              tierName="Starter"
              price="$1,500"
              features={[
                "Dedicated DONNA for one team",
                "Multi-modal communication",
                "Core workflow automations",
                "Basic integrations",
                "Email support"
              ]}
            />
            <PricingTierCard
              tierName="Pro"
              price="$5,000"
              features={[
                "Multiple concurrent DONNAs",
                "Advanced workflows & approvals",
                "Expanded integrations",
                "Priority support",
                "Department-level coverage"
              ]}
              highlight={true}
            />
            <PricingTierCard
              tierName="Enterprise"
              price="$12,000"
              features={[
                "Custom deployment options",
                "Enterprise governance",
                "Dedicated solutions team",
                "SLA guarantees",
                "Network-level coordination"
              ]}
              ctaLabel="Contact Sales"
            />
          </div>
          <div className="text-center mt-8">
            <NeonButton label="View Full Pricing" link="/pricing" variant="outline" />
          </div>
        </div>
      </section>

      {/* Investor Callout */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="holo-panel p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="circuitry-lines absolute inset-0 opacity-20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Invest in the Future of Business Operations
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                DONNA is the operational intelligence layer powering the next generation of businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton label="Investor Information" link="/investors" variant="primary" />
                <NeonButton label="Schedule Call" link="/contact" variant="outline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <HoloFooter />
    </main>
  )
}