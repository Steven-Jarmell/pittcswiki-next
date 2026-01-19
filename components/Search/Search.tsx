"use client"

import { useRef, useEffect, useState } from "react"
import { useSearch } from "@/hooks/useSearch"
import SearchResults from "./SearchResults"

const Search = () => {
  const { query, results, isLoading, setQuery, clearSearch } = useSearch()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    setIsOpen(!!value)
  }

  const handleClear = () => {
    clearSearch()
    setIsOpen(false)
    inputRef.current?.focus()
  }

  const handleEscape = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setIsOpen(false)
      inputRef.current?.blur()
    }
  }

  const handleResultClick = () => {
    handleClear()
  }

  return (
    <div
      ref={containerRef}
      className={`relative search-container transition-all duration-300 ease-in-out ${isOpen ? "w-full md:w-[500px]" : "w-full md:w-80"
        }`}
      role="search"
      aria-label="Site search"
    >
      <div
        className="search-input-wrapper relative flex items-center"
        role="combobox"
        aria-haspopup="listbox"
        aria-owns="search-results"
        aria-controls="search-results"
        aria-expanded={isOpen}
      >
        <label
          htmlFor="search-bar"
          className="search-icon-wrapper absolute left-0 z-10 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            className="search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </label>
        <input
          ref={inputRef}
          id="search-bar"
          type="search"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleEscape}
          onFocus={() => setIsOpen(!!query)}
          className="search-input flex-1"
          aria-label="Search courses, articles, or topics"
          aria-autocomplete="list"
          aria-controls="search-results"
          autoComplete="off"
        />
        {query && (
          <button
            onClick={handleClear}
            className="search-clear-button absolute right-0 z-10"
            aria-label="Clear search query"
            type="button"
            tabIndex={0}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {isOpen && (
        <div
          id="search-results"
          role="region"
          aria-live="polite"
          aria-label="Search results"
        >
          <SearchResults
            results={results}
            isLoading={isLoading}
            query={query}
            onResultClick={handleResultClick}
          />
        </div>
      )}
    </div>
  )
}

export default Search
