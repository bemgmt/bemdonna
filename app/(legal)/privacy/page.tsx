import type { Metadata } from 'next'
import Breadcrumb from '@/components/breadcrumb'
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

        <h2>3. Information Sharing and Disclosure</h2>
        <p>
          We do not sell your personal information. We may share your information in the following circumstances:
        </p>
        <ul>
          <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (hosting, payment processing, analytics)</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
          <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our users</li>
          <li><strong>With Your Consent:</strong> When you have given explicit consent for specific sharing</li>
        </ul>
        <p>
          All service providers are contractually obligated to protect your information and use it only for the
          purposes we specify.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information,
          including:
        </p>
        <ul>
          <li>End-to-end encryption for data in transit and at rest</li>
          <li>Regular security assessments and penetration testing</li>
          <li>Access controls and authentication mechanisms</li>
          <li>Employee training on data protection</li>
          <li>Incident response and breach notification procedures</li>
          <li>SOC 2 Type II compliance</li>
        </ul>
        <p>
          However, no method of transmission over the Internet or electronic storage is 100% secure. While we
          strive to protect your information, we cannot guarantee absolute security.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain your information for as long as necessary to:
        </p>
        <ul>
          <li>Provide our services to you</li>
          <li>Comply with legal obligations</li>
          <li>Resolve disputes and enforce agreements</li>
          <li>Maintain business records as required by law</li>
        </ul>
        <p>
          When you delete your account, we will delete or anonymize your personal information within 30 days,
          except where we are required to retain it for legal purposes.
        </p>

        <h2>6. Your Privacy Rights</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
          <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your personal information ("right to be forgotten")</li>
          <li><strong>Right to Restrict Processing:</strong> Request limitation of how we process your information</li>
          <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
          <li><strong>Right to Object:</strong> Object to processing of your information for certain purposes</li>
          <li><strong>Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href="mailto:derek@bem.studio" className="text-accent hover:underline">derek@bem.studio</a>.
          We will respond to your request within 30 days.
        </p>

        <h2>7. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to:
        </p>
        <ul>
          <li>Remember your preferences and settings</li>
          <li>Analyze how you use our services</li>
          <li>Provide personalized content and advertisements</li>
          <li>Improve our services and user experience</li>
        </ul>
        <p>
          You can control cookies through your browser settings. However, disabling cookies may limit your ability
          to use certain features of our services. For more information, see our Cookie Policy.
        </p>

        <h2>8. International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your own. When we transfer
          data internationally, we ensure appropriate safeguards are in place, including:
        </p>
        <ul>
          <li>Standard Contractual Clauses (SCCs) approved by data protection authorities</li>
          <li>Adequacy decisions by relevant authorities</li>
          <li>Binding Corporate Rules where applicable</li>
        </ul>
        <p>
          By using our services, you consent to the transfer of your information to countries that may have
          different data protection laws than your country of residence.
        </p>

        <h2>9. California Privacy Rights (CCPA)</h2>
        <p>
          If you are a California resident, you have additional rights under the California Consumer Privacy Act
          (CCPA):
        </p>
        <ul>
          <li>Right to know what personal information we collect, use, and share</li>
          <li>Right to delete your personal information</li>
          <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
          <li>Right to non-discrimination for exercising your privacy rights</li>
        </ul>

        <h2>10. Children's Privacy</h2>
        <p>
          Our services are not directed to children under 13 (or 16 in the EU). We do not knowingly collect
          information from children. If you believe we have collected information from a child, please contact
          us immediately and we will delete that information.
        </p>

        <h2>11. Third-Party Links</h2>
        <p>
          Our services may contain links to third-party websites or services. We are not responsible for the
          privacy practices of these third parties. We encourage you to read their privacy policies.
        </p>

        <h2>12. Data Processing Agreement</h2>
        <p>
          If you use DONNA to process personal data on behalf of others, you act as a data controller and we act
          as a data processor. Our Data Processing Agreement (DPA) outlines our obligations and your
          responsibilities. The DPA is available upon request and is incorporated into our Terms of Service for
          Enterprise customers.
        </p>

        <h2>13. Changes to Privacy Policy</h2>
        <p>
          We may update this policy from time to time to reflect changes in our practices or legal requirements.
          We will notify you of any material changes via email or through our service. The "Last updated" date
          at the top of this policy indicates when it was last revised.
        </p>

        <h2>14. Contact Us</h2>
        <p>
          For privacy-related questions, to exercise your rights, or to report a privacy concern, contact us at:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:derek@bem.studio" className="text-accent hover:underline">derek@bem.studio</a>
        </p>
        <p>
          <strong>Data Protection Officer:</strong> Available upon request for Enterprise customers
        </p>
      </div>
    </div>
  )
}

