# Email Setup Guide - Siteground SMTP

## Overview

The DONNA landing page form now uses Siteground SMTP to send emails instead of Gmail. This provides better deliverability and uses your professional domain email.

## Required Information

You'll need the following information from your Siteground account:

1. **SMTP Host** - Your Siteground SMTP server address
2. **SMTP Port** - Usually 465 (SSL) or 587 (TLS)
3. **Email Address** - Your full email address (e.g., info@yourdomain.com)
4. **Email Password** - Your email account password

## Finding Your Siteground SMTP Settings

### Method 1: Siteground Site Tools

1. Log in to your Siteground account
2. Go to **Site Tools**
3. Navigate to **Email** → **Accounts**
4. Click on your email account
5. Look for **Mail Server Settings** or **SMTP Settings**

### Method 2: Common Siteground SMTP Settings

**For most Siteground accounts:**
- **SMTP Host**: `smtp.yourdomain.com` or `mail.yourdomain.com`
- **SMTP Port**: `465` (SSL) or `587` (TLS)
- **Username**: Your full email address
- **Password**: Your email password
- **Encryption**: SSL/TLS

**Alternative servers:**
- `smtp.siteground.com` (may work for some accounts)
- Check your Siteground welcome email for specific details

## Setup Instructions

### 1. Local Development (.env.local)

Create or update `.env.local` in your project root:

```env
# Siteground SMTP Configuration
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=465
SMTP_USER=info@yourdomain.com
SMTP_PASSWORD=your-email-password
```

**Important Notes:**
- Replace `yourdomain.com` with your actual domain
- Replace `info@yourdomain.com` with your actual email address
- Replace `your-email-password` with your actual email password
- Port 465 uses SSL (secure: true)
- Port 587 uses TLS (you may need to change secure to false)

### 2. Vercel Production Environment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `SMTP_HOST` | smtp.yourdomain.com | Production, Preview, Development |
| `SMTP_PORT` | 465 | Production, Preview, Development |
| `SMTP_USER` | info@yourdomain.com | Production, Preview, Development |
| `SMTP_PASSWORD` | your-email-password | Production, Preview, Development |

4. Click **Save**
5. Redeploy your application for changes to take effect

## Testing the Email Configuration

### Local Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000`

3. Fill out the "Join the Waitlist" form

4. Submit the form

5. Check your email inbox for:
   - Notification email (to your SMTP_USER address)
   - Confirmation email (to the user's email)

### Production Testing

1. Visit your live site on Vercel

2. Fill out the form with a test email

3. Verify both emails are received

## Troubleshooting

### Error: "Failed to send email"

**Possible causes:**
1. Incorrect SMTP credentials
2. Wrong SMTP host or port
3. Email password changed
4. Firewall blocking SMTP port

**Solutions:**
- Double-check all credentials in Siteground
- Try alternative SMTP host (mail.yourdomain.com)
- Try port 587 instead of 465 (and set secure: false)
- Contact Siteground support for correct SMTP settings

### Error: "Authentication failed"

**Possible causes:**
1. Wrong email password
2. Email account not set up properly
3. Two-factor authentication enabled

**Solutions:**
- Reset your email password in Siteground
- Verify email account exists and is active
- Disable 2FA or create app-specific password

### Emails not being received

**Possible causes:**
1. Emails going to spam folder
2. SPF/DKIM records not configured
3. Email quota exceeded

**Solutions:**
- Check spam/junk folders
- Configure SPF and DKIM records in Siteground DNS
- Check email storage quota in Siteground

### Port 465 vs 587

**Port 465 (SSL):**
```env
SMTP_PORT=465
# Code uses: secure: true
```

**Port 587 (TLS):**
```env
SMTP_PORT=587
# You may need to modify code to: secure: false
```

If port 465 doesn't work, try 587.

## Security Best Practices

1. **Never commit `.env.local` to Git**
   - Already in `.gitignore`
   - Contains sensitive passwords

2. **Use strong email passwords**
   - At least 12 characters
   - Mix of letters, numbers, symbols

3. **Rotate passwords regularly**
   - Change email password every 3-6 months
   - Update in both `.env.local` and Vercel

4. **Monitor email usage**
   - Check for unusual activity
   - Review sent emails regularly

## Alternative: Using a Different Email

If you want to send to a different email address than the SMTP user:

Edit `app/api/send-email/route.ts`:

```typescript
const mailOptions = {
  from: process.env.SMTP_USER,
  to: "different-email@example.com", // Change this
  subject: `DONNA ${type === "waitlist" ? "Waitlist Signup" : "Demo Request"} - ${name}`,
  // ... rest of config
}
```

Or add a new environment variable:

```env
NOTIFICATION_EMAIL=team@yourdomain.com
```

Then use:
```typescript
to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
```

## Email Template Customization

The email templates are in `app/api/send-email/route.ts`:

1. **Notification Email** (sent to you):
   - Subject: "DONNA Waitlist Signup - [Name]"
   - Contains: Name, Email, Company, Role, Use Case

2. **Confirmation Email** (sent to user):
   - Subject: "DONNA - We Received Your Request"
   - Contains: Thank you message and next steps

Edit these templates to customize the content.

## Support

If you continue to have issues:

1. **Siteground Support**:
   - Live chat available 24/7
   - Ask for "SMTP settings for my email account"

2. **Check Siteground Documentation**:
   - https://www.siteground.com/kb/

3. **Contact DONNA Support**:
   - info@bemdonna.com
   - support@bemdonna.com

## Summary

✅ Updated from Gmail to Siteground SMTP
✅ More reliable email delivery
✅ Uses your professional domain email
✅ Better for business communications

Your form emails will now be sent through your Siteground email account!

