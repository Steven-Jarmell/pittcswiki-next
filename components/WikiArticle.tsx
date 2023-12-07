import Breadcrumb from "./Breadcrumb"
import FreshnessDisclaimer from "./FreshnessDisclaimer"
import TableOfContents from "./TableOfContents"
import RelatedGuides from "./RelatedGuides"
import FeedbackWidget from "./FeedbackWidget"
import EditOnGithub from "./EditOnGithub"
import { MDFrontMatterType } from "@/utils/frontmatter-parser"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

type WikiArticleProps = {
  file: string
  path: string
  frontmatter: MDFrontMatterType
  gitAuthorTime: string
  lastUpdatedString: string
}

const WikiArticle = ({
  file,
  path,
  frontmatter,
  gitAuthorTime,
  lastUpdatedString,
}: WikiArticleProps) => {
  let startIndex = file.indexOf("---", 2)
  let relevantContent = file.slice(startIndex, -1)

  const lines = relevantContent.split("\n")

  // Filter lines that start with '#'
  const hashLines = lines.filter((line) => line.trim().startsWith("#"))

  const headingsArray = hashLines.map((line) => {
    const depth = line.lastIndexOf("#") + 1 // Count the number of '#' characters
    let value = line.trim().replaceAll("#", "").replaceAll("*", "")
    return {
      depth: depth,
      value: value,
    }
  })

  return (
    <>
      <TableOfContents headings={headingsArray} />
      <Breadcrumb slug={path} />
      <div className="blog-post-container">
        <div className="blog-post mb-8">
          <div className="frontmatter">
            <h1 className="title">{frontmatter.title}</h1>
            {frontmatter.author && (
              <i className="sub-title">{frontmatter.author}</i>
            )}
          </div>
          <FreshnessDisclaimer lastUpdated={gitAuthorTime} />
          <div className="mt-4 blog-post-content">
            <Markdown remarkPlugins={[remarkGfm]}>{relevantContent}</Markdown>
          </div>
          <RelatedGuides related={frontmatter.related} />
          <div className={"my-8 sm:w-full md:w-auto"}>
            <FeedbackWidget />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <EditOnGithub slug={path} isIndexPage={false} />
            {lastUpdatedString && !lastUpdatedString.includes("Invalid") && (
              <div className="text-right">
                Last updated: {lastUpdatedString}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default WikiArticle
