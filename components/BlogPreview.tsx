import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import { stories } from '@/lib/data'
import { Story } from '@/types'
import { cn } from '@/lib/utils'

const categoryColors = {
  'Trek Story': 'bg-green-100 text-green-800',
  'Gear Guide': 'bg-blue-100 text-blue-800',
  'Travel Tips': 'bg-amber-100 text-amber-800',
  'Preparation': 'bg-purple-100 text-purple-800',
  'Photography': 'bg-pink-100 text-pink-800',
  'Cultural': 'bg-orange-100 text-orange-800',
}

function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={story.featuredImage}
          alt={story.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          unoptimized
        />
        <div className="absolute top-4 left-4">
          <span className={cn('px-3 py-1 rounded-full text-xs font-semibold', categoryColors[story.category])}>
            {story.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-forest-green mb-3 group-hover:text-opacity-80 transition-colors line-clamp-2">
          {story.title}
        </h3>
        <p className="text-stone-gray mb-4 line-clamp-3">
          {story.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-stone-gray mb-4">
          <div className="flex items-center gap-4">
            {story.authorAvatar && (
              <Image
                src={story.authorAvatar}
                alt={story.author}
                width={32}
                height={32}
                className="rounded-full object-cover"
                unoptimized
              />
            )}
            <span className="font-medium">{story.author}</span>
          </div>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {story.readTime} min
          </span>
        </div>
        <Link
          href={`/community/stories/${story.slug}`}
          className="text-forest-green font-semibold hover:underline flex items-center gap-2"
        >
          Read Story
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}

export default function BlogPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-forest-green mb-4">
              Latest Stories & Guides
            </h2>
            <p className="text-lg text-stone-gray">
              Real adventures, travel tips, and preparation guides
            </p>
          </div>
          <Link
            href="/community"
            className="mt-4 sm:mt-0 text-forest-green font-semibold hover:underline flex items-center gap-2"
          >
            Read All Stories
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  )
}
