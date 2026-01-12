'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-gray" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by trek name, location, or region..."
        className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-lg focus:border-forest-green focus:outline-none text-lg"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-gray hover:text-forest-green"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
