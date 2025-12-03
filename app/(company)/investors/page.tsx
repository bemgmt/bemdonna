import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Investor Relations',
  description: 'Information for current and prospective investors in DONNA.',
  path: '/investors',
})

export default function InvestorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Investor Relations</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Building the future of AI-powered business communication
        </p>
      </section>

      {/* Key Metrics */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Company Highlights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="border rounded-lg p-6 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold mb-2">300%</p>
            <p className="text-muted-foreground">YoY Growth</p>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold mb-2">1000+</p>
            <p className="text-muted-foreground">Active Customers</p>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold mb-2">$10M</p>
            <p className="text-muted-foreground">ARR</p>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <Target className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold mb-2">95%</p>
            <p className="text-muted-foreground">Customer Retention</p>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Investment Opportunity</h2>
        <div className="prose prose-lg dark:prose-invert">
          <p>
            DONNA is revolutionizing how businesses communicate with customers. Our AI-powered platform
            addresses a massive market opportunity: the $50B+ business communication software market.
          </p>
          <p>
            We're experiencing rapid growth across multiple verticals, with strong unit economics and
            a clear path to profitability. Our technology advantage, combined with our go-to-market
            execution, positions us as a category leader in AI-powered business communication.
          </p>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Market Opportunity</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Total Addressable Market</h3>
            <p className="text-3xl font-bold text-primary mb-2">$50B+</p>
            <p className="text-muted-foreground">
              Global business communication software market growing at 15% CAGR
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Target Segments</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Real Estate (500K+ businesses)</li>
              <li>• Hospitality (200K+ businesses)</li>
              <li>• Professional Services (1M+ businesses)</li>
              <li>• Healthcare (300K+ businesses)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Competitive Advantages</h2>
        <div className="space-y-4">
          {[
            {
              title: 'Proprietary AI Technology',
              description: 'Advanced natural language processing with industry-specific training',
            },
            {
              title: 'Vertical Integration',
              description: 'Deep integrations with industry-specific tools and workflows',
            },
            {
              title: 'Network Effects',
              description: 'Platform improves with every customer interaction',
            },
            {
              title: 'Strong Unit Economics',
              description: 'LTV/CAC ratio of 5:1 with improving margins',
            },
          ].map((advantage) => (
            <div key={advantage.title} className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-muted rounded-lg p-8 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Investor Inquiries</h2>
        <p className="text-muted-foreground mb-6">
          For investment opportunities and investor relations, please contact:
        </p>
        <a
          href="mailto:derek@bem.studio"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          derek@bem.studio
        </a>
      </section>
    </div>
  )
}

