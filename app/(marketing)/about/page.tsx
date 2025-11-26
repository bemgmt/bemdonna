import type { Metadata } from 'next'
import Image from 'next/image'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch, urlFor } from '@/sanity/lib/client'
import { teamMembersQuery } from '@/lib/sanity/queries'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us',
  description: 'Learn about DONNA\'s mission to transform business communication with AI.',
  path: '/about',
})

export default async function AboutPage() {
  const teamMembers = await sanityFetch<any[]>(teamMembersQuery)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About DONNA</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're on a mission to make AI-powered communication accessible to every business
        </p>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h2>Our Story</h2>
          <p>
            DONNA was founded in 2023 with a simple observation: businesses were losing thousands of dollars
            every day because they couldn't respond to customers fast enough. Traditional solutions were
            expensive, complex, and required dedicated staff.
          </p>
          <p>
            We built DONNA to change that. Our AI-powered platform handles voice, email, and chat communication
            24/7, so businesses never miss an opportunity. Today, we serve thousands of businesses across
            multiple industries, helping them grow faster and serve customers better.
          </p>

          <h2>Our Mission</h2>
          <p>
            To democratize AI-powered business communication, making it accessible and affordable for
            businesses of all sizes.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li><strong>Customer First:</strong> We build for our customers, not for ourselves</li>
            <li><strong>Innovation:</strong> We push the boundaries of what's possible with AI</li>
            <li><strong>Transparency:</strong> We're honest about what we can and can't do</li>
            <li><strong>Security:</strong> We protect customer data like it's our own</li>
            <li><strong>Accessibility:</strong> We make powerful tools available to everyone</li>
          </ul>
        </div>
      </section>

      {teamMembers && teamMembers.length > 0 && (
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member._id} className="text-center">
                {member.photo && (
                  <Image
                    src={urlFor(member.photo).width(300).height(300).url()}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="rounded-full mx-auto mb-4"
                  />
                )}
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                {member.bio && <p className="text-sm text-muted-foreground">{member.bio}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="py-12 bg-muted rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
        <p className="text-xl text-muted-foreground mb-6">
          We're always looking for talented people to join our mission
        </p>
        <a href="/careers" className="text-primary font-medium hover:underline">
          View Open Positions →
        </a>
      </section>
    </div>
  )
}

