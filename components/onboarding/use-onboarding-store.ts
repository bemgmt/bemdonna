"use client"

import { useState, useEffect, useCallback } from "react"
import { phases } from "@/lib/onboarding-data"

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

  const getPhaseProgress = useCallback(
    (phaseSlug: string) => {
      const phase = phases.find((p) => p.slug === phaseSlug)
      if (!phase) return { completed: 0, total: 0, percentage: 0 }
      const completed = state.phases[phaseSlug]?.completedItems.length ?? 0
      const total = phase.items.length
      return {
        completed,
        total,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
      }
    },
    [state]
  )

  const getOverallProgress = useCallback(() => {
    let completed = 0
    let total = 0
    for (const phase of phases) {
      total += phase.items.length
      completed += state.phases[phase.slug]?.completedItems.length ?? 0
    }
    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    }
  }, [state])

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
    setCompanyInfo,
    toggleItem,
    setNote,
    getPhaseProgress,
    getOverallProgress,
    isItemCompleted,
    getNote,
    getPhaseStatus,
    resetOnboarding,
  }
}
