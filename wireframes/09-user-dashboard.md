# User Dashboard - Wireframe & Component Specifications

## Page Structure Overview
**URL Pattern:** `/dashboard` (main) → `/dashboard/bookings`, `/dashboard/saved-treks`, `/dashboard/profile`, `/dashboard/payments`
**Layout:** Sidebar navigation + Main content area
**Authentication:** Required (redirects to login if not authenticated)

---

## Dashboard Layout Structure

### Sidebar Navigation (Desktop)
**Width:** 280px
**Background:** White (#FFFFFF)
**Position:** Fixed left, sticky
**Height:** 100vh
**Shadow:** Right border shadow

### Components:
- **User Profile Section:** (Top of sidebar)
  - **Avatar:** Circular image, 80px diameter
  - **Name:** Bold, 20px, forest green
  - **Email:** Regular, 14px, gray
  - **Edit Profile Link:** Small text, green, "Edit →"
  - **Padding:** 24px

- **Navigation Menu:**
  - **Menu Items:** (Vertical list)
    - **Dashboard** (Home icon)
      - Active: Green background, white text
      - Inactive: Gray text
      - Link: `/dashboard`
    
    - **My Bookings** (Calendar icon)
      - Badge: Count `([X])` (if bookings exist)
      - Link: `/dashboard/bookings`
    
    - **Saved Treks** (Heart/Bookmark icon)
      - Badge: Count `([X])` (if saved treks exist)
      - Link: `/dashboard/saved-treks`
    
    - **Payment History** (Credit card icon)
      - Link: `/dashboard/payments`
    
    - **Profile Settings** (User icon)
      - Link: `/dashboard/profile`
    
    - **Notifications** (Bell icon)
      - Badge: Count `([X])` (if unread notifications)
      - Link: `/dashboard/notifications`
  
  - **Divider:** Horizontal line
  
  - **Support Links:**
    - "Help Center" (Help icon)
    - "Contact Support" (Message icon)
  
  - **Logout Button:** (Bottom of sidebar)
    - Copy: `Log Out`
    - Variant: Text link, red color
    - Icon: Logout icon
    - Action: Confirms logout, clears session

- **Mobile:** Hamburger menu, slide-out drawer

---

## Main Dashboard Page (`/dashboard`)

### Header Section
**Padding:** 40px vertical, 60px horizontal
**Background:** White (#FFFFFF)
**Border-bottom:** 1px solid light gray

### Components:
- **Page Title:**
  - Copy: `Welcome back, [First Name]!`
  - Typography: Bold, 32px, forest green

- **Subtitle:**
  - Copy: `Here's an overview of your adventures with Beyond Peaks`
  - Typography: Regular, 16px, gray

---

### Dashboard Widgets Grid
**Padding:** 40px vertical, 60px horizontal
**Layout:** 2 columns (desktop) / 1 column (mobile)
**Gap:** 24px

### Widget 1: Upcoming Trips
- **Card Components:**
  - **Header:**
    - Title: "Upcoming Trips"
    - Count Badge: `([X])`
    - View All Link: "View All →"
  
  - **Trip Card:** (If trips exist)
    - **Trek Image:** Thumbnail, 120px width
    - **Trek Name:** Bold, 18px
    - **Departure Date:** Regular, 14px
      - Copy: `[Date] - [Date]`
    - **Status Badge:** "Confirmed" (green) / "Pending Payment" (amber)
    - **Days Until:** "Departs in [X] days"
    - **Action Button:** "View Details"
  
  - **Empty State:** (If no trips)
    - Icon: Calendar icon
    - Message: "No upcoming trips"
    - CTA: "Explore Treks" button

---

### Widget 2: Recent Bookings
- **Card Components:**
  - **Header:**
    - Title: "Recent Bookings"
    - View All Link: "View All →"
  
  - **Booking List:** (Last 3-5 bookings)
    - **Booking Item:**
      - Trek Name: Bold, 16px
      - Booking ID: Small, gray, monospace
      - Date: Regular, 14px
      - Status: Badge (Confirmed/Pending/Cancelled)
      - Amount: Bold, 16px
      - Link: "View Details →"
  
  - **Empty State:** (If no bookings)
    - Message: "No bookings yet"
    - CTA: "Book Your First Trek" button

---

### Widget 3: Saved Treks
- **Card Components:**
  - **Header:**
    - Title: "Saved Treks"
    - Count: `([X] treks)`
    - View All Link: "View All →"
  
  - **Trek Cards:** (3-4 cards, horizontal scroll on mobile)
    - **Card:**
      - Image: Thumbnail
      - Name: Bold, 16px
      - Price: Regular, 14px
      - Remove Button: X icon (hover)
      - Link: "View Details"
  
  - **Empty State:**
    - Message: "No saved treks"
    - CTA: "Explore Treks" button

---

### Widget 4: Quick Actions
- **Card Components:**
  - **Header:**
    - Title: "Quick Actions"
  
  - **Action Buttons:** (Grid, 2x2)
    - **Button 1:** "Book a Trek"
      - Icon: Plus icon
      - Link: `/explore-treks`
    
    - **Button 2:** "Download Itinerary"
      - Icon: Download icon
      - Link: (If booking exists) Downloads PDF
    
    - **Button 3:** "Contact Support"
      - Icon: Message icon
      - Link: `/contact`
    
    - **Button 4:** "View Payment History"
      - Icon: Credit card icon
      - Link: `/dashboard/payments`

---

### Widget 5: Account Summary
- **Card Components:**
  - **Header:**
    - Title: "Account Summary"
  
  - **Stats:**
    - **Total Bookings:** `[X] treks`
    - **Total Spent:** `₹[Amount]`
    - **Member Since:** `[Month] [Year]`
    - **Loyalty Points:** (If applicable) `[X] points`
  
  - **Progress Bar:** (If loyalty program)
    - Copy: "[X] points until next tier"
    - Visual: Progress bar

---

## My Bookings Page (`/dashboard/bookings`)

### Header Section
**Same as main dashboard**

### Filter Bar
**Padding:** 20px vertical, 60px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Filter Chips:**
  - "All" (Active)
  - "Upcoming"
  - "Past"
  - "Cancelled"
  
- **Sort Dropdown:**
  - Options: "Date (Newest)", "Date (Oldest)", "Amount (High to Low)", "Amount (Low to High)"

---

### Bookings List
**Padding:** 40px vertical, 60px horizontal

### Booking Card Components:
- **Card Layout:** (Full-width, horizontal)
  - **Trek Image:** Left side, 200px width
  
  - **Content:** (Middle, flex-grow)
    - **Trek Name:** Bold, 20px, forest green
    - **Booking ID:** Small, gray, monospace
      - Copy: `Booking ID: BP-XXXXXX`
    
    - **Departure Dates:**
      - Copy: `📅 [Start Date] - [End Date]`
      - Typography: Regular, 16px
    
    - **Participants:**
      - Copy: `👥 [X] person(s)`
      - List: Names (if space allows)
    
    - **Package:**
      - Copy: `Package: [Package Name]`
      - Typography: Regular, 14px
    
    - **Status Badge:**
      - "Confirmed" (green)
      - "Pending Payment" (amber)
      - "Cancelled" (red)
      - "Completed" (gray)
  
  - **Actions:** (Right side)
    - **Amount:** Bold, 24px, forest green
      - Copy: `₹[Total]`
    
    - **Action Buttons:**
      - "View Details" (Primary)
      - "Download Voucher" (Secondary, if confirmed)
      - "Cancel Booking" (Text link, if cancellable)
      - "Pay Balance" (Primary, if pending payment)

---

### Booking Detail Page (`/dashboard/bookings/[booking-id]`)

### Components:
- **Back Button:**
  - Copy: `← Back to Bookings`
  - Link: `/dashboard/bookings`

- **Booking Header:**
  - Trek Name: Bold, 32px
  - Booking ID: Regular, 16px, gray
  - Status Badge: Large badge

- **Booking Details Card:**
  - **Section 1: Trip Information**
    - Departure Dates
    - Duration
    - Starting Location
    - Package Selected
    - Participants List (with details)
  
  - **Section 2: Payment Information**
    - Total Amount
    - Amount Paid
    - Balance Due (if any)
    - Payment Method
    - Transaction ID
    - Payment Date
  
  - **Section 3: Important Documents**
    - Download Voucher Button
    - Download Itinerary Button
    - Download Receipt Button
  
  - **Section 4: Next Steps**
    - Checklist: Pre-trek requirements
    - WhatsApp Group Link
    - Contact Information

- **Action Buttons:**
  - "Pay Balance" (if balance due)
  - "Cancel Booking" (if cancellable)
  - "Contact Support"

---

## Saved Treks Page (`/dashboard/saved-treks`)

### Header Section
**Same as main dashboard**

### Saved Treks Grid
**Padding:** 40px vertical, 60px horizontal
**Layout:** 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)

### Trek Card Components:
- **Same as Explore Treks page cards, with:**
  - **Remove Button:** X icon, top-right corner
  - **Hover:** Remove button visible
  - **Action:** "View Details" button
  - **Empty State:** "No saved treks" message + "Explore Treks" CTA

---

## Payment History Page (`/dashboard/payments`)

### Header Section
**Same as main dashboard**

### Payments Table
**Padding:** 40px vertical, 60px horizontal

### Table Components:
- **Table Headers:**
  - Date
  - Description
  - Amount
  - Status
  - Receipt

- **Table Rows:**
  - **Date:** Regular, 14px
  - **Description:** Bold, 16px (Trek name + Booking ID)
  - **Amount:** Bold, 16px, forest green
  - **Status:** Badge (Paid/Refunded/Pending)
  - **Receipt:** "Download" link

- **Pagination:** (If many payments)
  - Previous/Next buttons
  - Page numbers

- **Empty State:**
  - Message: "No payment history"
  - CTA: "Book Your First Trek" button

---

## Profile Settings Page (`/dashboard/profile`)

### Header Section
**Same as main dashboard**

### Profile Form
**Padding:** 40px vertical, 60px horizontal
**Max-width:** 700px

### Form Sections:

- **Section 1: Personal Information**
  - **Avatar Upload:**
    - Current Avatar: Circular image, 120px
    - Upload Button: "Change Photo"
    - File Input: Hidden, accepts images
  
  - **Name Fields:**
    - First Name (Required)
    - Last Name (Required)
  
  - **Email:**
    - Display: Current email (read-only or editable)
    - Verification Badge: "Verified" (if verified)
  
  - **Phone:**
    - Input: Phone number
    - Verification: "Verify Phone" button (if not verified)

- **Section 2: Preferences**
  - **Newsletter:**
    - Checkbox: "Subscribe to newsletter"
  
  - **Notifications:**
    - Email Notifications: Toggle
    - SMS Notifications: Toggle
    - WhatsApp Updates: Toggle
  
  - **Preferred Contact Method:**
    - Radio buttons: Email, Phone, WhatsApp

- **Section 3: Emergency Contact**
  - **Name:** (Required)
  - **Phone:** (Required)
  - **Relationship:** Dropdown

- **Section 4: Password**
  - **Current Password:** (Required to change)
  - **New Password:** (Required)
  - **Confirm Password:** (Required)
  - **Password Strength Indicator:** Visual bar

- **Section 5: Account Actions**
  - **Delete Account:** (Danger zone)
    - Button: "Delete My Account" (red)
    - Confirmation: Modal required
    - Warning: "This action cannot be undone"

- **Save Button:**
  - Copy: `Save Changes`
  - Variant: Large, primary
  - State: Loading on save

---

## Notifications Page (`/dashboard/notifications`)

### Header Section
**Same as main dashboard**

### Notifications List
**Padding:** 40px vertical, 60px horizontal

### Notification Components:
- **Notification Item:**
  - **Icon:** Type-specific icon (booking, payment, reminder)
  - **Title:** Bold, 16px
  - **Message:** Regular, 14px, gray
  - **Time:** Small, 12px, gray ("2 hours ago")
  - **Unread Indicator:** Blue dot (left side)
  - **Action Button:** (If applicable) "View Booking"
  - **Mark as Read:** X icon (hover)

- **Empty State:**
  - Message: "No notifications"
  - Icon: Bell icon

- **Mark All as Read Button:**
  - Copy: `Mark All as Read`
  - Position: Top-right

---

## Mobile-Specific Adaptations

1. **Sidebar:** Slide-out drawer, hamburger menu
2. **Dashboard Widgets:** Single column, full-width
3. **Booking Cards:** Vertical layout, image top
4. **Tables:** Horizontal scroll or card layout
5. **Forms:** Full-width inputs, larger touch targets
6. **Navigation:** Bottom tab bar (optional)

---

## Component States Summary

### Navigation Items
- **Default:** Gray text, no background
- **Active:** Green background, white text
- **Hover:** Light gray background
- **Badge:** Colored pill with count

### Cards
- **Default:** White background, subtle shadow
- **Hover:** Shadow increase
- **Loading:** Skeleton loader
- **Empty:** Empty state message + CTA

### Forms
- **Default:** White background, gray border
- **Focus:** Green border, shadow
- **Error:** Red border, error message
- **Success:** Green border, checkmark
- **Disabled:** Grayed out

### Buttons
- **Default:** Primary/secondary styling
- **Hover:** Scale 1.02, shadow increase
- **Loading:** Spinner, disabled
- **Success:** Checkmark, green background

---

## Copy Guidelines

- **Tone:** Friendly, helpful, personal
- **Greetings:** Personalized ("Welcome back, [Name]")
- **Empty States:** Encouraging, action-oriented
- **Status Labels:** Clear, color-coded
- **CTAs:** Action-oriented ("View Details", "Book Now")

---

## Security Considerations

- **Authentication:** Required for all dashboard pages
- **Session Management:** Auto-logout after inactivity
- **Data Privacy:** Only show user's own data
- **Password:** Strong password requirements
- **2FA:** Optional two-factor authentication
- **Activity Log:** Track important actions (optional)

---

## Performance Considerations

- **Lazy Loading:** Load bookings/payments on demand
- **Pagination:** Limit items per page
- **Caching:** Cache user profile data
- **Optimistic Updates:** Update UI before API response
- **Error Handling:** Graceful error messages
