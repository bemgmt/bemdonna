import type { Metadata } from 'next'
import Breadcrumb from '@/components/breadcrumb'
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
          except as required by law. You are responsible for:
        </p>
        <ul>
          <li>Providing accurate billing information</li>
          <li>Keeping your payment method up to date</li>
          <li>Paying all applicable taxes</li>
          <li>Notifying us of any billing disputes within 30 days</li>
        </ul>
        <p>
          We reserve the right to change our pricing with 30 days' notice. Price changes will apply to your
          next billing cycle.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          All content, features, and functionality of DONNA are owned by us and are protected by international
          copyright, trademark, and other intellectual property laws. You may not:
        </p>
        <ul>
          <li>Copy, modify, or create derivative works of our services</li>
          <li>Reverse engineer or attempt to extract source code</li>
          <li>Remove any copyright or proprietary notices</li>
          <li>Use our trademarks without written permission</li>
        </ul>
        <p>
          You retain ownership of any content you upload or create using DONNA, but grant us a license to use,
          store, and process that content to provide our services.
        </p>

        <h2>7. Disclaimers</h2>
        <p>
          DONNA is provided "as is" and "as available" without warranties of any kind, either express or implied.
          We do not guarantee that:
        </p>
        <ul>
          <li>The service will be uninterrupted or error-free</li>
          <li>All features will meet your specific requirements</li>
          <li>Results will be accurate or complete</li>
          <li>Defects will be corrected</li>
        </ul>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, DONNA shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages resulting from your use of or inability to use the service, including:
        </p>
        <ul>
          <li>Loss of profits, revenue, or data</li>
          <li>Business interruption</li>
          <li>Cost of substitute services</li>
          <li>Any other damages arising from your use of the service</li>
        </ul>
        <p>
          Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
        </p>

        <h2>9. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless DONNA, its officers, directors, employees, and agents from any
          claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
        </p>
        <ul>
          <li>Your use of the service</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any third-party rights</li>
          <li>Content you submit or transmit through the service</li>
        </ul>

        <h2>10. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice, for any breach of these
          Terms, including:
        </p>
        <ul>
          <li>Non-payment of fees</li>
          <li>Violation of acceptable use policies</li>
          <li>Fraudulent or illegal activity</li>
          <li>Any other material breach of these Terms</li>
        </ul>
        <p>
          You may cancel your subscription at any time through your account settings. Upon termination:
        </p>
        <ul>
          <li>Your right to use the service immediately ceases</li>
          <li>We may delete your account and data</li>
          <li>You remain responsible for all charges incurred up to the termination date</li>
        </ul>

        <h2>11. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
          DONNA operates, without regard to conflict of law provisions. Any disputes shall be resolved in the
          appropriate courts of that jurisdiction.
        </p>

        <h2>12. Severability</h2>
        <p>
          If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited
          or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force
          and effect.
        </p>

        <h2>13. Entire Agreement</h2>
        <p>
          These Terms, together with our Privacy Policy and Acceptable Use Policy, constitute the entire agreement
          between you and DONNA regarding the use of our services and supersede all prior agreements and
          understandings.
        </p>

        <h2>14. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any material changes
          via email or through the service. Your continued use of the service after such changes constitutes
          acceptance of the modified Terms.
        </p>

        <h2>15. Contact Information</h2>
        <p>
          For questions about these Terms, please contact us at{' '}
          <a href="mailto:derek@bem.studio" className="text-accent hover:underline">derek@bem.studio</a>
        </p>
      </div>
    </div>
  )
}

