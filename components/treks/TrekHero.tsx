'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Mountain, Sun, ArrowRight } from 'lucide-react'
import { Trek } from '@/types'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface TrekHeroProps {
  trek: Trek
}

const difficultyColors = {
  Easy: 'bg-green-500',
  Moderate: 'bg-yellow-500',
  Difficult: 'bg-orange-500',
  Challenging: 'bg-red-500',
}

export default function TrekHero({ trek }: TrekHeroProps) {
  return (
    <section className="relative h-screen md:h-[85vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60 z-10" />
        <Image
          src={trek.coverImage}
          alt={trek.name}
          fill
          priority
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Breadcrumb */}
      <div className="absolute top-24 left-6 md:left-12 z-20">
        <nav className="text-white/80 text-sm">
          <Link href="/" className="hover:text-white">Home</Link>
          {' > '}
          <Link href="/explore-treks" className="hover:text-white">Explore Treks</Link>
          {' > '}
          <span className="text-white">{trek.region}</span>
          {' > '}
          <span className="text-white">{trek.name}</span>
        </nav>
      </div>

      {/* Content */}
      <div className="relative z-20 text-left px-6 md:px-12 max-w-5xl mx-auto mt-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          {trek.name}
        </motion.h1>

        {trek.tagline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/90 mb-8"
          >
            {trek.tagline}
          </motion.p>
        )}

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 p-4 bg-black/40 backdrop-blur-md rounded-lg"
        >
          <div className="flex items-center gap-2 text-white">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">{trek.duration} Days</span>
          </div>
          <div className={cn('px-3 py-1 rounded-full text-white text-sm font-semibold', difficultyColors[trek.difficulty])}>
            {trek.difficulty}
          </div>
          <div className="flex items-center gap-2 text-white">
            <Mountain className="h-5 w-5" />
            <span className="font-medium">{trek.maxAltitude.toLocaleString()}m</span>
          </div>
          {trek.bestSeason && (
            <div className="flex items-center gap-2 text-white">
              <Sun className="h-5 w-5" />
              <span className="font-medium">{trek.bestSeason}</span>
            </div>
          )}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="#book-now"
            className="inline-flex items-center gap-2 px-8 py-4 bg-forest-green text-white rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all"
          >
            Book Your Adventure
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
