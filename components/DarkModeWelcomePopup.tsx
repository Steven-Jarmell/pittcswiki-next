"use client"

import { useEffect, useState } from "react"

export default function DarkModeWelcomePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("darkModePopupSeen")

    if (!hasSeenPopup) {
      // Show popup after 1 second delay
      const showTimer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)

      // Auto-hide after 4 seconds
      const hideTimer = setTimeout(() => {
        handleDismiss()
      }, 4000)

      return () => {
        clearTimeout(showTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [])

  const handleDismiss = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      setIsVisible(false)
      localStorage.setItem("darkModePopupSeen", "true")
    }, 300)
  }

  const handleBackdropClick = () => {
    handleDismiss()
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-0"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Popup */}
      <div
        className={`welcome-popup fixed top-20 right-6 z-50 ${
          isAnimatingOut ? "animate-fadeOut" : "animate-fadeIn"
        }`}
      >
        {/* Gold Arrow Pointer */}
        <div className="popup-arrow" aria-hidden="true" />

        {/* Popup Content */}
        <div className="bg-white dark:bg-[#2a2a2a] rounded-lg p-4 min-w-[200px] max-w-[220px] border-2 border-[#FFB81C] shadow-xl">
          <div className="flex justify-between items-start gap-3">
            <div className="flex-1">
              <h3 className="font-bold text-black dark:text-white text-sm mb-1">
                The new default is dark mode!
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                If you&rsquo;d like to switch back to light mode, click the
                toggle above.
              </p>
            </div>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#FFB81C] rounded"
              aria-label="Close welcome popup"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Got it Button */}
          <button
            onClick={handleDismiss}
            className="w-full mt-3 bg-[#FFB81C] hover:bg-[#ffc840] text-black font-semibold py-2 px-3 rounded text-xs transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-[#FFB81C]"
          >
            Got it
          </button>
        </div>
      </div>
    </>
  )
}
