import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Voice Receptionist - AI Phone Assistant | DONNA',
  description: 'DONNA\'s AI Voice Receptionist handles calls 24/7 with real-time voice recognition, intelligent call routing, and appointment scheduling.',
  path: '/product/voice-receptionist',
})

export default function VoiceReceptionistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

