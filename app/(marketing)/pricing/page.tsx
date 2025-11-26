import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { offerSchema } from '@/lib/schema-markup'
import { Check } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Pricing',
  description: 'Simple, transparent pricing for businesses of all sizes. Start free, scale as you grow.',
  path: '/pricing',
})

const pricingPlans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses getting started with AI',
    features: [
      '1,000 conversations/month',
      'Voice Receptionist',
      'Email Assistant',
      'Basic Chatbot',
      'Email support',
      '5 integrations',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'For growing businesses that need more power',
    features: [
      '5,000 conversations/month',
      'All Starter features',
      'Marketing Bot',
      'Knowledge Base',
      'Priority support',
      'Unlimited integrations',
      'Custom workflows',
      'Analytics dashboard',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited conversations',
      'All Professional features',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security',
      'On-premise deployment',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function PricingPage() {
  const schemas = pricingPlans.map((plan) =>
    offerSchema({
      name: plan.name,
      price: plan.price === 'Custom' ? '0' : plan.price.replace('$', ''),
      description: plan.description,
    })
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': schemas,
          }),
        }}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
        </section>

        <section className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 border rounded-lg ${
                  plan.popular ? 'border-primary shadow-lg scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <Button className="w-full mb-6" variant={plan.popular ? 'default' : 'outline'} asChild>
                  <Link href={plan.name === 'Enterprise' ? '/contact' : '/#demo-form'}>
                    {plan.cta}
                  </Link>
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">All plans include:</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
            {['14-day free trial', 'No credit card required', 'Cancel anytime', '99.9% uptime SLA'].map((item) => (
              <div key={item} className="p-4 border rounded-lg">
                <Check className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

