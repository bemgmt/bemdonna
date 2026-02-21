export interface ChecklistItem {
  id: string
  label: string
  description: string
  priority: "high" | "medium" | "low"
}

export interface Phase {
  slug: string
  number: number
  title: string
  shortTitle: string
  description: string
  estimatedDays: string
  items: ChecklistItem[]
}

export const phases: Phase[] = [
  {
    slug: "getting-started",
    number: 1,
    title: "Getting Started",
    shortTitle: "Kickoff",
    description:
      "Identify stakeholders, define business objectives, and align on success criteria before technical work begins.",
    estimatedDays: "1-2 days",
    items: [
      {
        id: "gs-stakeholders",
        label: "Stakeholder Contact List",
        description:
          "Provide names and contact info for project sponsor(s), IT lead, business lead, security contact, and end-user champions.",
        priority: "high",
      },
      {
        id: "gs-roles-counts",
        label: "User Roles & Counts",
        description:
          "Define who needs access to DONNA (agents, managers, analysts) and at what permission levels. This drives license counts and RBAC configuration.",
        priority: "high",
      },
      {
        id: "gs-use-cases",
        label: "Business Use Cases & KPIs",
        description:
          "Document target use cases (e.g. identify at-risk clients, cross-sell campaigns) and success KPIs (e.g. +5% retention, +10% upsell).",
        priority: "high",
      },
      {
        id: "gs-success-criteria",
        label: "Success Criteria",
        description:
          'Define clear go/no-go criteria such as "Policy churn prediction accuracy > 80%" or "Target users trained and using DONNA daily."',
        priority: "medium",
      },
      {
        id: "gs-training-needs",
        label: "Training Needs Assessment",
        description:
          "Determine who needs training and at what level (basic user vs. admin). Schedule training sessions (in-person or virtual).",
        priority: "medium",
      },
      {
        id: "gs-change-mgmt",
        label: "Change Management Plan",
        description:
          "Plan communications and process changes. Establish how insights from DONNA will be integrated into existing workflows. Assign an internal project manager.",
        priority: "medium",
      },
      {
        id: "gs-requirements-doc",
        label: "Business Requirements Document",
        description:
          "Prepare a use-case worksheet or specification with goals and KPIs defined (e.g. cross-sell opportunities, retention targets).",
        priority: "medium",
      },
    ],
  },
  {
    slug: "technical-readiness",
    number: 2,
    title: "Technical Readiness",
    shortTitle: "Tech Prep",
    description:
      "Gather API credentials, identify data sources, prepare sample data, and establish a test environment for integration.",
    estimatedDays: "2-3 days",
    items: [
      {
        id: "tr-api-access",
        label: "API Access & Credentials",
        description:
          "Obtain API credentials/keys for each source system (e.g. HawkSoft API tokens, CRM OAuth client IDs). Ensure endpoints are reachable via HTTPS.",
        priority: "high",
      },
      {
        id: "tr-data-sources",
        label: "Data Sources & Schema",
        description:
          "Identify data feeds required by DONNA (policy data, contact/customer tables, claims, coverages). Provide sample records or schema definitions.",
        priority: "high",
      },
      {
        id: "tr-data-formats",
        label: "Data Formats & Samples",
        description:
          "Supply sample data files (CSV/JSON) or database extracts for key entities. Include unit tests for data formats.",
        priority: "high",
      },
      {
        id: "tr-data-volume",
        label: "Data Volume & Schedule",
        description:
          "Estimate data size (number of policies, customers) and update frequency. Plan for nightly or real-time sync as needed.",
        priority: "medium",
      },
      {
        id: "tr-auth-methods",
        label: "Authentication Methods",
        description:
          "Decide on authentication flows (OAuth, tokens, etc.). If using SSO (SAML/OIDC), provide identity-provider metadata.",
        priority: "high",
      },
      {
        id: "tr-test-env",
        label: "Test / Sandbox Environment",
        description:
          "Arrange a staging or sandbox environment for initial setup. Obtain test tenants/accounts for AMS/CRM if available.",
        priority: "medium",
      },
      {
        id: "tr-policy-export",
        label: "Policy / Client Data Export",
        description:
          "Prepare a structured CSV/JSON export from your AMS with columns like Policy_ID, Insured_Name, Effective_Date, Premium, etc.",
        priority: "high",
      },
      {
        id: "tr-crm-export",
        label: "CRM Data Export or API Access",
        description:
          "Prepare CRM contact/opportunity data (e.g. Salesforce CSV with Contact_ID, Email, Last_Activity) or provide API credentials.",
        priority: "high",
      },
    ],
  },
  {
    slug: "infrastructure",
    number: 3,
    title: "Infrastructure & Network",
    shortTitle: "Infra",
    description:
      "Configure network access, firewall rules, and cloud requirements to ensure DONNA can securely communicate with your systems.",
    estimatedDays: "1-2 days",
    items: [
      {
        id: "in-network",
        label: "Network Connectivity",
        description:
          "Ensure firewall/VPN configuration allows outbound TLS traffic to DONNA's services (port 443 for API calls/webhooks).",
        priority: "high",
      },
      {
        id: "in-ip-allowlist",
        label: "IP Allowlist",
        description:
          "If required by corporate policy, add DONNA's IP ranges to your allowlist so that data syncs are not blocked.",
        priority: "medium",
      },
      {
        id: "in-vpn",
        label: "VPN or Direct Link",
        description:
          "For highly secure environments, establish a VPN or private link to DONNA's cloud. Most integrations use public APIs with encryption in transit.",
        priority: "low",
      },
      {
        id: "in-cloud-region",
        label: "Cloud / Region Requirements",
        description:
          "Confirm any data residency or region constraints (e.g. EU vs US data centers for GDPR/CCPA compliance). Coordinate private cloud deployment if required.",
        priority: "medium",
      },
      {
        id: "in-service-accounts",
        label: "System / Service Accounts",
        description:
          "Create any service user accounts needed for DONNA to access client systems (e.g. a read-only AMS user). Document credentials securely.",
        priority: "high",
      },
      {
        id: "in-firewall-doc",
        label: "Network / Firewall Documentation",
        description:
          'Prepare a document listing required network rules (e.g. "Allow TCP 443 outbound to DONNA service IPs").',
        priority: "medium",
      },
    ],
  },
  {
    slug: "security-compliance",
    number: 4,
    title: "Security & Compliance",
    shortTitle: "Security",
    description:
      "Define roles, verify encryption, configure audit logging, and review compliance certifications for a secure deployment.",
    estimatedDays: "2-3 days",
    items: [
      {
        id: "sc-rbac",
        label: "Roles & RBAC Definition",
        description:
          "Define user roles in DONNA (System Administrator, Data Manager, Viewer). Provide a list of users/groups for each role.",
        priority: "high",
      },
      {
        id: "sc-encryption",
        label: "Encryption Verification",
        description:
          "Verify all data in transit to/from DONNA is encrypted (TLS). Confirm whether data-at-rest encryption is needed.",
        priority: "high",
      },
      {
        id: "sc-audit-logs",
        label: "Audit Log Configuration",
        description:
          "Ensure audit logging is enabled. Specify retention period for logs per your organization's policy.",
        priority: "medium",
      },
      {
        id: "sc-data-retention",
        label: "Data Retention Policy",
        description:
          "Agree on data retention requirements. Specify how long historical data and logs should be kept (e.g. 7 years for insurance compliance).",
        priority: "medium",
      },
      {
        id: "sc-certifications",
        label: "Compliance Certification Review",
        description:
          "Review DONNA's ISO 27001 and SOC 2 Type II certifications, GDPR and CCPA compliance. Have your security team sign off.",
        priority: "high",
      },
      {
        id: "sc-dpa",
        label: "Data Ownership & DPA",
        description:
          "Sign a Data Processing Addendum if handling personal data. Confirm that your agency retains all IP rights to the data.",
        priority: "high",
      },
      {
        id: "sc-sla-reporting",
        label: "SLAs & Reporting",
        description:
          "Agree on service levels (e.g. 99.9% uptime) and reporting cadence. Ensure vendor support contacts and escalation paths are documented.",
        priority: "medium",
      },
    ],
  },
  {
    slug: "integrations",
    number: 5,
    title: "Integrations Setup",
    shortTitle: "Integrations",
    description:
      "Connect your CRM, AMS, calendars, identity providers, and external data sources to DONNA's platform.",
    estimatedDays: "3-5 days",
    items: [
      {
        id: "ig-crm-ams",
        label: "CRM & AMS Systems",
        description:
          "List systems to integrate (Salesforce, HubSpot, Dynamics 365, HawkSoft, Applied, Vertafore, etc.). Gather API endpoints, credentials, and objects to sync.",
        priority: "high",
      },
      {
        id: "ig-calendar-email",
        label: "Calendar & Email Integration",
        description:
          "If using DONNA's voice/meeting features, integrate with calendar/email (Outlook, Google Calendar, Exchange). Obtain credentials or delegate access.",
        priority: "medium",
      },
      {
        id: "ig-identity-provider",
        label: "Identity Provider (SSO)",
        description:
          "Configure DONNA as a SAML/OIDC service provider in your corporate IdP. Provide metadata URL or certificate.",
        priority: "medium",
      },
      {
        id: "ig-external-data",
        label: "External Data Sources",
        description:
          "Identify any external data feeds for enrichment (credit bureau, public records APIs). Prepare API keys or file formats.",
        priority: "low",
      },
      {
        id: "ig-messaging",
        label: "Messaging Platforms",
        description:
          "If DONNA will send notifications via Slack, SMS, or Teams, set up webhook URLs or API tokens. Document expected message formats.",
        priority: "low",
      },
      {
        id: "ig-file-stores",
        label: "File Stores & Webhooks",
        description:
          "If using SFTP/FTP uploads or callback webhooks, arrange for storage endpoints and firewall rules. Provide sample payload schemas.",
        priority: "low",
      },
      {
        id: "ig-standards",
        label: "Supported Standards Verification",
        description:
          "Ensure all integrated platforms meet compatibility guidelines (standard JSON/REST APIs, ACORD forms if applicable).",
        priority: "medium",
      },
    ],
  },
  {
    slug: "legal-commercial",
    number: 6,
    title: "Legal & Commercial",
    shortTitle: "Legal",
    description:
      "Finalize contracts, NDAs, data ownership agreements, billing details, and SLA terms before go-live.",
    estimatedDays: "1-3 days",
    items: [
      {
        id: "lc-contracts",
        label: "Subscription / License Agreement",
        description:
          "Ensure a signed subscription/license agreement covering usage rights, renewal terms, and SLAs is in place.",
        priority: "high",
      },
      {
        id: "lc-nda",
        label: "NDA & Privacy Agreements",
        description:
          "Exchange any needed NDAs. Ensure compliance with privacy laws. Verify that DONNA's DPA meets GDPR/CCPA standards.",
        priority: "high",
      },
      {
        id: "lc-ip-ownership",
        label: "IP & Data Ownership",
        description:
          "Confirm all outputs and reports are owned by your agency. Clarify that your data is never used to train AI models.",
        priority: "high",
      },
      {
        id: "lc-billing",
        label: "Billing Details",
        description:
          "Provide billing contacts, purchase order numbers, and invoice preferences. Confirm license counts/users for initial payment.",
        priority: "medium",
      },
      {
        id: "lc-renewal-sla",
        label: "Renewal & SLA Terms",
        description:
          "Understand renewal terms and included technical support. Document any penalties or remedies for SLA breaches.",
        priority: "medium",
      },
      {
        id: "lc-regulatory",
        label: "Legal / Regulatory Requirements",
        description:
          "Incorporate any industry-specific rules (insurance regulations, auditability requirements, carrier reporting).",
        priority: "medium",
      },
    ],
  },
  {
    slug: "deployment-testing",
    number: 7,
    title: "Deployment & Testing",
    shortTitle: "Deploy",
    description:
      "Provision environments, develop test plans, execute UAT, and prepare documentation for a successful go-live.",
    estimatedDays: "3-5 days",
    items: [
      {
        id: "dt-environments",
        label: "Staging & Production Environments",
        description:
          "Establish separate sandbox/staging and production tenants. All integrations should first be validated in a test environment.",
        priority: "high",
      },
      {
        id: "dt-test-plan",
        label: "Test Plan Development",
        description:
          'Develop test cases covering each integration and feature (e.g. "Given test data, DONNA should import 100% of policies correctly").',
        priority: "high",
      },
      {
        id: "dt-test-data",
        label: "Test Data Preparation",
        description:
          "Prepare representative test datasets (small-scale versions of real data) with known outcomes for validating predictions.",
        priority: "high",
      },
      {
        id: "dt-uat",
        label: "UAT Criteria Definition",
        description:
          'Define user acceptance tests (e.g. "Sales manager can log in, run a sentiment report, and interpret results").',
        priority: "high",
      },
      {
        id: "dt-rollback",
        label: "Rollback / Recovery Plan",
        description:
          "Plan contingencies if an integration fails. Ensure data backups exist and that initial data loads can be refreshed.",
        priority: "medium",
      },
      {
        id: "dt-documentation",
        label: "Configuration Documentation",
        description:
          "Maintain an integration/configuration document (mapping fields, transformation rules) for future reference and audit.",
        priority: "medium",
      },
      {
        id: "dt-monitoring",
        label: "Monitoring & Alerts Setup",
        description:
          "Identify key operational metrics (sync success, latency, API response times). Configure dashboards and alerts for failures.",
        priority: "medium",
      },
      {
        id: "dt-support-plan",
        label: "Support & Escalation Plan",
        description:
          "Clarify support tiers (DONNA 24/7 support vs. client IT). Provide escalation contacts and incident tracking procedures.",
        priority: "medium",
      },
    ],
  },
]

export const timelineMilestones = [
  { label: "Project Kickoff", days: "Day 0-1", phase: "getting-started" },
  { label: "Environment Setup", days: "Day 1-3", phase: "infrastructure" },
  {
    label: "Data Integration",
    days: "Day 4-10",
    phase: "technical-readiness",
  },
  {
    label: "Configuration & Testing",
    days: "Day 11-14",
    phase: "integrations",
  },
  { label: "User Acceptance Testing", days: "Day 15-17", phase: "deployment-testing" },
  { label: "Training & Documentation", days: "Day 18-20", phase: "deployment-testing" },
  { label: "Go-Live & Monitoring", days: "Day 21+", phase: "deployment-testing" },
]

export function getPhaseBySlug(slug: string): Phase | undefined {
  return phases.find((p) => p.slug === slug)
}

export function getNextPhase(currentSlug: string): Phase | undefined {
  const idx = phases.findIndex((p) => p.slug === currentSlug)
  return idx >= 0 && idx < phases.length - 1 ? phases[idx + 1] : undefined
}

export function getPrevPhase(currentSlug: string): Phase | undefined {
  const idx = phases.findIndex((p) => p.slug === currentSlug)
  return idx > 0 ? phases[idx - 1] : undefined
}

export function getTotalItems(): number {
  return phases.reduce((sum, phase) => sum + phase.items.length, 0)
}
