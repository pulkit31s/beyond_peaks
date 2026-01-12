'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { Trek } from '@/types'
import { cn } from '@/lib/utils'

interface StickyInfoBarProps {
  trek: Trek
}

export default function StickyInfoBar({ trek }: StickyInfoBarProps) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isSticky) return null

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'TBA'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-white shadow-md h-20 hidden md:flex items-center">
      <div className="max-w-7xl mx-auto px-12 w-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div>
            <p className="text-2xl font-bold text-forest-green">
              Starting from ₹{trek.price.toLocaleString()}
            </p>
            <p className="text-sm text-stone-gray">per person</p>
          </div>
          {trek.nextDeparture && (
            <div className="flex items-center gap-2 text-stone-gray">
              <Calendar className="h-5 w-5" />
              <span>Next: {formatDate(trek.nextDeparture)}</span>
            </div>
          )}
          {trek.slotsLeft !== undefined && (
            <div className={cn(
              'text-sm font-medium',
              trek.slotsLeft < 5 ? 'text-amber-600' : 'text-stone-gray'
            )}>
              {trek.slotsLeft < 5 ? 'Filling Fast' : `${trek.slotsLeft} slots left`}
            </div>
          )}
        </div>
        <Link
          href="#book-now"
          className="px-6 py-3 bg-forest-green text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}
