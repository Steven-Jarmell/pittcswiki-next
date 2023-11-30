import Link from "next/link"
import matter from "gray-matter"
import academicsGuide from "@/app/_data/guides/academics/index.md"
import careerGuide from "@/app/_data/guides/career/index.md"
import skillsGuide from "@/app/_data/guides/skills/index.md"
import ztoGuide from "@/app/_data/guides/zero-to-offer/index.md"

export const getMDFrontMatter = (md: any) => {
  const { data } = matter(md)

  return {
    title: data.title || "",
    guides_blurb: data.guides_blurb || "",
    href: "",
    search_tags: "",
    related: "",
  }
}

const importedGuides = [academicsGuide, careerGuide, skillsGuide, ztoGuide]
let posts: any = []
for (let guide of importedGuides) {
  let guideData = getMDFrontMatter(guide)
  guideData["href"] =
    "guides/" + guideData.title.toLowerCase().replaceAll(" ", "-")
  posts.push(guideData)
}

const guides = posts.map((post: any, index: any) => (
  <Link
    className="inline-block p-1 w-full text-gray-800 px-4 py-4 md:w-1/2"
    href={post.href}
    key={`g_${index}`}
  >
    <div className="border bg-gray-200 shadow-sm h-64 p-4 transition hover:bg-gray-600 hover:text-white hover:shadow-md">
      <h1>{post.title}</h1>
      <div>{post.guides_blurb}</div>
    </div>
  </Link>
))

const GuidesListing = () => {
  return <div className="flex flex-wrap -mx-4 -mt-4">{guides}</div>
}

export default GuidesListing
