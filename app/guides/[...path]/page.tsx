import Breadcrumb from "@/components/Breadcrumb"
import { getMDFrontMatter } from "@/utils/frontmatter-parser"
import WikiArticle from "@/components/WikiArticle"
import { notFound } from "next/navigation"
import { sortStrings } from "@/utils/sort-strings"
import { promises as fs } from "fs"
import path from "path"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { GetFolderInformation } from "@/utils/guides-page-helper"
import { getGuideStatus } from "@/config/newGuides"
import { loadGuideMetadataServer, GuideMetadata } from "@/utils/guide-metadata"

export type FileTitlesType = {
  title: string
  href: string
  order?: number
}

export default async function GuidePage({
  params,
}: {
  params: { path: string[] }
}) {
  const curPath = decodeURIComponent(params.path.join("/"))

  // Validate path to prevent directory traversal attacks
  const safeBasePath = path.resolve(process.cwd(), "data/guides")
  const safePath = path.resolve(safeBasePath, curPath)
  if (!safePath.startsWith(safeBasePath + path.sep)) {
    notFound()
  }

  // Try to render as a file (with .md or .mdx extension)
  let curFile = null
  let actualFilePath = curPath

  // If path doesn't already have an extension, try both .md and .mdx
  if (!curPath.includes(".md")) {
    const mdPath = path.resolve(safeBasePath, curPath + ".md")
    const mdxPath = path.resolve(safeBasePath, curPath + ".mdx")

    // Check if .md file exists
    try {
      if ((await fs.stat(mdPath)).isFile()) {
        curFile = await fs.readFile(mdPath, "utf-8")
        actualFilePath = curPath + ".md"
      }
    } catch (e) {
      // File doesn't exist, continue
    }

    // If .md doesn't exist, try .mdx
    if (!curFile) {
      try {
        if ((await fs.stat(mdxPath)).isFile()) {
          curFile = await fs.readFile(mdxPath, "utf-8")
          actualFilePath = curPath + ".mdx"
        }
      } catch (e) {
        // File doesn't exist, continue to folder logic
      }
    }
  } else {
    // Path already has an extension, try to read it directly
    try {
      curFile = await fs.readFile(safePath, "utf-8")
      actualFilePath = curPath
    } catch (e) {
      // File doesn't exist
    }
  }

  // Render as a file if we found one
  if (curFile) {
    const fileFrontMatter = getMDFrontMatter(curFile)

    // Extract guide ID for metadata lookup
    const guideId = `guide-${actualFilePath.replace(/\.(md|mdx)$/, "")}`

    // Load metadata if available
    let metadata = undefined
    try {
      const allMetadata = await loadGuideMetadataServer()
      metadata = allMetadata[guideId]
    } catch (error) {
      console.error("Error loading guide metadata:", error)
    }

    return (
      <WikiArticle
        file={curFile}
        path={"guides/" + actualFilePath}
        frontmatter={fileFrontMatter}
        gitAuthorTime=""
        lastUpdatedString=""
        metadata={metadata}
      />
    )
  }

  // If we are not rendering a file, show folder contents
  // Based on the name, dynamically import the index.md file for it
  let pageIndexFile
  try {
    const indexPath = path.resolve(safePath, "index.md")
    // Ensure the index file is still within the allowed directory
    if (!indexPath.startsWith(safeBasePath + path.sep)) {
      notFound()
    }
    pageIndexFile = await fs.readFile(indexPath, "utf-8")
  } catch (e) {
    notFound()
  }

  let startIndex = pageIndexFile.indexOf("---", 2) + 3
  let relevantContent = pageIndexFile.slice(startIndex, -1)

  const indexFileFrontMatter = getMDFrontMatter(pageIndexFile)

  let fileTitles: FileTitlesType[] = await GetFolderInformation(curPath)

  // Show grid of guides
  return (
    <>
      <Breadcrumb slug={`guides/${curPath}`} />
      <div
        className={`blog-post-container ${curPath === "career" ? "career-page" : ""
          }`}
      >
        <div className="blog-post mb-8">
          <div className="frontmatter">
            <h1
              className={`title ${curPath === "career" ? "career-title" : ""}`}
            >
              {indexFileFrontMatter.title}
            </h1>
            <div className={curPath === "career" ? "career-description" : ""}>
              <Markdown rehypePlugins={[rehypeRaw]}>{relevantContent}</Markdown>
            </div>
            <h3>Guides</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {fileTitles
                .sort(sortStrings)
                .map((file: FileTitlesType, i: number) => {
                  // Extract guide slug from href (e.g., "guides/career/running-for-officer.md" -> "running-for-officer")
                  let guideSlug = file.href.split("/").pop() || ""
                  // Remove .md or .mdx extension
                  guideSlug = guideSlug.replace(/\.(md|mdx)$/, "")
                  const categorySlug = curPath.split("/").pop() || ""
                  const guideStatus = getGuideStatus(categorySlug, guideSlug)

                  return (
                    <div key={i} className="guide-card-container">
                      <a
                        href={file.href}
                        className="guide-card w-full h-32 p-4 border text-gray-800 bg-gray-200 shadow-sm transition-all duration-300 ease-out hover:border-l-4 hover:border-l-[#243e8b] hover:text-[#243e8b] hover:shadow-md hover:-translate-y-0.5 block focus:outline-none"
                        aria-label={
                          guideStatus
                            ? `${file.title} (${guideStatus} guide)`
                            : file.title
                        }
                      >
                        {file.title}
                      </a>
                      {guideStatus === "new" && (
                        <div
                          className="new-ribbon"
                          aria-label="New guide"
                          role="img"
                        />
                      )}
                      {guideStatus === "updated" && (
                        <div
                          className="updated-ribbon"
                          aria-label="Updated guide"
                          role="img"
                        />
                      )}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
