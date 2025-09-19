#!/usr/bin/env node

/**
 * EmailJS Setup Script
 * This script helps you set up EmailJS for the contact form
 */

console.log('🚀 EmailJS Setup for SpeaKraft Contact Form');
console.log('==========================================\n');

console.log('📋 Step-by-step setup instructions:');
console.log('1. Go to https://www.emailjs.com/ and create a free account');
console.log('2. Create a new email service (Gmail recommended)');
console.log('3. Create an email template with these variables:');
console.log('   - {{from_name}} - sender\'s name');
console.log('   - {{from_email}} - sender\'s email');
console.log('   - {{subject}} - email subject');
console.log('   - {{message}} - email message');
console.log('   - {{to_email}} - recipient email');
console.log('4. Get your Service ID, Template ID, and Public Key from the dashboard');
console.log('5. Update the configuration in src/config/emailjs.ts\n');

console.log('🔧 Quick Configuration:');
console.log('Open src/config/emailjs.ts and replace these values:');
console.log('- SERVICE_ID: "your_actual_service_id"');
console.log('- TEMPLATE_ID: "your_actual_template_id"');
console.log('- PUBLIC_KEY: "your_actual_public_key"\n');

console.log('📧 Email Template Example:');
console.log('Subject: New Contact Form Message - {{subject}}');
console.log('');
console.log('From: {{from_name}} ({{from_email}})');
console.log('Subject: {{subject}}');
console.log('');
console.log('Message:');
console.log('{{message}}');
console.log('');
console.log('---');
console.log('This message was sent from the SpeaKraft website contact form.\n');

console.log('✅ After setup, test the contact form to ensure emails are sent to SpeaKraft2025@gmail.com');
console.log('📚 For detailed instructions, see EMAILJS_SETUP.md');
