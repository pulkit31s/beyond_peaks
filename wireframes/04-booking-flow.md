# Booking Flow Pages - Wireframe & Component Specifications

## Flow Overview
**Multi-step Process:** Select Date → Participants → Details → Payment → Confirmation
**URL Pattern:** `/book/[trek-slug]` → `/book/[trek-slug]/payment` → `/book/[trek-slug]/confirmation`
**Progress Indicator:** Step tracker at top of each page

---

## Page 1: Booking Selection (Date & Participants)

### Header Section
**Padding:** 40px vertical, 120px horizontal
**Background:** White (#FFFFFF)

### Components:
- **Progress Stepper** (Horizontal, 4 steps)
  - **Step 1:** "Select Date" (Active, highlighted)
  - **Step 2:** "Participants" (Inactive)
  - **Step 3:** "Details" (Inactive)
  - **Step 4:** "Payment" (Inactive)
  - **Visual:** Connecting lines between steps
  - **Mobile:** Vertical stepper or simplified dots

- **Breadcrumb**
  - Copy: `Home > Explore Treks > [Trek Name] > Book Now`
  - Typography: Small, 14px, gray

- **Back Button**
  - Copy: `← Back to Trek Details`
  - Link: `/treks/[slug]`
  - Position: Top-left

---

### Main Content Area
**Layout:** 2-column (desktop) / 1-column (mobile)
**Padding:** 60px vertical, 120px horizontal

### Left Column: Booking Form

#### Section 1: Trek Summary Card
- **Trek Image:** Thumbnail, 120px width
- **Trek Name:** Bold, 20px
- **Quick Info:** Duration, Difficulty, Location
- **Package Selected:** (If pre-selected from detail page)
  - Display: "Base Package" / "Plus Package" / "Premium Package"
  - Price: "₹[Amount] per person"

#### Section 2: Select Departure Date
- **Title:** "Choose Your Departure Date"
- **Calendar Component:**
  - **Available Dates:** Green highlight, clickable
  - **Unavailable Dates:** Grayed out, disabled
  - **Selected Date:** Forest green background, white text
  - **Today:** Blue border
  - **Next 6 Months:** Visible by default
  - **Navigation:** Previous/Next month arrows
  
- **Date Information** (Below calendar)
  - **Selected Date Display:**
    - Copy: `Selected: [Day], [Month] [Date], [Year]`
    - Typography: Bold, 18px
  
  - **Departure Details:**
    - Start Date: [Date]
    - End Date: [Date]
    - Duration: [X] days
    - Slots Available: [X] slots left
  
  - **Warning Messages:**
    - If < 5 slots: "Filling Fast - Book soon!"
    - If last date: "Last departure for this season"

#### Section 3: Select Package (If not pre-selected)
- **Title:** "Choose Your Package"
- **Package Cards** (3 options, horizontal)
  - **Base Package:**
    - Price: ₹[Amount]
    - Key Inclusions: Bullet list (3-4 items)
    - CTA: "Select Base"
  
  - **Plus Package:** (Recommended badge)
    - Price: ₹[Amount]
    - Badge: "Most Popular"
    - Key Inclusions: Extended list
    - CTA: "Select Plus"
  
  - **Premium Package:**
    - Price: ₹[Amount]
    - Key Inclusions: Full list
    - CTA: "Select Premium"

- **Package Comparison Link:**
  - Copy: "Compare all packages →"
  - Action: Expands comparison table

#### Section 4: Number of Participants
- **Title:** "How Many Adventurers?"
- **Participant Selector:**
  - **Input Type:** Number input with +/- buttons
  - **Range:** 1-10 (or max slots available)
  - **Default:** 1
  - **Display:** Large number, bold
  
- **Group Discount Notice:** (If applicable)
  - Copy: "Groups of 4+ get 10% discount"
  - Style: Green badge/notice

- **Participant Details Preview:** (If > 1)
  - Copy: "You'll enter details for each participant on the next step"
  - Typography: Small, gray

---

### Right Column: Booking Summary (Sticky Card)
**Position:** Sticky top, 120px from top
**Background:** Light gray (#F5F5F5)
**Padding:** 24px
**Border-radius:** 8px

### Components:
- **Title:** "Booking Summary"
- **Trek Name:** Bold, 18px
- **Departure Date:** Regular, 14px
  - Copy: `[Date] - [Date]`
- **Package:** Regular, 14px
  - Copy: `[Package Name]`
- **Participants:** Regular, 14px
  - Copy: `[X] person(s)`
- **Price Breakdown:**
  - Package Price: `₹[Amount] × [X] = ₹[Total]`
  - Group Discount: (If applicable) `-₹[Amount]`
  - Service Fee: `₹[Amount]`
  - Taxes: `₹[Amount]`
  - **Total:** Bold, 24px, forest green
    - Copy: `₹[Total Amount]`
- **Trust Badges:**
  - ✅ "Free Cancellation (30 days)"
  - ✅ "Secure Payment"
  - ✅ "Instant Confirmation"
- **Continue Button:**
  - Copy: `Continue to Details`
  - Variant: Large, primary, full-width
  - State: Disabled until date + participants selected → Enabled
  - Action: Navigate to next step

---

### Bottom Navigation
**Padding:** 40px vertical
**Layout:** Flex, space-between

- **Back Button:** "← Back"
- **Continue Button:** "Continue →" (Same as summary card)

---

## Page 2: Participant Details

### Header Section
**Same as Page 1, with Step 2 active**

### Main Content Area
**Layout:** 2-column (desktop) / 1-column (mobile)

### Left Column: Participant Forms

#### Section 1: Primary Contact (Always Required)
- **Title:** "Primary Contact"
- **Subtitle:** "This person will receive all booking confirmations"
- **Form Fields:**
  - **Full Name:** (Required)
    - Placeholder: "Enter full name"
    - Validation: Min 2 characters
  
  - **Email:** (Required)
    - Placeholder: "your.email@example.com"
    - Validation: Email format
  
  - **Phone:** (Required)
    - Placeholder: "+91 [10 digits]"
    - Format: Country code + number
    - Validation: Valid phone format
  
  - **Date of Birth:** (Required)
    - Component: Date picker
    - Purpose: Age verification for difficulty
  
  - **Emergency Contact Name:** (Required)
    - Placeholder: "Emergency contact full name"
  
  - **Emergency Contact Phone:** (Required)
    - Placeholder: "+91 [10 digits]"
    - Note: "Must be different from your phone"

#### Section 2: Additional Participants (If > 1)
- **Title:** "Additional Participants"
- **Subtitle:** "Add details for each person joining this trek"
- **Participant Cards:** (One per additional person)
  - **Card Header:**
    - Copy: `Participant [Number]`
    - Remove Button: (X icon)
  
  - **Form Fields:** (Same as primary contact)
    - Full Name (Required)
    - Email (Required)
    - Phone (Required)
    - Date of Birth (Required)
    - Emergency Contact Name (Required)
    - Emergency Contact Phone (Required)
  
  - **Relationship to Primary:** (Optional)
    - Dropdown: "Friend", "Family", "Colleague", "Other"

- **Add Participant Button:** (If under max)
  - Copy: `+ Add Another Participant`
  - Action: Adds new participant card

#### Section 3: Special Requirements
- **Title:** "Special Requirements" (Optional)
- **Dietary Restrictions:**
  - Component: Checkboxes
  - Options: Vegetarian, Vegan, Gluten-free, No nuts, Other
  - Other Field: Text input (if "Other" selected)
  
- **Medical Conditions:**
  - Component: Textarea
  - Placeholder: "Please disclose any medical conditions, allergies, or medications..."
  - Note: "This information is confidential and helps us ensure your safety"
  
- **Accessibility Needs:**
  - Component: Checkboxes
  - Options: Mobility assistance, Dietary restrictions, Other
  - Other Field: Text input

#### Section 4: Additional Information
- **Title:** "Tell Us More" (Optional)
- **How did you hear about us?**
  - Dropdown: Instagram, Facebook, Friend referral, Google search, Other
  
- **Previous Trekking Experience:**
  - Component: Radio buttons
  - Options: None, 1-2 treks, 3-5 treks, 5+ treks
  
- **Special Requests:**
  - Component: Textarea
  - Placeholder: "Any special requests or questions..."

---

### Right Column: Booking Summary (Updated)
**Same sticky card as Page 1, with:**
- Updated participant count
- Updated total price
- Continue button: "Continue to Payment"

---

### Form Validation
- **Real-time Validation:** Error messages appear below fields
- **Required Fields:** Red border + error message
- **Email Format:** Validation on blur
- **Phone Format:** Auto-formatting as user types
- **Date Validation:** Must be 18+ for difficult treks

---

## Page 3: Payment

### Header Section
**Same as previous pages, with Step 4 active**

### Main Content Area
**Layout:** 2-column (desktop) / 1-column (mobile)

### Left Column: Payment Form

#### Section 1: Payment Method Selection
- **Title:** "Select Payment Method"
- **Payment Options:** (Radio buttons, card-style)
  - **Card 1: Credit/Debit Card**
    - Icon: Visa, Mastercard, Amex logos
    - Selected: Green border
  
  - **Card 2: UPI**
    - Icon: UPI logo
    - Options: Google Pay, PhonePe, Paytm, BHIM
  
  - **Card 3: Net Banking**
    - Icon: Bank icon
    - Dropdown: Select bank
  
  - **Card 4: Wallet**
    - Icon: Wallet logos
    - Options: Paytm Wallet, Amazon Pay

#### Section 2: Card Details (If card selected)
- **Card Number:**
  - Input: 16 digits, auto-format (spaces every 4 digits)
  - Icon: Card type icon (Visa/Mastercard) appears when detected
  - Validation: Luhn algorithm
  
- **Cardholder Name:**
  - Placeholder: "Name on card"
  - Validation: Letters and spaces only
  
- **Expiry Date:**
  - Input: MM/YY format
  - Validation: Future date
  
- **CVV:**
  - Input: 3-4 digits
  - Icon: Info tooltip ("3 digits on back of card")
  - Masked: Shows dots after typing

#### Section 3: UPI Details (If UPI selected)
- **UPI ID:**
  - Input: "yourname@upi"
  - Validation: UPI format
  - Button: "Verify UPI ID"
  
- **QR Code Option:**
  - Copy: "Or scan QR code to pay"
  - Component: QR code display
  - Instructions: "Scan with your UPI app"

#### Section 4: Promo Code
- **Input Field:**
  - Placeholder: "Enter promo code"
  - Button: "Apply"
  - Success: Green checkmark + discount applied
  - Error: "Invalid code" message

#### Section 5: Terms & Conditions
- **Checkbox:** (Required)
  - Copy: "I agree to the Terms & Conditions and Cancellation Policy"
  - Link: Opens terms modal/page
  
- **Checkbox:** (Optional)
  - Copy: "Subscribe to newsletter for trek updates and offers"

---

### Right Column: Final Booking Summary
**Same sticky card, with final details:**

- **Trek:** [Name]
- **Date:** [Start] - [End]
- **Package:** [Package Name]
- **Participants:** [X] person(s)
  - List: Names (if space allows)
- **Price Breakdown:**
  - Package: ₹[Amount]
  - Discount: -₹[Amount] (if applied)
  - Service Fee: ₹[Amount]
  - Taxes: ₹[Amount]
  - **Total:** ₹[Total] (Large, bold)
- **Payment Security:**
  - 🔒 "256-bit SSL encryption"
  - 🔒 "PCI DSS compliant"
- **Pay Button:**
  - Copy: `Pay ₹[Total]`
  - Variant: Large, primary, full-width
  - State: Loading spinner during payment
  - Icon: Lock icon

---

### Payment Processing States

1. **Initial:** Form ready, pay button enabled
2. **Processing:** Spinner, "Processing payment..." message
3. **Success:** Redirect to confirmation page
4. **Error:** Error message, retry button
5. **Pending:** (For UPI/Net Banking) "Payment pending, check status"

---

## Page 4: Booking Confirmation

### Success Header
**Padding:** 80px vertical, 120px horizontal
**Background:** Light green (#E8F5E9)

### Components:
- **Success Icon:** Large checkmark circle (green)
- **Headline:**
  - Copy: `Booking Confirmed! 🎉`
  - Typography: Bold, 48px, forest green
  
- **Confirmation Message:**
  - Copy: `Your adventure is booked. We've sent a confirmation email to [email].`
  - Typography: Regular, 20px, gray

- **Booking Reference:**
  - Copy: `Booking ID: [BP-XXXXXX]`
  - Typography: Bold, 24px, monospace
  - Note: "Save this for your records"

---

### Main Content Area
**Padding:** 60px vertical, 120px horizontal

### Section 1: Booking Details Card
- **Trek Name:** Bold, 24px
- **Departure Date:** Regular, 18px
- **Participants:** List of names
- **Package:** Package name
- **Total Paid:** ₹[Amount]

### Section 2: Next Steps
- **Title:** "What's Next?"
- **Steps:**
  1. **Check Your Email**
     - Copy: "We've sent booking confirmation and payment receipt"
     - Icon: Email
  
  2. **Join WhatsApp Group**
     - Copy: "Get added to the trek group for updates and coordination"
     - Button: "Join Group" (WhatsApp link)
     - Icon: WhatsApp
  
  3. **Download Itinerary**
     - Copy: "Download detailed itinerary and packing list"
     - Button: "Download PDF"
     - Icon: Download
  
  4. **Prepare for Your Trek**
     - Copy: "Check our preparation guide and gear checklist"
     - Link: "View Guide →"
     - Icon: Checklist

### Section 3: Important Information
- **Title:** "Important Reminders"
- **Items:**
  - ⚠️ "Travel insurance is mandatory (purchase if not done)"
  - 📋 "Complete health declaration form (link sent via email)"
  - 🎒 "Review packing list and gear requirements"
  - 📞 "Contact us if you have questions: [phone/email]"

### Section 4: Cancellation Policy
- **Title:** "Cancellation Policy"
- **Content:** Brief summary
  - Copy: "Free cancellation up to 30 days before departure. 50% refund 15-30 days before. No refund within 15 days."
  - Link: "View full policy →"

---

### Action Buttons
**Layout:** Horizontal, centered, 24px gap

- **Button 1:** "View Booking Details"
  - Link: `/dashboard/bookings/[booking-id]`
  - Variant: Primary
  
- **Button 2:** "Explore More Treks"
  - Link: `/explore-treks`
  - Variant: Secondary

---

## Email Confirmation (Reference)

### Email Components:
- **Subject:** "Booking Confirmed - [Trek Name] | Beyond Peaks"
- **Header:** Logo + "Booking Confirmed"
- **Content:**
  - Greeting
  - Booking reference
  - Trek details
  - Payment receipt
  - Next steps
  - Contact information
- **Footer:** Social links, unsubscribe

---

## Mobile-Specific Adaptations

1. **Stepper:** Simplified dots or vertical layout
2. **Summary Card:** Moves below form, not sticky
3. **Calendar:** Full-width, touch-optimized
4. **Payment Forms:** Larger inputs, simplified layout
5. **Confirmation:** Single column, simplified steps

---

## Component States Summary

### Forms
- **Default:** White background, gray border
- **Focus:** Green border, shadow
- **Error:** Red border, error message below
- **Success:** Green border, checkmark icon
- **Disabled:** Grayed out, cursor not-allowed

### Buttons
- **Default:** Primary styling
- **Hover:** Scale 1.02, shadow increase
- **Loading:** Spinner, disabled
- **Success:** Checkmark, green background
- **Disabled:** Grayed out, no interaction

### Payment
- **Processing:** Loading overlay, disable form
- **Success:** Success message, redirect
- **Error:** Error message, retry option
- **Pending:** Status message, check later

---

## Copy Guidelines

- **Tone:** Clear, reassuring, helpful
- **CTAs:** Action-oriented ("Continue", "Pay Now", "Download")
- **Error Messages:** Helpful, specific ("Please enter a valid email address")
- **Success Messages:** Celebratory but professional
- **Instructions:** Step-by-step, concise

---

## Security & Trust Elements

- SSL badge on payment page
- PCI DSS compliance notice
- Secure payment gateway logos
- Privacy policy link
- Terms & conditions checkbox
- Trust badges throughout flow
