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
      description: "Virtual assistant for scheduling, reminders, and administrative tasks"
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
      title: "True AI Intelligence",
      description: "Not just automation - DONNA learns, adapts, and makes intelligent decisions based on your business context"
    },
    {
      icon: Workflow,
      title: "Unified Platform",
      description: "All your automation needs in one cohesive system, eliminating the need for multiple disconnected tools"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards"
    },
    {
      icon: Clock,
      title: "Real-Time Actions",
      description: "Instant responses and actions across all channels, 24/7/365 without human intervention"
    }
  ]

  return (
    <main className="min-h-screen bg-[#030314] bg-radial-glow relative overflow-hidden">
      {/* Hero Section */}
      <HeroNeural
        title="Meet DONNA"
        subtitle="Your Digital Office Neural Network Assistant - The AI operating system that automates your entire business workflow"
        primaryCTA={{ label: "Get Started", link: "/contact" }}
        secondaryCTA={{ label: "Watch Demo", link: "#demo" }}
      />

      {/* What is DONNA */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="What is DONNA?"
            subtitle="The world's first truly intelligent business automation platform"
          />
          <div className="glass-panel p-12 rounded-2xl text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              DONNA is not just another chatbot or automation tool. It's a comprehensive AI operating system
              designed to handle every aspect of your business communication and workflow. From customer
              interactions to internal processes, DONNA thinks, learns, and acts like your most capable team member.
            </p>
            <p className="text-lg text-gray-400">
              Built on cutting-edge neural networks and trained on millions of business interactions,
              DONNA delivers human-level performance at machine scale.
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
            title="Real-Time Agentic Actions"
            subtitle="DONNA doesn't just respond - it acts"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-panel p-8 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-[#3DE0FF]">Instant Response</h3>
              <p className="text-gray-300">
                Sub-second response times across all channels. Your customers never wait.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-xl">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-3 text-[#8A2FFF]">Contextual Understanding</h3>
              <p className="text-gray-300">
                DONNA remembers every interaction and understands the full context of your business.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-[#8A2FFF]">Autonomous Execution</h3>
              <p className="text-gray-300">
                From lead qualification to appointment booking, DONNA handles complete workflows independently.
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
            subtitle="Choose the plan that fits your business"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <PricingTierCard
              tierName="Starter"
              price="$1,500"
              features={[
                "Up to 1,000 conversations/month",
                "Email & SMS automation",
                "Basic chatbot",
                "Knowledge base integration",
                "Email support"
              ]}
            />
            <PricingTierCard
              tierName="Pro"
              price="$5,000"
              features={[
                "Up to 5,000 conversations/month",
                "All Starter features",
                "Voice bot included",
                "Advanced workflows",
                "Priority support",
                "Custom integrations"
              ]}
              highlight={true}
            />
            <PricingTierCard
              tierName="Enterprise"
              price="$12,000"
              features={[
                "Unlimited conversations",
                "All Pro features",
                "Dedicated account manager",
                "Custom AI training",
                "SLA guarantees",
                "White-label options"
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
                Invest in the Future of Business Automation
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                DONNA is revolutionizing how businesses operate. Join us in building the AI operating
                system that will power millions of companies worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton label="Investor Information" link="/investor" variant="primary" />
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