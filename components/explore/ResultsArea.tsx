'use client'

import { useState } from 'react'
import { Grid3x3, List, ChevronLeft, ChevronRight } from 'lucide-react'
import { Trek } from '@/types'
import TrekCard from './TrekCard'

interface ResultsAreaProps {
  treks: Trek[]
  viewMode: 'grid' | 'list'
  onViewModeChange: (mode: 'grid' | 'list') => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export default function ResultsArea({
  treks,
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
}: ResultsAreaProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const totalPages = Math.ceil(treks.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTreks = treks.slice(startIndex, startIndex + itemsPerPage)

  if (treks.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold text-forest-green mb-2">No treks found</h3>
        <p className="text-stone-gray mb-6">Try adjusting your filters or search terms</p>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <p className="text-stone-gray">
          Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, treks.length)} of {treks.length} treks
        </p>
        <div className="flex items-center gap-4">
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => {
              onSortChange(e.target.value)
              setCurrentPage(1)
            }}
            className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-forest-green focus:outline-none"
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="duration-short">Duration: Shortest First</option>
            <option value="duration-long">Duration: Longest First</option>
            <option value="altitude-low">Altitude: Lowest First</option>
            <option value="altitude-high">Altitude: Highest First</option>
            <option value="newest">Newest First</option>
          </select>

          {/* View Toggle */}
          <div className="flex items-center gap-2 border-2 border-gray-200 rounded-lg p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`
                p-2 rounded transition-colors
                ${viewMode === 'grid' ? 'bg-forest-green text-white' : 'text-stone-gray hover:bg-gray-100'}
              `}
            >
              <Grid3x3 className="h-5 w-5" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`
                p-2 rounded transition-colors
                ${viewMode === 'list' ? 'bg-forest-green text-white' : 'text-stone-gray hover:bg-gray-100'}
              `}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Trek Cards */}
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            : 'space-y-6'
        }
      >
        {paginatedTreks.map((trek) => (
          <TrekCard key={trek.id} trek={trek} viewMode={viewMode} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 border-2 border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-forest-green"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`
                    px-4 py-2 rounded-lg font-medium transition-colors
                    ${
                      currentPage === page
                        ? 'bg-forest-green text-white'
                        : 'border-2 border-gray-200 hover:border-forest-green'
                    }
                  `}
                >
                  {page}
                </button>
              )
            } else if (page === currentPage - 2 || page === currentPage + 2) {
              return <span key={page} className="px-2">...</span>
            }
            return null
          })}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 border-2 border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-forest-green"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
