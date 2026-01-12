# Beyond Peaks - Website Wireframes & Component Specifications

This directory contains detailed wireframes and component specifications for all pages of the Beyond Peaks website.

## 📋 Wireframe Index

### 1. [Trek Detail Page](./01-trek-detail-page.md)
Complete specifications for individual trek detail pages, including hero section, itinerary timeline, pricing tiers, booking form, and all component states.

**Key Sections:**
- Hero with quick stats
- Day-by-day itinerary timeline
- Inclusions/exclusions
- Difficulty & fitness requirements
- Image gallery & reels
- Pricing tiers
- Booking form
- FAQs
- Testimonials

---

### 2. [Homepage](./02-homepage.md)
Full homepage wireframe with hero section, featured treks, testimonials, Instagram feed, and newsletter signup.

**Key Sections:**
- Full-screen hero with dual CTAs
- Mission statement
- Featured upcoming treks
- Trust & social proof stats
- Testimonials carousel
- Instagram feed preview
- Blog/stories preview
- Newsletter signup
- Footer

---

### 3. [Explore Treks Page](./03-explore-treks-page.md)
Comprehensive trek catalog page with advanced filters, search, and grid/list view options.

**Key Sections:**
- Search bar
- Filter sidebar (location, difficulty, duration, altitude, price, season)
- Results grid/list view
- Trek cards with all details
- Pagination/infinite scroll
- Sort options

---

### 4. [Booking Flow](./04-booking-flow.md)
Multi-step booking process from date selection to payment confirmation.

**Pages:**
- **Step 1:** Select Date & Participants
- **Step 2:** Participant Details
- **Step 3:** Payment
- **Step 4:** Booking Confirmation

**Key Components:**
- Progress stepper
- Date picker calendar
- Participant forms
- Payment gateway integration
- Booking summary sidebar
- Email confirmation

---

### 5. [Itineraries Pages](./05-itineraries-pages.md)
Three-tab interface for upcoming, ongoing, and past treks.

**Tabs:**
- **Upcoming Treks:** Bookable treks with countdown timers
- **Ongoing Treks:** Live updates, progress tracking, daily highlights
- **Past Treks:** Completed treks with photos, reviews, and statistics

**Key Features:**
- Live status indicators
- Photo galleries
- Participant reviews
- Day-by-day recaps
- Video highlights

---

### 6. [Community & Stories Page](./06-community-stories-page.md)
Blog-style content hub with stories, guides, and user-generated content.

**Key Sections:**
- Featured story
- Category filters
- Stories grid
- Story detail pages
- User-generated content spotlight
- Preparation checklists
- Travel tips
- Adventure memories gallery

---

### 7. [About Page](./07-about-page.md)
Company story, mission, vision, team profiles, and values.

**Key Sections:**
- Our story
- Mission & vision
- What makes us different
- Team & guides profiles
- Core values
- Safety & sustainability philosophy
- Certifications & partnerships
- Numbers & achievements

---

### 8. [Contact Page](./08-contact-page.md)
Contact form, contact information, FAQs, and quick contact options.

**Key Sections:**
- Contact form (name, email, phone, subject, message)
- Contact information cards (phone, email, WhatsApp, address)
- Frequently asked questions
- Quick contact options
- Office hours & response times
- Map location (if applicable)

---

### 9. [User Dashboard](./09-user-dashboard.md)
User account dashboard with bookings, saved treks, payments, and profile settings.

**Pages:**
- **Main Dashboard:** Overview widgets
- **My Bookings:** Booking list and details
- **Saved Treks:** Bookmarked treks
- **Payment History:** Transaction records
- **Profile Settings:** Account management
- **Notifications:** User notifications

**Key Features:**
- Sidebar navigation
- Dashboard widgets
- Booking management
- Profile editing
- Payment history
- Notification center

---

## 🎨 Design System Overview

### Color Palette
- **Forest Green:** `#234733` (Primary)
- **Stone Gray:** `#5B5F61` (Secondary)
- **Sky Blue:** `#5FA3D1` (Accent)
- **Amber/Orange:** `#FFB74D` (Urgency/Warnings)
- **White:** `#FFFFFF` (Background)
- **Light Gray:** `#F5F5F5` (Section backgrounds)

### Typography
- **Headlines:** Bold, 32px - 64px
- **Body:** Regular, 16px - 20px, line-height 1.8
- **Small Text:** Regular, 12px - 14px

### Component States
- **Default:** Base styling
- **Hover:** Scale 1.02-1.05, shadow increase
- **Active:** Green background, white text
- **Loading:** Spinner, disabled state
- **Success:** Green border/background, checkmark
- **Error:** Red border, error message
- **Disabled:** Grayed out, cursor not-allowed

---

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (Single column, simplified layouts)
- **Tablet:** 768px - 1024px (2 columns, adapted layouts)
- **Desktop:** > 1024px (Full multi-column layouts)

---

## 🔄 User Flows

### Primary Flows
1. **Discover & Book:** Homepage → Explore Treks → Trek Detail → Booking Flow → Confirmation
2. **Compare Treks:** Explore Treks → Filter → View Multiple → Save → Book
3. **Community Engagement:** Homepage → Stories → Read Story → Share → Subscribe
4. **Account Management:** Login → Dashboard → View Bookings → Manage Profile

---

## 🛠️ Technical Considerations

### Performance
- Lazy loading for images
- Pagination for large lists
- Debounced search inputs
- Optimized image formats (WebP)
- CDN for static assets

### Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast (WCAG AA)
- Focus indicators

### SEO
- Semantic HTML
- Meta titles & descriptions
- Structured data (Schema.org)
- Clean URLs
- Internal linking

---

## 📝 Notes for Implementation

1. **Component Reusability:** Many components (cards, buttons, forms) are reused across pages
2. **State Management:** Consider global state for user authentication, cart/bookings
3. **API Integration:** Forms, bookings, payments will require backend integration
4. **Media Management:** Image/video optimization and CDN setup needed
5. **Email Templates:** Booking confirmations, newsletters require email templates
6. **Payment Gateway:** Stripe/Razorpay integration for payments
7. **Social Integration:** Instagram API for feed, WhatsApp for communication

---

## 🚀 Next Steps

1. Review wireframes with stakeholders
2. Create high-fidelity mockups (Figma/Sketch)
3. Develop component library
4. Build responsive prototypes
5. User testing & feedback
6. Iterate based on feedback
7. Begin development

---

## 📞 Questions or Feedback?

For questions about these wireframes or to request modifications, please contact the design team or refer to the main project documentation.

---

**Last Updated:** [Current Date]
**Version:** 1.0
