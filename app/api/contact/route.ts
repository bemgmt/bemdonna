import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  inquiryType: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)

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
      subject: `DONNA Contact Form Submission${validatedData.inquiryType ? ` - ${validatedData.inquiryType}` : ''} - ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
        ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
        ${validatedData.inquiryType ? `<p><strong>Inquiry Type:</strong> ${validatedData.inquiryType}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    console.log("Sending contact form email to: derek@bem.studio")
    await transporter.sendMail(mailOptions)
    console.log("Contact form email sent successfully")

    // Optionally send confirmation to user
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: validatedData.email,
      subject: "DONNA - We Received Your Message",
      html: `
        <h2>Thank you, ${validatedData.name}!</h2>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to check out our documentation or reach out directly if you have urgent questions.</p>
        <p>Best regards,<br>The DONNA Team</p>
      `,
    }

    console.log("Sending confirmation email to:", validatedData.email)
    await transporter.sendMail(userMailOptions)
    console.log("Confirmation email sent successfully")

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We\'ll get back to you soon!' 
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation error', 
          errors: error.errors 
        },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

