import { SectionTitleGlow } from "@/components/neural/section-title-glow"
import { PricingTierCard } from "@/components/neural/pricing-tier-card"
import { HoloFooter } from "@/components/neural/holo-footer"
import { Check, X } from "lucide-react"

export default function PricingPage() {
  const comparisonFeatures = [
    { feature: "Monthly Conversations", starter: "1,000", pro: "5,000", enterprise: "Unlimited" },
    { feature: "Email Bot", starter: true, pro: true, enterprise: true },
    { feature: "SMS Bot", starter: true, pro: true, enterprise: true },
    { feature: "Chatbot", starter: true, pro: true, enterprise: true },
    { feature: "Voice Bot", starter: false, pro: true, enterprise: true },
    { feature: "Secretary Bot", starter: false, pro: true, enterprise: true },
    { feature: "Lead Gen Engine", starter: true, pro: true, enterprise: true },
    { feature: "Marketing Bot", starter: false, pro: true, enterprise: true },
    { feature: "Sales Agent Bot", starter: false, pro: true, enterprise: true },
    { feature: "Landing Page Generator", starter: false, pro: true, enterprise: true },
    { feature: "Knowledge Base Integration", starter: true, pro: true, enterprise: true },
    { feature: "Scraper Module", starter: false, pro: true, enterprise: true },
    { feature: "Agentic Workflows", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
    { feature: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated Manager" },
    { feature: "Custom Integrations", starter: false, pro: "Limited", enterprise: "Unlimited" },
    { feature: "Custom AI Training", starter: false, pro: false, enterprise: true },
    { feature: "White-Label Options", starter: false, pro: false, enterprise: true },
    { feature: "SLA Guarantees", starter: false, pro: false, enterprise: true }
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="absolute inset-0 circuitry-lines" />

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet animate-fade-in">
            Pricing Plans
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed animate-slide-up">
            Choose the perfect plan to automate and scale your business
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <PricingTierCard
              tierName="Starter"
              price="$2,500"
              features={[
                "Up to 1,000 conversations/month",
                "Email & SMS automation",
                "Basic chatbot",
                "Lead gen engine",
                "Knowledge base integration",
                "Basic workflows",
                "Email support",
                "Standard integrations"
              ]}
              ctaLabel="Get Started"
              ctaLink="/contact"
            />

            <PricingTierCard
              tierName="Pro"
              price="$5,000"
              features={[
                "Up to 5,000 conversations/month",
                "All Starter features",
                "Voice bot included",
                "Secretary bot",
                "Marketing & Sales bots",
                "Landing page generator",
                "Advanced workflows",
                "Priority support",
                "Custom integrations"
              ]}
              highlight={true}
              ctaLabel="Get Started"
              ctaLink="/contact"
            />

            <PricingTierCard
              tierName="Enterprise"
              price="Contact Us"
              features={[
                "Unlimited conversations",
                "All Pro features",
                "Dedicated account manager",
                "Custom AI training",
                "White-label options",
                "SLA guarantees",
                "Advanced security features",
                "Custom workflows",
                "24/7 phone support"
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
            <div className="holo-panel p-8 rounded-2xl min-w-[800px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#8A2FFF]/30">
                    <th className="text-left py-4 px-4 text-[#3DE0FF] font-bold">Feature</th>
                    <th className="text-center py-4 px-4 text-[#3DE0FF] font-bold">Starter</th>
                    <th className="text-center py-4 px-4 text-[#3DE0FF] font-bold">Pro</th>
                    <th className="text-center py-4 px-4 text-[#3DE0FF] font-bold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#8A2FFF]/20 hover:bg-[#8A2FFF]/10 transition-colors duration-300"
                    >
                      <td className="py-4 px-4 text-gray-300 font-medium">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? (
                            <Check className="w-5 h-5 text-[#3DE0FF] mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{row.starter}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <Check className="w-5 h-5 text-[#3DE0FF] mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{row.pro}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? (
                            <Check className="w-5 h-5 text-[#3DE0FF] mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <HoloFooter />
    </main>
  )
}
