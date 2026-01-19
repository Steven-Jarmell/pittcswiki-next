import { useCallback, useEffect, useState, useRef } from "react"
import {
  buildSearchIndex,
  searchIndex,
  SearchResult,
} from "@/utils/search-index"

export const useSearch = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const debounceTimerRef = useRef<NodeJS.Timeout>()
  const indexRef = useRef<Awaited<ReturnType<typeof buildSearchIndex>> | null>(
    null
  )

  // Initialize search index on mount
  useEffect(() => {
    let isMounted = true

    const initializeIndex = async () => {
      try {
        const index = await buildSearchIndex()
        if (isMounted) {
          indexRef.current = index
        }
      } catch (error) {
        console.error("Error building search index:", error)
      }
    }

    if (!indexRef.current) {
      initializeIndex()
    }

    return () => {
      isMounted = false
    }
  }, [])

  const performSearch = useCallback((searchQuery: string) => {
    if (!indexRef.current) return

    setIsLoading(true)
    try {
      const searchResults = searchIndex(searchQuery, indexRef.current)
      setResults(searchResults)
    } catch (error) {
      console.error("Search error:", error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleQueryChange = useCallback(
    (newQuery: string) => {
      setQuery(newQuery)

      // Clear existing debounce timer
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }

      // Debounce search by 300ms
      debounceTimerRef.current = setTimeout(() => {
        performSearch(newQuery)
      }, 300)
    },
    [performSearch]
  )

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
    }
  }, [])

  const clearSearch = useCallback(() => {
    setQuery("")
    setResults([])
  }, [])

  return {
    query,
    results,
    isLoading,
    setQuery: handleQueryChange,
    clearSearch,
  }
}
