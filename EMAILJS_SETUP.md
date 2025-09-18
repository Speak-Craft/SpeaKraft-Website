# EmailJS Setup Guide

This guide will help you set up EmailJS to enable automatic email sending from the contact form to SpeaKraft2025@gmail.com.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your email provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
To: {{to_email}}
From: {{from_email}}
Subject: New Contact Form Message - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the SpeaKraft website contact form.
```

**Important:** This template will send emails FROM the user's email address TO SpeaKraft2025@gmail.com

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123def456`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id', 
  PUBLIC_KEY: 'your_actual_public_key',
  TO_EMAIL: 'SpeaKraft2025@gmail.com'
};
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out the form and click "Send Message"
4. Check SpeaKraft2025@gmail.com for the test email

## Troubleshooting

- **Email not received**: Check spam folder
- **Error sending**: Verify all IDs and keys are correct
- **Template issues**: Ensure template variables match exactly
- **Service issues**: Check email service configuration

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The free plan allows 200 emails per month

## Support

If you encounter issues:
1. Check EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Verify your email service is properly configured
3. Test with a simple template first
