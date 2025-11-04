import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET() {
  try {
    // Check environment variables
    const config = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASSWORD,
    }

    console.log("SMTP Configuration:", config)

    if (!config.host || !config.user || !config.hasPassword) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing SMTP configuration",
          config: {
            host: config.host || "NOT SET",
            port: config.port || "NOT SET",
            user: config.user || "NOT SET",
            password: config.hasPassword ? "SET" : "NOT SET",
          },
        },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: parseInt(config.port || "465"),
      secure: true,
      auth: {
        user: config.user,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Verify connection
    await transporter.verify()

    // Send test email
    await transporter.sendMail({
      from: config.user,
      to: config.user,
      subject: "DONNA Test Email",
      html: `
        <h2>Test Email Successful!</h2>
        <p>Your SMTP configuration is working correctly.</p>
        <p><strong>Configuration:</strong></p>
        <ul>
          <li>Host: ${config.host}</li>
          <li>Port: ${config.port}</li>
          <li>User: ${config.user}</li>
        </ul>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully!",
      config: {
        host: config.host,
        port: config.port,
        user: config.user,
      },
    })
  } catch (error) {
    console.error("Test email error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        details: error,
      },
      { status: 500 }
    )
  }
}

