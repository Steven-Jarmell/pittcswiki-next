import Breadcrumb from "@/components/Breadcrumb"
import { getMDFrontMatter } from "@/utils/frontmatter-parser"
import WikiArticle from "@/components/WikiArticle"
import { notFound } from "next/navigation"
import { promises as fs } from "fs"
import path from "path"
import { loadGuideMetadataServer } from "@/utils/guide-metadata"
import dynamic from "next/dynamic"

import ElectivesRankingTable from "@/components/ElectivesRankingTable"

const PrereqGraph = dynamic(() => import("@/components/Graph/PrereqGraph"), {
  ssr: false,
  loading: () => <p>Loading graph...</p>,
})

export default async function SchedulingPage() {
  try {
    const curPath = "academics/scheduling"
    const safeBasePath = path.resolve(process.cwd(), "data/guides")
    const mdPath = path.resolve(safeBasePath, curPath + ".md")
    const mdxPath = path.resolve(safeBasePath, curPath + ".mdx")

    let curFile = null
    try {
      if ((await fs.stat(mdPath)).isFile()) {
        curFile = await fs.readFile(mdPath, "utf-8")
      }
    } catch (e) {
      // .md file doesn't exist
    }

    if (!curFile) {
      try {
        if ((await fs.stat(mdxPath)).isFile()) {
          curFile = await fs.readFile(mdxPath, "utf-8")
        }
      } catch (e) {
        // .mdx file doesn't exist
      }
    }

    if (!curFile) {
      notFound()
    }

    const fileFrontMatter = getMDFrontMatter(curFile)
    const guideId = `guide-${curPath}`

    let metadata = undefined
    try {
      const allMetadata = await loadGuideMetadataServer()
      metadata = allMetadata[guideId]
    } catch (error) {
      console.error("Error loading guide metadata:", error)
    }

    return (
      <>
        <WikiArticle
          file={curFile}
          path={"guides/" + curPath}
          frontmatter={fileFrontMatter}
          gitAuthorTime=""
          lastUpdatedString=""
          metadata={metadata}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              CSC&apos;s highly subjective CS Electives Difficulty Ranking
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
              These rankings are incredibly subjective and difficulty varies
              more by professor rather than course.
            </p>
            <ElectivesRankingTable />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Course Prerequisite Graph
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
              Visualize the relationships between courses. Solid lines represent
              prerequisites (must take before), and dashed yellow lines
              represent corequisites (must take together or before).
            </p>
          </div>
          <PrereqGraph />
        </div>
      </>
    )
  } catch (error) {
    console.error("Error rendering SchedulingPage:", error)
    throw error
  }
}
