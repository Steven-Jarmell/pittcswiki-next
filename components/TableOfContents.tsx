import { HeadingType } from "./WikiArticle"

const truncate = (word: string) => {
  if (word.length > 28) return word.substring(0, 18) + "..."
  return word
}

// Create URL-safe slugs that match rehypeSlug behavior
const createSlug = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
}

type TableOfContentsProps = {
  headings: HeadingType[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings || headings.length < 4) return null

  return (
    <ul className="hidden lg:block list-none ml-0 markdown-toc">
      {headings.map((heading, i) => {
        const isSectionHeader = heading.depth === 2
        const isSubsection = heading.depth > 2

        return (
          <li
            key={i}
            className={`font-bold toc-heading-depth-${heading.depth} ${
              isSectionHeader ? "sidebar-section-header" : ""
            } ${isSubsection ? "sidebar-subsection" : ""}`}
          >
            <a
              className={`sidebar-nav-link ${isSectionHeader ? "" : ""}`}
              href={"#" + createSlug(heading.value)}
            >
              {truncate(heading.value)}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
