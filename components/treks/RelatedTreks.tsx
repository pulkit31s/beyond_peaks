import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Mountain, ArrowRight } from 'lucide-react'
import { Trek } from '@/types'
import { cn } from '@/lib/utils'
import { featuredTreks } from '@/lib/data'

interface RelatedTreksProps {
  currentTrek: Trek
}

const difficultyColors = {
  Easy: 'bg-green-100 text-green-800',
  Moderate: 'bg-yellow-100 text-yellow-800',
  Difficult: 'bg-orange-100 text-orange-800',
  Challenging: 'bg-red-100 text-red-800',
}

export default function RelatedTreks({ currentTrek }: RelatedTreksProps) {
  // Filter out current trek and get related treks
  const relatedTreks = featuredTreks
    .filter(trek => trek.slug !== currentTrek.slug)
    .slice(0, 3)

  if (relatedTreks.length === 0) return null

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-12 text-center">
          You Might Also Like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedTreks.map((trek) => (
            <Link
              key={trek.id}
              href={`/treks/${trek.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={trek.coverImage}
                  alt={trek.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-forest-green mb-3 group-hover:text-opacity-80 transition-colors">
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
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-forest-green">
                    ₹{trek.price.toLocaleString()}
                  </span>
                  <span className="text-forest-green font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
