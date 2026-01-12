import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Mountain, ArrowRight } from 'lucide-react'
import { Trek } from '@/types'
import { cn } from '@/lib/utils'

interface TrekCardProps {
  trek: Trek
  viewMode?: 'grid' | 'list'
}

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

export default function TrekCard({ trek, viewMode = 'grid' }: TrekCardProps) {
  if (viewMode === 'list') {
    return (
      <Link
        href={`/treks/${trek.slug}`}
        className="group flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="relative w-full md:w-80 h-64 md:h-auto overflow-hidden">
          {trek.badge && (
            <div className={cn('absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-white text-xs font-semibold', badgeColors[trek.badge])}>
              {trek.badge}
            </div>
          )}
          <Image
            src={trek.coverImage}
            alt={trek.name}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            unoptimized
          />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-forest-green mb-3 group-hover:text-opacity-80 transition-colors">
              {trek.name}
            </h3>
            <p className="text-stone-gray text-sm mb-4">{trek.startLocation}</p>
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
                {trek.maxAltitude.toLocaleString()}m
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-forest-green">
                Starting from ₹{trek.price.toLocaleString()}
              </p>
              <p className="text-xs text-stone-gray">per person</p>
            </div>
            <span className="text-forest-green font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              View Details
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/treks/${trek.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {trek.badge && (
        <div className={cn('absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-white text-xs font-semibold', badgeColors[trek.badge])}>
          {trek.badge}
        </div>
      )}
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
      <div className="p-6">
        <h3 className="text-xl font-bold text-forest-green mb-3 group-hover:text-opacity-80 transition-colors">
          {trek.name}
        </h3>
        <p className="text-stone-gray text-sm mb-4">{trek.startLocation}</p>
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
            {trek.maxAltitude.toLocaleString()}m
          </span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xl font-bold text-forest-green">
              Starting from ₹{trek.price.toLocaleString()}
            </p>
            <p className="text-xs text-stone-gray">per person</p>
          </div>
        </div>
        <div className="w-full px-4 py-3 bg-forest-green text-white rounded-lg font-medium text-center hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
          View Details
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
