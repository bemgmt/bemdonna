import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { SectionTitleGlow } from "@/components/neural/section-title-glow"
import { VerticalBlock } from "@/components/neural/vertical-block"
import { HoloFooter } from "@/components/neural/holo-footer"
import { NeonButton } from "@/components/neural/neon-button"
import { Sparkles, Users, Home, Briefcase } from "lucide-react"

export const metadata: Metadata = generatePageMetadata({
  title: 'Industry Solutions by Vertical',
  description: 'Industry-specific AI for real estate, hospitality, wellness, and professional services with DONNA’s operational intelligence layer.',
  path: '/verticals',
})

export default function VerticalsPage() {
  const outcomeHighlights = [
    'Faster response times and fewer missed inquiries',
    'Consistent brand voice across channels',
    'Intent-based lead capture and qualification',
    'Streamlined scheduling, coordination, and follow-up',
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="absolute inset-0 circuitry-lines" />
        
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet animate-fade-in">
            Industry Solutions
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed animate-slide-up">
            One operational intelligence layer, tailored to your industry workflows
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Industry Outcomes, Not Generic Automation
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            DONNA adapts the communications layer, knowledge base, and scheduling logic to each vertical.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {outcomeHighlights.map((item) => (
              <div key={item} className="glass-panel px-6 py-4 rounded-xl text-gray-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl space-y-12">
          <VerticalBlock
            industryName="Health & Beauty"
            description="Transform your spa, salon, or wellness center with AI-powered appointment management, client engagement, and personalized service recommendations."
            icon={Sparkles}
            automations={[
              "Automated appointment booking and reminders",
              "Client intake form processing",
              "Service package recommendations",
              "Post-treatment follow-up sequences",
              "Inventory and product reorder alerts",
              "Review and feedback collection"
            ]}
            useCases={[
              "24/7 online booking for all services",
              "Personalized treatment recommendations based on client history",
              "Automated birthday and special occasion promotions",
              "Waitlist management and last-minute fill-ins",
              "Membership and package renewal reminders",
              "Client retention campaigns"
            ]}
          />

          <VerticalBlock
            industryName="Hospitality"
            description="Elevate guest experiences in hotels, restaurants, and event venues with intelligent reservation systems, concierge services, and personalized communications."
            icon={Users}
            automations={[
              "Reservation and booking management",
              "Guest communication and preferences",
              "Room service and amenity requests",
              "Event coordination and planning",
              "Feedback and review management",
              "Loyalty program automation"
            ]}
            useCases={[
              "Automated check-in/check-out processes",
              "Personalized welcome messages and room preferences",
              "Restaurant reservation and waitlist management",
              "Event planning and coordination assistance",
              "Guest complaint resolution and escalation",
              "Post-stay feedback and review requests"
            ]}
          />

          <VerticalBlock
            industryName="Real Estate"
            description="Streamline property management, lead generation, and client communications for real estate agents, brokers, and property managers."
            icon={Home}
            automations={[
              "Lead capture and qualification",
              "Property showing scheduling",
              "Client preference matching",
              "Document collection and processing",
              "Market update distribution",
              "Transaction milestone tracking"
            ]}
            useCases={[
              "Instant response to property inquiries",
              "Automated showing appointment scheduling",
              "Personalized property recommendations",
              "Buyer/seller journey automation",
              "Open house registration and follow-up",
              "Lease renewal and tenant communications"
            ]}
          />

          <VerticalBlock
            industryName="Professional Services"
            description="Optimize client onboarding, project management, and service delivery for consultants, agencies, and professional service firms."
            icon={Briefcase}
            automations={[
              "Client intake and onboarding",
              "Proposal and quote generation",
              "Project status updates",
              "Invoice and payment reminders",
              "Meeting scheduling and coordination",
              "Resource allocation and tracking"
            ]}
            useCases={[
              "Automated client onboarding workflows",
              "Proposal request handling and follow-up",
              "Project milestone notifications",
              "Time tracking and billing automation",
              "Client satisfaction surveys",
              "Referral request campaigns"
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="holo-panel p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="circuitry-lines absolute inset-0 opacity-20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Automate Your Industry?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                See how DONNA can transform your specific business with a personalized demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton label="Schedule Demo" link="/contact" variant="primary" />
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

