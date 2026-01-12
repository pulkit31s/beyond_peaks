import { Trek } from '@/types'
import { Check } from 'lucide-react'

interface TrekOverviewProps {
  trek: Trek
}

export default function TrekOverview({ trek }: TrekOverviewProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-8">
          About This Trek
        </h2>

        {trek.story && trek.story.map((paragraph, index) => (
          <p key={index} className="text-lg text-stone-gray leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}

        {trek.highlights && trek.highlights.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-forest-green mb-6">Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trek.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-forest-green flex-shrink-0 mt-1" />
                  <p className="text-stone-gray">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
