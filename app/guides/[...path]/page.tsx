import Breadcrumb from "@/components/Breadcrumb"
import { getMDFrontMatter } from "@/utils/frontmatter-parser"
import WikiArticle from "@/components/WikiArticle"
import { notFound } from "next/navigation"
import { sortStrings } from "@/utils/sort-strings"
import { promises as fs } from "fs"
import Markdown from "react-markdown"
import { GetFolderInformation } from "@/utils/guides-page-helper"

export type FileTitlesType = {
  title: string
  href: string
}

export default async function GuidePage({
  params,
}: {
  params: { path: string[] }
}) {
  const curPath = decodeURIComponent(params.path.join("/"))

  // Render the file
  if (curPath.includes(".md")) {
    // Import file
    let curFile = null
    try {
      curFile = await fs.readFile(
        process.cwd() + `/data/guides/${curPath}`,
        "utf-8"
      )
    } catch (e) {
      notFound()
    }

    const fileFrontMatter = getMDFrontMatter(curFile)

    return (
      <WikiArticle
        file={curFile}
        path={"guides/" + curPath}
        frontmatter={fileFrontMatter}
        gitAuthorTime=""
        lastUpdatedString=""
      />
    )
  }

  // If we are not rendering a file, show folder contents
  // Based on the name, dynamically import the index.md file for it
  let pageIndexFile
  try {
    pageIndexFile = await fs.readFile(
      process.cwd() + `/data/guides/${curPath}/index.md`,
      "utf-8"
    )
  } catch (e) {
    notFound()
  }

  let startIndex = pageIndexFile.indexOf("---", 2) + 3
  let relevantContent = pageIndexFile.slice(startIndex, -1)

  const indexFileFrontMatter = getMDFrontMatter(pageIndexFile)


  let fileTitles: FileTitlesType[] = await GetFolderInformation(curPath);

  // Show grid of guides
  return (
    <>
      <Breadcrumb slug={`guides/${curPath}`} />
      <div className="blog-post-container">
        <div className="blog-post mb-8">
          <div className="frontmatter">
            <h1 className="title">{indexFileFrontMatter.title}</h1>
            <Markdown>{relevantContent}</Markdown>
            <h3>Guides</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {fileTitles
                .sort(sortStrings)
                .map((file: FileTitlesType, i: number) => (
                  <a
                    key={i}
                    href={file.href}
                    className="w-full h-32 p-4 border text-gray-800 bg-gray-200 shadow-sm transition hover:text-white hover:bg-gray-600 hover:font-bold hover:shadow-md"
                  >
                    {file.title}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
