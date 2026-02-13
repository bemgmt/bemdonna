import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/breadcrumb'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: 'DONNA System Briefing: From AI Assistant to Economic Network',
  description: 'Overview of DONNA’s operational intelligence platform, capabilities, governance, and network vision.',
  path: '/system-brief',
})

export default function SystemBriefPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumb />
      
      <article className="prose prose-lg dark:prose-invert max-w-none">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            DONNA System Briefing: From AI Operator to Economic Network
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Operational Intelligence Overview
          </p>
        </header>

        {/* Executive Summary */}
        <section className="mb-12">
          <p className="text-foreground/90 leading-relaxed mb-4">
            The DONNA (Digital Operations Neural Network Assistant) platform is engineered to function as an "AI employee" for small and mid-sized businesses (SMBs), designed to amplify human teams by automating monotonous administrative and operational tasks. Operating across multiple channels—including voice, email, SMS, and web chat—DONNA handles lead generation, scheduling, customer service, and in-meeting assistance. The core mission is to augment human capabilities, allowing teams to focus on high-value, strategic work.
          </p>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The system's transformative potential lies in the DONNA-to-DONNA (D2D) Network, a vision that evolves the platform from a collection of isolated AI operators into a networked economic layer. In this ecosystem, individual DONNA instances, representing different businesses, can securely discover, communicate, and transact with one another. This creates a marketplace of intelligence and execution that replaces operational friction with automated, AI-mediated collaboration.
          </p>
          <p className="text-foreground/90 leading-relaxed mb-4">
            This strategic evolution is underpinned by a non-negotiable commitment to enterprise-grade governance and safety. The platform architecture embeds trust by design, incorporating features like cryptographic agent identity, scoped permissions, data firewalls, and anti-collusion monitoring. These safeguards are not features but foundational infrastructure, positioning governance as a key competitive moat.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Ultimately, DONNA is positioned not as a software tool but as critical business infrastructure. The central thesis is that its value is derived from deep workflow embedding, persistent memory, and the powerful network effects of the D2D ecosystem, creating a defensible "connective tissue between businesses."
          </p>
        </section>

        {/* Product Concept */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">1.0 Product Concept: The AI Employee Layer</h2>
          <p className="text-foreground/90 leading-relaxed mb-6">
            DONNA is defined as a digital employee layer for organizations, functioning as an agentic, multi-modal AI operations platform. Its design philosophy emphasizes amplifying human workers rather than replacing them.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">1.1 Definition and Mission</h3>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Official Name:</strong> DONNA stands for Digital Operations Neural Network Assistant.</li>
            <li><strong>Core Mission:</strong> To remove "monotonous tasks" so human employees can focus on the enjoyable, high-value aspects of their jobs. The primary narrative is "AI to amplify humans, not replace them."</li>
            <li><strong>Analogy:</strong> DONNA is described as the "AI Co-pilot" that enables SMBs to operate with the efficiency of a Fortune 500 company without the associated overhead.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">1.2 Core Capabilities & Functional Domains</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-foreground/20">
                  <th className="text-left p-4 font-semibold">Capability Module</th>
                  <th className="text-left p-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Secretary Bot</td>
                  <td className="p-4 text-foreground/80">Autonomously attends meetings, provides real-time transcription and summarization, answers questions from the knowledge base, and executes action items like scheduling follow-ups. Activated by voice command ("Hey DONNA").</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Email Bot</td>
                  <td className="p-4 text-foreground/80">Reads and understands full email threads, crafts intelligent and context-aware replies, and manages long-running conversations. Can operate in a fully autonomous mode or a draft mode for human review.</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Voice Agent</td>
                  <td className="p-4 text-foreground/80">Answers inbound calls 24/7 with a natural-sounding voice, books appointments, collects information, and handles customer support queries.</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Chatbot</td>
                  <td className="p-4 text-foreground/80">Integrates into websites to engage visitors, answer questions based on company policies and FAQs, qualify leads, and convert traffic into scheduled appointments or qualified inquiries.</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Automation Engine</td>
                  <td className="p-4 text-foreground/80">Triggers workflows based on message intent, time, or external events. Actions include sending messages, updating CRMs, and generating documents, with logic for conditional branching and human approval gates.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4">1.3 Target Audience and Verticals</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            DONNA is a hybrid horizontal and vertical platform targeting SMBs and professional associations. The system is specifically tuned for the following industries:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Real Estate:</strong> Agents, brokerages, and property management.</li>
            <li><strong>Hospitality:</strong> Hotels, restaurants, and event venues.</li>
            <li><strong>Health & Beauty:</strong> Salons, spas, and clinics.</li>
            <li><strong>Professional Services:</strong> Law firms, consulting agencies, and financial advisors.</li>
            <li><strong>Contractors and Associations.</strong></li>
          </ul>
          <p className="text-foreground/90 leading-relaxed mb-6">
            Detailed UI workflows are designed for different user roles (Admin, Manager, Team Member) within these verticals to address specific operational needs like appointment booking, lead nurturing, concierge requests, and client intake.
          </p>

          <h3 className="text-2xl font-bold mb-4">1.4 Technical Foundation</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The platform is built on a scalable and reliable enterprise-grade technology stack.
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Cloud Infrastructure:</strong> Built natively on AWS, leveraging services like AWS Connect, Bedrock, QuickSight, and Semantics.</li>
            <li><strong>Telecom & Voice:</strong> Utilizes Verizon VOIP and Verizon Business carrier-level SMS for telecom-grade reliability. Voice capabilities are powered by Twilio for call handling, ElevenLabs for voice synthesis, and Whisper for transcription.</li>
            <li><strong>Core Architecture:</strong> Features a kernel with a Universal Donna Command Language (UDCL) to normalize all inputs, a task taxonomy engine to classify work, a configurable autonomy engine, and a multi-layered memory architecture.</li>
          </ul>
        </section>

        {/* Strategic Vision */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">2.0 Strategic Vision: The DONNA Marketplace and D2D Network</h2>
          <p className="text-foreground/90 leading-relaxed mb-6">
            The long-term vision positions DONNA not as an isolated tool but as the foundation for an intelligent economic network where AI agents collaborate on behalf of businesses.
          </p>

          <h3 className="text-2xl font-bold mb-4">2.1 From Isolated Operators to a Living Network</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The platform's evolution is marked by a critical inflection point where individual DONNA instances transition from being isolated operators to nodes in a connected network.
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Pre-Marketplace (Current State):</strong> Each DONNA is a private, company-specific AI operator, deeply integrated into internal workflows but operating in isolation.</li>
            <li><strong>Post-Marketplace (Vision):</strong> Once DONNAs can discover each other, communicate securely, and negotiate tasks or referrals, the system's value becomes multiplicative. It shifts from being "An AI that helps my business" to "An AI that connects my business to an intelligent economic network."</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">2.2 Core D2D Capabilities (MVP)</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The initial Donna-to-Donna (D2D) network is built on a secure, permissioned protocol with three primary capabilities:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Referral Exchange:</strong> DONNAs can exchange structured lead packets with built-in attribution tracking and revenue influence logging.</li>
            <li><strong>Scheduling Negotiation:</strong> DONNAs can exchange calendar availability and negotiate meeting times directly, escalating to humans only when blocked.</li>
            <li><strong>Scoped Task Delegation:</strong> DONNAs can request, accept, decline, or counter-propose tasks, though execution rights are not included in the MVP.</li>
          </ol>

          <h3 className="text-2xl font-bold mb-4">2.3 Economic Implications</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The D2D network is designed to function as a new economic layer that sits above existing business software like CRMs and ad platforms, gradually absorbing their functions by replacing friction. This creates fundamental shifts in key business activities:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Marketing:</strong> Moves from broad targeting to "intent-native" marketing, where DONNAs exchange live intent signals for zero-waste, high-precision opportunities.</li>
            <li><strong>Advertising:</strong> Shifts from broadcasting passive ads to a model of AI-to-AI negotiation, where DONNAs evaluate and select offers based on performance metrics, transparency, and fairness.</li>
            <li><strong>Collaboration:</strong> Enables AI-mediated co-working, where DONNAs form temporary, task-based alliances, allowing small businesses to scale dynamically like large enterprises without coordination overhead.</li>
            <li><strong>Retention:</strong> Creates powerful ecosystem-level lock-in. Leaving the DONNA network means losing not just internal automation but also external partnerships, performance memory, and marketplace reputation.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">2.4 The "Infrastructure, Not Software" Moat</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The competitive moat is built on becoming indispensable infrastructure for SMBs. This is achieved through four key pillars:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-foreground/20">
                  <th className="text-left p-4 font-semibold">Pillar</th>
                  <th className="text-left p-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Standardization</td>
                  <td className="p-4 text-foreground/80">A universal AI core and common command language ensure predictable behavior, faster onboarding, and viral referrals.</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Interoperability</td>
                  <td className="p-4 text-foreground/80">The D2D network enables zero-friction collaboration, built-in referral loops, and cross-business workflows that siloed competitors cannot replicate.</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Governance & Trust</td>
                  <td className="p-4 text-foreground/80">Enterprise-grade safety, auditability, and permissioned autonomy are built into the architecture, creating a regulatory shield and a trusted environment for transactions.</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Network Effects</td>
                  <td className="p-4 text-foreground/80">Each new DONNA added to the network increases the value and opportunity surface area for all existing DONNAs, creating organically rising switching costs.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Governance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">3.0 Governance, Safety, and Trust</h2>
          <p className="text-foreground/90 leading-relaxed mb-6">
            Governance is positioned as core infrastructure, not a feature. The system is designed to enable AI collaboration that is safe, fair, transparent, and under human control.
          </p>

          <h3 className="text-2xl font-bold mb-4">3.1 The Non-Negotiable Governance Layer</h3>
          <p className="text-foreground/90 leading-relaxed mb-6">
            The platform's ability to facilitate economic transactions necessitates a robust trust framework to mitigate risks such as unauthorized data sharing, agent collusion, and runaway automation. The core principle is that the marketplace operates under a designed framework, not emergent behavior.
          </p>

          <h3 className="text-2xl font-bold mb-4">3.2 Key Pillars of the Trust Framework</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Identity & Sovereignty</h4>
              <p className="text-foreground/80">Each DONNA has a verified business owner, a cryptographic identity, and a declared scope of authority. Businesses define what their DONNA can share, request, and commit to, preserving human sovereignty.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Data Boundaries</h4>
              <p className="text-foreground/80">By default, DONNAs do not exchange raw internal data. They share intent signals, capability summaries, and anonymized metrics through a tiered disclosure model that requires explicit, revocable consent at each stage.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Anti-Collusion & Fairness</h4>
              <p className="text-foreground/80">The governance layer actively monitors for price-fixing, closed-loop referrals, and other manipulative patterns. Fair access algorithms ensure opportunity rotation and prevent market domination by large players.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Reputation & Accountability</h4>
              <p className="text-foreground/80">Each DONNA accumulates an immutable performance memory (fulfillment accuracy, timeliness, outcome quality). A dispute resolution layer pauses execution and activates a neutral arbitration workflow when conflicts arise.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">3.3 Human-in-the-Loop Safeguards</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Automation never overrides human authority. Control remains absolute and reversible.
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Escalation Thresholds:</strong> High-value commitments, unusual behavior, or ethical uncertainty automatically trigger an escalation, requiring human approval before proceeding.</li>
            <li><strong>Emergency Controls:</strong> Businesses retain a "kill switch" to freeze marketplace participation and external communications at any time.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">3.4 User Conduct and Abuse Protection</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The system is designed to enforce professional conduct and de-escalate abuse without submission.
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Prohibited Conduct:</strong> The Terms of Service explicitly forbid harassment, coercion, and attempts to override system safeguards.</li>
            <li><strong>Detection & Enforcement:</strong> A unified safety flow detects abuse, which prevents execution of the command. Violations can result in warnings, feature restrictions, or account suspension, with all actions logged for audit.</li>
          </ul>
        </section>

        {/* Go-to-Market */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">4.0 Go-to-Market Strategy and Growth Plan</h2>
          <p className="text-foreground/90 leading-relaxed mb-6">
            The marketing strategy is designed to rapidly acquire users through a multi-channel, AI-amplified approach.
          </p>

          <h3 className="text-2xl font-bold mb-4">4.1 Strategic Goal: 150,000 Users by December 2026</h3>
          <p className="text-foreground/90 leading-relaxed mb-6">
            The primary objective is to build a large user base to catalyze network effects. The plan anticipates many users starting on the lower-priced tier, with an average client spend of approximately $5,000/month across all tiers.
          </p>

          <h3 className="text-2xl font-bold mb-4">4.2 Launch Timeline and Key Milestones</h3>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Q4 2025:</strong> Preparation phase, including SEO groundwork and pre-launch buzz.</li>
            <li><strong>Mid-January 2026:</strong> High-profile product demo event.</li>
            <li><strong>February 2026:</strong> Full sales launch with a multi-channel campaign.</li>
            <li><strong>2026 Ongoing:</strong> Execution of content, SEO, partnership, and event campaigns.</li>
            <li><strong>Late 2026:</strong> Optimization of marketing spend based on performance data.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">4.3 Multi-Channel Marketing Approach</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The strategy blends high-ROI organic channels with targeted paid initiatives to accelerate growth.
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Content Marketing & SEO:</strong> A heavy focus on publishing industry-specific blog posts, case studies, and a bi-weekly podcast to build thought leadership and drive organic traffic. This is considered the highest-ROI channel.</li>
            <li><strong>Strategic Partnerships:</strong> Partnering with trade associations (e.g., National Association of Realtors) to co-market DONNA to their members, leveraging referrals, which are the #1 source of B2B leads.</li>
            <li><strong>Expos & Events:</strong> A significant budget allocation for presence at approximately 10 major industry trade shows to generate high-intent leads through live demos.</li>
            <li><strong>Outbound Targeting:</strong> Using tools like ZoomInfo to build targeted lists for personalized email outreach campaigns.</li>
            <li><strong>Public Relations:</strong> Leveraging a PR partner to secure media coverage and influencer mentions to build brand credibility.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">4.4 Tiered Budget Scenarios</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The marketing plan includes contingencies for different funding levels, prioritizing organic channels in leaner scenarios.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-foreground/20">
                  <th className="text-left p-4 font-semibold">Funding Level</th>
                  <th className="text-left p-4 font-semibold">Total Budget</th>
                  <th className="text-left p-4 font-semibold">Key Focus & Trade-offs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Full Plan</td>
                  <td className="p-4">$300,000</td>
                  <td className="p-4 text-foreground/80">Robust spending across all channels, including a full slate of 10 expos, extensive paid advertising, and PR agency engagement.</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Mid Plan</td>
                  <td className="p-4">$200,000</td>
                  <td className="p-4 text-foreground/80">Scales back on the number of expos (approx. 5), reduces paid ad spend, and focuses PR on selective, high-impact activities.</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Lean Plan</td>
                  <td className="p-4">$100,000</td>
                  <td className="p-4 text-foreground/80">Severely limits expensive channels like paid ads and expos (1-2 max). Relies heavily on content/SEO, founder-led PR, and partnership deals that require no upfront cash.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Business Model */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">5.0 Business and Investment Model</h2>
          <h3 className="text-2xl font-bold mb-4">5.1 Pricing Strategy</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-foreground/20">
                  <th className="text-left p-4 font-semibold">Tier</th>
                  <th className="text-left p-4 font-semibold">Monthly Price</th>
                  <th className="text-left p-4 font-semibold">Key Features</th>
                  <th className="text-left p-4 font-semibold">D2D Network Access</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Starter</td>
                  <td className="p-4">$1,500</td>
                  <td className="p-4 text-foreground/80">Email, calls, SMS, web chat, appointment booking.</td>
                  <td className="p-4 text-foreground/80">Restricted (Internal only)</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Pro</td>
                  <td className="p-4">$5,000</td>
                  <td className="p-4 text-foreground/80">Everything in Starter, plus Secretary Mode and marketing support.</td>
                  <td className="p-4 text-foreground/80">Limited (Approved task sharing)</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">Enterprise</td>
                  <td className="p-4">$12,000+</td>
                  <td className="p-4 text-foreground/80">Everything in Pro, plus custom workflows and multi-location support.</td>
                  <td className="p-4 text-foreground/80">Fully Enabled</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4">5.2 Revenue Model</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Revenue is generated through five primary streams:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Monthly SaaS:</strong> Recurring revenue from direct subscriptions.</li>
            <li><strong>Add-On Functionality:</strong> Expansion revenue from additional features.</li>
            <li><strong>White-Label Licensing:</strong> Partner revenue from branded deployments.</li>
            <li><strong>Wholesale Distribution:</strong> Volume sales through channel partners.</li>
            <li><strong>Enterprise Customization:</strong> High-value custom implementations.</li>
          </ol>

          <h3 className="text-2xl font-bold mb-4">5.3 Financial Projections & Profitability</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The cloud-native architecture enables exceptional financial efficiency.
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Profit Margin:</strong> An estimated 87% profit margin.</li>
            <li><strong>Operating Cost:</strong> Running the platform for 100,000 users on AWS is estimated to cost approximately $20,000 per month.</li>
            <li><strong>Target ARPU:</strong> The target Average Revenue Per User at scale is roughly $5,000/month.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">5.4 Investment Structure</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Investment is structured using a SAFE (Simple Agreement for Future Equity) with tiered valuation caps.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-foreground/20">
                  <th className="text-left p-4 font-semibold">Investment Tier</th>
                  <th className="text-left p-4 font-semibold">Valuation Cap</th>
                  <th className="text-left p-4 font-semibold">Discount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">$50,000</td>
                  <td className="p-4">$8M</td>
                  <td className="p-4">20%</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">$100,000</td>
                  <td className="p-4">$7M</td>
                  <td className="p-4">20%</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">$300,000</td>
                  <td className="p-4">$5M</td>
                  <td className="p-4">20%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Arguments */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">6.0 Key Arguments and Counter-Arguments</h2>
          <p className="text-foreground/90 leading-relaxed mb-6">
            The platform's success hinges on executing at a system level and overcoming rational market skepticism.
          </p>

          <h3 className="text-2xl font-bold mb-4">6.1 The Core Moat</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The primary defense against competition is not the underlying AI model, which is commoditized, but the synergistic combination of four factors:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>Workflow Embedding:</strong> Becoming deeply integrated into a client's daily operations.</li>
            <li><strong>Persistent Memory:</strong> Accumulating valuable historical and contextual data that is difficult to replicate.</li>
            <li><strong>Governance Rules:</strong> A complex, trust-based framework that is slow to build and validate.</li>
            <li><strong>Distribution & Network Effects:</strong> The value created by the D2D network.</li>
          </ol>

          <h3 className="text-2xl font-bold mb-4">6.2 Addressing Skepticism</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The project anticipates and has prepared responses for several key investor concerns:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-foreground/20">
                  <th className="text-left p-4 font-semibold">Skeptic Argument</th>
                  <th className="text-left p-4 font-semibold">Grounded Response</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">"This is just another AI tool."</td>
                  <td className="p-4 text-foreground/80">DONNA is a coordinating layer. Replacement cost grows as memory and D2D network dependencies accumulate.</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">"Incumbents will crush this."</td>
                  <td className="p-4 text-foreground/80">Incumbents are slow to unify across departments. DONNA's advantage is speed and cross-tool orchestration.</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">"$10B in 2 years is fantasy."</td>
                  <td className="p-4 text-foreground/80">The thesis assumes a strategic acquisition driven by distribution leverage and EBITDA impact, not organic SaaS multiples.</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="p-4 font-medium">"Where is the moat?"</td>
                  <td className="p-4 text-foreground/80">The moat is the embedded workflow, persistent memory, governance, and network effects, not the LLM.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4">6.3 Conditions for Success vs. Failure</h3>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
            <li><strong>DONNA succeeds if:</strong> It becomes infrastructure, owns coordination, and embeds deeply and quickly.</li>
            <li><strong>DONNA fails if:</strong> It remains a feature, distribution stalls, workflows remain shallow, and switching costs are weak.</li>
          </ul>
        </section>

        {/* Key Quotes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">7.0 Important Quotes and Core Narratives</h2>
          <div className="space-y-4">
            <div className="glass-card p-6 rounded-xl">
              <p className="text-foreground/90 italic">"An AI that helps my business" becomes "An AI that connects my business to an intelligent economic network."</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <p className="text-foreground/90 italic">"AI to amplify humans, not replace them."</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <p className="text-foreground/90 italic">"Donna is the 'AI Co-pilot' that allows SMBs to run like a Fortune 500 company without the overhead."</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <p className="text-foreground/90 italic">"The DONNA Marketplace doesn't compete with tools. It replaces friction itself."</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <p className="text-foreground/90 italic">"Most platforms optimize attention. The DONNA Marketplace optimizes outcomes."</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <p className="text-foreground/90 italic">"Donna evolves from 'An AI operator for your business' into 'The connective tissue between businesses.'"</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <p className="text-foreground/90 italic">"DONNA is designed as operational infrastructure — not an unchecked AI agent."</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <p className="text-foreground/90 italic">"Other AI tools help one business work better. DONNA helps businesses work better together. That's the difference between a tool and a network."</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-lg glass-card text-center">
          <h3 className="text-2xl font-bold mb-4">Learn More About DONNA</h3>
          <p className="text-foreground/70 mb-6">
            Explore our product capabilities, network vision, and see how DONNA can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/product"
              className="px-8 py-3 rounded-lg bg-accent text-background hover:bg-accent/90 transition-all duration-300 font-semibold"
            >
              View Products
            </Link>
            <Link
              href="/#demo-form"
              className="px-8 py-3 rounded-lg border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 font-semibold"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}


