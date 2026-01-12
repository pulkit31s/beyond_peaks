'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920"
          alt="Mountain landscape"
          fill
          priority
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Go Beyond Peaks.
          <br />
          Explore the World.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
        >
          Join thousands of adventurers on life-changing treks through the Himalayas and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/explore-treks"
            className="group px-8 py-4 bg-white text-forest-green rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            Explore Treks
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/explore-treks"
            className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white hover:text-forest-green transition-all flex items-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Book Your Adventure
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <p className="text-white/80 text-sm mb-2">Scroll to explore</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-white/80 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}
