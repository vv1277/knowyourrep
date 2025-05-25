'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim())
    }
  }

  return (
    <form onSubmit={handleSearch} className="max-w-3xl mx-auto shadow-xl rounded-full overflow-hidden bg-white border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
      <div className="relative flex items-center">
        <MagnifyingGlassIcon className="absolute left-6 h-6 w-6 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="정치인 이름을 검색하세요..."
          className="w-full px-6 py-4 pl-16 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0 border-none bg-transparent text-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          검색
        </button>
      </div>
    </form>
  )
} 