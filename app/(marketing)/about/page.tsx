import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { organizationSchema } from '@/lib/schema-markup'
import { getTeamMembers } from '@/lib/sanity/queries'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Linkedin, Twitter, Mail, Bot, Link2, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us',
  description: 'Learn about DONNA and our mission to build operational intelligence for modern businesses.',
  path: '/about',
})

export default async function AboutPage() {
  // Fetch team members from CMS (will work once Sanity is set up)
  // const teamMembers = await getTeamMembers()
  const teamMembers: any[] = [] // Placeholder until CMS is configured

  const schema = organizationSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="py-12 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            About DONNA
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            We’re building the operational intelligence layer for modern businesses.
          </p>
        </section>

        {/* Our Story */}
        <section className="py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-foreground/90 leading-relaxed mb-4">
              Businesses are running on fragmented tools and manual coordination. We built DONNA to become
              the AI operations layer that executes work across systems and departments.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              DONNA is not a chatbot or CRM. It is agentic, tool-native, multi-modal, and network-aware — designed to
              run day-to-day workflows with human-in-the-loop control.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Today, DONNA helps teams scale operations without scaling headcount, while keeping oversight and auditability.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Problem We're Solving</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-xl font-semibold mb-3">Manual Coordination</h3>
              <p className="text-foreground/70">
                Businesses waste time moving work between tools, teams, and inboxes.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-xl font-semibold mb-3">Operational Drag</h3>
              <p className="text-foreground/70">
                Scaling operations requires more people, training, and overhead.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-xl font-semibold mb-3">Inconsistent Execution</h3>
              <p className="text-foreground/70">
                Workflows vary by person and process, leading to missed steps and errors.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-xl font-semibold mb-3">Scaling Complexity</h3>
              <p className="text-foreground/70">
                Adding new workflows or departments multiplies coordination overhead.
              </p>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-foreground/90 leading-relaxed mb-4">
              DONNA connects to your tools, handles multi-modal communication, and executes workflows with
              permissioned control. It operates across departments and adapts without retraining.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              With DONNA, you get agentic execution, role-fluid coverage, tool-native control, and network-aware
              coordination — all built with human-in-the-loop oversight.
            </p>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">What Makes DONNA Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4"><Bot className="h-8 w-8 text-accent" /></div>
              <h3 className="text-xl font-semibold mb-2">Agentic Execution</h3>
              <p className="text-foreground/70">
                AI that plans, executes, and improves outcomes across your operations.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4"><Link2 className="h-8 w-8 text-accent" /></div>
              <h3 className="text-xl font-semibold mb-2">Tool-Native Control</h3>
              <p className="text-foreground/70">
                Executes inside the tools you already use, end-to-end.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4"><ShieldCheck className="h-8 w-8 text-accent" /></div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Governance</h3>
              <p className="text-foreground/70">
                SOC 2 and GDPR practices with permissions, auditability, and controls.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {teamMembers.length > 0 && (
          <section className="py-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member._id} className="text-center">
                  {member.photo && (
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-foreground/70 mb-3">{member.role}</p>
                  <p className="text-sm text-foreground/60 mb-4">{member.bio}</p>
                  <div className="flex gap-3 justify-center">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-accent transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={`https://twitter.com/${member.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-accent transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-foreground/60 hover:text-accent transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 text-center bg-white/5 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl text-foreground/70 mb-6">
            Reach out to learn more about DONNA and our roadmap.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/product">Explore Product</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}

