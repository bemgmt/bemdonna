import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, role, useCase, type } = body

    // Create a transporter using Gmail (you'll need to set up an app password)
    // For now, we'll use a placeholder that shows how to integrate with Gmail
    // You need to add GMAIL_EMAIL and GMAIL_APP_PASSWORD to environment variables

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: `DONNA ${type === "waitlist" ? "Waitlist Signup" : "Demo Request"} - ${name}`,
      html: `
        <h2>New ${type === "waitlist" ? "Waitlist Signup" : "Demo Request"}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Use Case:</strong></p>
        <p>${useCase || "Not provided"}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    // Also send confirmation to user
    const userMailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: "DONNA - We Received Your Request",
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We've received your ${type === "waitlist" ? "waitlist signup" : "demo request"}. Our team will be in touch within 24 hours.</p>
        <p>In the meantime, feel free to check out our documentation at <a href="#">docs.donna.ai</a></p>
        <p>Best regards,<br>The DONNA Team</p>
      `,
    }

    await transporter.sendMail(userMailOptions)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
