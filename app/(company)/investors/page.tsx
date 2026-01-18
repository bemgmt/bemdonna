import { SectionTitleGlow } from "@/components/neural/section-title-glow"
import { InvestorPayoutTable } from "@/components/neural/investor-payout-table"
import { HoloFooter } from "@/components/neural/holo-footer"
import { NeonButton } from "@/components/neural/neon-button"
import { TrendingUp, Target, DollarSign, Rocket, Shield, Users } from "lucide-react"

export default function InvestorsPage() {
  const safePayouts = [
    {
      amount: "$50k SAFE",
      cap: "$8M",
      equity: "0.625%",
      payouts: {
        exit1: "$50k",
        exit2: "$93,750",
        exit3: "$312,500"
      }
    },
    {
      amount: "$100k SAFE",
      cap: "$7M",
      equity: "1.4286%",
      payouts: {
        exit1: "$100k",
        exit2: "$214,290",
        exit3: "$714,300"
      }
    },
    {
      amount: "$300k SAFE",
      cap: "$5M",
      equity: "6%",
      payouts: {
        exit1: "$300k",
        exit2: "$900k",
        exit3: "$3M"
      }
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
            Invest in DONNA
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed animate-slide-up">
            Join us in building the operational intelligence layer for modern business
          </p>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="The Opportunity"
            subtitle="Why invest in DONNA now"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="holo-panel p-8 rounded-xl hover-lift">
              <TrendingUp className="w-12 h-12 text-[#3DE0FF] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Massive Market</h3>
              <p className="text-gray-300 leading-relaxed">
                The business automation market is projected to reach $19.6B by 2026, growing at 11.9% CAGR.
                DONNA is positioned to capture significant market share.
              </p>
            </div>

            <div className="holo-panel p-8 rounded-xl hover-lift">
              <Rocket className="w-12 h-12 text-[#8A2FFF] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Early Stage</h3>
              <p className="text-gray-300 leading-relaxed">
                Ground-floor opportunity with proven technology and early customer traction.
                Get in before Series A at favorable valuations.
              </p>
            </div>

            <div className="holo-panel p-8 rounded-xl hover-lift">
              <DollarSign className="w-12 h-12 text-[#8A2FFF] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">High Margins</h3>
              <p className="text-gray-300 leading-relaxed">
                SaaS model with 80%+ gross margins. Scalable infrastructure with minimal incremental costs
                as we add customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAFE Investment Tiers */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="SAFE Investment Tiers"
            subtitle="Simple Agreement for Future Equity"
          />
          <InvestorPayoutTable rows={safePayouts} />

          <div className="mt-8 glass-panel p-6 rounded-xl">
            <p className="text-gray-300 text-center">
              <strong className="text-[#3DE0FF]">Exit scenarios:</strong> $15M (conservative), $50M (moderate), $150M (aggressive)
            </p>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="Market Opportunity"
            subtitle="The perfect storm for AI automation"
          />
          <div className="glass-panel p-12 rounded-2xl space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 gradient-text-violet">
                $19.6B Market by 2026
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                The intelligent process automation market is experiencing explosive growth as businesses
                race to adopt AI solutions. DONNA's comprehensive platform positions us to capture
                multiple segments of this expanding market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-2xl font-bold mb-4 text-[#3DE0FF]">Target Markets</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8A2FFF] mt-1">▸</span>
                    <span>Small to medium businesses (10-500 employees)</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#8A2FFF] mt-1">▸</span>
                    <span>Service-based industries with high customer interaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8A2FFF] mt-1">▸</span>
                    <span>Businesses spending $50k+ annually on manual processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8A2FFF] mt-1">▸</span>
                    <span>Companies seeking to scale without proportional headcount growth</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-4 text-[#8A2FFF]">Competitive Advantages</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8A2FFF] mt-1">▸</span>
                    <span>All-in-one platform vs. fragmented point solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8A2FFF] mt-1">▸</span>
                    <span>True AI intelligence, not just rule-based automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8A2FFF] mt-1">▸</span>
                    <span>Industry-specific solutions with proven ROI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8A2FFF] mt-1">▸</span>
                    <span>Rapid deployment (days vs. months)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Legislative Incentives */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="AI Legislative Incentives"
            subtitle="Government support accelerating adoption"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="holo-panel p-8 rounded-xl">
              <Shield className="w-12 h-12 text-[#3DE0FF] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Tax Credits & Grants</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Federal and state governments are offering significant tax incentives for businesses
                adopting AI automation technologies. This reduces the effective cost of DONNA for customers.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#8A2FFF] mt-1">•</span>
                  <span>R&D tax credits for AI implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8A2FFF] mt-1">•</span>
                  <span>Small business innovation grants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8A2FFF] mt-1">•</span>
                  <span>Workforce development incentives</span>
                </li>
              </ul>
            </div>

            <div className="holo-panel p-8 rounded-xl">
              <Users className="w-12 h-12 text-[#8A2FFF] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Regulatory Tailwinds</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                New regulations are pushing businesses toward AI adoption for compliance, efficiency,
                and competitive advantage. DONNA helps companies meet these requirements.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#8A2FFF] mt-1">•</span>
                  <span>Data privacy and security mandates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8A2FFF] mt-1">•</span>
                  <span>Customer service standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8A2FFF] mt-1">•</span>
                  <span>Accessibility requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* High-Margin Model */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitleGlow
            title="High-Margin Business Model"
            subtitle="Scalable SaaS economics"
          />
          <div className="glass-panel p-12 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">80%+</div>
                <p className="text-xl text-gray-300">Gross Margin</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">$4,000</div>
                <p className="text-xl text-gray-300">Average ARR</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">95%+</div>
                <p className="text-xl text-gray-300">Retention Rate</p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#8A2FFF] to-transparent mb-8" />

            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                <strong className="text-[#3DE0FF]">Recurring Revenue:</strong> Monthly subscriptions
                provide predictable, recurring revenue with high customer lifetime value.
              </p>
              <p className="text-lg">
                <strong className="text-[#8A2FFF]">Low Marginal Costs:</strong> Cloud infrastructure
                scales efficiently with minimal incremental costs per customer.
              </p>
              <p className="text-lg">
                <strong className="text-[#8A2FFF]">Network Effects:</strong> Each customer improves
                the AI, making DONNA more valuable for all users.
              </p>
            </div>
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
                Ready to Invest in the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a call with our team to discuss investment opportunities and receive our
                complete investor deck with detailed financials and projections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton label="Schedule Investor Call" link="/contact" variant="primary" />
                <NeonButton label="Download Deck" link="/contact" variant="outline" />
              </div>
              <p className="text-sm text-gray-400 mt-6">
                Contact: derek@bem.studio
              </p>
            </div>
          </div>
        </div>
      </section>

      <HoloFooter />
    </main>
  )
}

