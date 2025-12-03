import { SectionTitleGlow } from "@/components/neural/section-title-glow"
import { HoloFeatureCard } from "@/components/neural/holo-feature-card"
import { HoloFooter } from "@/components/neural/holo-footer"
import { NeonButton } from "@/components/neural/neon-button"
import { Target, Zap, Shield, Users, TrendingUp, Sparkles } from "lucide-react"

export default function AboutPage() {
  const differentiators = [
    {
      icon: Zap,
      title: "AI-First Architecture",
      description: "Built from the ground up with neural networks at the core, not bolted on as an afterthought"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "SOC 2, GDPR, and HIPAA compliant with end-to-end encryption and data sovereignty"
    },
    {
      icon: Users,
      title: "Human-Centric Design",
      description: "AI that enhances human capabilities rather than replacing them, creating better customer experiences"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "DONNA gets smarter with every interaction, adapting to your business and industry nuances"
    },
    {
      icon: Sparkles,
      title: "Unified Platform",
      description: "One system for all your automation needs - no more juggling multiple tools and integrations"
    },
    {
      icon: Target,
      title: "ROI-Focused",
      description: "Designed to deliver measurable business outcomes with clear metrics and analytics"
    }
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="absolute inset-0 circuitry-lines" />

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet animate-fade-in">
            About DONNA
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed animate-slide-up">
            We're building the AI operating system that will power the next generation of businesses
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionTitleGlow
            title="Our Story"
            subtitle="From vision to reality"
          />
          <div className="glass-panel p-12 rounded-2xl space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              DONNA was born from a simple observation: businesses were drowning in repetitive tasks,
              losing valuable time and money on processes that could be automated. But existing solutions
              were fragmented, complex, and required extensive technical expertise to implement.
            </p>
            <p>
              We envisioned a different future - one where AI could handle the entire spectrum of business
              communication and workflow, from customer interactions to internal processes, all within a
              single, intelligent platform.
            </p>
            <p>
              Today, DONNA represents the culmination of years of research in natural language processing,
              machine learning, and business process automation. We've created an AI that doesn't just
              respond to commands - it understands context, makes decisions, and takes action autonomously.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="holo-panel p-12 rounded-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-violet">
              Our Mission
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              To democratize enterprise-grade AI automation, making it accessible and affordable for
              businesses of all sizes, while maintaining the highest standards of security, reliability,
              and ethical AI practices.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="The Problem We're Solving"
            subtitle="Why businesses need DONNA"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#8A2FFF]">Before DONNA</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#8A2FFF] mt-1">✗</span>
                  <span>Multiple disconnected tools and platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8A2FFF] mt-1">✗</span>
                  <span>Hours wasted on repetitive manual tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8A2FFF] mt-1">✗</span>
                  <span>Inconsistent customer experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8A2FFF] mt-1">✗</span>
                  <span>Limited scalability without hiring more staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8A2FFF] mt-1">✗</span>
                  <span>Complex integrations requiring technical expertise</span>
                </li>
              </ul>
            </div>
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#3DE0FF]">With DONNA</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#3DE0FF] mt-1">✓</span>
                  <span>One unified AI platform for everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3DE0FF] mt-1">✓</span>
                  <span>Automated workflows running 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3DE0FF] mt-1">✓</span>
                  <span>Consistent, high-quality interactions every time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3DE0FF] mt-1">✓</span>
                  <span>Infinite scalability with AI agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3DE0FF] mt-1">✓</span>
                  <span>Simple setup, no coding required</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="Our Solution"
            subtitle="How DONNA transforms your business"
          />
          <div className="glass-panel p-12 rounded-2xl space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 gradient-text-violet">
                A True AI Operating System
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                DONNA isn't just a collection of chatbots or automation scripts. It's a comprehensive
                AI operating system that orchestrates your entire business workflow. From the moment a
                lead enters your funnel to post-sale support and retention, DONNA handles it all with
                human-level intelligence and machine-level consistency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🧠</div>
                <h4 className="text-xl font-bold mb-2 text-[#3DE0FF]">Intelligent</h4>
                <p className="text-gray-400">
                  Advanced NLP and machine learning for true understanding
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="text-xl font-bold mb-2 text-[#8A2FFF]">Fast</h4>
                <p className="text-gray-400">
                  Sub-second response times across all channels
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h4 className="text-xl font-bold mb-2 text-[#8A2FFF]">Secure</h4>
                <p className="text-gray-400">
                  Enterprise-grade security and compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <SectionTitleGlow
            title="What Makes DONNA Different"
            subtitle="The competitive advantages that set us apart"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="holo-panel p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="circuitry-lines absolute inset-0 opacity-20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the businesses already using DONNA to automate their operations and scale without limits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton label="Get Started" link="/contact" variant="primary" />
                <NeonButton label="View Pricing" link="/pricing" variant="outline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <HoloFooter />
    </main>
  )
}

