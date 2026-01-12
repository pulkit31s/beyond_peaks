import { Shield, Compass, Leaf } from 'lucide-react'

export default function MissionStatement() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-forest-green mb-6">
          Why Beyond Peaks?
        </h2>
        <p className="text-lg sm:text-xl text-stone-gray leading-relaxed mb-6">
          Beyond Peaks isn't just about reaching summits—it's about discovering yourself in the wild. 
          We believe every mountain, every trail, every sunrise holds a story waiting to be lived.
        </p>
        <p className="text-lg sm:text-xl text-stone-gray leading-relaxed">
          Founded by passionate trekkers, we curate experiences that blend adventure with safety, 
          challenge with support, and exploration with respect for nature. Our certified guides, 
          carefully planned itineraries, and commitment to sustainable travel ensure your journey 
          is both transformative and responsible.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-green/10 rounded-full mb-4">
            <Shield className="h-8 w-8 text-forest-green" />
          </div>
          <h3 className="text-2xl font-bold text-forest-green mb-3">Safety First</h3>
          <p className="text-stone-gray">
            Certified guides, medical support, and comprehensive safety protocols
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-green/10 rounded-full mb-4">
            <Compass className="h-8 w-8 text-forest-green" />
          </div>
          <h3 className="text-2xl font-bold text-forest-green mb-3">Authentic Experiences</h3>
          <p className="text-stone-gray">
            Real adventures, local connections, and genuine cultural immersion
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-green/10 rounded-full mb-4">
            <Leaf className="h-8 w-8 text-forest-green" />
          </div>
          <h3 className="text-2xl font-bold text-forest-green mb-3">Sustainable Travel</h3>
          <p className="text-stone-gray">
            Leave no trace, support local communities, protect the mountains
          </p>
        </div>
      </div>
    </section>
  )
}
