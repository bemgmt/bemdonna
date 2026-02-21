import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { phases, getPhaseBySlug } from "@/lib/onboarding-data"
import PhaseChecklist from "@/components/onboarding/phase-checklist"

interface PhasePageProps {
  params: Promise<{ phase: string }>
}

export async function generateStaticParams() {
  return phases.map((phase) => ({ phase: phase.slug }))
}

export async function generateMetadata({
  params,
}: PhasePageProps): Promise<Metadata> {
  const { phase: slug } = await params
  const phase = getPhaseBySlug(slug)
  if (!phase) return { title: "Phase Not Found" }

  return {
    title: `${phase.title} - DONNA Onboarding`,
    description: phase.description,
  }
}

export default async function PhasePage({ params }: PhasePageProps) {
  const { phase: slug } = await params
  const phase = getPhaseBySlug(slug)
  if (!phase) notFound()

  return <PhaseChecklist phase={phase} />
}
