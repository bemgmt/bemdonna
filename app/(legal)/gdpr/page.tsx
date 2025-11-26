import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'GDPR Compliance',
  description: 'Information about DONNA\'s GDPR compliance and data protection practices.',
  path: '/gdpr',
})

export default function GDPRPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <h1>GDPR Compliance</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Our Commitment to GDPR</h2>
        <p>
          DONNA is committed to protecting the privacy and security of personal data in accordance
          with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
        </p>

        <h2>2. Data Controller and Processor</h2>
        <p>
          When you use DONNA, you act as the data controller for any personal data you process through
          our services. DONNA acts as a data processor, processing data on your behalf according to
          your instructions.
        </p>

        <h2>3. Your Rights Under GDPR</h2>
        <p>As a data subject, you have the following rights:</p>
        <ul>
          <li><strong>Right to Access:</strong> Request access to your personal data</li>
          <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
          <li><strong>Right to Restriction:</strong> Request restriction of processing</li>
          <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
          <li><strong>Right to Object:</strong> Object to processing of your data</li>
          <li><strong>Rights Related to Automated Decision-Making:</strong> Not be subject to automated decisions</li>
        </ul>

        <h2>4. Legal Basis for Processing</h2>
        <p>We process personal data based on:</p>
        <ul>
          <li><strong>Contract:</strong> To provide our services to you</li>
          <li><strong>Legitimate Interests:</strong> To improve and secure our services</li>
          <li><strong>Consent:</strong> Where you have given explicit consent</li>
          <li><strong>Legal Obligation:</strong> To comply with legal requirements</li>
        </ul>

        <h2>5. Data Protection Measures</h2>
        <p>We implement appropriate technical and organizational measures including:</p>
        <ul>
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security assessments and audits</li>
          <li>Access controls and authentication</li>
          <li>Employee training on data protection</li>
          <li>Incident response procedures</li>
          <li>Data minimization practices</li>
        </ul>

        <h2>6. Data Transfers</h2>
        <p>
          When we transfer personal data outside the European Economic Area (EEA), we ensure
          appropriate safeguards are in place, such as:
        </p>
        <ul>
          <li>Standard Contractual Clauses (SCCs)</li>
          <li>Adequacy decisions by the European Commission</li>
          <li>Binding Corporate Rules</li>
        </ul>

        <h2>7. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes for which
          it was collected, or as required by law. You can request deletion of your data at any time.
        </p>

        <h2>8. Data Breach Notification</h2>
        <p>
          In the event of a data breach that poses a risk to your rights and freedoms, we will:
        </p>
        <ul>
          <li>Notify the relevant supervisory authority within 72 hours</li>
          <li>Notify affected individuals without undue delay</li>
          <li>Document the breach and our response</li>
        </ul>

        <h2>9. Data Protection Officer</h2>
        <p>
          For questions about data protection or to exercise your rights, contact our Data Protection
          Officer at <a href="mailto:dpo@bemdonna.com">dpo@bemdonna.com</a>.
        </p>

        <h2>10. Supervisory Authority</h2>
        <p>
          You have the right to lodge a complaint with a supervisory authority if you believe we
          have not complied with GDPR requirements.
        </p>

        <h2>11. Customer Responsibilities</h2>
        <p>As a customer using DONNA to process personal data, you must:</p>
        <ul>
          <li>Have a lawful basis for processing personal data</li>
          <li>Provide appropriate privacy notices to data subjects</li>
          <li>Obtain necessary consents</li>
          <li>Respond to data subject requests</li>
          <li>Implement appropriate security measures</li>
          <li>Report data breaches as required</li>
        </ul>

        <h2>12. Data Processing Agreement</h2>
        <p>
          Our Data Processing Agreement (DPA) is available to all customers and includes:
        </p>
        <ul>
          <li>Subject matter and duration of processing</li>
          <li>Nature and purpose of processing</li>
          <li>Types of personal data and categories of data subjects</li>
          <li>Obligations and rights of the controller</li>
          <li>Security measures and sub-processing arrangements</li>
        </ul>

        <h2>13. Contact Us</h2>
        <p>
          For GDPR-related inquiries, please contact us at{' '}
          <a href="mailto:privacy@bemdonna.com">privacy@bemdonna.com</a>.
        </p>
      </article>
    </div>
  )
}

