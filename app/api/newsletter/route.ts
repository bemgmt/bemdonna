import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = newsletterSchema.parse(body)

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("SMTP credentials not configured")
      return NextResponse.json(
        { 
          success: false,
          message: "Email service not configured. Please contact support." 
        },
        { status: 500 }
      )
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Verify SMTP connection
    try {
      await transporter.verify()
      console.log("SMTP connection verified")
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError)
      return NextResponse.json(
        { 
          success: false,
          message: "Email server connection failed. Please contact support." 
        },
        { status: 500 }
      )
    }

    // Send notification email to derek@bem.studio
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "derek@bem.studio",
      subject: `DONNA Newsletter Subscription - ${validatedData.email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    console.log("Sending newsletter subscription notification to: derek@bem.studio")
    await transporter.sendMail(mailOptions)
    console.log("Newsletter subscription notification sent successfully")

    // Optionally send confirmation to subscriber
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: validatedData.email,
      subject: "DONNA - Welcome to Our Newsletter!",
      html: `
        <h2>Thank you for subscribing!</h2>
        <p>You've successfully subscribed to the DONNA newsletter. You'll receive the latest updates, tips, and insights delivered to your inbox.</p>
        <p>Best regards,<br>The DONNA Team</p>
      `,
    }

    console.log("Sending confirmation email to:", validatedData.email)
    await transporter.sendMail(userMailOptions)
    console.log("Confirmation email sent successfully")

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for subscribing! Check your email to confirm.' 
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid email address', 
          errors: error.errors 
        },
        { status: 400 }
      )
    }

    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

