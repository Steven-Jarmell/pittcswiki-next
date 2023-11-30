import Breadcrumb from "@/app/_components/Breadcrumb"
import { getMDFrontMatter } from "@/app/_components/GuidesListing"
import WikiArticle from "@/app/_components/WikiArticle"
import { MDXRemote } from "next-mdx-remote/rsc"
import { read } from "to-vfile"
import { matter } from "vfile-matter"

export default async function GuidePage({ params }: { params: { path: any } }) {
  params.path = decodeURIComponent(params.path.join("/"))
  console.log(params.path)

  // Render the file
  if (params.path.includes(".md") || params.path.includes(".mdx")) {
    // Import file
    const curFile = (await import(`@/app/_data/guides/${params.path}`)).default

    return <WikiArticle file={curFile} />
  }

  // If we are not rendering a file, show folder contents
  // Based on the name, dynamically import the index.md file for it
  let pageIndexFile = (
    await import(`@/app/_data/guides/${params.path}/index.md`)
  ).default

  let startIndex = pageIndexFile.lastIndexOf("---") + 3
  let relevantContent = pageIndexFile.slice(startIndex, -1)

  const indexFileFrontMatter = getMDFrontMatter(pageIndexFile)

  // Load globally into all modules.
  require("require-context/register")

  // Load locally as a function.
  var requireContext = require("require-context")

  const folderContents = requireContext(
    `../../../app/_data/guides/${params.path}`,
    true,
    /^(?!.*index\.md).*$/
  ).keys()

  let fileInfo: String[] = []
  let folderInfo: String[] = []

  folderContents.forEach((item: string) => {
    const parts = item.split("\\") // Assuming '\\' is the path separator
    if (parts.length === 1) {
      // It's a file
      fileInfo.push(item)
    } else if (parts.length > 1) {
      // It's a folder
      const folderName = parts[0]
      if (!folderInfo.includes(folderName)) {
        folderInfo.push(folderName)
      }
    }
  })

  let fileTitles = []

  for (let fileName of fileInfo) {
    // Import file
    const curFile = (
      await import(`@/app/_data/guides/${params.path}/${fileName}`)
    ).default

    // Get its frontmatter
    let fileFrontMatter: any = {}
    try {
      fileFrontMatter = getMDFrontMatter(curFile)
    } catch (e) {
      const file = await read(`./app/_data/guides/${params.path}/${fileName}`)
      matter(file)
      fileFrontMatter = file.data.matter
      console.log(fileFrontMatter)
    }

    fileTitles.push({
      title: fileFrontMatter.title,
      href: "/guides/" + params.path + "/" + fileName,
    })
  }

  for (let folderName of folderInfo) {
    let folderIndexFile = (
      await import(`@/app/_data/guides/${params.path}/${folderName}/index.md`)
    ).default
    // Get the frontmatter from the index

    const folderFileFrontMatter = getMDFrontMatter(folderIndexFile)

    // Add it as a title
    fileTitles.push({
      title: folderFileFrontMatter.title,
      href: `${params.path}/${folderName}`,
    })
  }

  // Show grid of guides
  return (
    <>
      <Breadcrumb slug={`guides/${params.path}`} />
      <div className="blog-post-container">
        <div className="blog-post mb-8">
          <div className="frontmatter">
            <h1 className="title">{indexFileFrontMatter.title}</h1>
            <MDXRemote source={relevantContent} />
            <h3>Guides</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {fileTitles
                .sort((a: any, b: any) => {
                  // Convert titles to lowercase for case-insensitive sorting
                  const titleA = a.title.toLowerCase()
                  const titleB = b.title.toLowerCase()

                  if (titleA < titleB) {
                    return -1
                  } else if (titleA > titleB) {
                    return 1
                  } else {
                    return 0
                  }
                })
                .map((file: any, i: any) => (
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
