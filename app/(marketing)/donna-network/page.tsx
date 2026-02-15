import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'DONNA to DONNA: Networked Digital Employees',
  description:
    'Learn how DONNA-to-DONNA coordination enables secure, permissioned AI-to-AI workflows across organizations.',
  path: '/donna-network',
})

const planTiers = [
  {
    name: 'Starter',
    details: ['Internal DONNA only', 'No cross-DONNA coordination'],
  },
  {
    name: 'Pro',
    details: ['Limited DONNA-to-DONNA actions', 'Approved task handoffs'],
  },
  {
    name: 'Enterprise',
    details: ['Full DONNA network access', 'Multi-team & multi-location workflows'],
  },
]

export default function DonnaNetworkPage() {
  return (
    <main className="min-h-screen bg-[#030314] bg-radial-glow relative overflow-hidden">
      <div className="absolute inset-0 neural-grid-animated opacity-10" />
      <div className="absolute inset-0 circuitry-lines opacity-10" />

      {/* Hero */}
      <section className="relative py-28 px-4">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">DONNA Network</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text text-glow-violet">
            DONNA to DONNA: Networked Digital Employees
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Secure AI-to-AI coordination that moves work across teams, vendors, and partners.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-panel p-10 rounded-2xl border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Operational Intelligence That Coordinates
            </h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>Most AI tools work in isolation. DONNA doesn’t.</p>
              <p>
                DONNA can securely coordinate with other DONNAs to pass tasks, share approved context, and move
                work forward automatically — with clear permissions, audit logs, and human oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Built for Time Savings and Scale</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-300">
            {[
              'Less manual handoff between teams',
              'Faster execution across departments',
              'Consistent responses and decision logic',
              'Easier scaling without adding staff',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 glass-panel p-4 rounded-xl">
                <span className="h-3 w-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Access by Plan Level</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {planTiers.map((plan) => (
              <div key={plan.name} className="glass-panel p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">{plan.name}</h3>
                <div className="space-y-3 text-gray-200">
                  {plan.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-panel p-10 rounded-2xl border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Controlled, Secure, and Intentional</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              All DONNA-to-DONNA actions follow predefined rules, permissions, and safeguards. Businesses remain fully
              in control of what is shared, when actions occur, and when human approval is required.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

