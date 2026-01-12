'use client'

import { useState, useMemo, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ExploreTreksHeader from '@/components/explore/ExploreTreksHeader'
import SearchBar from '@/components/explore/SearchBar'
import FilterSidebar from '@/components/explore/FilterSidebar'
import ActiveFilters from '@/components/explore/ActiveFilters'
import ResultsArea from '@/components/explore/ResultsArea'
import { getAllTreks, filterTreks, sortTreks, TrekFilters } from '@/lib/treks'
import { Filter } from 'lucide-react'

export default function ExploreTreksPage() {
  const allTreks = getAllTreks()
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<TrekFilters>({})
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Debounced search
  const [debouncedSearch, setDebouncedSearch] = useState('')
  
  // Update debounced search after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  // Combine search with filters
  const filteredTreks = useMemo(() => {
    const searchFilters = { ...filters }
    if (debouncedSearch) {
      searchFilters.search = debouncedSearch
    }
    const filtered = filterTreks(allTreks, searchFilters)
    return sortTreks(filtered, sortBy)
  }, [allTreks, filters, debouncedSearch, sortBy])

  const uniqueDestinations = useMemo(() => {
    return new Set(allTreks.map((t) => t.region)).size
  }, [allTreks])

  const removeFilter = (key: keyof TrekFilters, value?: string) => {
    setFilters((prev) => {
      const updated = { ...prev }
      if (key === 'locations' && value && updated.locations) {
        const filtered = updated.locations.filter((l) => l !== value)
        updated.locations = filtered.length > 0 ? filtered : undefined
      } else if (key === 'difficulty' && value && updated.difficulty) {
        const filtered = updated.difficulty.filter((d) => d !== value)
        updated.difficulty = filtered.length > 0 ? filtered : undefined
      } else {
        delete updated[key]
      }
      return updated
    })
  }

  const clearAllFilters = () => {
    setFilters({})
    setSearchQuery('')
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ExploreTreksHeader totalTreks={allTreks.length} totalDestinations={uniqueDestinations} />

      {/* Search and Filter Bar */}
      <div className="sticky top-20 z-30 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden px-4 py-2 border-2 border-gray-200 rounded-lg flex items-center gap-2 hover:border-forest-green"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>
          <ActiveFilters
            filters={filters}
            onRemoveFilter={removeFilter}
            onClearAll={clearAllFilters}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Results Area */}
          <div className="flex-1">
            <ResultsArea
              treks={filteredTreks}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
