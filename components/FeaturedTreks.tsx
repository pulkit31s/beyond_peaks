'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Mountain, ArrowRight } from 'lucide-react'
import { featuredTreks } from '@/lib/data'
import { Trek } from '@/types'
import { cn } from '@/lib/utils'

function TrekCard({ trek }: { trek: Trek }) {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Moderate: 'bg-yellow-100 text-yellow-800',
    Difficult: 'bg-orange-100 text-orange-800',
    Challenging: 'bg-red-100 text-red-800',
  }

  const badgeColors = {
    Upcoming: 'bg-green-500',
    'Filling Fast': 'bg-amber-500',
    New: 'bg-sky-blue',
  }

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Badge */}
      {trek.badge && (
        <div className={cn('absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-white text-xs font-semibold', badgeColors[trek.badge])}>
          {trek.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={trek.coverImage}
          alt={trek.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-forest-green mb-3 group-hover:text-opacity-80 transition-colors">
          {trek.name}
        </h3>

        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-stone-gray">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {trek.duration} Days
          </span>
          <span className={cn('px-2 py-1 rounded-full text-xs font-medium', difficultyColors[trek.difficulty])}>
            {trek.difficulty}
          </span>
          <span className="flex items-center gap-1">
            <Mountain className="h-4 w-4" />
            {trek.maxAltitude}m
          </span>
        </div>

        <p className="text-stone-gray text-sm mb-4">
          Starting from: {trek.startLocation}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-forest-green">
              Starting from ₹{trek.price.toLocaleString()}
            </p>
            <p className="text-xs text-stone-gray">per person</p>
          </div>
          {trek.slotsLeft && trek.slotsLeft < 10 && (
            <span className="text-xs text-amber-600 font-medium">
              {trek.slotsLeft} slots left
            </span>
          )}
        </div>

        <Link
          href={`/treks/${trek.slug}`}
          className="block w-full px-4 py-3 bg-forest-green text-white rounded-lg font-medium text-center hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default function FeaturedTreks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-forest-green mb-4">
              Featured Upcoming Treks
            </h2>
            <p className="text-lg text-stone-gray">
              Discover handpicked adventures waiting for you
            </p>
          </div>
          <Link
            href="/explore-treks"
            className="mt-4 sm:mt-0 text-forest-green font-semibold hover:underline flex items-center gap-2"
          >
            View All Treks
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTreks.map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </div>
      </div>
    </section>
  )
}
