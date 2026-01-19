import { promises as fs } from "fs"
import path from "path"

export type GuideMetadata = {
  path: string
  author: string
  authorEmail: string
  originalAuthor?: string
  originalAuthorEmail?: string
  updaters?: string[]
  updaterEmails?: string[]
  lastModified: string
  created: string
  wordCount: number
  readingTime: number
  commits: number
}

export type AllGuideMetadata = {
  [guideId: string]: GuideMetadata
}

/**
 * Load all guide metadata from the generated JSON file (server-side)
 */
export async function loadGuideMetadataServer(): Promise<AllGuideMetadata> {
  try {
    const metadataPath = path.join(process.cwd(), "public/guide-metadata.json")
    const content = await fs.readFile(metadataPath, "utf-8")
    return JSON.parse(content)
  } catch (error) {
    console.warn("Failed to load guide metadata:", error)
    return {}
  }
}

/**
 * Load all guide metadata from the generated JSON file (client-side)
 */
export async function loadGuideMetadata(): Promise<AllGuideMetadata> {
  try {
    const response = await fetch("/guide-metadata.json")
    if (!response.ok) {
      console.warn("Failed to load guide metadata")
      return {}
    }
    return await response.json()
  } catch (error) {
    console.error("Error loading guide metadata:", error)
    return {}
  }
}

/**
 * Get metadata for a specific guide
 */
export async function getGuideMetadata(
  guideId: string
): Promise<GuideMetadata | null> {
  const metadata = await loadGuideMetadata()
  return metadata[guideId] || null
}

/**
 * Format a date string to a readable format
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch {
    return dateString
  }
}
