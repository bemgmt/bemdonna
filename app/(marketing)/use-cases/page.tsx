import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Use Cases',
  description: 'See how DONNA runs operational workflows across sales, marketing, support, and operations.',
  path: '/use-cases',
})

export default async function UseCasesPage() {
  const useCases: any[] = []
  const fallbackUseCases = [
    {
      _id: 'lead-response',
      title: 'Lead Response',
      description: 'Instantly engage inbound leads with qualification, routing, and follow-up workflows.',
      slug: { current: 'lead-response' },
    },
    {
      _id: 'customer-support',
      title: 'Customer Support',
      description: 'Resolve support requests faster with consistent multi-channel responses and escalation paths.',
      slug: { current: 'customer-support' },
    },
    {
      _id: 'appointment-scheduling',
      title: 'Appointment Scheduling',
      description: 'Automate booking, reminders, and coordination so calendars stay full and teams stay aligned.',
      slug: { current: 'appointment-scheduling' },
    },
    {
      _id: 'lead-nurturing',
      title: 'Lead Nurturing',
      description: 'Move prospects through the pipeline with targeted, contextual follow-ups across channels.',
      slug: { current: 'lead-nurturing' },
    },
  ]
  const displayUseCases = useCases.length > 0 ? useCases : fallbackUseCases

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Use Cases in Action</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Real workflows powered by agentic, tool-native execution
        </p>
      </section>

      <section className="py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {displayUseCases.map((useCase) => (
            <Link
              key={useCase._id}
              href={`/use-cases/${useCase.slug.current}`}
              className="group p-8 border rounded-lg hover:border-primary hover:shadow-lg transition-all"
            >
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {useCase.title}
              </h2>
              <p className="text-muted-foreground mb-4">{useCase.description}</p>
              <span className="text-primary font-medium">Learn More -&gt;</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

