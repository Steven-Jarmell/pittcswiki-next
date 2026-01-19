#!/usr/bin/env node

const simpleGit = require("simple-git")
const fs = require("fs").promises
const path = require("path")
const matter = require("gray-matter")

const git = simpleGit()
const guidesDir = path.join(process.cwd(), "data/guides")
const outputDir = path.join(process.cwd(), "public")
const outputFile = path.join(outputDir, "guide-metadata.json")

/**
 * Count words in markdown content (excluding frontmatter)
 */
function countWords(markdown) {
  const endOfFrontmatter = markdown.indexOf("---", 3)
  const content =
    endOfFrontmatter > 0 ? markdown.substring(endOfFrontmatter + 3) : markdown

  // Remove markdown formatting
  const cleaned = content
    .replace(/```[\s\S]*?```/g, "") // code blocks
    .replace(/^#+\s+/gm, "") // headers
    .replace(/[*_~`\[\]()#]/g, "") // formatting
    .replace(/\n/g, " ") // newlines to spaces
    .trim()

  const words = cleaned.split(/\s+/).filter((w) => w.length > 0)
  return words.length
}

/**
 * Calculate reading time in minutes (200 words per minute)
 */
function calculateReadingTime(wordCount) {
  return Math.max(1, Math.ceil(wordCount / 200))
}

/**
 * Remove frontmatter from markdown content for comparison
 */
function removeFrontmatter(content) {
  const endOfFrontmatter = content.indexOf("---", 3)
  if (endOfFrontmatter > 0) {
    return content.substring(endOfFrontmatter + 3).trim()
  }
  return content.trim()
}

/**
 * Calculate change percentage between two file contents (line-by-line)
 * Returns a value between 0 and 100 representing the percentage of lines changed
 */
function calculateChangePercentage(originalContent, newContent) {
  // Remove frontmatter for comparison
  const original = removeFrontmatter(originalContent)
  const updated = removeFrontmatter(newContent)

  // Split into lines
  const originalLines = original
    .split("\n")
    .filter((line) => line.trim().length > 0)
  const updatedLines = updated
    .split("\n")
    .filter((line) => line.trim().length > 0)

  // If original is empty, any content is 100% change
  if (originalLines.length === 0) {
    return updatedLines.length > 0 ? 100 : 0
  }

  // Use a simple line-by-line comparison
  // Count how many lines from original are still present (allowing for some reordering)
  let matchingLines = 0
  const originalLineSet = new Set(
    originalLines.map((line) => line.trim().toLowerCase())
  )
  const updatedLineSet = new Set(
    updatedLines.map((line) => line.trim().toLowerCase())
  )

  // Count lines that appear in both
  for (const line of originalLineSet) {
    if (updatedLineSet.has(line)) {
      matchingLines++
    }
  }

  // Calculate percentage of lines that changed
  // Changed = (total original lines - matching lines) / total original lines
  const changedLines = originalLines.length - matchingLines
  const changePercentage = (changedLines / originalLines.length) * 100

  // Also account for new lines added
  const newLines = updatedLines.length - originalLines.length
  if (newLines > 0) {
    // Add new lines as additional change
    const additionalChange = (newLines / originalLines.length) * 100
    return Math.min(100, changePercentage + additionalChange)
  }

  return Math.min(100, changePercentage)
}

/**
 * Get all markdown files from guides directory recursively
 */
async function getGuideFiles(dirPath, arrayOfFiles = []) {
  try {
    const files = await fs.readdir(dirPath)

    for (const file of files) {
      const filePath = path.join(dirPath, file)
      const stat = await fs.stat(filePath)

      if (stat.isDirectory()) {
        arrayOfFiles = await getGuideFiles(filePath, arrayOfFiles)
      } else if (
        (file.endsWith(".md") || file.endsWith(".mdx")) &&
        file !== "index.md"
      ) {
        arrayOfFiles.push(filePath)
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message)
  }

  return arrayOfFiles
}

/**
 * Extract git metadata for a file with smart author attribution
 */
async function getGitMetadata(filePath) {
  try {
    const relativePath = path.relative(process.cwd(), filePath)

    // Get all commits for this file (oldest first)
    const logs = await git.log({ file: relativePath, maxCount: 1000 })

    if (!logs || logs.all.length === 0) {
      console.warn(`No git history found for ${relativePath}`)
      return {
        author: "Unknown",
        authorEmail: "",
        originalAuthor: "Unknown",
        originalAuthorEmail: "",
        updaters: [],
        updaterEmails: [],
        lastModified: new Date().toISOString(),
        created: new Date().toISOString(),
        commits: 0,
      }
    }

    const reversedCommits = logs.all.reverse() // Oldest first
    const firstCommit = reversedCommits[0]
    const lastCommit = logs.all[0] // Most recent

    // Get the original file content (from first commit)
    let originalContent = ""
    try {
      originalContent = await git.show([`${firstCommit.hash}:${relativePath}`])
    } catch (error) {
      // If we can't get original content, try current file
      try {
        originalContent = await fs.readFile(filePath, "utf-8")
      } catch (e) {
        console.warn(`Could not read original content for ${relativePath}`)
      }
    }

    // Track original author and updaters
    let originalAuthor = firstCommit.author_name || "Unknown"
    let originalAuthorEmail = firstCommit.author_email || ""
    const updatersSet = new Set() // Use Set to deduplicate
    const updaterEmailsSet = new Set()

    // Process each commit to determine authorship
    let currentPrimaryAuthor = originalAuthor
    let currentPrimaryAuthorEmail = originalAuthorEmail
    let lastKnownContent = originalContent

    for (let i = 1; i < reversedCommits.length; i++) {
      const commit = reversedCommits[i]
      const commitAuthor = commit.author_name || "Unknown"
      const commitAuthorEmail = commit.author_email || ""

      // Skip if same author as primary (no need to check)
      if (commitAuthor === currentPrimaryAuthor) {
        continue
      }

      // Get file content at this commit
      let commitContent = ""
      try {
        commitContent = await git.show([`${commit.hash}:${relativePath}`])
      } catch (error) {
        // If we can't get commit content, skip this commit
        continue
      }

      // Calculate change percentage from the last known content
      const changePercentage = calculateChangePercentage(
        lastKnownContent,
        commitContent
      )

      // If ≥70% changed, this author becomes the new primary
      if (changePercentage >= 70) {
        currentPrimaryAuthor = commitAuthor
        currentPrimaryAuthorEmail = commitAuthorEmail
        // Reset updaters when a new primary author takes over
        updatersSet.clear()
        updaterEmailsSet.clear()
        lastKnownContent = commitContent
      } else {
        // <70% change, add to updaters (if different from primary)
        if (commitAuthor !== currentPrimaryAuthor) {
          updatersSet.add(commitAuthor)
          if (commitAuthorEmail) {
            updaterEmailsSet.add(commitAuthorEmail)
          }
        }
        lastKnownContent = commitContent
      }
    }

    // Final check: compare current file with last known content
    try {
      const currentContent = await fs.readFile(filePath, "utf-8")
      const finalChangePercentage = calculateChangePercentage(
        lastKnownContent,
        currentContent
      )

      // If current file differs significantly from last commit, check if we need to update
      if (finalChangePercentage >= 70) {
        // This would be uncommitted changes, but we'll use the last commit author
        // In practice, this handles the case where the file was modified but not committed
        // We'll stick with the tracked primary author
      }
    } catch (error) {
      // File might not exist or be readable, continue with what we have
    }

    return {
      author: currentPrimaryAuthor, // For backward compatibility
      authorEmail: currentPrimaryAuthorEmail,
      originalAuthor: currentPrimaryAuthor,
      originalAuthorEmail: currentPrimaryAuthorEmail,
      updaters: Array.from(updatersSet),
      updaterEmails: Array.from(updaterEmailsSet),
      lastModified: new Date(lastCommit.date).toISOString(),
      created: new Date(firstCommit.date).toISOString(),
      commits: logs.all.length,
    }
  } catch (error) {
    console.warn(`Error getting git metadata for ${filePath}:`, error.message)
    return {
      author: "Unknown",
      authorEmail: "",
      originalAuthor: "Unknown",
      originalAuthorEmail: "",
      updaters: [],
      updaterEmails: [],
      lastModified: new Date().toISOString(),
      created: new Date().toISOString(),
      commits: 0,
    }
  }
}

/**
 * Generate metadata for all guides
 */
async function generateMetadata() {
  try {
    console.log("🔍 Scanning guide files...")
    const guideFiles = await getGuideFiles(guidesDir)
    console.log(`Found ${guideFiles.length} guide files`)

    const metadata = {}

    for (const filePath of guideFiles) {
      const relativePath = path
        .relative(guidesDir, filePath)
        .replace(/\.(md|mdx)$/, "")
      const guideId = `guide-${relativePath}`

      try {
        const fileContent = await fs.readFile(filePath, "utf-8")
        const { data: frontmatter } = matter(fileContent)
        const wordCount = countWords(fileContent)
        const readingTime = calculateReadingTime(wordCount)
        const gitData = await getGitMetadata(filePath)

        metadata[guideId] = {
          path: relativePath,
          author: frontmatter.author || gitData.author,
          authorEmail: gitData.authorEmail,
          originalAuthor:
            frontmatter.author || gitData.originalAuthor || gitData.author,
          originalAuthorEmail:
            gitData.originalAuthorEmail || gitData.authorEmail,
          updaters: gitData.updaters || [],
          updaterEmails: gitData.updaterEmails || [],
          lastModified: gitData.lastModified,
          created: frontmatter.date || gitData.created,
          wordCount,
          readingTime,
          commits: gitData.commits,
        }

        console.log(
          `✓ ${relativePath} (${wordCount} words, ${readingTime} min read)`
        )
      } catch (error) {
        console.error(`✗ Error processing ${relativePath}:`, error.message)
      }
    }

    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true })

    // Write metadata file
    await fs.writeFile(outputFile, JSON.stringify(metadata, null, 2), "utf-8")

    console.log(`\n✅ Guide metadata generated: ${outputFile}`)
    console.log(`📊 Total guides processed: ${Object.keys(metadata).length}`)
  } catch (error) {
    console.error("❌ Error generating guide metadata:", error)
    process.exit(1)
  }
}

// Run the script
generateMetadata()
