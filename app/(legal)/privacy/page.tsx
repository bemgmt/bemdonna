import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for DONNA platform.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, including:</p>
        <ul>
          <li>Account information (name, email, company)</li>
          <li>Payment information</li>
          <li>Communication data processed through our services</li>
          <li>Usage data and analytics</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send technical notices and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>Monitor and analyze trends and usage</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell your personal information. We may share your information with:
        </p>
        <ul>
          <li>Service providers who assist in our operations</li>
          <li>Professional advisors</li>
          <li>Law enforcement when required by law</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information,
          including encryption, access controls, and regular security assessments.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain your information for as long as necessary to provide services and comply with legal
          obligations.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing</li>
          <li>Data portability</li>
        </ul>

        <h2>7. Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to collect and track information about your use of
          our services. You can control cookies through your browser settings.
        </p>

        <h2>8. International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your own. We ensure
          appropriate safeguards are in place.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          Our services are not directed to children under 13. We do not knowingly collect information from
          children.
        </p>

        <h2>10. Changes to Privacy Policy</h2>
        <p>
          We may update this policy from time to time. We will notify you of any material changes via email or
          through our service.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          For privacy-related questions, contact us at{' '}
          <a href="mailto:derek@bem.studio">derek@bem.studio</a>
        </p>
      </div>
    </div>
  )
}

