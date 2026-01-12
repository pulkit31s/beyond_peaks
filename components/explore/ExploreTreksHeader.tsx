import Link from 'next/link'

interface ExploreTreksHeaderProps {
  totalTreks: number
  totalDestinations: number
}

export default function ExploreTreksHeader({ totalTreks, totalDestinations }: ExploreTreksHeaderProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-forest-green to-forest-green/80">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-white/80 text-sm mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          {' > '}
          <span className="text-white">Explore Treks</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Discover Your Next Adventure
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 mb-6">
          Choose from handpicked treks across the Himalayas and beyond
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm sm:text-base">
          <span>{totalTreks} Treks Available</span>
          <span>•</span>
          <span>{totalDestinations} Destinations</span>
          <span>•</span>
          <span>Multiple Upcoming Departures</span>
        </div>
      </div>
    </section>
  )
}
