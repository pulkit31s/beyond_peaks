# Beyond Peaks - Homepage

A modern, responsive homepage for Beyond Peaks adventure and trekking community.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Homepage component
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Sticky navigation bar
│   ├── Hero.tsx             # Full-screen hero section
│   ├── MissionStatement.tsx # Mission & values section
│   ├── FeaturedTreks.tsx    # Featured treks grid
│   ├── TrustStats.tsx       # Statistics section
│   ├── Testimonials.tsx     # Testimonials carousel
│   ├── InstagramFeed.tsx    # Instagram feed preview
│   ├── BlogPreview.tsx      # Blog/stories preview
│   ├── Newsletter.tsx       # Newsletter signup
│   ├── FinalCTA.tsx         # Final call-to-action
│   └── Footer.tsx           # Footer component
├── lib/
│   ├── utils.ts             # Utility functions
│   └── data.ts              # Sample data
├── types/
│   └── index.ts             # TypeScript types
└── public/                  # Static assets
```

## 🎨 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Sticky navigation with scroll effects
- ✅ Smooth animations with Framer Motion
- ✅ Hero section with video/image background
- ✅ Featured treks showcase
- ✅ Testimonials carousel
- ✅ Instagram feed integration
- ✅ Newsletter signup
- ✅ SEO optimized
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📝 Customization

### Update Colors

Edit `tailwind.config.ts` to change brand colors:

```typescript
colors: {
  'forest-green': '#234733',
  'stone-gray': '#5B5F61',
  'sky-blue': '#5FA3D1',
  'amber': '#FFB74D',
}
```

### Update Content

Edit `lib/data.ts` to update:
- Featured treks
- Testimonials
- Stories
- Statistics
- Instagram posts

### Add New Sections

1. Create component in `components/`
2. Import and add to `app/page.tsx`
3. Style with Tailwind classes

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Environment Variables

Create `.env.local` for environment-specific variables:

```env
NEXT_PUBLIC_INSTAGRAM_API_KEY=your_key
NEXT_PUBLIC_API_URL=your_api_url
```

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For questions or support, contact the development team.

---

Built with ❤️ for Beyond Peaks
