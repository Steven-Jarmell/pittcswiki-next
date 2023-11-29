import Breadcrumb from "@/app/_components/Breadcrumb"
import { getMDFrontMatter } from "@/app/_components/GuidesListing"
import { MDXRemote } from "next-mdx-remote/rsc"
import { serialize } from "next-mdx-remote/serialize"

export default async function GuidePage({
  params,
}: {
  params: { id: string }
}) {
  // Based on the name, dynamically import the index.md file for it
  const pageIndexFile = (
    await import(`@/app/_data/guides/${params.id}/index.md`)
  ).default

  let startIndex = pageIndexFile.lastIndexOf("---") + 3
  let relevantContent = pageIndexFile.slice(startIndex, -1)

  const indexFileFrontMatter = getMDFrontMatter(pageIndexFile)
  // Then, import all of the other md files in the directory

  // Show grid of guides
  return (
    <>
      <Breadcrumb slug={`guides/${params.id}`} />
      <div className="blog-post-container">
        <div className="blog-post mb-8">
          <div className="frontmatter">
            <h1 className="title">{indexFileFrontMatter.title}</h1>
            <MDXRemote source={relevantContent} />
          </div>
        </div>
      </div>
    </>
  )
}
