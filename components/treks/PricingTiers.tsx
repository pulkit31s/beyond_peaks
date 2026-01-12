import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { Trek } from '@/types'
import { cn } from '@/lib/utils'

interface PricingTiersProps {
  trek: Trek
}

export default function PricingTiers({ trek }: PricingTiersProps) {
  if (!trek.packages || trek.packages.length === 0) return null

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-12 text-center">
          Choose Your Adventure Package
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trek.packages.map((pkg, index) => (
            <div
              key={index}
              className={cn(
                'bg-white rounded-xl shadow-md p-8 relative',
                pkg.recommended && 'ring-2 ring-forest-green'
              )}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-forest-green mb-2">{pkg.name}</h3>
              <p className="text-stone-gray mb-6">{pkg.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-forest-green">₹{pkg.price.toLocaleString()}</span>
                <span className="text-stone-gray"> per person</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-forest-green flex-shrink-0 mt-0.5" />
                    <span className="text-stone-gray text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#book-now"
                className={cn(
                  'block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2',
                  pkg.recommended
                    ? 'bg-forest-green text-white hover:bg-opacity-90'
                    : 'bg-gray-100 text-forest-green hover:bg-gray-200'
                )}
              >
                Book {pkg.name}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
