'use client'

import { useState } from 'react'
import { Calendar, Users, Mail, Phone, BookText, ArrowRight } from 'lucide-react'
import { Trek } from '@/types'
import StepIndicator from './StepIndicator'
import BookingSummary from './BookingSummary'

interface BookingFormProps {
  trek: Trek
}

const steps = ['Select Date', 'Details', 'Review & Confirm']

export default function BookingForm({ trek }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [participants, setParticipants] = useState(1)
  const [selectedPackage, setSelectedPackage] = useState(
    trek.packages?.find((p) => p.recommended) || trek.packages?.[0]
  )
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    emergencyContact: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const canContinueStep1 = selectedDate && participants > 0 && selectedPackage
  const canContinueStep2 =
    formData.name && formData.email && formData.phone && formData.emergencyContact

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsSubmitting(false)
    setSuccess(true)
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-10">
          <StepIndicator steps={steps} currentStep={currentStep} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 space-y-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-forest-green mb-4">
                      Select Departure Date
                    </h3>
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

                  <div>
                    <h3 className="text-2xl font-bold text-forest-green mb-4">
                      Number of Participants
                    </h3>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setParticipants((p) => Math.max(1, p - 1))}
                        className="w-12 h-12 border-2 border-gray-200 rounded-lg flex items-center justify-center hover:border-forest-green"
                      >
                        -
                      </button>
                      <span className="text-2xl font-bold text-forest-green w-12 text-center">
                        {participants}
                      </span>
                      <button
                        type="button"
                        onClick={() => setParticipants((p) => Math.min(10, p + 1))}
                        className="w-12 h-12 border-2 border-gray-200 rounded-lg flex items-center justify-center hover:border-forest-green"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm text-stone-gray mt-2">Max 10 participants per booking</p>
                  </div>

                  {trek.packages && trek.packages.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-bold text-forest-green mb-4">
                        Choose Your Package
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {trek.packages.map((pkg) => {
                          const isSelected = selectedPackage?.name === pkg.name
                          return (
                            <button
                              key={pkg.name}
                              type="button"
                              onClick={() => setSelectedPackage(pkg)}
                              className={`text-left p-4 rounded-xl border-2 transition-all ${
                                isSelected ? 'border-forest-green bg-forest-green/5' : 'border-gray-200'
                              }`}
                            >
                              {pkg.recommended && (
                                <span className="inline-block mb-2 px-2 py-1 text-xs rounded-full bg-amber-500 text-white">
                                  Recommended
                                </span>
                              )}
                              <p className="text-lg font-bold text-forest-green">{pkg.name}</p>
                              <p className="text-stone-gray text-sm mb-2">{pkg.description}</p>
                              <p className="text-xl font-bold text-forest-green mb-2">
                                ₹{pkg.price.toLocaleString()}
                              </p>
                              <ul className="text-sm text-stone-gray space-y-1">
                                {pkg.inclusions.slice(0, 3).map((item) => (
                                  <li key={item}>• {item}</li>
                                ))}
                              </ul>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-forest-green">Your Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        Email *
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
                        Phone *
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
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-gray" />
                        <input
                          type="text"
                          value={formData.emergencyContact}
                          onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-forest-green focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-gray mb-2">
                      Special Requirements (optional)
                    </label>
                    <div className="relative">
                      <BookText className="absolute left-4 top-3 h-5 w-5 text-stone-gray" />
                      <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-forest-green focus:outline-none"
                        placeholder="Dietary restrictions, medical conditions, questions..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-forest-green">Review & Confirm</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-stone-gray">
                    <p><span className="font-semibold text-forest-green">Trek:</span> {trek.name}</p>
                    {selectedDate && (
                      <p><span className="font-semibold text-forest-green">Date:</span> {new Date(selectedDate).toLocaleDateString()}</p>
                    )}
                    <p><span className="font-semibold text-forest-green">Participants:</span> {participants}</p>
                    {selectedPackage && (
                      <p><span className="font-semibold text-forest-green">Package:</span> {selectedPackage.name} (₹{selectedPackage.price.toLocaleString()})</p>
                    )}
                    <p><span className="font-semibold text-forest-green">Name:</span> {formData.name}</p>
                    <p><span className="font-semibold text-forest-green">Email:</span> {formData.email}</p>
                    <p><span className="font-semibold text-forest-green">Phone:</span> {formData.phone}</p>
                    <p><span className="font-semibold text-forest-green">Emergency Contact:</span> {formData.emergencyContact}</p>
                    {formData.notes && (
                      <p><span className="font-semibold text-forest-green">Notes:</span> {formData.notes}</p>
                    )}
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg text-green-800 text-sm">
                    🔒 Secure payment powered by your chosen gateway. This demo does not process payments.
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || success}
                    className="w-full px-8 py-4 bg-forest-green text-white rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {success ? 'Booking Confirmed!' : isSubmitting ? 'Processing...' : 'Confirm Booking'}
                    {!success && !isSubmitting && <ArrowRight className="h-5 w-5" />}
                  </button>
                  {success && (
                    <p className="text-green-700 text-sm">
                      Success! Your booking is confirmed. A confirmation email would be sent in a real flow.
                    </p>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
                  disabled={currentStep === 1}
                  className="px-4 py-2 text-stone-gray hover:text-forest-green disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Back
                </button>
                {currentStep < 3 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((s) => s + 1)}
                    disabled={(currentStep === 1 && !canContinueStep1) || (currentStep === 2 && !canContinueStep2)}
                    className="px-6 py-3 bg-forest-green text-white rounded-lg font-semibold hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                )}
              </div>
            </div>
          </div>

          <BookingSummary
            trek={trek}
            selectedDate={selectedDate}
            participants={participants}
            selectedPackagePrice={selectedPackage?.price || trek.price}
          />
        </div>
      </div>
    </section>
  )
}
