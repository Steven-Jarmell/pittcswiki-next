import Breadcrumb from "./Breadcrumb"
import FreshnessDisclaimer from "./FreshnessDisclaimer"
import TableOfContents from "./TableOfContents"
import RelatedGuides from "./RelatedGuides"
import FeedbackWidget from "./FeedbackWidget"
import EditOnGithub from "./EditOnGithub"
import SocialShare from "./SocialShare"
import ExportPDFButton from "./ExportPDFButton"
import { MDFrontMatterType } from "@/utils/frontmatter-parser"
import { GuideMetadata, formatDate } from "@/utils/guide-metadata"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeRaw from "rehype-raw"

type WikiArticleProps = {
  file: string
  path: string
  frontmatter: MDFrontMatterType
  gitAuthorTime: string
  lastUpdatedString: string
  metadata?: GuideMetadata
}

export type HeadingType = {
  depth: number
  value: string
}

const WikiArticle = ({
  file,
  path,
  frontmatter,
  gitAuthorTime,
  lastUpdatedString,
  metadata,
}: WikiArticleProps) => {
  let startIndex = file.indexOf("---", 2)
  let relevantContent = file.slice(startIndex, -1)

  const lines = relevantContent.split("\n")

  // Filter lines that start with '#'
  const hashLines = lines.filter((line) => line.trim().startsWith("#"))

  const headingsArray: HeadingType[] = hashLines.map((line) => {
    const depth = line.lastIndexOf("#") + 1 // Count the number of '#' characters
    let value = line.trim().replaceAll("#", "").replaceAll("*", "")
    return {
      depth: depth,
      value: value,
    }
  })

  return (
    <>
      <div className="article-layout-wrapper">
        <TableOfContents headings={headingsArray} />
        <div className="article-container">
          <Breadcrumb slug={path} />
          <article className="article-content-wrapper">
            <header className="article-header">
              <div className="frontmatter">
                <h1 className="article-title">{frontmatter.title}</h1>
                {frontmatter.author && (
                  <i className="sub-title">{frontmatter.author}</i>
                )}
              </div>
              {metadata && (
                <div className="article-meta">
                  <div className="flex flex-nowrap items-center gap-2 md:gap-6 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1 md:gap-2 whitespace-nowrap">
                      <span className="font-semibold hidden sm:inline">
                        Written by:
                      </span>
                      <span>{metadata.originalAuthor || metadata.author}</span>
                    </div>
                    <span className="hidden sm:inline text-gray-400">•</span>
                    <div className="flex items-center gap-1 md:gap-2 whitespace-nowrap">
                      <span className="hidden sm:inline">Published</span>
                      <span>{formatDate(metadata.created)}</span>
                    </div>
                    <span className="hidden sm:inline text-gray-400">•</span>
                    <div className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                      <span>{metadata.readingTime} min</span>
                      <span className="hidden sm:inline text-gray-400">•</span>
                      <ExportPDFButton
                        title={frontmatter.title}
                        author={metadata.originalAuthor || metadata.author}
                        publishDate={formatDate(metadata.created)}
                        contentSelector=".blog-post-content"
                      />
                    </div>
                  </div>
                  {metadata.updaters && metadata.updaters.length > 0 && (
                    <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-2">
                      <span className="font-semibold">Updated by:</span>
                      <span>{metadata.updaters.join(", ")}</span>
                    </div>
                  )}
                </div>
              )}
            </header>
            <FreshnessDisclaimer lastUpdated={gitAuthorTime} />
            <div className="blog-post-content">
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSlug]}
              >
                {relevantContent}
              </Markdown>
            </div>
            <RelatedGuides related={frontmatter.related} />
            <SocialShare title={frontmatter.title} />
            <div className={"my-4 sm:w-full md:w-auto"}>
              <FeedbackWidget />
            </div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-8 mb-12">
              <EditOnGithub slug={path} isIndexPage={false} />
              {lastUpdatedString && !lastUpdatedString.includes("Invalid") && (
                <div className="text-right">
                  Last updated: {lastUpdatedString}
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default WikiArticle
