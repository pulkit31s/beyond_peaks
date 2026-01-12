import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import MissionStatement from '@/components/MissionStatement'
import FeaturedTreks from '@/components/FeaturedTreks'
import TrustStats from '@/components/TrustStats'
import Testimonials from '@/components/Testimonials'
import InstagramFeed from '@/components/InstagramFeed'
import BlogPreview from '@/components/BlogPreview'
import Newsletter from '@/components/Newsletter'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <MissionStatement />
      <FeaturedTreks />
      <TrustStats />
      <Testimonials />
      <InstagramFeed />
      <BlogPreview />
      <Newsletter />
      <FinalCTA />
      <Footer />
    </main>
  )
}
