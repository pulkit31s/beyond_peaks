'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    setEmail('')
    
    setTimeout(() => setIsSuccess(false), 3000)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-green to-forest-green/80">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Stay Updated on New Adventures
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8">
          Get early access to new treks, exclusive offers, and adventure stories delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-gray" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="px-8 py-4 bg-white text-forest-green rounded-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSuccess ? (
              <>
                <Check className="h-5 w-5" />
                Subscribed!
              </>
            ) : isSubmitting ? (
              'Subscribing...'
            ) : (
              'Subscribe'
            )}
          </button>
        </form>

        <p className="text-sm text-white/70 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
