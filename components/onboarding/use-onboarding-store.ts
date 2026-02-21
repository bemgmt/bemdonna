"use client"

import { useState, useEffect, useCallback } from "react"
import { phases, getFilteredPhases, getItemWeight } from "@/lib/onboarding-data"
import type { IntakeProfile } from "@/lib/onboarding-intake"
import {
  estimateTimelineDays,
  getReadinessTierFromScore,
  type ReadinessTier,
} from "@/lib/onboarding-intake"

const STORAGE_KEY = "donna-onboarding"

export interface PhaseState {
  completedItems: string[]
  notes: Record<string, string>
  lastUpdated: string
}

export interface OnboardingState {
  companyName: string
  contactName: string
  contactEmail: string
  startedAt: string
  phases: Record<string, PhaseState>
  intakeProfile?: IntakeProfile
}

function getDefaultState(): OnboardingState {
  return {
    companyName: "",
    contactName: "",
    contactEmail: "",
    startedAt: "",
    phases: {},
  }
}

function loadState(): OnboardingState {
  if (typeof window === "undefined") return getDefaultState()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return getDefaultState()
    return JSON.parse(raw) as OnboardingState
  } catch {
    return getDefaultState()
  }
}

function saveState(state: OnboardingState) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // storage full or blocked
  }
}

export function useOnboardingStore() {
  const [state, setState] = useState<OnboardingState>(getDefaultState)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setState(loadState())
    setHydrated(true)
  }, [])

  const persist = useCallback((next: OnboardingState) => {
    setState(next)
    saveState(next)
  }, [])

  // ---- Company info ----

  const setCompanyInfo = useCallback(
    (companyName: string, contactName: string, contactEmail: string) => {
      const next: OnboardingState = {
        ...state,
        companyName,
        contactName,
        contactEmail,
        startedAt: state.startedAt || new Date().toISOString(),
      }
      persist(next)
    },
    [state, persist]
  )

  // ---- Intake profile ----

  const setIntakeProfile = useCallback(
    (profile: IntakeProfile) => {
      const next: OnboardingState = {
        ...state,
        intakeProfile: profile,
        startedAt: state.startedAt || new Date().toISOString(),
      }
      persist(next)
    },
    [state, persist]
  )

  const hasCompletedIntake = useCallback((): boolean => {
    return !!state.intakeProfile && state.intakeProfile.industry !== ""
  }, [state])

  // ---- Item toggling & notes ----

  const toggleItem = useCallback(
    (phaseSlug: string, itemId: string) => {
      const phaseState = state.phases[phaseSlug] || {
        completedItems: [],
        notes: {},
        lastUpdated: "",
      }
      const completed = phaseState.completedItems.includes(itemId)
        ? phaseState.completedItems.filter((id) => id !== itemId)
        : [...phaseState.completedItems, itemId]

      const next: OnboardingState = {
        ...state,
        startedAt: state.startedAt || new Date().toISOString(),
        phases: {
          ...state.phases,
          [phaseSlug]: {
            ...phaseState,
            completedItems: completed,
            lastUpdated: new Date().toISOString(),
          },
        },
      }
      persist(next)
    },
    [state, persist]
  )

  const setNote = useCallback(
    (phaseSlug: string, itemId: string, note: string) => {
      const phaseState = state.phases[phaseSlug] || {
        completedItems: [],
        notes: {},
        lastUpdated: "",
      }
      const next: OnboardingState = {
        ...state,
        phases: {
          ...state.phases,
          [phaseSlug]: {
            ...phaseState,
            notes: { ...phaseState.notes, [itemId]: note },
            lastUpdated: new Date().toISOString(),
          },
        },
      }
      persist(next)
    },
    [state, persist]
  )

  // ---- Filtered phases (respects intake conditions) ----

  const filteredPhases = getFilteredPhases(state.intakeProfile)

  // ---- Basic progress (item count based) ----

  const getPhaseProgress = useCallback(
    (phaseSlug: string) => {
      const phase = filteredPhases.find((p) => p.slug === phaseSlug)
      if (!phase) return { completed: 0, total: 0, percentage: 0 }
      const visibleIds = new Set(phase.items.map((i) => i.id))
      const completed =
        state.phases[phaseSlug]?.completedItems.filter((id) =>
          visibleIds.has(id)
        ).length ?? 0
      const total = phase.items.length
      return {
        completed,
        total,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
      }
    },
    [state, filteredPhases]
  )

  const getOverallProgress = useCallback(() => {
    let completed = 0
    let total = 0
    for (const phase of filteredPhases) {
      const visibleIds = new Set(phase.items.map((i) => i.id))
      total += phase.items.length
      completed +=
        state.phases[phase.slug]?.completedItems.filter((id) =>
          visibleIds.has(id)
        ).length ?? 0
    }
    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    }
  }, [state, filteredPhases])

  // ---- Weighted progress ----

  const getWeightedProgress = useCallback(
    (phaseSlug?: string) => {
      const targetPhases = phaseSlug
        ? filteredPhases.filter((p) => p.slug === phaseSlug)
        : filteredPhases

      let earnedWeight = 0
      let totalWeight = 0

      for (const phase of targetPhases) {
        const completedIds = new Set(
          state.phases[phase.slug]?.completedItems ?? []
        )
        for (const item of phase.items) {
          const w = getItemWeight(item)
          totalWeight += w
          if (completedIds.has(item.id)) earnedWeight += w
        }
      }

      const percentage =
        totalWeight > 0 ? Math.round((earnedWeight / totalWeight) * 100) : 0
      return { earnedWeight, totalWeight, percentage }
    },
    [state, filteredPhases]
  )

  const getReadinessTier = useCallback((): ReadinessTier => {
    const { percentage } = getWeightedProgress()
    return getReadinessTierFromScore(percentage)
  }, [getWeightedProgress])

  // ---- Smart recommendation ----

  const getSmartRecommendation = useCallback(():
    | { itemId: string; itemLabel: string; phaseSlug: string; phaseTitle: string; weight: number }
    | null => {
    let best: {
      itemId: string
      itemLabel: string
      phaseSlug: string
      phaseTitle: string
      weight: number
    } | null = null

    for (const phase of filteredPhases) {
      const completedIds = new Set(
        state.phases[phase.slug]?.completedItems ?? []
      )
      for (const item of phase.items) {
        if (completedIds.has(item.id)) continue
        const w = getItemWeight(item)
        if (!best || w > best.weight) {
          best = {
            itemId: item.id,
            itemLabel: item.label,
            phaseSlug: phase.slug,
            phaseTitle: phase.title,
            weight: w,
          }
        }
      }
    }
    return best
  }, [state, filteredPhases])

  // ---- Dynamic timeline ----

  const getEstimatedTimeline = useCallback(() => {
    if (!state.intakeProfile)
      return { min: 14, max: 45, label: "2–6 weeks" }
    return estimateTimelineDays(state.intakeProfile)
  }, [state.intakeProfile])

  // ---- Phase status ----

  const isItemCompleted = useCallback(
    (phaseSlug: string, itemId: string) => {
      return state.phases[phaseSlug]?.completedItems.includes(itemId) ?? false
    },
    [state]
  )

  const getNote = useCallback(
    (phaseSlug: string, itemId: string) => {
      return state.phases[phaseSlug]?.notes[itemId] ?? ""
    },
    [state]
  )

  const getPhaseStatus = useCallback(
    (phaseSlug: string): "not-started" | "in-progress" | "complete" => {
      const { completed, total } = getPhaseProgress(phaseSlug)
      if (completed === 0) return "not-started"
      if (completed === total) return "complete"
      return "in-progress"
    },
    [getPhaseProgress]
  )

  const resetOnboarding = useCallback(() => {
    const fresh = getDefaultState()
    persist(fresh)
  }, [persist])

  return {
    state,
    hydrated,
    filteredPhases,
    setCompanyInfo,
    setIntakeProfile,
    hasCompletedIntake,
    toggleItem,
    setNote,
    getPhaseProgress,
    getOverallProgress,
    getWeightedProgress,
    getReadinessTier,
    getSmartRecommendation,
    getEstimatedTimeline,
    isItemCompleted,
    getNote,
    getPhaseStatus,
    resetOnboarding,
  }
}
