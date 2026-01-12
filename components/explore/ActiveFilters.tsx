'use client'

import { X } from 'lucide-react'
import { TrekFilters } from '@/lib/treks'

interface ActiveFiltersProps {
  filters: TrekFilters
  onRemoveFilter: (key: keyof TrekFilters, value?: string) => void
  onClearAll: () => void
}

export default function ActiveFilters({ filters, onRemoveFilter, onClearAll }: ActiveFiltersProps) {
  const activeFilters: Array<{ key: keyof TrekFilters; label: string; value?: string }> = []

  if (filters.locations && filters.locations.length > 0) {
    filters.locations.forEach((loc) => {
      activeFilters.push({ key: 'locations', label: `Location: ${loc}`, value: loc })
    })
  }

  if (filters.difficulty && filters.difficulty.length > 0) {
    filters.difficulty.forEach((diff) => {
      activeFilters.push({ key: 'difficulty', label: `Difficulty: ${diff}`, value: diff })
    })
  }

  if (filters.duration) {
    activeFilters.push({
      key: 'duration',
      label: `Duration: ${filters.duration.min}-${filters.duration.max} days`,
    })
  }

  if (filters.altitude) {
    activeFilters.push({
      key: 'altitude',
      label: `Altitude: ${filters.altitude.min}-${filters.altitude.max}m`,
    })
  }

  if (filters.price) {
    activeFilters.push({
      key: 'price',
      label: `Price: ₹${filters.price.min}-₹${filters.price.max}`,
    })
  }

  if (activeFilters.length === 0) return null

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {activeFilters.map((filter, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-2 px-3 py-1 bg-forest-green/10 text-forest-green rounded-full text-sm"
        >
          {filter.label}
          <button
            onClick={() => onRemoveFilter(filter.key, filter.value)}
            className="hover:text-forest-green/70"
          >
            <X className="h-4 w-4" />
          </button>
        </span>
      ))}
      <button
        onClick={onClearAll}
        className="text-sm text-forest-green hover:underline"
      >
        Clear All Filters
      </button>
    </div>
  )
}
