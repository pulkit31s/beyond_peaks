'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Trek } from '@/types'

interface FAQsProps {
  trek: Trek
}

export default function FAQs({ trek }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!trek.faqs || trek.faqs.length === 0) return null

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {trek.faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-forest-green pr-4">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="h-6 w-6 text-forest-green flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-forest-green flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-stone-gray leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
