"use client"

import { useState, useCallback } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Sparkles, SkipForward } from "lucide-react"
import {
  industryOptions,
  companySizeOptions,
  userCountOptions,
  amsOptions,
  crmOptions,
  emailCalendarOptions,
  identityProviderOptions,
  useCaseOptions,
  dataVolumeOptions,
  securityLevelOptions,
  networkRestrictionOptions,
  dataFormatOptions,
  getDefaultIntakeProfile,
  type IntakeProfile,
} from "@/lib/onboarding-intake"

// ---------------------------------------------------------------------------
// Zod schemas per step
// ---------------------------------------------------------------------------

const step1Schema = z.object({
  industry: z.string().min(1, "Please select an industry"),
  companySize: z.string().min(1, "Please select company size"),
  userCount: z.string().min(1, "Please select estimated user count"),
})

const step2Schema = z.object({
  ams: z.array(z.string()).min(1, "Select at least one option"),
  crm: z.array(z.string()).min(1, "Select at least one option"),
  emailCalendar: z.string().min(1, "Please select an option"),
  identityProvider: z.string().min(1, "Please select an option"),
})

const step3Schema = z.object({
  useCases: z.array(z.string()).min(1, "Select at least one use case"),
  dataVolume: z.string().min(1, "Please select data volume"),
  securityLevel: z.string().min(1, "Please select security level"),
})

const step4Schema = z.object({
  hasSandbox: z.boolean(),
  networkRestrictions: z.array(z.string()).min(1, "Select at least one option"),
  dataFormat: z.string().min(1, "Please select preferred format"),
})

type Step1Data = z.infer<typeof step1Schema>
type Step2Data = z.infer<typeof step2Schema>
type Step3Data = z.infer<typeof step3Schema>
type Step4Data = z.infer<typeof step4Schema>

const STEP_COUNT = 4
const stepTitles = [
  "Company Profile",
  "Current Systems",
  "Priorities & Scope",
  "Technical Environment",
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface IntakeWizardProps {
  onComplete: (profile: IntakeProfile) => void
  onSkip: () => void
}

export default function IntakeWizard({ onComplete, onSkip }: IntakeWizardProps) {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState<"forward" | "back">("forward")

  const [partial, setPartial] = useState<Partial<IntakeProfile>>(
    getDefaultIntakeProfile()
  )

  const goNext = useCallback(() => {
    setDirection("forward")
    setStep((s) => Math.min(s + 1, STEP_COUNT - 1))
  }, [])

  const goBack = useCallback(() => {
    setDirection("back")
    setStep((s) => Math.max(s - 1, 0))
  }, [])

  const handleStepSubmit = useCallback(
    (data: Partial<IntakeProfile>) => {
      const next = { ...partial, ...data }
      setPartial(next)

      if (step === STEP_COUNT - 1) {
        onComplete(next as IntakeProfile)
      } else {
        goNext()
      }
    },
    [partial, step, onComplete, goNext]
  )

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Smart Onboarding
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Let&apos;s personalize your <span className="gradient-text">onboarding</span>
          </h1>
          <p className="text-foreground/60 text-sm md:text-base max-w-lg mx-auto">
            Answer a few quick questions so we can tailor the process to your
            exact setup and hide anything that&apos;s not relevant.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: STEP_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i < step) {
                  setDirection("back")
                  setStep(i)
                }
              }}
              disabled={i > step}
              className={`relative flex items-center gap-2 transition-all ${
                i <= step ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  i < step
                    ? "bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/50"
                    : i === step
                      ? "bg-accent/20 text-accent border-2 border-accent/50"
                      : "bg-white/5 text-foreground/30 border-2 border-white/10"
                }`}
              >
                {i < step ? (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              {i < STEP_COUNT - 1 && (
                <div
                  className={`w-8 sm:w-12 h-0.5 ${
                    i < step ? "bg-emerald-500/50" : "bg-white/10"
                  }`}
                />
              )}
            </button>
          ))}
        </div>

        {/* Step title */}
        <p className="text-center text-sm font-medium text-foreground/50">
          Step {step + 1}: {stepTitles[step]}
        </p>

        {/* Step content */}
        <div
          key={step}
          className={`glass-card rounded-xl p-6 md:p-8 glow-accent ${
            direction === "forward" ? "animate-slide-up" : "animate-fade-in"
          }`}
        >
          {step === 0 && (
            <Step1
              defaults={partial as Step1Data}
              onSubmit={handleStepSubmit}
            />
          )}
          {step === 1 && (
            <Step2
              defaults={partial as Step2Data}
              onSubmit={handleStepSubmit}
              onBack={goBack}
            />
          )}
          {step === 2 && (
            <Step3
              defaults={partial as Step3Data}
              onSubmit={handleStepSubmit}
              onBack={goBack}
            />
          )}
          {step === 3 && (
            <Step4
              defaults={partial as Step4Data}
              onSubmit={handleStepSubmit}
              onBack={goBack}
            />
          )}
        </div>

        {/* Skip */}
        <div className="text-center">
          <button
            onClick={onSkip}
            className="inline-flex items-center gap-1.5 text-xs text-foreground/40 hover:text-foreground/60 transition-colors"
          >
            <SkipForward className="w-3.5 h-3.5" />
            Skip intake &mdash; show me everything
          </button>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Shared field components
// ---------------------------------------------------------------------------

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium text-foreground/70 mb-1.5">
      {children}
    </label>
  )
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="text-xs text-red-400 mt-1">{message}</p>
}

function SelectField({
  options,
  value,
  onChange,
  placeholder = "Select...",
}: {
  options: readonly { value: string; label: string }[]
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 transition-colors text-sm appearance-none cursor-pointer"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )
}

function ChipSelect({
  options,
  selected,
  onChange,
  multi = false,
}: {
  options: readonly { value: string; label: string }[]
  selected: string[]
  onChange: (next: string[]) => void
  multi?: boolean
}) {
  const toggle = (val: string) => {
    if (multi) {
      if (val === "none") {
        onChange(["none"])
        return
      }
      const without = selected.filter((s) => s !== "none")
      onChange(
        without.includes(val)
          ? without.filter((s) => s !== val)
          : [...without, val]
      )
    } else {
      onChange([val])
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = selected.includes(o.value)
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => toggle(o.value)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              active
                ? "bg-accent/20 border-accent/50 text-accent"
                : "bg-white/5 border-white/10 text-foreground/60 hover:border-white/20"
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 1: Company Profile
// ---------------------------------------------------------------------------

function Step1({
  defaults,
  onSubmit,
}: {
  defaults: Step1Data
  onSubmit: (d: Partial<IntakeProfile>) => void
}) {
  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      industry: defaults.industry || "",
      companySize: defaults.companySize || "",
      userCount: defaults.userCount || "",
    },
  })

  const industry = watch("industry")
  const companySize = watch("companySize")
  const userCount = watch("userCount")

  return (
    <form onSubmit={handleSubmit((d) => onSubmit(d))} className="space-y-5">
      <div>
        <FieldLabel>Industry</FieldLabel>
        <SelectField
          options={industryOptions}
          value={industry}
          onChange={(v) => setValue("industry", v, { shouldValidate: true })}
          placeholder="Select your industry..."
        />
        <FieldError message={errors.industry?.message} />
      </div>

      <div>
        <FieldLabel>Company Size</FieldLabel>
        <SelectField
          options={companySizeOptions}
          value={companySize}
          onChange={(v) => setValue("companySize", v, { shouldValidate: true })}
          placeholder="Number of employees..."
        />
        <FieldError message={errors.companySize?.message} />
      </div>

      <div>
        <FieldLabel>Estimated DONNA Users</FieldLabel>
        <SelectField
          options={userCountOptions}
          value={userCount}
          onChange={(v) => setValue("userCount", v, { shouldValidate: true })}
          placeholder="How many people will use DONNA?"
        />
        <FieldError message={errors.userCount?.message} />
      </div>

      <div className="flex justify-end pt-2">
        <Button type="submit" variant="donnaPrimary" size="sm">
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </form>
  )
}

// ---------------------------------------------------------------------------
// Step 2: Current Systems
// ---------------------------------------------------------------------------

function Step2({
  defaults,
  onSubmit,
  onBack,
}: {
  defaults: Step2Data
  onSubmit: (d: Partial<IntakeProfile>) => void
  onBack: () => void
}) {
  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      ams: defaults.ams?.length ? defaults.ams : [],
      crm: defaults.crm?.length ? defaults.crm : [],
      emailCalendar: defaults.emailCalendar || "",
      identityProvider: defaults.identityProvider || "",
    },
  })

  const ams = watch("ams")
  const crm = watch("crm")
  const emailCalendar = watch("emailCalendar")
  const identityProvider = watch("identityProvider")

  return (
    <form onSubmit={handleSubmit((d) => onSubmit(d))} className="space-y-5">
      <div>
        <FieldLabel>Agency Management System (AMS)</FieldLabel>
        <p className="text-xs text-foreground/40 mb-2">Select all that apply</p>
        <ChipSelect
          options={amsOptions}
          selected={ams}
          onChange={(v) => setValue("ams", v, { shouldValidate: true })}
          multi
        />
        <FieldError message={errors.ams?.message} />
      </div>

      <div>
        <FieldLabel>CRM Platform</FieldLabel>
        <p className="text-xs text-foreground/40 mb-2">Select all that apply</p>
        <ChipSelect
          options={crmOptions}
          selected={crm}
          onChange={(v) => setValue("crm", v, { shouldValidate: true })}
          multi
        />
        <FieldError message={errors.crm?.message} />
      </div>

      <div>
        <FieldLabel>Email & Calendar</FieldLabel>
        <SelectField
          options={emailCalendarOptions}
          value={emailCalendar}
          onChange={(v) =>
            setValue("emailCalendar", v, { shouldValidate: true })
          }
        />
        <FieldError message={errors.emailCalendar?.message} />
      </div>

      <div>
        <FieldLabel>Identity Provider (SSO)</FieldLabel>
        <SelectField
          options={identityProviderOptions}
          value={identityProvider}
          onChange={(v) =>
            setValue("identityProvider", v, { shouldValidate: true })
          }
        />
        <FieldError message={errors.identityProvider?.message} />
      </div>

      <div className="flex justify-between pt-2">
        <Button type="button" variant="donnaOutline" size="sm" onClick={onBack}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Button>
        <Button type="submit" variant="donnaPrimary" size="sm">
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </form>
  )
}

// ---------------------------------------------------------------------------
// Step 3: Priorities & Scope
// ---------------------------------------------------------------------------

function Step3({
  defaults,
  onSubmit,
  onBack,
}: {
  defaults: Step3Data
  onSubmit: (d: Partial<IntakeProfile>) => void
  onBack: () => void
}) {
  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      useCases: defaults.useCases?.length ? defaults.useCases : [],
      dataVolume: defaults.dataVolume || "",
      securityLevel: defaults.securityLevel || "",
    },
  })

  const useCases = watch("useCases")
  const dataVolume = watch("dataVolume")
  const securityLevel = watch("securityLevel")

  return (
    <form onSubmit={handleSubmit((d) => onSubmit(d))} className="space-y-5">
      <div>
        <FieldLabel>Use Cases You&apos;re Most Interested In</FieldLabel>
        <p className="text-xs text-foreground/40 mb-2">Select all that apply</p>
        <ChipSelect
          options={useCaseOptions}
          selected={useCases}
          onChange={(v) => setValue("useCases", v, { shouldValidate: true })}
          multi
        />
        <FieldError message={errors.useCases?.message} />
      </div>

      <div>
        <FieldLabel>Data Volume</FieldLabel>
        <SelectField
          options={dataVolumeOptions}
          value={dataVolume}
          onChange={(v) => setValue("dataVolume", v, { shouldValidate: true })}
          placeholder="Approximate record count..."
        />
        <FieldError message={errors.dataVolume?.message} />
      </div>

      <div>
        <FieldLabel>Security Requirements</FieldLabel>
        <SelectField
          options={securityLevelOptions}
          value={securityLevel}
          onChange={(v) =>
            setValue("securityLevel", v, { shouldValidate: true })
          }
        />
        <FieldError message={errors.securityLevel?.message} />
      </div>

      <div className="flex justify-between pt-2">
        <Button type="button" variant="donnaOutline" size="sm" onClick={onBack}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Button>
        <Button type="submit" variant="donnaPrimary" size="sm">
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </form>
  )
}

// ---------------------------------------------------------------------------
// Step 4: Technical Environment
// ---------------------------------------------------------------------------

function Step4({
  defaults,
  onSubmit,
  onBack,
}: {
  defaults: Step4Data
  onSubmit: (d: Partial<IntakeProfile>) => void
  onBack: () => void
}) {
  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Step4Data>({
    resolver: zodResolver(step4Schema),
    defaultValues: {
      hasSandbox: defaults.hasSandbox ?? false,
      networkRestrictions: defaults.networkRestrictions?.length
        ? defaults.networkRestrictions
        : [],
      dataFormat: defaults.dataFormat || "",
    },
  })

  const hasSandbox = watch("hasSandbox")
  const networkRestrictions = watch("networkRestrictions")
  const dataFormat = watch("dataFormat")

  return (
    <form onSubmit={handleSubmit((d) => onSubmit(d))} className="space-y-5">
      <div>
        <FieldLabel>Do you have a sandbox / staging environment?</FieldLabel>
        <div className="flex gap-3 mt-1">
          {[true, false].map((val) => (
            <button
              key={String(val)}
              type="button"
              onClick={() =>
                setValue("hasSandbox", val, { shouldValidate: true })
              }
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                hasSandbox === val
                  ? "bg-accent/20 border-accent/50 text-accent"
                  : "bg-white/5 border-white/10 text-foreground/60 hover:border-white/20"
              }`}
            >
              {val ? "Yes" : "No"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <FieldLabel>Network Restrictions</FieldLabel>
        <p className="text-xs text-foreground/40 mb-2">Select all that apply</p>
        <ChipSelect
          options={networkRestrictionOptions}
          selected={networkRestrictions}
          onChange={(v) =>
            setValue("networkRestrictions", v, { shouldValidate: true })
          }
          multi
        />
        <FieldError message={errors.networkRestrictions?.message} />
      </div>

      <div>
        <FieldLabel>Preferred Data Format</FieldLabel>
        <SelectField
          options={dataFormatOptions}
          value={dataFormat}
          onChange={(v) => setValue("dataFormat", v, { shouldValidate: true })}
          placeholder="How will you send data?"
        />
        <FieldError message={errors.dataFormat?.message} />
      </div>

      <div className="flex justify-between pt-2">
        <Button type="button" variant="donnaOutline" size="sm" onClick={onBack}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Button>
        <Button type="submit" variant="donnaPrimary" size="sm">
          <Sparkles className="w-4 h-4 mr-1" />
          Start Onboarding
        </Button>
      </div>
    </form>
  )
}
