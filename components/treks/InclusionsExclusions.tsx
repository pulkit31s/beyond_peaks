import { Check, X } from 'lucide-react'
import { Trek } from '@/types'

interface InclusionsExclusionsProps {
  trek: Trek
}

export default function InclusionsExclusions({ trek }: InclusionsExclusionsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Inclusions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-forest-green">What&apos;s Included</h3>
            </div>
            <ul className="space-y-3">
              {trek.inclusions?.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-stone-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <X className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-3xl font-bold text-forest-green">What&apos;s Not Included</h3>
            </div>
            <ul className="space-y-3">
              {trek.exclusions?.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-gray-600 flex-shrink-0 mt-1" />
                  <span className="text-stone-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
