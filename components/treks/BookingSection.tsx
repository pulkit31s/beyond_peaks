'use client'

import { useState } from 'react'
import { Calendar, Users, Mail, Phone, Shield, CheckCircle } from 'lucide-react'
import { Trek } from '@/types'

interface BookingSectionProps {
  trek: Trek
}

export default function BookingSection({ trek }: BookingSectionProps) {
  const [participants, setParticipants] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    emergencyContact: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log('Booking submitted', { trek, participants, selectedDate, formData })
  }

  const totalPrice = trek.price * participants

  return (
    <section id="book-now" className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-12 text-center">
          Book Your Adventure
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-lg font-semibold text-forest-green mb-3">
                  Select Departure Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-gray" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-forest-green focus:outline-none"
                  />
                </div>
              </div>

              {/* Participants */}
              <div>
                <label className="block text-lg font-semibold text-forest-green mb-3">
                  Number of Participants
                </label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setParticipants(Math.max(1, participants - 1))}
                    className="w-12 h-12 border-2 border-gray-200 rounded-lg flex items-center justify-center hover:border-forest-green"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-forest-green w-12 text-center">
                    {participants}
                  </span>
                  <button
                    type="button"
                    onClick={() => setParticipants(Math.min(10, participants + 1))}
                    className="w-12 h-12 border-2 border-gray-200 rounded-lg flex items-center justify-center hover:border-forest-green"
                  >
                    +
                  </button>
                  <span className="text-stone-gray">Adventurers</span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-gray mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-forest-green focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-gray mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-gray" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-forest-green focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-gray mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-gray" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-forest-green focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-gray mb-2">
                    Emergency Contact *
                  </label>
                  <input
                    type="text"
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-forest-green focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-forest-green text-white rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors"
              >
                Proceed to Payment
              </button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-forest-green mb-6">Booking Summary</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-stone-gray text-sm">Trek</p>
                  <p className="font-semibold">{trek.name}</p>
                </div>
                {selectedDate && (
                  <div>
                    <p className="text-stone-gray text-sm">Departure Date</p>
                    <p className="font-semibold">{new Date(selectedDate).toLocaleDateString()}</p>
                  </div>
                )}
                <div>
                  <p className="text-stone-gray text-sm">Participants</p>
                  <p className="font-semibold">{participants} person(s)</p>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-gray">Package Price</span>
                    <span>₹{trek.price.toLocaleString()} × {participants}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-gray">Service Fee</span>
                    <span>₹500</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-gray">Taxes</span>
                    <span>₹{(totalPrice * 0.05).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t">
                    <span className="text-xl font-bold text-forest-green">Total</span>
                    <span className="text-2xl font-bold text-forest-green">
                      ₹{(totalPrice + 500 + totalPrice * 0.05).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="space-y-3 pt-6 border-t">
                <div className="flex items-center gap-2 text-sm text-stone-gray">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Free Cancellation (30 days)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-gray">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-gray">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Instant Confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
