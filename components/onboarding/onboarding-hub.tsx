"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useOnboardingStore } from "./use-onboarding-store"
import ProgressBar from "./progress-bar"
import PhaseCard from "./phase-card"
import OnboardingTimeline from "./onboarding-timeline"
import ReadinessSummary from "./readiness-summary"
import IntakeWizard from "./intake-wizard"
import { Button } from "@/components/ui/button"
import { RotateCcw, Pencil, ArrowRight, Sparkles } from "lucide-react"
import { tierConfig } from "@/lib/onboarding-intake"
import type { IntakeProfile } from "@/lib/onboarding-intake"
import { getDefaultIntakeProfile } from "@/lib/onboarding-intake"

export default function OnboardingHub() {
  const store = useOnboardingStore()
  const {
    state,
    hydrated,
    filteredPhases,
    setCompanyInfo,
    setIntakeProfile,
    hasCompletedIntake,
    getPhaseProgress,
    getOverallProgress,
    getWeightedProgress,
    getReadinessTier,
    getSmartRecommendation,
    getEstimatedTimeline,
    getPhaseStatus,
    resetOnboarding,
  } = store

  const [companyName, setCompanyName] = useState("")
  const [contactName, setContactName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [infoSaved, setInfoSaved] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [showIntakeWizard, setShowIntakeWizard] = useState(false)

  useEffect(() => {
    if (hydrated) {
      setCompanyName(state.companyName)
      setContactName(state.contactName)
      setContactEmail(state.contactEmail)
    }
  }, [hydrated, state.companyName, state.contactName, state.contactEmail])

  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault()
    setCompanyInfo(companyName, contactName, contactEmail)
    setInfoSaved(true)
    setTimeout(() => setInfoSaved(false), 3000)
  }

  const handleIntakeComplete = (profile: IntakeProfile) => {
    setIntakeProfile(profile)
    setShowIntakeWizard(false)
  }

  const handleIntakeSkip = () => {
    setIntakeProfile(getDefaultIntakeProfile())
    setShowIntakeWizard(false)
  }

  // Loading skeleton
  if (!hydrated) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-white/5 rounded w-1/3 mx-auto" />
            <div className="h-4 bg-white/5 rounded w-2/3 mx-auto" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-48 bg-white/5 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Show intake wizard if not completed yet, or if user clicked "Edit Profile"
  if ((!hasCompletedIntake() && !state.intakeProfile) || showIntakeWizard) {
    return (
      <IntakeWizard
        onComplete={handleIntakeComplete}
        onSkip={handleIntakeSkip}
      />
    )
  }

  const overall = getOverallProgress()
  const weighted = getWeightedProgress()
  const tier = getReadinessTier()
  const tierInfo = tierConfig[tier]
  const recommendation = getSmartRecommendation()
  const timeline = getEstimatedTimeline()
  const hasAnyProgress = overall.completed > 0

  return (
    <>
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero */}
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              DONNA <span className="gradient-text">Onboarding</span>
            </h1>
            <p className="text-foreground/60 max-w-2xl mx-auto text-sm md:text-base">
              Your personalized onboarding plan based on your setup.
              Estimated timeline:{" "}
              <span className="text-accent font-semibold">{timeline.label}</span>.
            </p>
          </div>

          {/* Readiness Score Card */}
          <div className="glass-card rounded-xl p-6 glow-accent animate-slide-up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-3xl font-bold">{weighted.percentage}%</div>
                  <span
                    className={`inline-block mt-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${tierInfo.bg} ${tierInfo.color}`}
                  >
                    {tierInfo.label}
                  </span>
                </div>
                <div className="ml-2">
                  <h2 className="text-lg font-bold">Weighted Readiness</h2>
                  <p className="text-sm text-foreground/50">
                    {overall.completed} of {overall.total} items completed
                    {" "}({weighted.earnedWeight}/{weighted.totalWeight} pts)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => setShowIntakeWizard(true)}
                  className="flex items-center gap-1.5 text-xs text-foreground/40 hover:text-accent transition-colors"
                >
                  <Pencil className="w-3.5 h-3.5" />
                  Edit Profile
                </button>
                {hasAnyProgress && (
                  <button
                    onClick={() => setShowResetConfirm(true)}
                    className="flex items-center gap-1.5 text-xs text-foreground/40 hover:text-red-400 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                )}
                <Button
                  variant="donnaPrimary"
                  size="sm"
                  onClick={() => setShowSummary(true)}
                  disabled={!hasAnyProgress}
                >
                  Submit Assessment
                </Button>
              </div>
            </div>
            <ProgressBar percentage={weighted.percentage} size="lg" showPercentage={false} />
          </div>

          {/* Smart Recommendation */}
          {recommendation && (
            <div className="glass-card rounded-xl p-5 border-accent/20 animate-slide-up" style={{ animationDelay: "50ms" }}>
              <div className="flex items-center gap-3">
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-foreground/50 font-medium uppercase tracking-wider">
                    Recommended Next
                  </p>
                  <p className="text-sm font-semibold truncate">
                    {recommendation.itemLabel}
                  </p>
                  <p className="text-xs text-foreground/40">
                    in {recommendation.phaseTitle}
                  </p>
                </div>
                <Link href={`/onboarding/${recommendation.phaseSlug}`}>
                  <Button variant="donnaOutline" size="sm">
                    Go
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Company Info Form */}
          <div className="glass-card rounded-xl p-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-lg font-bold mb-1">Company Information</h2>
            <p className="text-sm text-foreground/50 mb-4">
              This information is saved locally and included in your readiness assessment.
            </p>
            <form onSubmit={handleSaveInfo} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="ob-company" className="block text-sm text-foreground/70 mb-1">
                    Company Name
                  </label>
                  <input
                    id="ob-company"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 transition-colors"
                    placeholder="Acme Insurance"
                  />
                </div>
                <div>
                  <label htmlFor="ob-name" className="block text-sm text-foreground/70 mb-1">
                    Contact Name
                  </label>
                  <input
                    id="ob-name"
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="ob-email" className="block text-sm text-foreground/70 mb-1">
                    Contact Email
                  </label>
                  <input
                    id="ob-email"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 transition-colors"
                    placeholder="jane@acme.com"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button type="submit" variant="donnaOutline" size="sm">
                  Save Information
                </Button>
                {infoSaved && (
                  <span className="text-xs text-emerald-400 animate-fade-in">
                    Saved successfully
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Phase Cards Grid */}
          <div>
            <h2 className="text-xl font-bold mb-6">Onboarding Phases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhases.map((phase, idx) => (
                <div
                  key={phase.slug}
                  className="animate-slide-up"
                  style={{ animationDelay: `${(idx + 2) * 80}ms` }}
                >
                  <PhaseCard
                    phase={phase}
                    progress={getPhaseProgress(phase.slug)}
                    status={getPhaseStatus(phase.slug)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-lg font-bold mb-1">Estimated Timeline</h2>
            <p className="text-sm text-foreground/50 mb-6">
              Based on your profile, deployment is estimated at{" "}
              <span className="text-accent font-medium">{timeline.label}</span>.
            </p>
            <OnboardingTimeline />
          </div>
        </div>
      </div>

      {/* Reset Confirmation */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="glass-card rounded-2xl p-6 max-w-sm w-full text-center glow-accent">
            <h3 className="text-lg font-bold mb-2">Reset Progress?</h3>
            <p className="text-sm text-foreground/60 mb-6">
              This will clear all your checklist progress, company information,
              and intake profile. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <Button
                variant="donnaOutline"
                className="flex-1"
                onClick={() => setShowResetConfirm(false)}
              >
                Cancel
              </Button>
              <Button
                variant="donnaPrimary"
                className="flex-1 !bg-red-500/80 hover:!bg-red-500"
                onClick={() => {
                  resetOnboarding()
                  setCompanyName("")
                  setContactName("")
                  setContactEmail("")
                  setShowResetConfirm(false)
                }}
              >
                Reset All
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Readiness Summary Modal */}
      {showSummary && (
        <ReadinessSummary onClose={() => setShowSummary(false)} />
      )}
    </>
  )
}
