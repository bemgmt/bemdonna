import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { organizationSchema } from '@/lib/schema-markup'
import { getTeamMembers } from '@/lib/sanity/queries'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us',
  description: 'Learn about DONNA and our mission to transform business communication with AI.',
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
            We're building the future of business communication—one conversation at a time.
          </p>
        </section>

        {/* Our Story */}
        <section className="py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-foreground/90 leading-relaxed mb-4">
              DONNA was born from a simple observation: businesses lose thousands of dollars every day
              because they can't respond to leads fast enough. In an age where customers expect instant
              answers, traditional business hours and manual processes just don't cut it anymore.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              We set out to solve this problem by creating an AI-powered platform that never sleeps,
              never takes a break, and never misses an opportunity. DONNA combines the best of voice AI,
              email automation, and intelligent chat to create a comprehensive communication solution
              that works 24/7.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Today, DONNA helps businesses across industries automate their customer communication,
              respond to leads instantly, and scale their operations without scaling their headcount.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Problem We're Solving</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-xl font-semibold mb-3">Missed Opportunities</h3>
              <p className="text-foreground/70">
                Studies show that responding to leads within 5 minutes increases conversion rates by 900%.
                Most businesses can't meet this standard.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-xl font-semibold mb-3">High Costs</h3>
              <p className="text-foreground/70">
                Hiring 24/7 staff is expensive. The average customer service representative costs
                $35,000+ per year, plus benefits and training.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-xl font-semibold mb-3">Inconsistent Quality</h3>
              <p className="text-foreground/70">
                Human agents have good days and bad days. AI provides consistent, high-quality service
                every single time.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-xl font-semibold mb-3">Scalability Challenges</h3>
              <p className="text-foreground/70">
                Growing your team means hiring, training, and managing more people. DONNA scales
                instantly to handle any volume.
              </p>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-foreground/90 leading-relaxed mb-4">
              DONNA is an AI-powered digital employee that handles all your customer communication
              across voice, email, and chat. Our platform integrates seamlessly with your existing
              tools and workflows, so you can automate without disruption.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              With DONNA, you get instant lead response, 24/7 availability, consistent quality,
              and unlimited scalability—all at a fraction of the cost of traditional staffing.
            </p>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">What Makes DONNA Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">True AI Intelligence</h3>
              <p className="text-foreground/70">
                Not just chatbots—real AI that understands context, learns from your data, and
                makes intelligent decisions.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-2">Deep Integrations</h3>
              <p className="text-foreground/70">
                Connect with your CRM, calendar, email, and hundreds of other tools to create
                seamless workflows.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-foreground/70">
                SOC 2 compliant, GDPR compliant, and built with security-first architecture
                from the ground up.
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
          <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
          <p className="text-xl text-foreground/70 mb-6">
            We're always looking for talented people to join our team.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}

