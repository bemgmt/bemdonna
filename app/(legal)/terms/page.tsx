import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms of Service',
  description: 'Terms of Service for DONNA platform.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <h1>Terms of Service</h1>
        <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using DONNA's services, you accept and agree to be bound by the terms and provision
          of this agreement.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily use DONNA's services for personal or commercial purposes. This is
          the grant of a license, not a transfer of title.
        </p>

        <h2>3. Service Description</h2>
        <p>
          DONNA provides AI-powered business communication services including voice, email, and chat automation.
          We reserve the right to modify or discontinue services at any time.
        </p>

        <h2>4. User Obligations</h2>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Maintain the security of your account</li>
          <li>Not use the service for illegal purposes</li>
          <li>Not attempt to gain unauthorized access to our systems</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>

        <h2>5. Payment Terms</h2>
        <p>
          Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable
          except as required by law.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          All content, features, and functionality of DONNA are owned by us and are protected by international
          copyright, trademark, and other intellectual property laws.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          DONNA shall not be liable for any indirect, incidental, special, consequential, or punitive damages
          resulting from your use of or inability to use the service.
        </p>

        <h2>8. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice, for any breach of these
          Terms.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any material changes
          via email or through the service.
        </p>

        <h2>10. Contact Information</h2>
        <p>
          For questions about these Terms, please contact us at{' '}
          <a href="mailto:derek@bem.studio">derek@bem.studio</a>
        </p>
      </div>
    </div>
  )
}

