import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { phases } from "@/lib/onboarding-data"

interface PhaseState {
  completedItems: string[]
  notes: Record<string, string>
  lastUpdated: string
}

interface OnboardingSubmission {
  companyName: string
  contactName: string
  contactEmail: string
  startedAt: string
  phases: Record<string, PhaseState>
}

function buildSummaryHtml(data: OnboardingSubmission): string {
  let totalCompleted = 0
  let totalItems = 0

  const phaseSections = phases
    .map((phase) => {
      const ps = data.phases[phase.slug]
      const completed = ps?.completedItems.length ?? 0
      const total = phase.items.length
      totalCompleted += completed
      totalItems += total
      const pct = total > 0 ? Math.round((completed / total) * 100) : 0

      const itemRows = phase.items
        .map((item) => {
          const done = ps?.completedItems.includes(item.id) ?? false
          const note = ps?.notes[item.id] || ""
          return `
          <tr>
            <td style="padding:6px 8px;border-bottom:1px solid #222;">${done ? "&#9745;" : "&#9744;"}</td>
            <td style="padding:6px 8px;border-bottom:1px solid #222;">
              <strong>${item.label}</strong>
              <span style="color:#888;font-size:12px;margin-left:6px;">[${item.priority}]</span>
              ${note ? `<br/><em style="color:#06B6D4;font-size:12px;">Note: ${note}</em>` : ""}
            </td>
          </tr>`
        })
        .join("")

      return `
      <h3 style="margin-top:24px;color:#06B6D4;">Phase ${phase.number}: ${phase.title} — ${pct}% (${completed}/${total})</h3>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${itemRows}
      </table>`
    })
    .join("")

  const overallPct =
    totalItems > 0 ? Math.round((totalCompleted / totalItems) * 100) : 0

  return `
    <div style="font-family:system-ui,sans-serif;color:#f5f5f7;background:#000;padding:32px;">
      <h1 style="color:#06B6D4;">DONNA Onboarding Readiness Assessment</h1>
      <table style="font-size:14px;margin-bottom:16px;">
        <tr><td style="padding:4px 12px 4px 0;color:#888;">Company:</td><td><strong>${data.companyName}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888;">Contact:</td><td><strong>${data.contactName}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888;">Email:</td><td><strong>${data.contactEmail}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888;">Started:</td><td>${data.startedAt ? new Date(data.startedAt).toLocaleDateString() : "N/A"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888;">Submitted:</td><td>${new Date().toLocaleString()}</td></tr>
      </table>
      <h2>Overall Readiness: ${overallPct}% (${totalCompleted}/${totalItems} items)</h2>
      ${phaseSections}
      <hr style="border-color:#222;margin-top:32px;" />
      <p style="color:#888;font-size:12px;">This assessment was submitted via the DONNA onboarding portal at bemdonna.com/onboarding</p>
    </div>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body: OnboardingSubmission = await request.json()

    if (!body.contactEmail || !body.companyName || !body.contactName) {
      return NextResponse.json(
        { error: "Company name, contact name, and email are required." },
        { status: 400 }
      )
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD
    ) {
      console.error("SMTP credentials not configured")
      return NextResponse.json(
        { error: "Email service not configured. Please contact support." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError)
      return NextResponse.json(
        { error: "Email server connection failed. Please contact support." },
        { status: 500 }
      )
    }

    const summaryHtml = buildSummaryHtml(body)

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "derek@bem.studio",
      subject: `DONNA Onboarding Assessment — ${body.companyName}`,
      html: summaryHtml,
    })

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: body.contactEmail,
      subject: "DONNA — We Received Your Onboarding Assessment",
      html: `
        <div style="font-family:system-ui,sans-serif;color:#f5f5f7;background:#000;padding:32px;">
          <h2 style="color:#06B6D4;">Thank you, ${body.contactName}!</h2>
          <p>We've received your onboarding readiness assessment for <strong>${body.companyName}</strong>.</p>
          <p>Our team will review your responses and reach out within 24 hours to discuss next steps.</p>
          <p>Best regards,<br/>The DONNA Team</p>
        </div>
      `,
    })

    return NextResponse.json(
      { message: "Assessment submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Onboarding submission error:", error)
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json(
      { error: `Failed to submit assessment: ${errorMessage}` },
      { status: 500 }
    )
  }
}
