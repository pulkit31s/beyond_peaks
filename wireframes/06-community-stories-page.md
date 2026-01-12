# Community & Stories Page - Wireframe & Component Specifications

## Page Structure Overview
**URL Pattern:** `/community` or `/stories`
**Layout:** Blog-style with featured content, categories, and user-generated content

---

## Page Header
**Padding:** 80px vertical, 120px horizontal
**Background:** Forest green (#234733) gradient with mountain silhouette

### Components:
- **Breadcrumb**
  - Copy: `Home > Community & Stories`
  - Typography: Small, 14px, white, 80% opacity

- **Page Title**
  - Copy: `Stories from the Trail`
  - Typography: Bold, 56px (desktop) / 40px (mobile), white

- **Subtitle**
  - Copy: `Real adventures, travel tips, gear guides, and memories from our community`
  - Typography: Regular, 20px, white, 90% opacity

---

## Featured Story Section
**Padding:** 80px vertical, 120px horizontal
**Background:** White (#FFFFFF)

### Components:
- **Featured Story Card** (Large, horizontal layout)
  - **Image:** Left side, 50% width, aspect ratio 16:9
  - **Content:** Right side, 50% width, padding 40px
  
  - **Badge:** "Featured Story" (amber background)
  
  - **Category Tag:**
    - Copy: `[Category]` (e.g., "Trek Story", "Gear Guide")
    - Style: Small pill, gray background
  
  - **Title:**
    - Copy: `[Story Title]` (e.g., "How Everest Base Camp Changed My Life")
    - Typography: Bold, 36px (desktop) / 28px (mobile), forest green
  
  - **Excerpt:**
    - Copy: First 2-3 sentences of story
    - Typography: Regular, 18px, gray, line-height 1.8
    - Max lines: 4 (ellipsis)
  
  - **Author Info:**
    - Avatar: Circular image, 40px
    - Name: Bold, 16px
    - Date: Regular, 14px, gray
    - Layout: Horizontal flex, 12px gap
  
  - **Read Time:**
    - Copy: `[X] min read`
    - Icon: Clock
    - Typography: Small, 12px, gray
  
  - **CTA Button:**
    - Copy: `Read Full Story →`
    - Variant: Medium, primary
    - Link: `/community/stories/[slug]`

---

## Category Filter Bar
**Padding:** 40px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)
**Position:** Sticky top on scroll

### Components:
- **Category Chips** (Horizontal scrollable on mobile)
  - **All Stories:** (Default, active)
    - Style: Green background, white text
    - Badge: Total count `([X])`
  
  - **Trek Stories:**
    - Style: Gray background, dark text
    - Badge: Count `([X])`
  
  - **Gear Guides:**
    - Style: Gray background
    - Badge: Count `([X])`
  
  - **Travel Tips:**
    - Style: Gray background
    - Badge: Count `([X])`
  
  - **Preparation Checklists:**
    - Style: Gray background
    - Badge: Count `([X])`
  
  - **Photography:**
    - Style: Gray background
    - Badge: Count `([X])`
  
  - **Cultural Insights:**
    - Style: Gray background
    - Badge: Count `([X])`

- **Search Bar:** (Right side, desktop only)
  - Placeholder: "Search stories..."
  - Icon: Search
  - Width: 250px

---

## Stories Grid
**Padding:** 60px vertical, 120px horizontal
**Layout:** 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
**Gap:** 32px

### Story Card Components:
- **Featured Image:**
  - Aspect Ratio: 16:9
  - Hover: Zoom effect
  - Overlay: Dark gradient on hover

- **Category Badge:** (Top-left corner)
  - Copy: `[Category]`
  - Style: Small pill, colored background
  - Examples:
    - "Trek Story" (green)
    - "Gear Guide" (blue)
    - "Travel Tips" (amber)

- **Title:**
  - Copy: `[Story Title]`
  - Typography: Bold, 22px, forest green
  - Max lines: 2 (ellipsis)
  - Link: `/community/stories/[slug]`

- **Excerpt:**
  - Copy: First 2-3 sentences
  - Typography: Regular, 16px, gray
  - Max lines: 3 (ellipsis)

- **Author Info:**
  - Avatar: Circular image, 32px
  - Name: Bold, 14px
  - Date: Regular, 12px, gray
  - Layout: Horizontal flex, 8px gap

- **Read Time:**
  - Copy: `[X] min read`
  - Typography: Small, 12px, gray

- **Engagement Stats:** (Optional)
  - Views: `[X] views`
  - Comments: `[X] comments` (if enabled)
  - Typography: Small, 12px, gray

- **Hover State:**
  - Image zoom
  - Shadow increase
  - Title color darkens

---

## Story Detail Page (If clicked)
**URL:** `/community/stories/[slug]`

### Components:
- **Hero Section:**
  - **Featured Image:** Full-width, aspect ratio 21:9
  - **Overlay:** Dark gradient (bottom)
  - **Category Badge:** Top-left corner
  - **Title:** Overlaid on image, white text, bold, 48px
  - **Author & Date:** Overlaid, white text, 80% opacity

- **Article Content:**
  - **Padding:** 80px vertical, max-width 800px, centered
  
  - **Author Card:** (Top of article)
    - Avatar: Circular, 60px
    - Name: Bold, 20px
    - Bio: Regular, 14px, gray (1-2 lines)
    - Social Links: (Optional) Instagram, Twitter icons
  
  - **Article Body:**
    - Typography: Regular, 18px, line-height 1.8
    - Headings: Bold, various sizes (H2: 32px, H3: 24px)
    - Images: Full-width, rounded corners, captions
    - Quotes: Italic, larger text, left border (green)
    - Lists: Bulleted/numbered, proper spacing
  
  - **Image Gallery:** (If multiple images)
    - Grid layout: 2-3 columns
    - Lightbox on click
    - Captions below images
  
  - **Related Treks:** (If story mentions a trek)
    - Component: Trek card (small)
    - Link: `/treks/[slug]`
    - Copy: "This story is about: [Trek Name]"

- **Sidebar:** (Desktop only, right side)
  - **Table of Contents:** (If long article)
    - Title: "In This Article"
    - Links: Anchor links to headings
    - Sticky: Stays visible on scroll
  
  - **Related Stories:**
    - Title: "You Might Also Like"
    - 3-4 story cards (small)
    - Same category or similar tags
  
  - **Newsletter Signup:**
    - Title: "Stay Updated"
    - Email input + Subscribe button
    - Small card, light background

- **Article Footer:**
  - **Tags:**
    - Title: "Tags:"
    - Tag chips: Clickable, gray background
    - Examples: "Everest", "Nepal", "High Altitude", "Photography"
  
  - **Share Buttons:**
    - Title: "Share This Story"
    - Icons: Facebook, Twitter, WhatsApp, Copy Link
    - Layout: Horizontal flex
  
  - **Author Bio:** (Expanded, if not shown at top)
    - Full bio paragraph
    - Social links
    - Other stories link

- **Comments Section:** (If enabled)
  - **Title:** "Join the Conversation"
  - **Comment Form:**
    - Name input
    - Email input (not displayed)
    - Comment textarea
    - Submit button
  
  - **Comments List:**
    - **Comment Card:**
      - Avatar: Circular image
      - Name: Bold
      - Date: Small, gray
      - Comment: Regular text
      - Reply button (if nested comments enabled)
  
  - **Pagination:** (If many comments)

---

## User-Generated Content Spotlight
**Padding:** 80px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Section Title:**
  - Copy: `Community Highlights`
  - Typography: Bold, 48px, forest green
  - Alignment: Center

- **Subtitle:**
  - Copy: `Photos and stories shared by our adventurers`
  - Typography: Regular, 20px, gray
  - Alignment: Center

- **UGC Gallery:** (Masonry layout)
  - **Image Cards:**
    - Aspect Ratio: Various (masonry)
    - Overlay: Dark gradient on hover
    - Instagram Icon: (If from Instagram)
    - Caption: Overlaid on hover (if available)
    - Author: Small text, bottom-left
    - Click: Opens lightbox or Instagram post
  
  - **Layout:** 4 columns (desktop) / 3 columns (tablet) / 2 columns (mobile)
  - **Source:** Instagram API or manual uploads

- **CTA:**
  - Copy: `Share Your Adventure`
  - Button: "Tag @beyondpeaks on Instagram"
  - Variant: Medium, outline
  - Link: Instagram profile

---

## Preparation Checklists Section
**Padding:** 80px vertical, 120px horizontal
**Background:** White (#FFFFFF)

### Components:
- **Section Title:**
  - Copy: `Preparation Guides & Checklists`
  - Typography: Bold, 48px, forest green

- **Checklist Cards:** (Grid, 3 columns)
  - **Card Components:**
    - **Icon:** Checklist/document icon
    - **Title:** Bold, 20px
      - Examples:
        - "Essential Gear Checklist"
        - "Fitness Preparation Guide"
        - "Mental Preparation Tips"
        - "First Aid Kit Essentials"
    
    - **Description:** Regular, 16px, gray (2 lines)
    
    - **Download Button:**
      - Copy: `Download PDF`
      - Icon: Download
      - Variant: Small, outline
    
    - **View Online Link:**
      - Copy: `View Online →`
      - Typography: Small, green text

- **Hover State:**
  - Shadow increase
  - Slight lift effect

---

## Travel Tips Section
**Padding:** 80px vertical, 120px horizontal
**Background:** Light gray (#F5F5F5)

### Components:
- **Section Title:**
  - Copy: `Expert Travel Tips`
  - Typography: Bold, 48px, forest green

- **Tips Cards:** (Grid, 2 columns desktop, 1 mobile)
  - **Card Components:**
    - **Icon:** Lightbulb or tip icon
    - **Title:** Bold, 22px
      - Examples:
        - "How to Prevent Altitude Sickness"
        - "Photography Tips for Mountain Treks"
        - "Packing Hacks for Long Treks"
        - "Staying Safe in the Mountains"
    
    - **Excerpt:** Regular, 16px, gray (3-4 lines)
    
    - **Read More Link:**
      - Copy: `Read More →`
      - Typography: Small, green text

---

## Adventure Memories Gallery
**Padding:** 80px vertical, 120px horizontal
**Background:** White (#FFFFFF)

### Components:
- **Section Title:**
  - Copy: `Adventure Memories`
  - Typography: Bold, 48px, forest green
  - Alignment: Center

- **Gallery Grid:** (Masonry layout)
  - **Photo Cards:**
    - Various aspect ratios
    - Hover: Overlay with trek name + date
    - Click: Opens lightbox with full image + details
  
  - **Filter Tabs:** (Above gallery)
    - "All Memories"
    - "Everest Region"
    - "Annapurna Region"
    - "Ladakh"
    - "Other"

- **Load More Button:**
  - Copy: `Load More Memories`
  - Variant: Medium, outline
  - Action: Loads next batch (infinite scroll alternative)

---

## Newsletter Signup (Bottom Section)
**Padding:** 100px vertical, 120px horizontal
**Background:** Forest green (#234733) gradient

### Components:
- **Content:** (Centered, max-width 600px)
  - **Headline:**
    - Copy: `Never Miss a Story`
    - Typography: Bold, 40px, white
  
  - **Subheadline:**
    - Copy: `Get the latest adventure stories, travel tips, and trek updates delivered to your inbox.`
    - Typography: Regular, 18px, white, 90% opacity
  
  - **Email Form:**
    - Input: Large, rounded, white background
    - Button: "Subscribe" (green background, white text)
    - Privacy note: Small text, white, 70% opacity

---

## Mobile-Specific Adaptations

1. **Featured Story:** Vertical layout (image top, content bottom)
2. **Category Filter:** Horizontal scrollable chips
3. **Stories Grid:** Single column
4. **Story Detail:** No sidebar, table of contents becomes dropdown
5. **UGC Gallery:** 2 columns
6. **Checklists:** Single column
7. **Tips:** Single column

---

## Component States Summary

### Category Chips
- **Default:** Gray background, dark text
- **Active:** Green background, white text
- **Hover:** Slight scale increase

### Story Cards
- **Default:** White background, subtle shadow
- **Hover:** Shadow increase, image zoom
- **Loading:** Skeleton loader

### Forms
- **Default:** White background, gray border
- **Focus:** Green border, shadow
- **Success:** Green border, checkmark
- **Error:** Red border, error message

---

## Copy Guidelines

- **Tone:** Inspirational, authentic, helpful
- **Story Titles:** Engaging, benefit-focused
- **Excerpts:** Hook readers, leave them wanting more
- **CTAs:** Action-oriented ("Read Full Story", "Download PDF")
- **Tags:** Relevant keywords for SEO

---

## SEO Considerations

- **Meta Titles:** Include trek names, locations
- **Meta Descriptions:** Compelling, keyword-rich
- **Structured Data:** Article schema, breadcrumbs
- **Alt Text:** Descriptive for all images
- **Internal Links:** Link to related treks, stories
- **URLs:** Clean, descriptive slugs

---

## Performance Considerations

- **Image Optimization:** WebP format, lazy loading
- **Pagination:** Load 12-18 stories per page
- **Infinite Scroll:** Alternative to pagination (optional)
- **Caching:** Cache story content (rarely changes)
- **CDN:** Serve images from CDN
