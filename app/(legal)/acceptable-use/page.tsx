import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Acceptable Use Policy',
  description: 'Guidelines for acceptable use of DONNA services.',
  path: '/acceptable-use',
})

export default function AcceptableUsePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <h1>Acceptable Use Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>
          This Acceptable Use Policy ("Policy") governs your use of DONNA's services. By using our
          services, you agree to comply with this Policy.
        </p>

        <h2>2. Prohibited Activities</h2>
        <p>You may not use DONNA's services to:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Transmit harmful, offensive, or illegal content</li>
          <li>Engage in fraudulent or deceptive practices</li>
          <li>Harass, threaten, or abuse others</li>
          <li>Distribute spam or unsolicited communications</li>
          <li>Attempt to gain unauthorized access to systems</li>
          <li>Interfere with or disrupt our services</li>
        </ul>

        <h2>3. Content Standards</h2>
        <p>All content transmitted through DONNA must:</p>
        <ul>
          <li>Comply with applicable laws and regulations</li>
          <li>Respect the rights and dignity of others</li>
          <li>Be truthful and not misleading</li>
          <li>Not contain malicious code or viruses</li>
        </ul>

        <h2>4. Business Use</h2>
        <p>
          DONNA is designed for legitimate business communication. You must:
        </p>
        <ul>
          <li>Use the service only for lawful business purposes</li>
          <li>Obtain necessary consents for recording conversations</li>
          <li>Comply with telemarketing and communication regulations</li>
          <li>Respect do-not-call lists and opt-out requests</li>
        </ul>

        <h2>5. Data Usage</h2>
        <p>When using DONNA, you must:</p>
        <ul>
          <li>Only process data you have the right to use</li>
          <li>Comply with data protection laws (GDPR, CCPA, etc.)</li>
          <li>Implement appropriate security measures</li>
          <li>Respect customer privacy preferences</li>
        </ul>

        <h2>6. System Integrity</h2>
        <p>You must not:</p>
        <ul>
          <li>Attempt to reverse engineer our services</li>
          <li>Use automated tools to access our services excessively</li>
          <li>Circumvent security or authentication measures</li>
          <li>Interfere with other users' access to services</li>
        </ul>

        <h2>7. Reporting Violations</h2>
        <p>
          If you become aware of any violation of this Policy, please report it to{' '}
          <a href="mailto:abuse@bemdonna.com">abuse@bemdonna.com</a>.
        </p>

        <h2>8. Enforcement</h2>
        <p>
          We reserve the right to investigate violations of this Policy and take appropriate action,
          including:
        </p>
        <ul>
          <li>Issuing warnings</li>
          <li>Suspending or terminating accounts</li>
          <li>Removing content</li>
          <li>Reporting to law enforcement</li>
          <li>Taking legal action</li>
        </ul>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Policy from time to time. We will notify you of material changes by
          email or through our services.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have questions about this Policy, please contact us at{' '}
          <a href="mailto:legal@bemdonna.com">legal@bemdonna.com</a>.
        </p>
      </article>
    </div>
  )
}

