export interface Trek {
  id: string
  slug: string
  name: string
  region: string
  startLocation: string
  duration: number
  difficulty: 'Easy' | 'Moderate' | 'Difficult' | 'Challenging'
  maxAltitude: number
  price: number
  coverImage: string
  nextDeparture?: string
  slotsLeft?: number
  badge?: 'Upcoming' | 'Filling Fast' | 'New'
  tagline?: string
  story?: string[]
  highlights?: string[]
  bestSeason?: string
  itinerary?: ItineraryDay[]
  inclusions?: string[]
  exclusions?: string[]
  fitnessRequirements?: string[]
  preparationTips?: string[]
  safetyMeasures?: string
  images?: string[]
  videos?: string[]
  faqs?: FAQ[]
  packages?: Package[]
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  distance?: string
  elevationGain?: string
  stayType?: string
  activities?: string[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface Package {
  name: string
  price: number
  description: string
  inclusions: string[]
  recommended?: boolean
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  trek: string
  date: string
  rating: number
  avatar?: string
}

export interface Story {
  id: string
  slug: string
  title: string
  excerpt: string
  category: 'Trek Story' | 'Gear Guide' | 'Travel Tips' | 'Preparation' | 'Photography' | 'Cultural'
  author: string
  authorAvatar?: string
  date: string
  readTime: number
  featuredImage: string
}

export interface Stat {
  number: string
  label: string
  icon: string
}
