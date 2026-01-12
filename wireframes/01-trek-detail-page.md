# Trek Detail Page - Wireframe & Component Specifications

## Page Structure Overview
**URL Pattern:** `/treks/[slug]` (e.g., `/treks/everest-base-camp-trek`)
**Layout:** Single column, full-width with sticky booking sidebar on desktop

---

## Section 1: Hero Section
**Height:** 100vh (mobile: 85vh)
**Background:** Full-bleed hero image/video with dark overlay (60% opacity)

### Components:
- **Hero Image/Video**
  - State: Loading → Loaded → Autoplay (muted, loop)
  - Fallback: Static high-res image
  - Overlay gradient: `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)`

- **Breadcrumb Navigation**
  - Copy: `Home > Explore Treks > [Region] > [Trek Name]`
  - Style: Small text, white, semi-transparent
  - Position: Top-left, 24px padding

- **Trek Title**
  - Copy: `[Trek Name]` (e.g., "Everest Base Camp Trek")
  - Typography: Bold, 64px (desktop) / 40px (mobile)
  - Color: White (#FFFFFF)
  - Position: Center-left, 120px from top

- **Trek Tagline**
  - Copy: `[One-line description]` (e.g., "Journey to the roof of the world")
  - Typography: Regular, 24px (desktop) / 18px (mobile)
  - Color: White, 90% opacity
  - Position: Below title, 16px spacing

- **Quick Stats Bar** (Overlay on hero)
  - Components:
    - Duration: `[X] Days` with calendar icon
    - Difficulty: Badge pill (Easy/Moderate/Difficult) with color coding
    - Max Altitude: `[X] meters` with mountain icon
    - Best Season: `[Months]` with sun icon
  - Layout: Horizontal flex, centered, 24px gap
  - Background: Semi-transparent dark card (backdrop-blur)
  - Position: Below tagline, 32px spacing

- **Primary CTA Button**
  - Copy: `Book Your Adventure`
  - Variant: Large, primary (forest green background)
  - Position: Below stats bar, 40px spacing
  - State: Default → Hover (scale 1.05) → Loading → Success

---

## Section 2: Key Information Bar (Sticky on Scroll)
**Height:** 80px
**Background:** White (#FFFFFF)
**Shadow:** Subtle bottom shadow
**Position:** Sticky top on scroll (desktop only)

### Components:
- **Price Display**
  - Copy: `Starting from ₹[Amount] per person`
  - Typography: Bold, 28px
  - Color: Forest green (#234733)

- **Next Departure**
  - Copy: `Next: [Date]` with calendar icon
  - Typography: Regular, 16px
  - Color: Stone gray (#5B5F61)

- **Slots Available**
  - Copy: `[X] slots left` or `Filling Fast` badge
  - Typography: Regular, 16px
  - Color: Amber/Orange if < 5 slots

- **Sticky Book Button** (Right side)
  - Copy: `Book Now`
  - Variant: Medium, primary
  - State: Default → Hover → Click (scrolls to booking section)

---

## Section 3: Trek Overview & Story
**Padding:** 80px vertical, 120px horizontal (desktop) / 40px (mobile)
**Background:** White (#FFFFFF)

### Components:
- **Section Title**
  - Copy: `About This Trek`
  - Typography: Bold, 48px (desktop) / 32px (mobile)
  - Color: Forest green (#234733)

- **Story Paragraphs** (2-3 paragraphs)
  - Copy: Inspirational narrative about the trek
  - Example: *"The Everest Base Camp Trek is more than a journey—it's a pilgrimage to the heart of the Himalayas. Every step takes you closer to the world's highest peak, through Sherpa villages, ancient monasteries, and landscapes that redefine your understanding of beauty..."*
  - Typography: Regular, 18px, line-height 1.8
  - Color: Stone gray (#5B5F61)
  - Max-width: 800px

- **Key Highlights** (Bullet list with icons)
  - Components:
    - Icon + Text pairs
    - Examples:
      - 🏔️ "Witness sunrise over Mount Everest"
      - 🏛️ "Visit Tengboche Monastery"
      - 🏕️ "Stay in traditional tea houses"
      - 📸 "Photograph rhododendron forests"
  - Layout: 2-column grid (desktop) / 1-column (mobile)
  - Spacing: 24px gap

---

## Section 4: Day-by-Day Itinerary Timeline
**Padding:** 80px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Section Title**
  - Copy: `Your Journey Day by Day`
  - Typography: Bold, 48px
  - Color: Forest green (#234733)

- **Timeline Container**
  - Layout: Vertical timeline with connecting line
  - Spacing: 40px between days

- **Day Card** (Expandable)
  - **Default State:**
    - Day Number: Large badge (circle), forest green
    - Day Title: Bold, 24px (e.g., "Day 1: Arrival in Kathmandu")
    - Preview Text: First 2 lines of description
    - Expand Icon: Chevron down
    - Stats: Distance, Elevation gain, Stay type (icons)
  
  - **Expanded State:**
    - Full description paragraph
    - Detailed activities list
    - Meal information
    - Tips/Notes section
    - Collapse Icon: Chevron up

  - **Copy Example:**
    ```
    Day 1: Arrival in Kathmandu (1,400m)
    
    Welcome to Nepal! Upon arrival at Tribhuvan International Airport, 
    you'll be greeted by our team and transferred to your hotel. 
    Take the day to rest, explore Thamel, and prepare for your adventure. 
    Evening briefing session with your guide.
    
    Activities:
    • Airport pickup and hotel check-in
    • Welcome dinner
    • Gear check and briefing
    
    Meals: Dinner
    Stay: Hotel in Kathmandu
    ```

- **Timeline Connector**
  - Visual: Vertical dashed line connecting day cards
  - Color: Light gray (#D0D0D0)

---

## Section 5: Inclusions & Exclusions
**Padding:** 80px vertical, 120px horizontal
**Background:** White (#FFFFFF)
**Layout:** 2-column grid (desktop) / 1-column (mobile)

### Components:
- **Inclusions Column**
  - **Title:** `What's Included`
  - Icon: Checkmark circle (green)
  - **List Items:**
    - ✅ "All accommodation (hotels + tea houses)"
    - ✅ "All meals (breakfast, lunch, dinner)"
    - ✅ "Experienced trekking guide"
    - ✅ "Porter support (1 porter per 2 trekkers)"
    - ✅ "Permits and entry fees"
    - ✅ "Airport transfers"
    - ✅ "Medical kit and oxygen cylinder"
    - ✅ "Certificate of completion"
  - Typography: Regular, 16px
  - Spacing: 12px between items

- **Exclusions Column**
  - **Title:** `What's Not Included`
  - Icon: X circle (gray)
  - **List Items:**
    - ❌ "International flights"
    - ❌ "Travel insurance (mandatory)"
    - ❌ "Personal trekking gear"
    - ❌ "Tips for guides and porters"
    - ❌ "Extra meals and beverages"
    - ❌ "Emergency evacuation costs"
  - Typography: Regular, 16px
  - Spacing: 12px between items

---

## Section 6: Difficulty & Fitness Requirements
**Padding:** 80px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Section Title**
  - Copy: `Difficulty Level & Fitness Requirements`
  - Typography: Bold, 48px
  - Color: Forest green (#234733)

- **Difficulty Scale Visual**
  - Component: Horizontal progress bar with 5 levels
  - Current Level: Highlighted (e.g., Level 4 for Difficult)
  - Labels: Easy → Moderate → Challenging → Difficult → Extreme
  - Color coding: Green → Yellow → Orange → Red → Dark Red

- **Fitness Checklist**
  - **Title:** `Are You Ready?`
  - **Checklist Items:**
    - ☐ "Can walk 6-8 hours daily with a backpack"
    - ☐ "Previous high-altitude trekking experience"
    - ☐ "Good cardiovascular fitness"
    - ☐ "No major health issues"
    - ☐ "Comfortable with basic accommodation"
  - Interactive: Checkboxes (non-functional, visual guide)
  - Typography: Regular, 16px

- **Preparation Tips**
  - **Title:** `How to Prepare`
  - Bullet list with tips:
    - "Start cardio training 2-3 months before"
    - "Practice walking with a loaded backpack"
    - "Focus on leg strength and endurance"
    - "Acclimatize gradually if possible"
  - Typography: Regular, 16px

- **Safety Measures Block**
  - **Title:** `Your Safety is Our Priority`
  - Content: Brief paragraph about guide certifications, medical support, evacuation plans
  - Background: Light green tint (#E8F5E9)
  - Padding: 24px
  - Border-radius: 8px

---

## Section 7: Image Gallery & Reels
**Padding:** 80px vertical, 120px horizontal
**Background:** White (#FFFFFF)

### Components:
- **Section Title**
  - Copy: `Visual Journey`
  - Typography: Bold, 48px
  - Color: Forest green (#234733)

- **Gallery Grid** (Masonry layout)
  - Layout: 3-column (desktop) / 2-column (tablet) / 1-column (mobile)
  - Images: High-res, lazy-loaded
  - Hover: Overlay with "View Full Size" text
  - Click: Opens lightbox modal with full image + navigation

- **Short Reels Carousel**
  - **Title:** `Experience the Trek`
  - Component: Horizontal scrolling carousel
  - Items: 3-5 short video reels (15-30 seconds each)
  - Controls: Previous/Next arrows, autoplay on hover
  - Thumbnail: First frame + play icon overlay

---

## Section 8: Pricing Tiers
**Padding:** 80px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Section Title**
  - Copy: `Choose Your Adventure Package`
  - Typography: Bold, 48px
  - Color: Forest green (#234733)

- **Pricing Cards** (3 tiers, horizontal layout)
  - **Card 1: Base Package**
    - Price: `₹[Amount]` (large, bold)
    - Label: `per person`
    - Inclusions: Key items list
    - CTA: `Book Base Package`
    - Border: Standard
  
  - **Card 2: Plus Package** (Recommended badge)
    - Price: `₹[Amount]`
    - Label: `per person`
    - Badge: `Most Popular` (amber background)
    - Inclusions: Extended list
    - CTA: `Book Plus Package`
    - Border: Highlighted (forest green, 2px)
  
  - **Card 3: Premium Package**
    - Price: `₹[Amount]`
    - Label: `per person`
    - Inclusions: Full list + extras
    - CTA: `Book Premium Package`
    - Border: Standard

- **Package Comparison Table** (Collapsible)
  - Toggle: "Compare All Features" button
  - Table: Feature rows vs Package columns
  - Checkmarks/X marks for inclusions

---

## Section 9: Book Now Section (Sticky on Mobile)
**Padding:** 80px vertical, 120px horizontal
**Background:** White (#FFFFFF)
**ID:** `#book-now` (anchor for sticky button)

### Components:
- **Booking Form Container**
  - Layout: 2-column (desktop) / 1-column (mobile)
  
- **Left Column: Booking Form**
  - **Step 1: Select Departure Date**
    - Component: Calendar date picker
    - State: Available dates (green) / Unavailable (grayed out)
    - Display: Next 6 months
    - Selected: Highlighted with checkmark
  
  - **Step 2: Number of Participants**
    - Component: Number input with +/- buttons
    - Min: 1, Max: 10
    - Label: "Adventurers"
    - Price update: Real-time calculation
  
  - **Step 3: Contact Details** (if not logged in)
    - Fields:
      - Full Name (required)
      - Email (required)
      - Phone (required)
      - Emergency Contact (required)
    - Validation: Real-time error messages
  
  - **Step 4: Special Requirements** (Optional)
    - Component: Textarea
    - Placeholder: "Dietary restrictions, medical conditions, etc."

- **Right Column: Booking Summary** (Sticky card)
  - **Title:** `Booking Summary`
  - **Details:**
    - Trek Name
    - Departure Date
    - Number of Participants
    - Package Selected
    - Subtotal
    - Taxes & Fees
    - **Total** (large, bold)
  - **Trust Badges:**
    - "Secure Payment"
    - "Free Cancellation (30 days)"
    - "Instant Confirmation"
  - **CTA Button:**
    - Copy: `Proceed to Payment`
    - Variant: Large, primary, full-width
    - State: Disabled until form complete → Enabled → Loading → Redirect

---

## Section 10: FAQs Accordion
**Padding:** 80px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Section Title**
  - Copy: `Frequently Asked Questions`
  - Typography: Bold, 48px
  - Color: Forest green (#234733)

- **FAQ Items** (Accordion)
  - **Default State:**
    - Question: Bold, 20px, clickable
    - Icon: Chevron right
    - Background: White card
  
  - **Expanded State:**
    - Question: Bold, 20px
    - Icon: Chevron down
    - Answer: Regular, 16px, gray text
    - Background: White card with shadow
  
  - **Sample Q&A:**
    ```
    Q: What is the best time to do this trek?
    A: The best months are March-May and September-November 
    when weather is clear and stable...
    
    Q: Do I need travel insurance?
    A: Yes, comprehensive travel insurance covering high-altitude 
    trekking and emergency evacuation is mandatory...
    
    Q: What happens if I can't complete the trek?
    A: Our guides will assess your condition and arrange 
    descent if needed. Partial refunds may apply...
    ```

---

## Section 11: Testimonials & Reviews
**Padding:** 80px vertical, 120px horizontal
**Background:** White (#FFFFFF)

### Components:
- **Section Title**
  - Copy: `What Our Adventurers Say`
  - Typography: Bold, 48px
  - Color: Forest green (#234733)

- **Testimonial Cards** (Carousel, 3 visible)
  - **Card Components:**
    - Quote: Italic, 18px, inspirational text
    - Author: Name, bold
    - Trek Info: "[Trek Name], [Date]"
    - Rating: 5-star display
    - Avatar: Circular image
    - Background: Light gray card
  
  - **Sample Copy:**
    ```
    "This trek changed my life. The guides were incredible, 
    the views were beyond words, and the sense of achievement 
    at base camp was indescribable."
    
    — Priya Sharma
    Everest Base Camp Trek, October 2023
    ⭐⭐⭐⭐⭐
    ```

- **Navigation:** Previous/Next arrows, dot indicators

---

## Section 12: Related Treks
**Padding:** 80px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Section Title**
  - Copy: `You Might Also Like`
  - Typography: Bold, 48px
  - Color: Forest green (#234733)

- **Trek Cards** (3-4 cards, horizontal scroll on mobile)
  - Same component as Explore Treks page
  - Filter: Same region or similar difficulty
  - CTA: "View Details" button

---

## Section 13: Call-to-Action Footer
**Padding:** 80px vertical, 120px horizontal
**Background:** Forest green (#234733) gradient

### Components:
- **Headline**
  - Copy: `Ready to Go Beyond Peaks?`
  - Typography: Bold, 48px, white
  
- **Subheadline**
  - Copy: `Join hundreds of adventurers who've experienced the journey of a lifetime.`
  - Typography: Regular, 20px, white, 80% opacity
  
- **CTA Buttons** (2 buttons side-by-side)
  - Button 1: `Book Now` (white background, green text)
  - Button 2: `Download Itinerary PDF` (transparent, white border)
  
- **Trust Elements**
  - Small text: "500+ successful treks | 98% satisfaction rate | Certified guides"

---

## Mobile-Specific Adaptations

1. **Hero Section:** Reduced height, stats bar becomes vertical stack
2. **Sticky Bar:** Becomes bottom-fixed floating button
3. **Timeline:** Simplified, no connecting line
4. **Pricing Cards:** Vertical stack instead of grid
5. **Booking Form:** Single column, summary moves below form
6. **Gallery:** 1-column masonry
7. **Navigation:** Hamburger menu

---

## Component States Summary

### Buttons
- **Default:** Base styling
- **Hover:** Scale 1.05, shadow increase
- **Loading:** Spinner icon, disabled
- **Success:** Checkmark, green background
- **Disabled:** Grayed out, cursor not-allowed

### Forms
- **Default:** White background, gray border
- **Focus:** Forest green border, shadow
- **Error:** Red border, error message below
- **Success:** Green border, checkmark icon

### Cards
- **Default:** White background, subtle shadow
- **Hover:** Shadow increase, slight lift
- **Selected:** Forest green border, checkmark

### Modals/Lightboxes
- **Backdrop:** Dark overlay (80% opacity)
- **Content:** White card, centered
- **Close:** X button top-right
- **Animation:** Fade in + scale up

---

## Copy Guidelines

- **Tone:** Inspirational, authentic, trustworthy
- **Voice:** Second person ("You'll experience...")
- **Length:** Concise but descriptive
- **Keywords:** Adventure, journey, challenge, achievement, nature, peaks
- **CTAs:** Action-oriented ("Book Your Adventure", "Start Your Journey")
