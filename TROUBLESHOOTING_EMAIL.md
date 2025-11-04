# Email Troubleshooting Guide

## Quick Test

### Step 1: Test Your SMTP Configuration

Visit this URL in your browser (local or production):
```
http://localhost:3000/api/test-email
```
or
```
https://your-site.vercel.app/api/test-email
```

This will:
1. Check if all SMTP environment variables are set
2. Verify the SMTP connection
3. Send a test email to your SMTP_USER address

### Step 2: Check the Response

**Success Response:**
```json
{
  "success": true,
  "message": "Test email sent successfully!",
  "config": {
    "host": "smtp.yourdomain.com",
    "port": "465",
    "user": "info@yourdomain.com"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message here",
  "config": {
    "host": "NOT SET",
    "port": "NOT SET",
    "user": "NOT SET",
    "password": "NOT SET"
  }
}
```

## Common Issues & Solutions

### Issue 1: "Missing SMTP configuration"

**Problem:** Environment variables not set

**Solution:**

1. **Local Development** - Create `.env.local`:
   ```env
   SMTP_HOST=smtp.yourdomain.com
   SMTP_PORT=465
   SMTP_USER=info@yourdomain.com
   SMTP_PASSWORD=your-password
   ```

2. **Vercel Production** - Add environment variables:
   - Go to Vercel Dashboard
   - Settings → Environment Variables
   - Add all 4 variables
   - Redeploy

### Issue 2: "EAUTH - Authentication failed"

**Problem:** Wrong username or password

**Solutions:**
- Double-check email address (must be full address)
- Verify password is correct
- Try resetting password in Siteground
- Make sure there are no extra spaces in credentials

### Issue 3: "ECONNECTION - Connection timeout"

**Problem:** Can't connect to SMTP server

**Solutions:**
- Verify SMTP host is correct
- Try alternative hosts:
  - `smtp.yourdomain.com`
  - `mail.yourdomain.com`
  - Check Siteground documentation
- Check if port 465 is blocked (try 587)

### Issue 4: "ETIMEDOUT"

**Problem:** Firewall or network blocking SMTP

**Solutions:**
- Try port 587 instead of 465
- Contact Siteground support
- Check if your hosting allows outbound SMTP

### Issue 5: Form submits but no email received

**Problem:** Email sent but not delivered

**Solutions:**
1. Check spam/junk folder
2. Verify SMTP_USER email exists and is active
3. Check email quota in Siteground
4. Look at Vercel logs for errors
5. Test with `/api/test-email` endpoint

## Siteground SMTP Settings

### Common Configurations

**Option 1: Domain-based SMTP**
```env
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=465
SMTP_USER=info@yourdomain.com
SMTP_PASSWORD=your-email-password
```

**Option 2: Mail subdomain**
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=465
SMTP_USER=info@yourdomain.com
SMTP_PASSWORD=your-email-password
```

**Option 3: Port 587 (TLS)**
```env
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_USER=info@yourdomain.com
SMTP_PASSWORD=your-email-password
```

Note: If using port 587, you may need to modify the code to set `secure: false`

## Finding Your Siteground SMTP Settings

1. Log in to Siteground
2. Go to **Site Tools**
3. Navigate to **Email** → **Accounts**
4. Click on your email account
5. Look for **Mail Server Settings** or **Configuration**
6. Copy the SMTP settings

## Checking Vercel Logs

1. Go to Vercel Dashboard
2. Select your project
3. Click on **Deployments**
4. Click on the latest deployment
5. Click **Functions** tab
6. Look for `/api/send-email` logs

## Testing Locally

1. Make sure `.env.local` exists with all variables
2. Restart your dev server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000/api/test-email`
4. Check terminal for console logs
5. Check your email inbox

## Testing in Production

1. Make sure environment variables are set in Vercel
2. Redeploy your application
3. Visit `https://your-site.vercel.app/api/test-email`
4. Check Vercel function logs
5. Check your email inbox

## Debug Checklist

- [ ] All 4 environment variables are set (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD)
- [ ] Email address is complete (e.g., info@yourdomain.com, not just info)
- [ ] Password is correct (no extra spaces)
- [ ] SMTP host is correct (check Siteground)
- [ ] Port is correct (usually 465 or 587)
- [ ] Email account exists and is active in Siteground
- [ ] Email quota is not exceeded
- [ ] Checked spam/junk folder
- [ ] Tested with `/api/test-email` endpoint
- [ ] Checked Vercel logs for errors
- [ ] Redeployed after adding environment variables

## Still Not Working?

### Contact Siteground Support

1. Live chat available 24/7
2. Ask: "What are the SMTP settings for my email account [your-email@yourdomain.com]?"
3. They can verify:
   - Correct SMTP host
   - Correct port
   - If account is active
   - If there are any restrictions

### Alternative: Use a Different Email Service

If Siteground SMTP continues to have issues, you can use:

1. **SendGrid** (Free tier: 100 emails/day)
2. **Mailgun** (Free tier: 5,000 emails/month)
3. **AWS SES** (Very cheap, reliable)
4. **Resend** (Modern, developer-friendly)

Let me know if you need help setting up an alternative!

## Quick Commands

**Test email locally:**
```bash
curl http://localhost:3000/api/test-email
```

**Test email in production:**
```bash
curl https://your-site.vercel.app/api/test-email
```

**Check environment variables (local):**
```bash
cat .env.local
```

**Restart dev server:**
```bash
npm run dev
```

## Need More Help?

Email: info@bemdonna.com
Support: support@bemdonna.com

Include:
- Error message from `/api/test-email`
- Vercel logs (if in production)
- Your SMTP host (but NOT your password!)

