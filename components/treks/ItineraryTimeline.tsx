'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Calendar, MapPin, TrendingUp, Home } from 'lucide-react'
import { ItineraryDay } from '@/types'
import { cn } from '@/lib/utils'

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[]
}

export default function ItineraryTimeline({ itinerary }: ItineraryTimelineProps) {
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([1, 2, 3]))

  const toggleDay = (day: number) => {
    const newExpanded = new Set(expandedDays)
    if (newExpanded.has(day)) {
      newExpanded.delete(day)
    } else {
      newExpanded.add(day)
    }
    setExpandedDays(newExpanded)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-12 text-center">
          Your Journey Day by Day
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block" />

          <div className="space-y-8">
            {itinerary.map((day, index) => {
              const isExpanded = expandedDays.has(day.day)
              return (
                <div key={day.day} className="relative">
                  {/* Day Circle */}
                  <div className="absolute left-0 md:left-4 w-16 h-16 bg-forest-green rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    {day.day}
                  </div>

                  {/* Day Card */}
                  <div className="ml-20 md:ml-24 bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                      onClick={() => toggleDay(day.day)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-forest-green mb-2">
                          {day.title}
                        </h3>
                        {!isExpanded && (
                          <p className="text-stone-gray line-clamp-2">
                            {day.description.substring(0, 150)}...
                          </p>
                        )}
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-6 w-6 text-forest-green ml-4" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-forest-green ml-4" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-6 space-y-4">
                        <p className="text-stone-gray leading-relaxed">{day.description}</p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-4 pt-4 border-t">
                          {day.distance && (
                            <div className="flex items-center gap-2 text-stone-gray">
                              <MapPin className="h-5 w-5" />
                              <span>{day.distance}</span>
                            </div>
                          )}
                          {day.elevationGain && (
                            <div className="flex items-center gap-2 text-stone-gray">
                              <TrendingUp className="h-5 w-5" />
                              <span>{day.elevationGain}</span>
                            </div>
                          )}
                          {day.stayType && (
                            <div className="flex items-center gap-2 text-stone-gray">
                              <Home className="h-5 w-5" />
                              <span>{day.stayType}</span>
                            </div>
                          )}
                        </div>

                        {/* Activities */}
                        {day.activities && day.activities.length > 0 && (
                          <div className="pt-4">
                            <h4 className="font-semibold text-forest-green mb-2">Activities:</h4>
                            <ul className="list-disc list-inside text-stone-gray space-y-1">
                              {day.activities.map((activity, idx) => (
                                <li key={idx}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
