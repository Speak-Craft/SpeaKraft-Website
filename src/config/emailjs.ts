// EmailJS Configuration
// You need to set up EmailJS account and get these values from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your actual EmailJS service ID
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_emh8vjm',
  
  // Your actual EmailJS template ID (corrected)
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_mogvs2b',
  
  // Your actual EmailJS public key
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Ljar5tyg_GQtrL-Tr',
  
  // Target email address
  TO_EMAIL: 'SpeaKraft2025@gmail.com'
};

// Check if EmailJS is properly configured
export const isEmailJSConfigured = () => {
  // EmailJS is now properly configured with real credentials
  return EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY' && 
         EMAILJS_CONFIG.SERVICE_ID !== 'service_speakraft' && 
         EMAILJS_CONFIG.TEMPLATE_ID !== 'template_speakraft';
};

// Instructions for setup:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email (user's email)
//    - {{subject}} - email subject
//    - {{message}} - email message
//    - {{to_email}} - recipient email (SpeaKraft2025@gmail.com)
//
// Email Template Example:
// To: {{to_email}}
// From: {{from_email}}
// Subject: New Contact Form Message - {{subject}}
//
// From: {{from_name}} ({{from_email}})
// Subject: {{subject}}
//
// Message:
// {{message}}
//
// ---
// This message was sent from the SpeaKraft website contact form.
//
// 4. Get your Service ID, Template ID, and Public Key from the dashboard
// 5. Replace the values above with your actual credentials
// 6. Update the ContactSection.tsx to import and use these values
