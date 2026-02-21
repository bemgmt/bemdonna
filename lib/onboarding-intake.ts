// ---------------------------------------------------------------------------
// Intake profile types, option catalogues, and condition evaluation
// ---------------------------------------------------------------------------

export interface IntakeProfile {
  industry: string
  companySize: string
  userCount: string
  ams: string[]
  crm: string[]
  emailCalendar: string
  identityProvider: string
  useCases: string[]
  dataVolume: string
  securityLevel: string
  hasSandbox: boolean
  networkRestrictions: string[]
  dataFormat: string
}

export function getDefaultIntakeProfile(): IntakeProfile {
  return {
    industry: "",
    companySize: "",
    userCount: "",
    ams: [],
    crm: [],
    emailCalendar: "",
    identityProvider: "",
    useCases: [],
    dataVolume: "",
    securityLevel: "",
    hasSandbox: false,
    networkRestrictions: [],
    dataFormat: "",
  }
}

// ---------------------------------------------------------------------------
// Option lists for each intake field
// ---------------------------------------------------------------------------

export const industryOptions = [
  { value: "insurance", label: "Insurance Agency / Brokerage" },
  { value: "real-estate", label: "Real Estate" },
  { value: "hospitality", label: "Hospitality" },
  { value: "property-management", label: "Property Management" },
  { value: "financial-services", label: "Financial Services" },
  { value: "healthcare", label: "Healthcare" },
  { value: "other", label: "Other" },
] as const

export const companySizeOptions = [
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-500", label: "201–500 employees" },
  { value: "500+", label: "500+ employees" },
] as const

export const userCountOptions = [
  { value: "1-5", label: "1–5 users" },
  { value: "6-20", label: "6–20 users" },
  { value: "21-50", label: "21–50 users" },
  { value: "51-100", label: "51–100 users" },
  { value: "100+", label: "100+ users" },
] as const

export const amsOptions = [
  { value: "hawksoft", label: "HawkSoft" },
  { value: "applied", label: "Applied (TAM / Epic)" },
  { value: "vertafore", label: "Vertafore (AMS360 / Sagitta)" },
  { value: "zywave", label: "Zywave" },
  { value: "other", label: "Other AMS" },
  { value: "none", label: "No AMS" },
] as const

export const crmOptions = [
  { value: "salesforce", label: "Salesforce" },
  { value: "hubspot", label: "HubSpot" },
  { value: "dynamics365", label: "Dynamics 365" },
  { value: "sap", label: "SAP" },
  { value: "zoho", label: "Zoho CRM" },
  { value: "other", label: "Other CRM" },
  { value: "none", label: "No CRM" },
] as const

export const emailCalendarOptions = [
  { value: "outlook", label: "Outlook / Exchange" },
  { value: "google", label: "Google Workspace" },
  { value: "other", label: "Other" },
  { value: "none", label: "None / Not Applicable" },
] as const

export const identityProviderOptions = [
  { value: "okta", label: "Okta" },
  { value: "azure-ad", label: "Azure AD / Entra ID" },
  { value: "google", label: "Google Identity" },
  { value: "other", label: "Other IdP" },
  { value: "none", label: "No SSO" },
] as const

export const useCaseOptions = [
  { value: "sentiment", label: "Customer Sentiment Analysis" },
  { value: "churn", label: "Churn / Retention Prediction" },
  { value: "cross-sell", label: "Cross-Sell / Upsell Opportunities" },
  { value: "lead-mgmt", label: "Lead Management & Response" },
  { value: "voice", label: "Voice Calls & Meeting AI" },
  { value: "task-automation", label: "Task & Workflow Automation" },
  { value: "email-mgmt", label: "Email Management & Drafting" },
  { value: "document", label: "Document Drafting & Templates" },
] as const

export const dataVolumeOptions = [
  { value: "small", label: "Small (< 1,000 records)" },
  { value: "medium", label: "Medium (1,000 – 10,000)" },
  { value: "large", label: "Large (10,000 – 100,000)" },
  { value: "enterprise", label: "Enterprise (100,000+)" },
] as const

export const securityLevelOptions = [
  { value: "standard", label: "Standard — public APIs with TLS" },
  { value: "high", label: "High — VPN / private link required" },
  { value: "regulated", label: "Regulated — audit & compliance mandated" },
] as const

export const networkRestrictionOptions = [
  { value: "firewall", label: "Firewall / IP allowlisting" },
  { value: "vpn", label: "VPN required" },
  { value: "proxy", label: "Outbound proxy" },
  { value: "none", label: "No special restrictions" },
] as const

export const dataFormatOptions = [
  { value: "csv", label: "CSV files" },
  { value: "json", label: "JSON / REST API" },
  { value: "sftp", label: "SFTP / file transfer" },
  { value: "direct-api", label: "Direct API integration" },
] as const

// ---------------------------------------------------------------------------
// Condition system — used to show/hide checklist items
// ---------------------------------------------------------------------------

export interface Condition {
  field: keyof IntakeProfile
  operator: "eq" | "neq" | "includes" | "notIncludes"
  value: string
}

export function evaluateCondition(
  profile: IntakeProfile,
  condition: Condition
): boolean {
  const fieldValue = profile[condition.field]

  switch (condition.operator) {
    case "eq":
      return fieldValue === condition.value
    case "neq":
      return fieldValue !== condition.value
    case "includes":
      if (Array.isArray(fieldValue)) return fieldValue.includes(condition.value)
      if (typeof fieldValue === "string") return fieldValue === condition.value
      return false
    case "notIncludes":
      if (Array.isArray(fieldValue)) return !fieldValue.includes(condition.value)
      if (typeof fieldValue === "string") return fieldValue !== condition.value
      return true
    default:
      return true
  }
}

export function evaluateAllConditions(
  profile: IntakeProfile,
  conditions: Condition[]
): boolean {
  return conditions.every((c) => evaluateCondition(profile, c))
}

// ---------------------------------------------------------------------------
// Timeline estimation based on intake profile
// ---------------------------------------------------------------------------

export function estimateTimelineDays(profile: IntakeProfile): {
  min: number
  max: number
  label: string
} {
  let base = 14

  if (
    profile.ams.length === 1 &&
    profile.ams[0] === "hawksoft" &&
    profile.crm.length <= 1
  ) {
    base -= 5
  }

  const crmCount = profile.crm.filter((c) => c !== "none").length
  if (crmCount > 1) base += 5

  const amsCount = profile.ams.filter((a) => a !== "none").length
  if (amsCount > 1) base += 3

  if (profile.securityLevel === "high") base += 3
  if (profile.securityLevel === "regulated") base += 5

  if (profile.dataVolume === "large") base += 3
  if (profile.dataVolume === "enterprise") base += 5

  if (profile.identityProvider !== "none" && profile.identityProvider !== "")
    base += 2

  const extraIntegrations = [
    profile.useCases.includes("voice"),
    profile.networkRestrictions.includes("vpn"),
    profile.dataFormat === "sftp",
  ].filter(Boolean).length
  base += extraIntegrations * 2

  const min = Math.max(5, base - 4)
  const max = base + 7

  return { min, max, label: `${min}–${max} days` }
}

// ---------------------------------------------------------------------------
// Readiness tier calculation
// ---------------------------------------------------------------------------

export type ReadinessTier = "critical" | "needs-work" | "good" | "ready"

export function getReadinessTierFromScore(percentage: number): ReadinessTier {
  if (percentage < 25) return "critical"
  if (percentage < 60) return "needs-work"
  if (percentage < 85) return "good"
  return "ready"
}

export const tierConfig: Record<
  ReadinessTier,
  { label: string; color: string; bg: string }
> = {
  critical: {
    label: "Critical",
    color: "text-red-400",
    bg: "bg-red-500/20",
  },
  "needs-work": {
    label: "Needs Work",
    color: "text-amber-400",
    bg: "bg-amber-500/20",
  },
  good: {
    label: "Good",
    color: "text-cyan-400",
    bg: "bg-cyan-500/20",
  },
  ready: {
    label: "Ready",
    color: "text-emerald-400",
    bg: "bg-emerald-500/20",
  },
}
