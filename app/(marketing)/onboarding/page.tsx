import type { Metadata } from "next"
import OnboardingHub from "@/components/onboarding/onboarding-hub"

export const metadata: Metadata = {
  title: "Onboarding | DONNA - AI Operations Platform",
  description:
    "Self-paced onboarding to prepare your organization for DONNA implementation. Complete interactive checklists across 7 phases to ensure a smooth deployment.",
  openGraph: {
    title: "DONNA Onboarding - Implementation Readiness",
    description:
      "Prepare your organization for DONNA with our self-paced onboarding system. Track your progress across technical, security, integration, and deployment phases.",
  },
}

export default function OnboardingPage() {
  return <OnboardingHub />
}
