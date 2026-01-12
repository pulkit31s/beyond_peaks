# Itineraries Pages - Wireframe & Component Specifications

## Page Structure Overview
**URL Pattern:** `/itineraries` (main) → `/itineraries/upcoming`, `/itineraries/ongoing`, `/itineraries/past`
**Layout:** Tabbed interface with filterable content

---

## Main Itineraries Page Header
**Padding:** 60px vertical, 120px horizontal
**Background:** Forest green (#234733) gradient

### Components:
- **Breadcrumb**
  - Copy: `Home > Itineraries`
  - Typography: Small, 14px, white, 80% opacity

- **Page Title**
  - Copy: `Our Treks & Journeys`
  - Typography: Bold, 56px (desktop) / 40px (mobile), white

- **Subtitle**
  - Copy: `Explore upcoming adventures, follow ongoing treks, and relive past journeys`
  - Typography: Regular, 20px, white, 90% opacity

---

## Tab Navigation
**Padding:** 0px vertical, 120px horizontal
**Background:** White (#FFFFFF)
**Position:** Sticky top on scroll

### Components:
- **Tab Buttons** (Horizontal layout, 3 tabs)
  - **Tab 1: Upcoming Treks**
    - Copy: `Upcoming Treks`
    - Badge: Count `([X])` (if > 0)
    - State: Active (green underline) / Inactive (gray text)
    - Link: `/itineraries/upcoming`
  
  - **Tab 2: Ongoing Treks**
    - Copy: `Ongoing Treks`
    - Badge: Count `([X])` (if > 0)
    - Badge Color: Amber (live indicator)
    - State: Active / Inactive
    - Link: `/itineraries/ongoing`
  
  - **Tab 3: Past Treks**
    - Copy: `Past Treks`
    - Badge: Count `([X])` (if > 0)
    - State: Active / Inactive
    - Link: `/itineraries/past`

- **Active Indicator:** Green underline, 3px height
- **Mobile:** Horizontal scrollable tabs

---

## Section 1: Upcoming Treks Tab

### Filter Bar (Optional)
**Padding:** 40px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Quick Filters:** (Chip buttons)
  - "This Month"
  - "Next Month"
  - "Next 3 Months"
  - "All Upcoming"
  
- **Sort Dropdown:**
  - Options: "Date (Earliest)", "Date (Latest)", "Popularity", "Price"

---

### Upcoming Treks Grid
**Padding:** 60px vertical, 120px horizontal
**Layout:** 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)

### Trek Card Components:
- **Cover Image:**
  - Aspect Ratio: 16:9
  - Badge: "Upcoming" (green) or "Filling Fast" (amber)
  - Overlay: Dark gradient on hover

- **Trek Name:**
  - Typography: Bold, 22px, forest green
  - Link: `/treks/[slug]`

- **Departure Dates:**
  - Copy: `📅 [Start Date] - [End Date]`
  - Typography: Regular, 16px, gray
  - Multiple Dates: "Multiple departures available" + dropdown

- **Quick Stats:**
  - Duration: `[X] Days`
  - Difficulty: Badge pill (color-coded)
  - Max Altitude: `[X]m`
  - Layout: Horizontal flex, icons + text

- **Starting Location:**
  - Copy: `📍 [Location]`
  - Typography: Regular, 14px, gray

- **Price:**
  - Copy: `Starting from ₹[Amount]`
  - Typography: Bold, 20px, forest green
  - Subtext: "per person"

- **Slots Available:**
  - Copy: `[X] slots left` or `Filling Fast`
  - Typography: Small, 12px, amber/red
  - Badge: Colored pill

- **Countdown Timer:** (If < 30 days)
  - Copy: `Departs in [X] days`
  - Style: Amber background, white text
  - Position: Below price

- **Action Buttons:**
  - **Primary:** "Book Now" (full-width)
  - **Secondary:** "View Details" (outline)

- **Card States:**
  - Default: White background, subtle shadow
  - Hover: Shadow increase, image zoom
  - Sold Out: Grayed out, "Sold Out" badge

---

### Empty State (If no upcoming treks)
- **Icon:** Calendar icon (large)
- **Headline:** "No Upcoming Treks"
- **Message:** "Check back soon for new adventures!"
- **CTA:** "View Past Treks" button

---

## Section 2: Ongoing Treks Tab

### Live Status Banner
**Padding:** 40px vertical, 120px horizontal
**Background:** Amber (#FFB74D) with pulsing animation

### Components:
- **Live Indicator:**
  - Icon: Pulsing dot (green)
  - Copy: `🔴 LIVE - [X] Treks Currently in Progress`
  - Typography: Bold, 18px, white

- **Message:**
  - Copy: "Follow along as our adventurers explore the mountains"
  - Typography: Regular, 16px, white, 90% opacity

---

### Ongoing Treks Grid
**Padding:** 60px vertical, 120px horizontal
**Layout:** 2 columns (desktop) / 1 column (mobile)

### Ongoing Trek Card Components:
- **Live Badge:** (Top-right corner)
  - Copy: `🔴 LIVE`
  - Style: Red background, white text, pulsing animation

- **Cover Image:**
  - Current trek photo (updated daily if possible)
  - Overlay: "Day [X] of [Y]" badge

- **Trek Name:**
  - Typography: Bold, 24px, forest green

- **Current Status:**
  - Copy: `Currently at: [Location/Altitude]`
  - Typography: Regular, 16px, gray
  - Icon: Map pin

- **Progress Indicator:**
  - Component: Progress bar
  - Copy: `Day [X] of [Y] - [Percentage]% Complete`
  - Visual: Filled bar, green

- **Today's Highlights:**
  - Title: "Today's Journey"
  - Content: Brief update (2-3 sentences)
  - Typography: Regular, 14px, gray
  - Example: "The team reached Base Camp today after a challenging 6-hour trek. Weather conditions were perfect, and everyone is in high spirits!"

- **Weather Update:** (If available)
  - Icon: Weather icon
  - Copy: `Weather: [Condition], [Temperature]°C`
  - Typography: Small, 12px, gray

- **Photo Gallery Preview:**
  - Component: 4 thumbnail images
  - Hover: "View Gallery" overlay
  - Link: Opens gallery modal or page

- **Action Buttons:**
  - **Primary:** "Follow Journey" (opens detailed page)
  - **Secondary:** "View Photos" (opens gallery)

- **Social Share:**
  - Icons: Instagram, WhatsApp
  - Copy: "Share this adventure"

---

### Ongoing Trek Detail Page (If clicked)
**URL:** `/itineraries/ongoing/[trek-slug]`

### Components:
- **Hero Section:**
  - Current location image
  - Live indicator
  - Day counter

- **Daily Updates Timeline:**
  - **Day Card:**
    - Day Number: Large badge
    - Date: Regular text
    - Location: Bold
    - Update: Paragraph text
    - Photos: 3-5 images
    - Weather: Small text
    - Participants: Small avatars
  
  - **Current Day:** Highlighted, expanded by default
  - **Past Days:** Collapsed, expandable
  - **Upcoming Days:** Grayed out, itinerary preview

- **Photo Gallery:**
  - Grid layout
  - Filter by day
  - Lightbox on click

- **Participant Stories:** (Optional)
  - Quotes/testimonials from trekkers
  - Small avatars + names

---

## Section 3: Past Treks Tab

### Filter Bar
**Padding:** 40px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Year Filter:**
  - Dropdown: "All Years", "2024", "2023", "2022", etc.
  
- **Location Filter:**
  - Dropdown: "All Locations", [List of regions]
  
- **Search:**
  - Input: "Search past treks..."
  - Icon: Search

---

### Past Treks Grid
**Padding:** 60px vertical, 120px horizontal
**Layout:** 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)

### Past Trek Card Components:
- **Cover Image:**
  - Best photo from trek
  - Badge: "Completed" (gray) or date badge
  - Overlay: Dark gradient on hover

- **Trek Name:**
  - Typography: Bold, 22px, forest green
  - Link: `/itineraries/past/[slug]`

- **Completion Date:**
  - Copy: `Completed: [Month] [Year]`
  - Typography: Regular, 14px, gray
  - Icon: Calendar

- **Quick Stats:**
  - Duration: `[X] Days`
  - Difficulty: Badge pill
  - Participants: `[X] Adventurers`
  - Layout: Horizontal flex

- **Highlights Preview:**
  - Title: "Trek Highlights"
  - Bullet list: 3-4 key highlights
  - Typography: Regular, 14px, gray
  - Example:
    - "Reached Base Camp at sunrise"
    - "Visited ancient monasteries"
    - "Wildlife spotting: Himalayan Tahr"

- **Photo Count:**
  - Copy: `[X] Photos`
  - Icon: Camera
  - Link: Opens gallery

- **Average Rating:** (If reviews available)
  - Stars: ⭐⭐⭐⭐⭐ (4.8/5)
  - Review count: "([X] reviews)"
  - Typography: Small, 12px

- **Action Buttons:**
  - **Primary:** "View Journey" (full-width)
  - **Secondary:** "View Photos" (outline)

---

### Past Trek Detail Page (If clicked)
**URL:** `/itineraries/past/[trek-slug]`

### Components:
- **Hero Section:**
  - Best photo from trek
  - Completion date
  - Participant count

- **Trek Summary:**
  - Title: "Journey Summary"
  - Content: 2-3 paragraph overview
  - Key achievements: Bullet list

- **Photo Gallery:**
  - **Layout:** Masonry grid
  - **Sections:**
    - "Landscapes" (filter)
    - "Group Photos" (filter)
    - "Wildlife" (filter)
    - "Cultural Sites" (filter)
  - **Lightbox:** Full-screen on click
  - **Download:** "Download All Photos" button (if available)

- **Day-by-Day Recap:**
  - **Day Card:**
    - Day Number: Badge
    - Date: Regular text
    - Location: Bold
    - Recap: Paragraph text
    - Photos: 2-3 images
    - Highlights: Bullet list
  
  - Layout: Vertical timeline
  - Expandable: Collapsed by default, expand on click

- **Participant Reviews:**
  - **Title:** "What Our Adventurers Said"
  - **Review Cards:** (3-5 reviews)
    - Avatar: Circular image
    - Name: Bold
    - Rating: Stars
    - Quote: Italic, testimonial text
    - Date: Small text
    - Trek Info: "[Trek Name], [Date]"
  
  - **Layout:** Grid, 2-3 columns
  - **View All Link:** "Read All Reviews →"

- **Statistics:**
  - **Title:** "Trek Statistics"
  - **Stats Grid:**
    - Total Distance: `[X] km`
    - Highest Altitude: `[X]m`
    - Total Elevation Gain: `[X]m`
    - Average Daily Distance: `[X] km`
    - Weather Days: `[X] sunny / [Y] cloudy`

- **Video Highlights:** (If available)
  - **Title:** "Video Recap"
  - Component: Embedded video player
  - Duration: 2-5 minutes
  - Thumbnail: Custom thumbnail

- **Related Treks:**
  - **Title:** "Similar Adventures"
  - Component: 3-4 trek cards (same as Explore Treks)
  - Filter: Same region or difficulty

---

## Mobile-Specific Adaptations

1. **Tabs:** Horizontal scrollable, simplified badges
2. **Cards:** Single column, simplified stats
3. **Ongoing Treks:** Full-width cards, simplified status
4. **Past Treks:** Vertical timeline, simplified gallery
5. **Filters:** Bottom sheet or inline dropdowns

---

## Component States Summary

### Tabs
- **Default:** Gray text, no underline
- **Active:** Forest green text, green underline
- **Hover:** Slight color change
- **Mobile:** Scrollable, active tab centered

### Cards
- **Default:** White background, subtle shadow
- **Hover:** Shadow increase, image zoom
- **Loading:** Skeleton loader
- **Empty:** Empty state message

### Live Indicator
- **Pulsing:** Continuous animation (2s cycle)
- **Color:** Red dot, amber background
- **Mobile:** Simplified, no animation if performance issue

---

## Copy Guidelines

- **Upcoming:** Urgency-focused ("Filling Fast", "Book Soon")
- **Ongoing:** Real-time, engaging ("Live Updates", "Follow Along")
- **Past:** Nostalgic, celebratory ("Relive the Journey", "Memories")
- **CTAs:** Action-oriented ("Book Now", "Follow Journey", "View Photos")

---

## Interaction Notes

- **Tab Switching:** Smooth transition, maintain scroll position
- **Filter Application:** Instant results update (no loading state if fast)
- **Photo Gallery:** Lazy loading, infinite scroll or pagination
- **Live Updates:** Auto-refresh every 5-10 minutes (ongoing treks)
- **Share:** Native share API or custom share modal

---

## Performance Considerations

- **Image Optimization:** WebP format, responsive sizes
- **Lazy Loading:** Images load on scroll
- **Caching:** Cache past trek data (rarely changes)
- **Live Updates:** WebSocket or polling for ongoing treks
- **Pagination:** Load 12-18 items per page
