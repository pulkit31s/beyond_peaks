import { Mountain, Users, Star, MapPin } from 'lucide-react'
import { stats } from '@/lib/data'

const iconMap = {
  mountain: Mountain,
  users: Users,
  star: Star,
  map: MapPin,
}

export default function TrustStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap] || Mountain
            return (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-green/10 rounded-full mb-4 mx-auto">
                  <Icon className="h-8 w-8 text-forest-green" />
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-forest-green mb-2">
                  {stat.number}
                </p>
                <p className="text-stone-gray font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
