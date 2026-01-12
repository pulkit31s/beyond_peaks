import Link from 'next/link'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { instagramPosts } from '@/lib/data'

export default function InstagramFeed() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-forest-green mb-4">
              Follow Our Adventures
            </h2>
            <Link
              href="https://instagram.com/beyondpeaks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-blue hover:underline font-medium flex items-center gap-2"
            >
              @beyondpeaks
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="https://instagram.com/beyondpeaks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-forest-green text-forest-green rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
          >
            <Instagram className="h-5 w-5" />
            Follow Us on Instagram
          </Link>
        </div>
      </div>
    </section>
  )
}
