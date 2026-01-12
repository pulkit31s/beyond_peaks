'use client'

import { Trek } from '@/types'
import BookingForm from '@/components/booking/BookingForm'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function BookingClient({ trek }: { trek: Trek }) {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="bg-gradient-to-br from-forest-green to-forest-green/80 text-white py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/80 mb-2">Book Your Adventure</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{trek.name}</h1>
          <p className="text-white/80">
            Duration: {trek.duration} days • Difficulty: {trek.difficulty} • Max Altitude:{' '}
            {trek.maxAltitude.toLocaleString()}m
          </p>
        </div>
      </div>
      <BookingForm trek={trek} />
      <Footer />
    </main>
  )
}
