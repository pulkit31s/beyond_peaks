import Link from 'next/link'
import { Mountain, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react'

const quickLinks = [
  { href: '/explore-treks', label: 'Explore Treks' },
  { href: '/itineraries', label: 'Upcoming Itineraries' },
  { href: '/itineraries/past', label: 'Past Treks' },
  { href: '/community', label: 'Stories' },
  { href: '/about', label: 'About Us' },
]

const supportLinks = [
  { href: '/contact', label: 'Contact Us' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/safety', label: 'Safety Guidelines' },
  { href: '/cancellation', label: 'Cancellation Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
]

const socialLinks = [
  { href: 'https://instagram.com/beyondpeaks', icon: Instagram, label: 'Instagram' },
  { href: 'https://facebook.com/beyondpeaks', icon: Facebook, label: 'Facebook' },
  { href: 'https://youtube.com/beyondpeaks', icon: Youtube, label: 'YouTube' },
  { href: 'https://wa.me/91XXXXXXXXXX', icon: MessageCircle, label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">Beyond Peaks</span>
            </Link>
            <p className="text-sm mb-4">
              Inspiring adventures, one peak at a time. Join our community of adventurers 
              exploring the world's most beautiful mountains.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-forest-green transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for trek updates and exclusive offers.
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-forest-green text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Beyond Peaks. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
