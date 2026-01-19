"use client"

import { useState } from "react"
import { exportGuideToPDF } from "@/utils/export-pdf"

type ExportPDFButtonProps = {
  title: string
  author?: string
  publishDate?: string
  contentSelector: string
}

const ExportPDFButton = ({
  title,
  author,
  publishDate,
  contentSelector,
}: ExportPDFButtonProps) => {
  const [isExporting, setIsExporting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleExport = async () => {
    try {
      setIsExporting(true)
      setError(null)

      // Get the content element
      const contentElement = document.querySelector(contentSelector)
      if (!contentElement) {
        throw new Error("Content element not found")
      }

      // Clone the content to preserve original styling
      const clone = contentElement.cloneNode(true) as HTMLElement
      const html = clone.innerHTML

      await exportGuideToPDF({
        title,
        author,
        publishDate,
        content: html,
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error"
      setError(`Failed to export PDF: ${message}`)
      console.error("PDF export error:", err)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={handleExport}
        disabled={isExporting}
        title="Export guide as PDF"
        className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#333333] border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-[#404040] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        <span>📄</span>
        <span className="ml-2">
          {isExporting ? "Exporting..." : "Export PDF"}
        </span>
      </button>
      {error && (
        <span className="text-xs text-red-600 dark:text-red-400 whitespace-nowrap">
          {error}
        </span>
      )}
    </div>
  )
}

export default ExportPDFButton
