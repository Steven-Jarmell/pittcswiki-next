import Breadcrumb from "@/components/Breadcrumb"
import { MDFrontMatterType, getMDFrontMatter } from "@/utils/frontmatter-parser"
import WikiArticle from "@/components/WikiArticle"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import { sortStrings } from "@/utils/sort-strings"
import { promises as fs } from "fs"
import path from "path"

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
  if (curPath.includes(".mdx")) {
    return <h1>MDX FILE</h1>
  } else if (curPath.includes(".md")) {
    // Import file
    let curFile = null
    try {
      curFile = (await import(`@/data/guides/${curPath}`)).default
    } catch (e) {
      notFound()
    }

    const file = await fs.readFile(
      process.cwd() + `/data/guides/${curPath}`,
      "utf-8"
    )

    const x = getMDFrontMatter(file)

    const fileFrontMatter = x as MDFrontMatterType
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
    pageIndexFile = (await import(`@/data/guides/${curPath}/index.md`)).default
  } catch (e) {
    notFound()
  }

  let startIndex = pageIndexFile.lastIndexOf("---") + 3
  let relevantContent = pageIndexFile.slice(startIndex, -1)

  const indexFileFrontMatter = getMDFrontMatter(pageIndexFile)


  const folderContents = await fs.readdir(path.join(
    process.cwd(),`/data/guides/${curPath}`)
  )

  let fileInfo: String[] = []
  let folderInfo: String[] = []

  folderContents.forEach((item: string) => {
    if (!item.includes("md")) {
      // It's a file
      folderInfo.push(item)
    } else {
      // It's a folder
      if (item !== "index.md") {
        fileInfo.push(item)
      }
    }
  })

  let fileTitles: FileTitlesType[] = []

  for (let fileName of fileInfo) {
    // Import file
    const curFile = (await import(`@/data/guides/${curPath}/${fileName}`))
      .default

    // Get its frontmatter
    let fileFrontMatter: any = {}
    try {
      fileFrontMatter = getMDFrontMatter(curFile)
    } catch (e) {
      const file = await fs.readFile(
        process.cwd() + `/data/guides/${curPath}/${fileName}`,
        "utf-8"
      )
      fileFrontMatter = getMDFrontMatter(file)
    }

    fileTitles.push({
      title: fileFrontMatter.title,
      href: "/guides/" + curPath + "/" + fileName,
    })
  }

  for (let folderName of folderInfo) {
    let folderIndexFile = (
      await import(`@/data/guides/${curPath}/${folderName}/index.md`)
    ).default
    // Get the frontmatter from the index

    const folderFileFrontMatter = getMDFrontMatter(folderIndexFile)

    // Add it as a title
    fileTitles.push({
      title: folderFileFrontMatter.title,
      href: `${curPath}/${folderName}`,
    })
  }

  // Show grid of guides
  return (
    <>
      <Breadcrumb slug={`guides/${curPath}`} />
      <div className="blog-post-container">
        <div className="blog-post mb-8">
          <div className="frontmatter">
            <h1 className="title">{indexFileFrontMatter.title}</h1>
            <MDXRemote source={relevantContent} />
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
