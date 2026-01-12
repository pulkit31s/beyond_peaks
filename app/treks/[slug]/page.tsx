import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TrekHero from '@/components/treks/TrekHero'
import StickyInfoBar from '@/components/treks/StickyInfoBar'
import TrekOverview from '@/components/treks/TrekOverview'
import ItineraryTimeline from '@/components/treks/ItineraryTimeline'
import InclusionsExclusions from '@/components/treks/InclusionsExclusions'
import DifficultyFitness from '@/components/treks/DifficultyFitness'
import ImageGallery from '@/components/treks/ImageGallery'
import PricingTiers from '@/components/treks/PricingTiers'
import BookingSection from '@/components/treks/BookingSection'
import FAQs from '@/components/treks/FAQs'
import RelatedTreks from '@/components/treks/RelatedTreks'
import { trekDetails } from '@/lib/trekData'

export async function generateStaticParams() {
  return Object.keys(trekDetails).map((slug) => ({
    slug,
  }))
}

export default async function TrekDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const trek = trekDetails[slug]

  if (!trek) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <TrekHero trek={trek} />
      <StickyInfoBar trek={trek} />
      <TrekOverview trek={trek} />
      {trek.itinerary && <ItineraryTimeline itinerary={trek.itinerary} />}
      <InclusionsExclusions trek={trek} />
      <DifficultyFitness trek={trek} />
      <ImageGallery trek={trek} />
      <PricingTiers trek={trek} />
      <BookingSection trek={trek} />
      <FAQs trek={trek} />
      <RelatedTreks currentTrek={trek} />
      <Footer />
    </main>
  )
}
