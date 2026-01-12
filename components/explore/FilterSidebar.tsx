'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { TrekFilters } from '@/lib/treks'
import { cn } from '@/lib/utils'

interface FilterSidebarProps {
  filters: TrekFilters
  onFiltersChange: (filters: TrekFilters) => void
  isOpen: boolean
  onClose: () => void
}

export default function FilterSidebar({ filters, onFiltersChange, isOpen, onClose }: FilterSidebarProps) {
  const [showMoreLocations, setShowMoreLocations] = useState(false)

  const locations = ['Nepal', 'India (Himachal Pradesh)', 'India (Uttarakhand)', 'Ladakh', 'Sikkim', 'Bhutan']
  const displayedLocations = showMoreLocations ? locations : locations.slice(0, 4)

  const updateFilter = (key: keyof TrekFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const toggleLocation = (location: string) => {
    const current = filters.locations || []
    const updated = current.includes(location)
      ? current.filter((l) => l !== location)
      : [...current, location]
    updateFilter('locations', updated.length > 0 ? updated : undefined)
  }

  const toggleDifficulty = (difficulty: string) => {
    const current = filters.difficulty || []
    const updated = current.includes(difficulty)
      ? current.filter((d) => d !== difficulty)
      : [...current, difficulty]
    updateFilter('difficulty', updated.length > 0 ? updated : undefined)
  }

  const toggleDuration = (min: number, max: number) => {
    const current = filters.duration
    if (current?.min === min && current?.max === max) {
      updateFilter('duration', undefined)
    } else {
      updateFilter('duration', { min, max })
    }
  }

  const resetFilters = () => {
    onFiltersChange({})
  }

  const activeFilterCount = [
    filters.locations?.length,
    filters.difficulty?.length,
    filters.duration,
    filters.altitude,
    filters.price,
  ].filter(Boolean).length

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed md:sticky top-20 left-0 h-[calc(100vh-5rem)] w-80 bg-gray-50 overflow-y-auto z-50 transition-transform duration-300',
          'md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        <div className="p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="text-xl font-bold text-forest-green">Filters</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Location Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-forest-green mb-4">Location</h3>
            <div className="space-y-2">
              {displayedLocations.map((location) => (
                <label key={location} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.locations?.includes(location) || false}
                    onChange={() => toggleLocation(location)}
                    className="w-4 h-4 text-forest-green border-gray-300 rounded focus:ring-forest-green"
                  />
                  <span className="text-stone-gray">{location}</span>
                </label>
              ))}
            </div>
            {locations.length > 4 && (
              <button
                onClick={() => setShowMoreLocations(!showMoreLocations)}
                className="mt-2 text-sm text-forest-green hover:underline"
              >
                {showMoreLocations ? 'Show less' : 'Show more locations'}
              </button>
            )}
          </div>

          {/* Difficulty Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-forest-green mb-4">Difficulty Level</h3>
            <div className="space-y-2">
              {['Easy', 'Moderate', 'Difficult', 'Challenging'].map((difficulty) => (
                <label key={difficulty} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.difficulty?.includes(difficulty) || false}
                    onChange={() => toggleDifficulty(difficulty)}
                    className="w-4 h-4 text-forest-green border-gray-300 rounded focus:ring-forest-green"
                  />
                  <span className="text-stone-gray">{difficulty}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-forest-green mb-4">Duration</h3>
            <div className="space-y-2">
              {[
                { label: '3-5 days', min: 3, max: 5 },
                { label: '6-10 days', min: 6, max: 10 },
                { label: '11-15 days', min: 11, max: 15 },
                { label: '16+ days', min: 16, max: 999 },
              ].map(({ label, min, max }) => (
                <label key={label} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.duration?.min === min && filters.duration?.max === max}
                    onChange={() => toggleDuration(min, max)}
                    className="w-4 h-4 text-forest-green border-gray-300 rounded focus:ring-forest-green"
                  />
                  <span className="text-stone-gray">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Altitude Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-forest-green mb-4">Maximum Altitude</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="2000"
                  max="8000"
                  step="100"
                  value={filters.altitude?.max || 8000}
                  onChange={(e) =>
                    updateFilter('altitude', {
                      min: filters.altitude?.min || 2000,
                      max: parseInt(e.target.value),
                    })
                  }
                  className="flex-1"
                />
                <span className="text-sm text-stone-gray w-20 text-right">
                  {filters.altitude?.max || 8000}m
                </span>
              </div>
              <div className="flex gap-2">
                {[
                  { label: 'Below 4,000m', max: 4000 },
                  { label: '4,000-5,500m', min: 4000, max: 5500 },
                  { label: 'Above 5,500m', min: 5500 },
                ].map(({ label, min, max }) => (
                  <button
                    key={label}
                    onClick={() =>
                      updateFilter('altitude', min || max ? { min, max } : undefined)
                    }
                    className={cn(
                      'px-3 py-1 text-xs rounded border',
                      filters.altitude?.min === min && filters.altitude?.max === max
                        ? 'bg-forest-green text-white border-forest-green'
                        : 'bg-white text-stone-gray border-gray-300 hover:border-forest-green'
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-forest-green mb-4">Price Range</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-stone-gray w-20">₹{((filters.price?.min || 10000) / 1000).toFixed(0)}k</span>
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="5000"
                  value={filters.price?.min || 10000}
                  onChange={(e) =>
                    updateFilter('price', {
                      min: parseInt(e.target.value),
                      max: filters.price?.max || 100000,
                    })
                  }
                  className="flex-1"
                />
                <span className="text-sm text-stone-gray w-20 text-right">
                  ₹{((filters.price?.max || 100000) / 1000).toFixed(0)}k
                </span>
              </div>
            </div>
          </div>

          {/* Reset Button */}
          {activeFilterCount > 0 && (
            <button
              onClick={resetFilters}
              className="w-full py-2 text-stone-gray hover:text-forest-green text-sm font-medium"
            >
              Reset All Filters
            </button>
          )}

          {/* Mobile Apply Button */}
          <button
            onClick={onClose}
            className="w-full mt-6 py-3 bg-forest-green text-white rounded-lg font-semibold md:hidden"
          >
            Apply Filters
          </button>
        </div>
      </aside>
    </>
  )
}
