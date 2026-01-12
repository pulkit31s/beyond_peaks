import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Beyond Peaks - Adventure & Trekking Community',
  description: 'Go Beyond Peaks. Explore the World. Join thousands of adventurers on life-changing treks through the Himalayas and beyond.',
  keywords: 'trekking, adventure travel, Himalayas, mountain treks, Nepal, India, Ladakh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
