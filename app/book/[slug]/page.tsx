import { notFound } from 'next/navigation'
import { trekDetails } from '@/lib/trekData'
import BookingClient from './BookingClient'

export async function generateStaticParams() {
  return Object.keys(trekDetails).map((slug) => ({ slug }))
}

export default async function BookingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const trek = trekDetails[slug]

  if (!trek) notFound()

  return <BookingClient trek={trek} />
}
