import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/breadcrumb'

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return generatePageMetadata({
    title: `${title} Industry AI Solutions`,
    description: `${title} AI solutions for communication, scheduling, and lead response with DONNA’s operational intelligence layer.`,
    path: `/industries/${params.slug}`,
  })
}

export default async function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const operations = [
    'Communications Layer across phone, SMS, and chat',
    'Email Center for goal-based follow-ups and approvals',
    'Chatbot with live agent handoff for complex requests',
    'Knowledge Base for accurate, industry-specific answers',
    'Lead Generation and qualification by intent signals',
    'Secretary Features for scheduling and coordination',
  ]
  const impacts = [
    'Reduced response times and missed inquiries',
    'Consistent brand voice across channels',
    'Faster handoffs and fewer repeated questions',
    'More qualified leads and cleaner CRM data',
  ]
  
  return (
    <main className="min-h-screen bg-[#030314]">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />
        
        <section className="py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            DONNA for {title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            A role-fluid AI operator that executes workflows across your tools while keeping human oversight in place.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-[#8A2FFF]">{title} Operations Layer</h2>
              <ul className="space-y-2">
                {operations.map((item) => (
                  <li key={item} className="text-gray-300 flex items-start gap-2">
                    <span className="text-[#3DE0FF] mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-[#8A2FFF]">Business Impact</h2>
              <ul className="space-y-2">
                {impacts.map((item) => (
                  <li key={item} className="text-gray-300 flex items-start gap-2">
                    <span className="text-[#3DE0FF] mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 p-8 glass-panel rounded-xl">
            <p className="text-gray-400">
              Need a tailored deployment for {title}? Explore more industries or contact our team to build a vertical-specific playbook.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="/industries" className="text-[#8A2FFF] hover:underline">Explore industries</a>
              <a href="/contact" className="text-[#8A2FFF] hover:underline">Contact sales</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

