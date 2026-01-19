"use client"

import { useState, useEffect } from "react"

type SocialShareProps = {
  title: string
  url?: string
}

const SocialShare = ({ title, url: initialUrl }: SocialShareProps) => {
  const [copied, setCopied] = useState(false)
  const [url, setUrl] = useState(initialUrl || "")

  useEffect(() => {
    // Get the current URL from the browser
    if (!initialUrl && typeof window !== "undefined") {
      setUrl(window.location.href)
    }
  }, [initialUrl])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`Check out: ${title}`)
    const body = encodeURIComponent(
      `I found this helpful guide: ${title}\n\n${url}`
    )
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank")
  }

  return (
    <div className="my-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-[#2a2a2a]">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
            Share this guide
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Help others discover this resource
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#333333] hover:bg-gray-50 dark:hover:bg-[#404040] transition-colors"
            title="Copy link to clipboard"
          >
            {copied ? (
              <>
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span className="ml-2">Copied</span>
              </>
            ) : (
              <>
                <span>📋</span>
                <span className="ml-2">Copy Link</span>
              </>
            )}
          </button>
          <button
            onClick={handleEmailShare}
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#333333] hover:bg-gray-50 dark:hover:bg-[#404040] transition-colors"
            title="Share via email"
          >
            <span>📧</span>
            <span className="ml-2">Email</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SocialShare
