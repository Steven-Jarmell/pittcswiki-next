"use client"

import Link from "next/link"
import { SearchResult } from "@/utils/search-index"
import { BookOpen, Code } from "lucide-react"

interface SearchResultsProps {
  results: SearchResult[]
  isLoading: boolean
  query: string
  onResultClick?: () => void
}

export default function SearchResults({
  results,
  isLoading,
  query,
  onResultClick,
}: SearchResultsProps) {
  if (!query.trim()) return null

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#2b2b2b] border border-gray-200 dark:border-gray-600 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-md">
      {isLoading && (
        <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm">
          Searching...
        </div>
      )}

      {!isLoading && results.length === 0 && (
        <div className="p-4 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            No results found for &ldquo;{query}&rdquo;
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
            Try searching for course codes (e.g., CS 0401) or guide topics
          </p>
        </div>
      )}

      {!isLoading && results.length > 0 && (
        <div className="max-h-96 overflow-y-auto">
          {/* Group results by type */}
          {results.some((r) => r.type === "course") && (
            <div>
              <div className="px-4 py-2 bg-gray-50 dark:bg-[#202020] border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Courses
                </h3>
              </div>
              {results
                .filter((r) => r.type === "course")
                .map((result) => (
                  <SearchResultItem
                    key={result.id}
                    result={result}
                    onClick={onResultClick}
                  />
                ))}
            </div>
          )}

          {results.some((r) => r.type === "guide") && (
            <div>
              <div className="px-4 py-2 bg-gray-50 dark:bg-[#202020] border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Guides
                </h3>
              </div>
              {results
                .filter((r) => r.type === "guide")
                .map((result) => (
                  <SearchResultItem
                    key={result.id}
                    result={result}
                    onClick={onResultClick}
                  />
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function SearchResultItem({
  result,
  onClick,
}: {
  result: SearchResult
  onClick?: () => void
}) {
  const Icon = result.type === "course" ? Code : BookOpen

  return (
    <Link href={result.href}>
      <div
        onClick={onClick}
        className="px-4 py-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#343434] transition-colors duration-150 cursor-pointer group"
      >
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0 mt-0.5 text-gray-400 dark:text-gray-500 group-hover:text-[#fbbf24] transition-colors duration-150">
            <Icon size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-semibold text-black dark:text-white group-hover:text-[#fbbf24] transition-colors duration-150 truncate">
              {result.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-[#a0a0a0] mt-1 line-clamp-2">
              {result.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
