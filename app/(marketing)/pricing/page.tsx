import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { SectionTitleGlow } from "@/components/neural/section-title-glow"
import { PricingTierCard } from "@/components/neural/pricing-tier-card"
import { HoloFooter } from "@/components/neural/holo-footer"
import { Check, X } from "lucide-react"

export const metadata: Metadata = generatePageMetadata({
  title: 'Pricing Plans',
  description: 'Transparent pricing for DONNA plans, from starter deployments to enterprise scale.',
  path: '/pricing',
})

export default function PricingPage() {
  const comparisonFeatures = [
    { feature: "Dedicated DONNA Agent", starter: "1", pro: "Multiple", enterprise: "Custom" },
    { feature: "Multi-Modal Communication", starter: true, pro: true, enterprise: true },
    { feature: "Workflow Automation", starter: "Core", pro: "Advanced", enterprise: "Custom" },
    { feature: "Integrations", starter: "Standard", pro: "Expanded", enterprise: "Custom" },
    { feature: "DONNA-to-DONNA Network", starter: "Limited", pro: "Limited", enterprise: "Full" },
    { feature: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated Team" },
    { feature: "Deployment Options", starter: "Cloud", pro: "Cloud", enterprise: "Cloud/Private" },
    { feature: "SLA Guarantees", starter: false, pro: false, enterprise: true }
  ]

  return (
    <main className="min-h-screen bg-[#030314] bg-radial-glow relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="absolute inset-0 circuitry-lines" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet animate-fade-in">
            Pricing Plans
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed animate-slide-up">
            Transparent pricing that scales with your operations
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              All plans include continuous learning updates, enterprise-grade security, and support.
              No hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <PricingTierCard
              tierName="Starter"
              price="$1,500"
              features={[
                "Dedicated DONNA for a single team",
                "Multi-modal communication",
                "Core workflow automations",
                "Knowledge base integration",
                "Standard integrations",
                "Email support"
              ]}
              ctaLabel="Get Started"
              ctaLink="/contact"
            />

            <PricingTierCard
              tierName="Pro"
              price="$5,000"
              features={[
                "Multiple concurrent DONNAs",
                "Advanced workflows and approvals",
                "Expanded integrations",
                "Priority support",
                "Department-level coverage"
              ]}
              highlight={true}
              ctaLabel="Get Started"
              ctaLink="/contact"
            />

            <PricingTierCard
              tierName="Enterprise"
              price="$12,000"
              features={[
                "Custom deployment options",
                "On-prem or private cloud",
                "Dedicated solutions team",
                "Enterprise governance",
                "SLA guarantees",
                "Full DONNA-to-DONNA coordination"
              ]}
              ctaLabel="Contact Sales"
              ctaLink="/contact"
            />
          </div>

          {/* Comparison Table */}
          <SectionTitleGlow
            title="Feature Comparison"
            subtitle="See what's included in each plan"
          />

          <div className="overflow-x-auto">
            <div className="holo-panel p-8 rounded-2xl min-w-[800px] relative overflow-hidden">
              <div className="absolute inset-0 circuitry-lines opacity-20" />
              <div className="relative z-10">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#8A2FFF]/30">
                      <th className="text-left py-4 px-4 text-[#3DE0FF] font-bold text-glow-blue">Feature</th>
                      <th className="text-center py-4 px-4 text-[#3DE0FF] font-bold text-glow-blue">Starter</th>
                      <th className="text-center py-4 px-4 text-[#3DE0FF] font-bold text-glow-blue">Pro</th>
                      <th className="text-center py-4 px-4 text-[#3DE0FF] font-bold text-glow-blue">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-[#8A2FFF]/20 hover:bg-[#8A2FFF]/10 transition-all duration-300 hover:border-[#8A2FFF]/40"
                      >
                        <td className="py-4 px-4 text-gray-300 font-medium">
                          {row.feature}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof row.starter === 'boolean' ? (
                            row.starter ? (
                              <Check className="w-5 h-5 text-[#3DE0FF] mx-auto text-glow-blue" />
                            ) : (
                              <X className="w-5 h-5 text-gray-600 mx-auto opacity-50" />
                            )
                          ) : (
                            <span className="text-gray-300 font-medium">{row.starter}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof row.pro === 'boolean' ? (
                            row.pro ? (
                              <Check className="w-5 h-5 text-[#3DE0FF] mx-auto text-glow-blue" />
                            ) : (
                              <X className="w-5 h-5 text-gray-600 mx-auto opacity-50" />
                            )
                          ) : (
                            <span className="text-gray-300 font-medium">{row.pro}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof row.enterprise === 'boolean' ? (
                            row.enterprise ? (
                              <Check className="w-5 h-5 text-[#3DE0FF] mx-auto text-glow-blue" />
                            ) : (
                              <X className="w-5 h-5 text-gray-600 mx-auto opacity-50" />
                            )
                          ) : (
                            <span className="text-gray-300 font-medium">{row.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4">Need a custom plan? Contact us for tailored deployment options.</p>
        </div>
      </section>

      <HoloFooter />
    </main>
  )
}
