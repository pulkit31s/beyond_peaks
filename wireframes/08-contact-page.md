# Contact Page - Wireframe & Component Specifications

## Page Structure Overview
**URL Pattern:** `/contact`
**Layout:** Two-column (form + info) or single column (mobile)

---

## Page Header
**Padding:** 60px vertical, 120px horizontal
**Background:** Forest green (#234733) gradient

### Components:
- **Breadcrumb**
  - Copy: `Home > Contact`
  - Typography: Small, 14px, white, 80% opacity

- **Page Title**
  - Copy: `Get in Touch`
  - Typography: Bold, 56px (desktop) / 40px (mobile), white

- **Subtitle**
  - Copy: `Have questions? We're here to help. Reach out and let's plan your next adventure together.`
  - Typography: Regular, 20px, white, 90% opacity

---

## Main Content Area
**Padding:** 80px vertical, 120px horizontal
**Layout:** 2-column (desktop) / 1-column (mobile)
**Gap:** 60px

---

## Left Column: Contact Form
**Width:** 60% (desktop) / 100% (mobile)

### Components:
- **Form Title**
  - Copy: `Send Us a Message`
  - Typography: Bold, 32px, forest green

- **Form Subtitle**
  - Copy: `Fill out the form below and we'll get back to you within 24 hours.`
  - Typography: Regular, 16px, gray

- **Contact Form Fields:**

  - **Name Field:** (Required)
    - Label: "Full Name"
    - Placeholder: "Enter your full name"
    - Type: Text
    - Validation: Min 2 characters, letters and spaces only
    - Error Message: "Please enter a valid name"
  
  - **Email Field:** (Required)
    - Label: "Email Address"
    - Placeholder: "your.email@example.com"
    - Type: Email
    - Validation: Valid email format
    - Error Message: "Please enter a valid email address"
  
  - **Phone Field:** (Required)
    - Label: "Phone Number"
    - Placeholder: "+91 [10 digits]"
    - Type: Tel
    - Format: Auto-format with country code
    - Validation: Valid phone format
    - Error Message: "Please enter a valid phone number"
  
  - **Subject Dropdown:** (Required)
    - Label: "Subject"
    - Options:
      - "General Inquiry"
      - "Trek Booking Question"
      - "Group Booking"
      - "Custom Trek Request"
      - "Partnership Inquiry"
      - "Media/Press Inquiry"
      - "Other"
    - Default: "Select a subject"
  
  - **Trek Interest:** (Optional, if subject is trek-related)
    - Label: "Which trek are you interested in?"
    - Component: Searchable dropdown or autocomplete
    - Options: List of all treks
    - Placeholder: "Search treks..."
  
  - **Message Field:** (Required)
    - Label: "Your Message"
    - Placeholder: "Tell us how we can help you..."
    - Type: Textarea
    - Rows: 6
    - Character Count: (Optional) "X / 1000 characters"
    - Validation: Min 10 characters
    - Error Message: "Please enter at least 10 characters"
  
  - **Preferred Contact Method:** (Optional)
    - Label: "How would you like us to reach you?"
    - Component: Radio buttons
    - Options:
      - "Email"
      - "Phone"
      - "WhatsApp"
      - "Any of the above"
    - Default: "Any of the above"
  
  - **Newsletter Checkbox:** (Optional)
    - Copy: "Subscribe to our newsletter for trek updates and exclusive offers"
    - Component: Checkbox
    - Default: Unchecked

- **Submit Button**
  - Copy: `Send Message`
  - Variant: Large, primary, full-width
  - Icon: Send icon (right side)
  - State: Default → Loading (spinner) → Success → Reset form

- **Form States:**
  - **Default:** All fields empty, submit disabled until required fields filled
  - **Typing:** Real-time validation, error messages appear below fields
  - **Submitting:** Loading spinner, form disabled
  - **Success:** Success message, form reset, thank you message
  - **Error:** Error message, form remains filled, retry option

---

## Right Column: Contact Information
**Width:** 40% (desktop) / 100% (mobile)

### Components:
- **Section Title**
  - Copy: `Contact Information`
  - Typography: Bold, 32px, forest green

- **Contact Methods Cards:**

  - **Card 1: Phone**
    - **Icon:** Phone icon (large)
    - **Title:** "Call Us"
    - **Primary Number:**
      - Copy: `+91 [XXX] [XXX] [XXXX]`
      - Link: `tel:+91XXXXXXXXXX`
      - Typography: Bold, 20px, forest green
    
    - **Secondary Number:** (If available)
      - Copy: `+91 [XXX] [XXX] [XXXX]`
      - Link: `tel:+91XXXXXXXXXX`
      - Typography: Regular, 16px, gray
    
    - **Timing:**
      - Copy: "Mon-Sat: 9 AM - 7 PM IST"
      - Typography: Small, 14px, gray
  
  - **Card 2: Email**
    - **Icon:** Email icon (large)
    - **Title:** "Email Us"
    - **Primary Email:**
      - Copy: `hello@beyondpeaks.com`
      - Link: `mailto:hello@beyondpeaks.com`
      - Typography: Bold, 18px, forest green
    
    - **Secondary Email:** (If available)
      - Copy: `bookings@beyondpeaks.com`
      - Link: `mailto:bookings@beyondpeaks.com`
      - Typography: Regular, 16px, gray
    
    - **Response Time:**
      - Copy: "We respond within 24 hours"
      - Typography: Small, 14px, gray
  
  - **Card 3: WhatsApp**
    - **Icon:** WhatsApp icon (large, green)
    - **Title:** "Chat on WhatsApp"
    - **Number:**
      - Copy: `+91 [XXX] [XXX] [XXXX]`
      - Link: WhatsApp deep link
      - Typography: Bold, 18px, forest green
    
    - **CTA Button:**
      - Copy: `Chat Now`
      - Variant: Medium, WhatsApp green background
      - Icon: WhatsApp icon
      - Action: Opens WhatsApp chat
    
    - **Note:**
      - Copy: "Quick responses for booking inquiries"
      - Typography: Small, 14px, gray
  
  - **Card 4: Office Address** (If applicable)
    - **Icon:** Map pin icon (large)
    - **Title:** "Visit Us"
    - **Address:**
      - Copy: Multi-line address
      - Typography: Regular, 16px, gray
      - Example:
        ```
        123 Adventure Street
        Mountain View District
        [City], [State] [PIN]
        India
        ```
    
    - **Map Link:**
      - Copy: "View on Google Maps →"
      - Link: Google Maps URL
      - Typography: Small, green text

- **Social Media Links:**
  - **Title:** "Follow Us"
  - **Icons:** Instagram, Facebook, YouTube, LinkedIn
  - **Layout:** Horizontal flex, 16px gap
  - **Hover:** Scale increase, color change

---

## Section 2: Frequently Asked Questions
**Padding:** 80px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Section Title**
  - Copy: `Frequently Asked Questions`
  - Typography: Bold, 48px, forest green
  - Alignment: Center

- **FAQ Accordion:** (5-7 common questions)
  - **Question 1:**
    - Q: "How do I book a trek?"
    - A: "You can book directly on our website by selecting your preferred trek and departure date, or contact us for assistance..."
  
  - **Question 2:**
    - Q: "What is included in the trek price?"
    - A: "Our trek packages include accommodation, meals, guide services, permits, and more. See each trek's detail page for full inclusions..."
  
  - **Question 3:**
    - Q: "Do I need travel insurance?"
    - A: "Yes, comprehensive travel insurance covering high-altitude trekking is mandatory for all participants..."
  
  - **Question 4:**
    - Q: "Can I customize a trek itinerary?"
    - A: "Yes, we offer custom trek options for groups. Contact us with your requirements..."
  
  - **Question 5:**
    - Q: "What is your cancellation policy?"
    - A: "Free cancellation up to 30 days before departure. See our full cancellation policy..."
  
  - **Question 6:**
    - Q: "How do I prepare for a high-altitude trek?"
    - A: "We provide detailed preparation guides, fitness checklists, and gear lists. Check our Stories section for tips..."
  
  - **Question 7:**
    - Q: "Do you offer group discounts?"
    - A: "Yes, groups of 4+ receive discounts. Contact us for group booking rates..."

- **View All FAQs Link:**
  - Copy: `View All FAQs →`
  - Link: `/faqs` (if separate page exists)
  - Typography: Regular, 18px, green text

---

## Section 3: Quick Contact Options
**Padding:** 80px vertical, 120px horizontal
**Background:** White (#FFFFFF)

### Components:
- **Section Title**
  - Copy: `Quick Contact Options`
  - Typography: Bold, 32px, forest green
  - Alignment: Center

- **Quick Action Cards:** (3 columns desktop, 1 mobile)
  - **Card 1: Book a Call**
    - **Icon:** Calendar/phone icon
    - **Title:** "Schedule a Call"
    - **Description:** "Book a 15-minute call to discuss your trek plans"
    - **CTA Button:** "Book Now"
    - **Link:** Calendar booking system or contact form with "Schedule Call" subject
  
  - **Card 2: WhatsApp Quick Chat**
    - **Icon:** WhatsApp icon (green)
    - **Title:** "Quick WhatsApp Chat"
    - **Description:** "Get instant answers to your questions"
    - **CTA Button:** "Chat Now"
    - **Link:** WhatsApp deep link
  
  - **Card 3: Email Inquiry**
    - **Icon:** Email icon
    - **Title:** "Send Detailed Inquiry"
    - **Description:** "For complex questions or custom requests"
    - **CTA Button:** "Send Email"
    - **Link:** Scrolls to contact form or opens email client

---

## Section 4: Office Hours & Response Times
**Padding:** 60px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Info Card:** (Centered, max-width 600px)
  - **Title:** "When Can You Reach Us?"
  - **Typography:** Bold, 24px, forest green
  
  - **Office Hours:**
    - **Weekdays:**
      - Copy: "Monday - Friday: 9:00 AM - 7:00 PM IST"
      - Typography: Regular, 18px, gray
    
    - **Weekends:**
      - Copy: "Saturday: 10:00 AM - 5:00 PM IST"
      - Typography: Regular, 18px, gray
    
    - **Sunday:**
      - Copy: "Sunday: Closed (Emergency support available)"
      - Typography: Regular, 18px, gray
  
  - **Response Times:**
    - **Email:** "Within 24 hours"
    - **WhatsApp:** "Within 2-4 hours"
    - **Phone:** "Immediate (during office hours)"
    - **Typography:** Regular, 16px, gray

---

## Section 5: Map Location (If office exists)
**Padding:** 80px vertical, 120px horizontal
**Background:** White (#FFFFFF)

### Components:
- **Section Title**
  - Copy: `Find Us`
  - Typography: Bold, 32px, forest green

- **Embedded Map:**
  - Component: Google Maps embed
  - Height: 400px
  - Width: 100%
  - Interactive: Yes
  - Marker: Office location

- **Address Below Map:**
  - Copy: Full address
  - Typography: Regular, 16px, gray
  - Link: "Get Directions" button

---

## Success Message (After Form Submission)
**Padding:** 40px vertical, 120px horizontal
**Background:** Light green (#E8F5E9)

### Components:
- **Success Icon:** Large checkmark circle (green)
- **Headline:**
  - Copy: `Thank You for Contacting Us!`
  - Typography: Bold, 32px, forest green
  
- **Message:**
  - Copy: `We've received your message and will get back to you within 24 hours. In the meantime, feel free to explore our treks or check out our FAQ section.`
  - Typography: Regular, 18px, gray
  
- **Action Buttons:**
  - "Explore Treks" (primary)
  - "View FAQs" (secondary)

---

## Mobile-Specific Adaptations

1. **Two-column layout:** Stacks vertically
2. **Contact info cards:** Full-width, simplified
3. **Form:** Full-width inputs, larger touch targets
4. **Map:** Full-width, reduced height (300px)
5. **Quick actions:** Single column
6. **Social links:** Horizontal scroll if many

---

## Component States Summary

### Form Fields
- **Default:** White background, gray border
- **Focus:** Green border, shadow, label moves up (if floating)
- **Error:** Red border, error message below
- **Success:** Green border, checkmark icon
- **Disabled:** Grayed out, cursor not-allowed

### Buttons
- **Default:** Primary/secondary styling
- **Hover:** Scale 1.02, shadow increase
- **Loading:** Spinner, disabled
- **Success:** Checkmark, green background
- **Disabled:** Grayed out, no interaction

### Contact Cards
- **Default:** White background, subtle shadow
- **Hover:** Shadow increase, slight lift
- **Click:** Opens link/app (phone, email, WhatsApp)

---

## Copy Guidelines

- **Tone:** Friendly, helpful, approachable
- **Form Labels:** Clear, concise
- **Placeholders:** Helpful examples
- **Error Messages:** Specific, actionable
- **Success Message:** Reassuring, next steps
- **Contact Info:** Professional, accessible

---

## Accessibility Considerations

- **Form Labels:** Properly associated with inputs
- **Error Messages:** Announced to screen readers
- **Keyboard Navigation:** Full support
- **Focus Indicators:** Clear, visible
- **Color Contrast:** WCAG AA compliant
- **Alt Text:** Descriptive for icons/images

---

## Integration Notes

- **Form Submission:** POST to API endpoint
- **Email Service:** SendGrid/Resend for email notifications
- **WhatsApp:** Deep link format: `https://wa.me/91XXXXXXXXXX`
- **Phone:** `tel:` protocol links
- **Email:** `mailto:` protocol links
- **Calendar:** Calendly or similar integration
- **Map:** Google Maps embed API

---

## Spam Prevention

- **Honeypot Field:** Hidden field (not filled by humans)
- **Rate Limiting:** Max 3 submissions per hour per IP
- **CAPTCHA:** Optional, only if spam becomes issue
- **Validation:** Server-side validation required

---

## Analytics & Tracking

- **Form Interactions:** Track field focus, completion rate
- **Contact Method Clicks:** Track which methods are used most
- **Form Abandonment:** Track if users start but don't submit
- **Success Rate:** Track successful submissions
