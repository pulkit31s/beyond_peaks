import { Trek } from '@/types'
import { trekDetails } from './trekData'

// Get all treks from trekDetails
export function getAllTreks(): Trek[] {
  return Object.values(trekDetails)
}

// Filter treks based on criteria
export interface TrekFilters {
  search?: string
  locations?: string[]
  difficulty?: string[]
  duration?: { min?: number; max?: number }
  altitude?: { min?: number; max?: number }
  price?: { min?: number; max?: number }
  season?: string[]
}

export function filterTreks(treks: Trek[], filters: TrekFilters): Trek[] {
  return treks.filter((trek) => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      const matchesSearch =
        trek.name.toLowerCase().includes(searchLower) ||
        trek.region.toLowerCase().includes(searchLower) ||
        trek.startLocation.toLowerCase().includes(searchLower)
      if (!matchesSearch) return false
    }

    // Location filter
    if (filters.locations && filters.locations.length > 0) {
      if (!filters.locations.includes(trek.region)) return false
    }

    // Difficulty filter
    if (filters.difficulty && filters.difficulty.length > 0) {
      if (!filters.difficulty.includes(trek.difficulty)) return false
    }

    // Duration filter
    if (filters.duration) {
      if (filters.duration.min && trek.duration < filters.duration.min) return false
      if (filters.duration.max && trek.duration > filters.duration.max) return false
    }

    // Altitude filter
    if (filters.altitude) {
      if (filters.altitude.min && trek.maxAltitude < filters.altitude.min) return false
      if (filters.altitude.max && trek.maxAltitude > filters.altitude.max) return false
    }

    // Price filter
    if (filters.price) {
      if (filters.price.min && trek.price < filters.price.min) return false
      if (filters.price.max && trek.price > filters.price.max) return false
    }

    return true
  })
}

export function sortTreks(treks: Trek[], sortBy: string): Trek[] {
  const sorted = [...treks]
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price)
    case 'duration-short':
      return sorted.sort((a, b) => a.duration - b.duration)
    case 'duration-long':
      return sorted.sort((a, b) => b.duration - a.duration)
    case 'altitude-low':
      return sorted.sort((a, b) => a.maxAltitude - b.maxAltitude)
    case 'altitude-high':
      return sorted.sort((a, b) => b.maxAltitude - a.maxAltitude)
    case 'newest':
      return sorted.reverse() // Assuming newer treks are added later
    case 'popular':
    default:
      return sorted // Default order
  }
}
