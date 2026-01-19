import { CourseInfoData } from "@/data/CourseInfoData"
import { CoreCoursesData } from "@/data/CoreCoursesData"
import { getMDFrontMatter } from "@/utils/frontmatter-parser"
import { promises as fs } from "fs"
import path from "path"

export type SearchResult = {
  id: string
  type: "course" | "guide"
  title: string
  description: string
  href: string
  relevance: number
  searchableText: string
}

export type SearchIndex = {
  results: SearchResult[]
  buildTime: string
}

/**
 * Extract the first 150 characters of meaningful text from markdown content
 * Skips frontmatter and empty lines
 */
const extractDescription = (markdown: string): string => {
  // Find the end of frontmatter
  const endOfFrontmatter = markdown.indexOf("---", 3)
  const content = markdown.substring(endOfFrontmatter + 3)

  // Remove markdown syntax and extract first paragraph
  const lines = content
    .split("\n")
    .filter(
      (line) => line.trim() && !line.startsWith("#") && !line.startsWith(">")
    )
    .join(" ")

  // Remove markdown formatting
  const cleaned = lines
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1") // Links
    .replace(/\*\*([^\*]+)\*\*/g, "$1") // Bold
    .replace(/\*([^\*]+)\*/g, "$1") // Italic
    .replace(/`([^`]+)`/g, "$1") // Code

  return cleaned.substring(0, 150) + (cleaned.length > 150 ? "..." : "")
}

/**
 * Get all guide files recursively from /data/guides
 */
const getGuideFiles = async (
  dirPath: string,
  arrayOfFiles: string[] = []
): Promise<string[]> => {
  try {
    const files = await fs.readdir(dirPath)

    for (const file of files) {
      const filePath = path.join(dirPath, file)
      const stat = await fs.stat(filePath)

      if (stat.isDirectory()) {
        arrayOfFiles = await getGuideFiles(filePath, arrayOfFiles)
      } else if (file.endsWith(".md") && file !== "index.md") {
        arrayOfFiles.push(filePath)
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error)
  }

  return arrayOfFiles
}

// Build search index from courses and guides
export const buildSearchIndex = async (): Promise<SearchIndex> => {
  const results: SearchResult[] = []

  // Add all courses from CourseInfoData
  CourseInfoData.courses.forEach((course) => {
    const searchableText =
      `${course.title} ${course.id} ${course.description}`.toLowerCase()
    results.push({
      id: course.id,
      type: "course",
      title: course.title,
      description: course.description.substring(0, 150),
      href: `/courses/${course.id}`,
      relevance: 0,
      searchableText,
    })
  })

  // Add all courses from CoreCoursesData
  Object.values(CoreCoursesData).forEach((course) => {
    const searchableText =
      `${course.title} ${course.code} ${course.id} ${course.description}`.toLowerCase()
    results.push({
      id: course.id,
      type: "course",
      title: `${course.code} - ${course.title}`,
      description: course.description.substring(0, 150),
      href: `/courses/${course.id}`,
      relevance: 0,
      searchableText,
    })
  })

  // Add all guides from markdown files
  try {
    const guidesPath = path.join(process.cwd(), "data/guides")
    const guideFiles = await getGuideFiles(guidesPath)

    for (const filePath of guideFiles) {
      try {
        const fileContent = await fs.readFile(filePath, "utf-8")
        const frontmatter = getMDFrontMatter(fileContent)

        // Extract relative path and convert to URL
        const relativePath = filePath
          .replace(process.cwd() + "/data/guides/", "")
          .replace(/\.md$/, "")

        const href = `/guides/${relativePath}`
        const id = `guide-${relativePath}`
        const title = frontmatter.title || "Untitled Guide"
        const description = extractDescription(fileContent)
        const tagsString = Array.isArray(frontmatter.search_tags)
          ? frontmatter.search_tags.join(" ")
          : ""
        const searchableText =
          `${title} ${description} ${tagsString}`.toLowerCase()

        results.push({
          id,
          type: "guide",
          title,
          description,
          href,
          relevance: 0,
          searchableText,
        })
      } catch (error) {
        console.error(`Error parsing guide ${filePath}:`, error)
      }
    }
  } catch (error) {
    console.error("Error loading guides for search index:", error)
  }

  return {
    results,
    buildTime: new Date().toISOString(),
  }
}

// Fuzzy search helper - simple substring matching with scoring
export const fuzzySearch = (query: string, searchText: string): number => {
  const q = query.toLowerCase()
  const text = searchText.toLowerCase()

  if (text.includes(q)) {
    // Exact substring match - highest priority
    if (text.startsWith(q)) return 3
    return 2
  }

  // Check if all characters of query exist in order
  let queryIndex = 0
  for (let i = 0; i < text.length && queryIndex < q.length; i++) {
    if (text[i] === q[queryIndex]) {
      queryIndex++
    }
  }

  if (queryIndex === q.length) {
    return 1
  }

  return 0
}

// Search the index
export const searchIndex = (
  query: string,
  index: SearchIndex
): SearchResult[] => {
  if (!query.trim()) return []

  const scored = index.results
    .map((result) => ({
      ...result,
      relevance: fuzzySearch(query, result.searchableText),
    }))
    .filter((result) => result.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)

  return scored.slice(0, 10) // Return top 10 results
}
