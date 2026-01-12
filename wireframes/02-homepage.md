# Homepage - Wireframe & Component Specifications

## Page Structure Overview
**URL Pattern:** `/` (root)
**Layout:** Full-width, single column with strategic sections

---

## Section 1: Hero Section (Full-Screen)
**Height:** 100vh
**Background:** Full-bleed video or high-res image with parallax effect

### Components:
- **Hero Video/Image**
  - Content: Mountain landscape, trekkers on trail, sunrise/sunset
  - State: Autoplay (muted, loop), fallback to static image
  - Overlay: Dark gradient `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)`
  - Animation: Subtle parallax on scroll

- **Navigation Bar** (Sticky, transparent → solid on scroll)
  - **Default State (Transparent):**
    - Logo: "Beyond Peaks" text + icon, white color
    - Menu Items: Home, Explore Treks, Itineraries, Stories, About, Contact
    - CTAs: "Sign In" (text) + "Book Adventure" (button, white border)
    - Background: Transparent
  
  - **Scrolled State (Solid):**
    - Background: White (#FFFFFF) with shadow
    - Logo: Forest green (#234733)
    - Menu Items: Stone gray (#5B5F61)
    - CTAs: "Sign In" (text) + "Book Adventure" (button, green background)

- **Hero Content** (Centered, vertical alignment)
  - **Main Headline**
    - Copy: `Go Beyond Peaks. Explore the World.`
    - Typography: Bold, 72px (desktop) / 48px (mobile)
    - Color: White (#FFFFFF)
    - Animation: Fade in + slide up on load
  
  - **Subheadline**
    - Copy: `Join thousands of adventurers on life-changing treks through the Himalayas and beyond.`
    - Typography: Regular, 24px (desktop) / 18px (mobile)
    - Color: White, 90% opacity
    - Animation: Fade in delay 0.3s
  
  - **CTA Buttons** (Side-by-side, 24px gap)
    - **Button 1: Primary**
      - Copy: `Explore Treks`
      - Variant: Large, white background, green text
      - Icon: Arrow right
      - Link: `/explore-treks`
    
    - **Button 2: Secondary**
      - Copy: `Book Your Adventure`
      - Variant: Large, transparent, white border
      - Icon: Calendar
      - Link: `/explore-treks` (scrolls to featured section)
  
  - **Scroll Indicator**
    - Component: Animated chevron down
    - Position: Bottom center
    - Animation: Bounce effect
    - Copy: "Scroll to explore"

---

## Section 2: Mission Statement
**Padding:** 100px vertical, 120px horizontal
**Background:** White (#FFFFFF)
**Max-width:** 900px, centered

### Components:
- **Section Title**
  - Copy: `Why Beyond Peaks?`
  - Typography: Bold, 48px
  - Color: Forest green (#234733)
  - Alignment: Center

- **Mission Text** (2-3 paragraphs)
  - **Paragraph 1:**
    - Copy: *"Beyond Peaks isn't just about reaching summits—it's about discovering yourself in the wild. We believe every mountain, every trail, every sunrise holds a story waiting to be lived."*
    - Typography: Regular, 20px, line-height 1.8
    - Color: Stone gray (#5B5F61)
  
  - **Paragraph 2:**
    - Copy: *"Founded by passionate trekkers, we curate experiences that blend adventure with safety, challenge with support, and exploration with respect for nature. Our certified guides, carefully planned itineraries, and commitment to sustainable travel ensure your journey is both transformative and responsible."*
    - Typography: Regular, 20px, line-height 1.8
    - Color: Stone gray (#5B5F61)

- **Values Grid** (3 columns, icons + text)
  - **Value 1: Safety First**
    - Icon: Shield checkmark
    - Title: "Safety First"
    - Description: "Certified guides, medical support, and comprehensive safety protocols"
  
  - **Value 2: Authentic Experiences**
    - Icon: Compass
    - Title: "Authentic Experiences"
    - Description: "Real adventures, local connections, and genuine cultural immersion"
  
  - **Value 3: Sustainable Travel**
    - Icon: Leaf
    - Title: "Sustainable Travel"
    - Description: "Leave no trace, support local communities, protect the mountains"

---

## Section 3: Featured Upcoming Treks
**Padding:** 100px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Section Header** (Flex layout)
  - **Title:**
    - Copy: `Featured Upcoming Treks`
    - Typography: Bold, 48px
    - Color: Forest green (#234733)
  
  - **View All Link** (Right side)
    - Copy: `View All Treks →`
    - Typography: Regular, 18px
    - Color: Forest green (#234733)
    - Link: `/explore-treks`

- **Trek Cards Grid** (3 columns desktop, 2 tablet, 1 mobile)
  - **Card Components:**
    - **Cover Image:** High-res, aspect ratio 16:9, hover zoom effect
    - **Badge:** "Upcoming" or "Filling Fast" (top-right corner)
    - **Trek Name:** Bold, 24px, forest green
    - **Quick Info:** Duration, Difficulty badge, Max altitude (icons + text)
    - **Starting Location:** Regular, 16px, gray
    - **Price:** Bold, 20px, forest green ("Starting from ₹[Amount]")
    - **CTA Button:** "View Details" (outline, full-width)
    - **Hover State:** Shadow increase, image zoom, button becomes solid
  
  - **Sample Card Copy:**
    ```
    [Image: Everest Base Camp]
    [Badge: Filling Fast]
    
    Everest Base Camp Trek
    
    📅 14 Days | ⚡ Difficult | ⛰️ 5,364m
    
    Starting from: Kathmandu, Nepal
    
    Starting from ₹45,000
    
    [View Details Button]
    ```

- **Countdown Timer** (Optional, on first card)
  - Component: "Next Departure in [X] days [Y] hours"
  - Style: Amber background, white text
  - Position: Below price

---

## Section 4: Trust & Social Proof
**Padding:** 80px vertical, 120px horizontal
**Background:** White (#FFFFFF)

### Components:
- **Stats Bar** (4 columns, equal width)
  - **Stat 1:**
    - Number: `500+`
    - Label: "Successful Treks"
    - Icon: Mountain
  
  - **Stat 2:**
    - Number: `2,500+`
    - Label: "Happy Adventurers"
    - Icon: Users
  
  - **Stat 3:**
    - Number: `98%`
    - Label: "Satisfaction Rate"
    - Icon: Star
  
  - **Stat 4:**
    - Number: `15+`
    - Label: "Destinations"
    - Icon: Map pin

- **Certifications & Trust Badges**
  - Icons/logos: Adventure Travel Trade Association, Mountain Safety, etc.
  - Layout: Horizontal flex, centered
  - Style: Grayscale logos, hover color

---

## Section 5: Testimonials Carousel
**Padding:** 100px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Section Title**
  - Copy: `Stories from the Trail`
  - Typography: Bold, 48px
  - Color: Forest green (#234733)
  - Alignment: Center

- **Testimonial Cards** (Carousel, 2 visible on desktop, 1 on mobile)
  - **Card Layout:**
    - Quote: Large, italic, 24px, inspirational text
    - Author Info: Name, trek name, date
    - Avatar: Circular image
    - Rating: 5 stars
    - Background: White card with shadow
  
  - **Sample Copy:**
    ```
    "Beyond Peaks didn't just take me on a trek—they took me 
    on a journey of self-discovery. The guides were like family, 
    and every moment was perfectly orchestrated."
    
    — Rahul Mehta
    Annapurna Circuit Trek, March 2024
    ⭐⭐⭐⭐⭐
    ```

- **Navigation:** Previous/Next arrows, dot indicators
- **Auto-play:** 5 seconds per slide

---

## Section 6: Instagram Feed Preview
**Padding:** 80px vertical, 120px horizontal
**Background:** White (#FFFFFF)

### Components:
- **Section Header** (Flex layout)
  - **Title:**
    - Copy: `Follow Our Adventures`
    - Typography: Bold, 48px
    - Color: Forest green (#234733)
  
  - **Instagram Handle:**
    - Copy: `@beyondpeaks`
    - Typography: Regular, 20px
    - Color: Sky blue (#5FA3D1)
    - Link: Instagram profile

- **Image Grid** (6 images, 3x2 layout)
  - Images: Latest Instagram posts (via API or manual)
  - Aspect Ratio: Square (1:1)
  - Hover: Overlay with Instagram icon + "View on Instagram"
  - Click: Opens Instagram post in new tab

- **CTA Button** (Below grid)
  - Copy: `Follow Us on Instagram`
  - Variant: Medium, outline, Instagram gradient border
  - Icon: Instagram logo
  - Link: Instagram profile

---

## Section 7: Blog/Stories Preview
**Padding:** 100px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Section Header** (Flex layout)
  - **Title:**
    - Copy: `Latest Stories & Guides`
    - Typography: Bold, 48px
    - Color: Forest green (#234733)
  
  - **View All Link:**
    - Copy: `Read All Stories →`
    - Typography: Regular, 18px
    - Color: Forest green (#234733)
    - Link: `/community/stories`

- **Story Cards** (3 columns, horizontal layout)
  - **Card Components:**
    - **Featured Image:** Aspect ratio 16:9
    - **Category Badge:** "Gear Guide" / "Trek Story" / "Tips" (top-left)
    - **Title:** Bold, 22px, forest green
    - **Excerpt:** Regular, 16px, gray, 2 lines max
    - **Author & Date:** Small text, gray
    - **Read More Link:** "Read Story →"
    - **Hover:** Image zoom, shadow increase
  
  - **Sample Copy:**
    ```
    [Image: Trekking gear laid out]
    [Badge: Gear Guide]
    
    Essential Gear Checklist for High-Altitude Treks
    
    Everything you need to pack for a successful mountain 
    adventure, from base layers to emergency supplies...
    
    By Sarah Johnson | March 15, 2024
    
    Read Story →
    ```

---

## Section 8: Newsletter Signup
**Padding:** 100px vertical, 120px horizontal
**Background:** Forest green (#234733) gradient

### Components:
- **Content Container** (Centered, max-width 600px)
  - **Headline:**
    - Copy: `Stay Updated on New Adventures`
    - Typography: Bold, 40px, white
    - Alignment: Center
  
  - **Subheadline:**
    - Copy: `Get early access to new treks, exclusive offers, and adventure stories delivered to your inbox.`
    - Typography: Regular, 18px, white, 90% opacity
    - Alignment: Center
  
  - **Email Form** (Horizontal layout)
    - **Input Field:**
      - Placeholder: "Enter your email address"
      - Type: Email
      - Style: Large, rounded, white background
      - Validation: Real-time email format check
    
    - **Submit Button:**
      - Copy: `Subscribe`
      - Variant: Large, white text, green background
      - State: Default → Loading → Success (checkmark)
  
  - **Privacy Note:**
    - Copy: "We respect your privacy. Unsubscribe anytime."
    - Typography: Small, 12px, white, 70% opacity
    - Alignment: Center

- **Success State:**
  - Message: "Thanks for subscribing! Check your email to confirm."
  - Icon: Checkmark circle
  - Background: Light green tint

---

## Section 9: Final CTA Section
**Padding:** 120px vertical, 120px horizontal
**Background:** Dark gradient (mountain silhouette)

### Components:
- **Headline**
  - Copy: `Your Next Adventure Awaits`
  - Typography: Bold, 56px, white
  - Alignment: Center

- **Subheadline**
  - Copy: `Join the Beyond Peaks community and start your journey today.`
  - Typography: Regular, 24px, white, 90% opacity
  - Alignment: Center

- **CTA Buttons** (Centered, side-by-side, 24px gap)
  - **Button 1:**
    - Copy: `Explore All Treks`
    - Variant: Large, white background, green text
    - Link: `/explore-treks`
  
  - **Button 2:**
    - Copy: `Join the Community`
    - Variant: Large, transparent, white border
    - Link: `/community`

- **Trust Elements** (Small text below buttons)
  - Copy: "Free cancellation | Secure booking | 24/7 support"
  - Typography: Small, 14px, white, 80% opacity

---

## Footer
**Padding:** 60px vertical, 120px horizontal
**Background:** Dark gray (#2C2C2C)

### Components:
- **Footer Grid** (4 columns desktop, 2 tablet, 1 mobile)
  - **Column 1: Brand**
    - Logo: "Beyond Peaks" + tagline
    - Description: Brief mission statement
    - Social Icons: Instagram, Facebook, YouTube, WhatsApp
  
  - **Column 2: Quick Links**
    - Title: "Quick Links"
    - Links: Explore Treks, Upcoming Itineraries, Past Treks, Stories, About Us
  
  - **Column 3: Support**
    - Title: "Support"
    - Links: Contact Us, FAQs, Safety Guidelines, Cancellation Policy, Terms & Conditions
  
  - **Column 4: Newsletter** (Mobile: moves to top)
    - Title: "Stay Connected"
    - Email input + Subscribe button
    - Social links

- **Bottom Bar**
  - Copyright: "© 2024 Beyond Peaks. All rights reserved."
  - Legal Links: Privacy Policy, Terms, Sitemap
  - Payment Icons: Visa, Mastercard, Razorpay, etc.

---

## Mobile-Specific Adaptations

1. **Hero:** Reduced height (85vh), single CTA button stack
2. **Navigation:** Hamburger menu, slide-out drawer
3. **Stats Bar:** 2x2 grid instead of 4 columns
4. **Trek Cards:** Single column, horizontal scroll option
5. **Testimonials:** Single card visible, swipe navigation
6. **Instagram Grid:** 2x3 layout
7. **Newsletter:** Vertical form layout
8. **Footer:** Single column, accordion sections

---

## Component States Summary

### Navigation
- **Default:** Transparent background
- **Scrolled:** White background, shadow
- **Mobile Menu:** Slide-out drawer from right
- **Active Link:** Forest green underline

### Buttons
- **Primary:** Green background, white text
- **Secondary:** Transparent, white border
- **Hover:** Scale 1.05, shadow increase
- **Loading:** Spinner, disabled state

### Forms
- **Email Input:** White background, gray border
- **Focus:** Green border, shadow
- **Error:** Red border, error message
- **Success:** Green border, checkmark

### Cards
- **Default:** White/gray background, subtle shadow
- **Hover:** Shadow increase, image zoom
- **Loading:** Skeleton loader

---

## Copy Guidelines

- **Hero:** Bold, inspirational, action-oriented
- **Mission:** Authentic, personal, values-driven
- **CTAs:** Clear, benefit-focused ("Explore Treks", "Book Your Adventure")
- **Testimonials:** Real, specific, emotional
- **Newsletter:** Value proposition, low commitment

---

## Animation & Interaction Notes

- **Hero Parallax:** Subtle background movement on scroll
- **Fade-in Sections:** Each section fades in on scroll (Intersection Observer)
- **Smooth Scrolling:** Anchor links use smooth scroll behavior
- **Loading States:** Skeleton loaders for images and content
- **Hover Effects:** Subtle scale and shadow on interactive elements
