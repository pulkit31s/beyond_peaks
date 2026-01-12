# Explore Treks Page - Wireframe & Component Specifications

## Page Structure Overview
**URL Pattern:** `/explore-treks` or `/treks`
**Layout:** Filter sidebar (desktop) + Main content area with grid/list view

---

## Section 1: Page Header
**Padding:** 60px vertical, 120px horizontal
**Background:** Forest green (#234733) gradient with mountain silhouette

### Components:
- **Breadcrumb**
  - Copy: `Home > Explore Treks`
  - Typography: Small, 14px, white, 80% opacity
  - Position: Top-left

- **Page Title**
  - Copy: `Discover Your Next Adventure`
  - Typography: Bold, 56px (desktop) / 40px (mobile), white
  - Alignment: Left

- **Subtitle**
  - Copy: `Choose from handpicked treks across the Himalayas and beyond`
  - Typography: Regular, 20px, white, 90% opacity
  - Alignment: Left

- **Quick Stats** (Inline, below subtitle)
  - Copy: `[X] Treks Available | [Y] Destinations | [Z] Upcoming Departures`
  - Typography: Regular, 16px, white, 80% opacity

---

## Section 2: Filters & Search Bar
**Padding:** 40px vertical, 120px horizontal
**Background:** White (#FFFFFF)
**Position:** Sticky top on scroll (desktop)

### Components:
- **Search Bar** (Full-width, prominent)
  - **Input Field:**
    - Placeholder: "Search by trek name, location, or region..."
    - Icon: Search icon (left)
    - Type: Text
    - Style: Large, rounded, gray border
    - Behavior: Real-time search, debounced
  
  - **Clear Button:** (Appears when text entered)
    - Icon: X
    - Action: Clears search, resets results

- **Filter Toggle Button** (Mobile only)
  - Copy: `Filters` + count badge
  - Icon: Filter icon
  - Action: Opens filter drawer/sheet

- **Active Filters Display** (Below search, when filters applied)
  - **Component:** Chips/tags showing active filters
  - **Example Chips:**
    - "Location: Nepal" [X]
    - "Difficulty: Moderate" [X]
    - "Duration: 7-10 days" [X]
  - **Clear All Button:** "Clear All Filters" (text link)

---

## Section 3: Filter Sidebar (Desktop) / Drawer (Mobile)
**Width:** 280px (desktop)
**Background:** Light gray (#F5F5F5)
**Position:** Left sidebar (desktop), slide-out drawer (mobile)

### Components:
- **Filter Section: Location**
  - **Title:** "Location" (Bold, 18px)
  - **Options:** Checkboxes
    - ☐ Nepal
    - ☐ India (Himachal Pradesh)
    - ☐ India (Uttarakhand)
    - ☐ Ladakh
    - ☐ Sikkim
    - ☐ Bhutan
  - **Show More Link:** (If > 6 options)
    - Copy: "Show more locations"
    - Action: Expands list

- **Filter Section: Difficulty**
  - **Title:** "Difficulty Level"
  - **Options:** Radio buttons or single-select
    - ○ Easy
    - ○ Moderate
    - ○ Difficult
    - ○ Challenging
  - **Visual Aid:** Difficulty scale bar below options

- **Filter Section: Duration**
  - **Title:** "Duration"
  - **Options:** Checkboxes
    - ☐ 3-5 days
    - ☐ 6-10 days
    - ☐ 11-15 days
    - ☐ 16+ days
  - **Custom Range:** (Optional)
    - Inputs: "Min" and "Max" days

- **Filter Section: Altitude**
  - **Title:** "Maximum Altitude"
  - **Component:** Range slider
    - Min: 2,000m
    - Max: 8,000m
    - Current: [X]m - [Y]m
  - **Quick Options:** Buttons
    - "Below 4,000m"
    - "4,000m - 5,500m"
    - "Above 5,500m"

- **Filter Section: Price Range**
  - **Title:** "Price Range"
  - **Component:** Range slider
    - Min: ₹10,000
    - Max: ₹1,00,000
    - Current: ₹[X] - ₹[Y]
  - **Display:** "₹[Min] - ₹[Max]" (below slider)

- **Filter Section: Season**
  - **Title:** "Best Season"
  - **Options:** Checkboxes (with icons)
    - ☐ Spring (Mar-May) 🌸
    - ☐ Summer (Jun-Aug) ☀️
    - ☐ Autumn (Sep-Nov) 🍂
    - ☐ Winter (Dec-Feb) ❄️

- **Filter Section: Special Features**
  - **Title:** "Special Features"
  - **Options:** Checkboxes
    - ☐ Beginner Friendly
    - ☐ Family Friendly
    - ☐ Photography Focus
    - ☐ Cultural Immersion
    - ☐ Wildlife Spotting
    - ☐ Off the Beaten Path

- **Reset Filters Button** (Bottom of sidebar)
  - Copy: `Reset All Filters`
  - Variant: Text link, gray
  - Action: Clears all filters, resets to default

- **Apply Filters Button** (Mobile drawer only)
  - Copy: `Apply Filters`
  - Variant: Large, primary, full-width
  - Position: Bottom of drawer

---

## Section 4: Results Area
**Padding:** 40px vertical, 120px horizontal (left padding adjusts for sidebar)
**Background:** White (#FFFFFF)

### Components:
- **Results Header** (Flex layout)
  - **Results Count:**
    - Copy: `Showing [X] of [Y] treks`
    - Typography: Regular, 16px, gray
  
  - **Sort Dropdown** (Right side)
    - Label: "Sort by:"
    - Options:
      - Most Popular
      - Price: Low to High
      - Price: High to Low
      - Duration: Shortest First
      - Duration: Longest First
      - Newest First
      - Altitude: Lowest First
      - Altitude: Highest First
    - Style: Dropdown select

  - **View Toggle** (Right side, next to sort)
    - **Grid View Icon:** (Active by default)
    - **List View Icon:**
    - Action: Toggles between grid and list layouts

- **No Results State**
  - **Icon:** Search/magnifying glass (large)
  - **Headline:** "No treks found"
  - **Message:** "Try adjusting your filters or search terms"
  - **CTA:** "Clear Filters" button
  - **Background:** Light gray card

- **Loading State**
  - **Component:** Skeleton loaders (6 cards)
  - **Animation:** Shimmer effect

---

## Section 5: Trek Cards Grid/List View

### Grid View (Default)
**Layout:** 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
**Gap:** 32px

#### Trek Card Components:
- **Cover Image**
  - Aspect Ratio: 16:9
  - Hover: Zoom effect (scale 1.1)
  - Overlay: Dark gradient on hover
  - Badge: "Upcoming" / "Filling Fast" / "New" (top-right corner)

- **Content Area** (Below image)
  - **Trek Name**
    - Copy: `[Trek Name]`
    - Typography: Bold, 22px, forest green
    - Link: `/treks/[slug]`
  
  - **Location & Region**
    - Copy: `📍 [Starting Location], [Region/Country]`
    - Typography: Regular, 14px, gray
    - Icon: Map pin
  
  - **Quick Stats Row** (Icons + text)
    - **Duration:** 📅 `[X] Days`
    - **Difficulty:** Badge pill (color-coded)
      - Easy: Green
      - Moderate: Yellow/Amber
      - Difficult: Orange
      - Challenging: Red
    - **Max Altitude:** ⛰️ `[X]m`
    - Layout: Horizontal flex, 16px gap
  
  - **Best Season**
    - Copy: `Best: [Months]`
    - Typography: Small, 12px, gray
    - Icon: Sun/calendar
  
  - **Price**
    - Copy: `Starting from ₹[Amount]`
    - Typography: Bold, 20px, forest green
    - Subtext: "per person"
  
  - **Next Departure** (If available)
    - Copy: `Next: [Date]`
    - Typography: Small, 12px, amber (if soon) / gray
    - Icon: Calendar
  
  - **Slots Available** (If < 10)
    - Copy: `[X] slots left` or `Filling Fast`
    - Typography: Small, 12px, amber/red
    - Badge: Colored pill
  
  - **Action Buttons** (2 buttons, side-by-side)
    - **Button 1:** "View Details" (Primary, full-width)
    - **Button 2:** "Save" (Icon only, heart/bookmark)
      - State: Unfilled → Filled (when saved)
      - Requires: User authentication

- **Card States:**
  - **Default:** White background, subtle shadow
  - **Hover:** Shadow increase, image zoom, buttons visible
  - **Saved:** Heart icon filled, amber color
  - **Loading:** Skeleton loader

### List View (Alternative)
**Layout:** Single column, horizontal cards
**Card Layout:** Image (left, 300px width) + Content (right, flex)

#### List Card Components:
- **Image:** Same as grid, fixed width
- **Content:** All text elements in vertical stack
- **Actions:** Buttons inline, right-aligned
- **Spacing:** 24px gap between cards

---

## Section 6: Pagination / Infinite Scroll
**Padding:** 60px vertical, 120px horizontal
**Background:** White (#FFFFFF)

### Option 1: Pagination (Recommended)
- **Component:** Numbered pagination
- **Elements:**
  - Previous button (disabled on first page)
  - Page numbers (1, 2, 3, ...)
  - Ellipsis (...) for large page counts
  - Next button (disabled on last page)
- **Current Page:** Highlighted, forest green background
- **Hover:** Gray background

### Option 2: Infinite Scroll (Alternative)
- **Component:** Load more button or auto-load
- **Button:** "Load More Treks" (when available)
- **Loading:** Spinner below current results
- **End State:** "You've seen all treks" message

---

## Section 7: Featured Treks Banner (Optional)
**Padding:** 80px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)
**Position:** Between results and pagination (if results > 6)

### Components:
- **Section Title**
  - Copy: `Featured This Month`
  - Typography: Bold, 32px, forest green

- **Featured Trek Card** (Large, horizontal)
  - **Image:** Full-width, 40% of card width
  - **Content:** 60% width, includes all standard card elements
  - **Badge:** "Featured" (amber background)
  - **Special CTA:** "Book Now" (primary button)

---

## Section 8: Help & Support CTA
**Padding:** 80px vertical, 120px horizontal
**Background:** White (#FFFFFF)

### Components:
- **Content Card** (Centered, max-width 700px)
  - **Icon:** Question mark / chat bubble
  - **Headline:** "Need Help Choosing?"
  - **Message:** "Our adventure experts are here to help you find the perfect trek."
  - **CTA Buttons:**
    - "Chat with Us" (WhatsApp/chat widget)
    - "Contact Us" (link to contact page)

---

## Mobile-Specific Adaptations

1. **Filters:** Slide-out drawer from bottom, overlay backdrop
2. **Search:** Full-width, sticky top
3. **Results:** Single column cards, simplified stats
4. **Sort/View Toggle:** Bottom sheet or inline dropdown
5. **Pagination:** Simplified (Previous/Next + page number)
6. **Sidebar:** Hidden, accessible via filter button

---

## Component States Summary

### Filter Sidebar
- **Default:** All filters unchecked/unselected
- **Active:** Filters applied, count badge on toggle
- **Mobile Drawer:** Slide in from bottom, backdrop overlay
- **Reset:** Clears all, returns to default

### Search Bar
- **Default:** Empty, placeholder visible
- **Typing:** Real-time results update (debounced)
- **Results:** Shows count, highlights matches
- **Clear:** X button appears, clears on click

### Trek Cards
- **Default:** Standard display
- **Hover:** Image zoom, shadow increase, buttons visible
- **Loading:** Skeleton loader
- **Saved:** Heart icon filled
- **Out of Stock:** Grayed out, "Sold Out" badge

### Sort Dropdown
- **Default:** "Most Popular" selected
- **Open:** Dropdown menu visible
- **Selected:** Highlighted option
- **Change:** Results re-sort immediately

---

## Copy Guidelines

- **Page Title:** Inspirational, discovery-focused
- **Filters:** Clear, concise labels
- **Trek Names:** Capitalized, descriptive
- **Stats:** Abbreviated where appropriate ("14 Days", "5,364m")
- **CTAs:** Action-oriented ("View Details", "Book Now")
- **Empty States:** Helpful, encouraging

---

## Interaction Notes

- **Filter Application:** Results update immediately (no "Apply" button on desktop)
- **URL State:** Filters reflected in URL query params for sharing/bookmarking
- **Scroll Position:** Maintained when filters change
- **Keyboard Navigation:** Full support for filters and cards
- **Accessibility:** ARIA labels, keyboard shortcuts, screen reader support

---

## Performance Considerations

- **Lazy Loading:** Images load as user scrolls
- **Debounced Search:** 300ms delay on search input
- **Filter Debouncing:** Batch filter changes
- **Pagination:** Load 12-18 items per page
- **Caching:** Cache filter results for common combinations
