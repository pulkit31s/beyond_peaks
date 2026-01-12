'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Mountain } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    // Check if window is available (client-side only)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/explore-treks', label: 'Explore Treks' },
    { href: '/itineraries', label: 'Itineraries' },
    { href: '/community', label: 'Stories' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className={cn('h-8 w-8', isScrolled ? 'text-forest-green' : 'text-white')} />
            <span className={cn('text-xl font-bold', isScrolled ? 'text-forest-green' : 'text-white')}>
              Beyond Peaks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-forest-green',
                  isScrolled ? 'text-stone-gray' : 'text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className={cn('text-sm font-medium transition-colors', isScrolled ? 'text-stone-gray hover:text-forest-green' : 'text-white hover:opacity-80')}
            >
              Sign In
            </Link>
            <Link
              href="/explore-treks"
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                isScrolled
                  ? 'bg-forest-green text-white hover:bg-opacity-90'
                  : 'bg-white text-forest-green border-2 border-white hover:bg-opacity-90'
              )}
            >
              Book Adventure
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn('md:hidden p-2', isScrolled ? 'text-forest-green' : 'text-white')}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-stone-gray hover:text-forest-green font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t space-y-2">
              <Link
                href="/login"
                className="block text-stone-gray hover:text-forest-green font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/explore-treks"
                className="block w-full px-4 py-2 bg-forest-green text-white rounded-lg text-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Adventure
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
