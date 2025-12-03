import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // TODO: Implement email sending logic
    // Options:
    // 1. Use Resend, SendGrid, or similar email service
    // 2. Use Nodemailer with SMTP
    // 3. Use a form service like Formspree or Basin
    
    // Example with Resend (uncomment and configure):
    /*
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'DONNA Contact Form <derek@bem.studio>',
      to: 'derek@bem.studio',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
        ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    })
    */

    // For now, just log the submission
    console.log('Contact form submission:', validatedData)

    // TODO: Optionally save to database or CRM
    // Example: Save to Sanity, Airtable, or your CRM

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

