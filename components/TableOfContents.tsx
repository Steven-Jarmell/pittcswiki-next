import { HeadingType } from "./WikiArticle"

const truncate = (word: string) => {
  if (word.length > 28) return word.substring(0, 18) + "..."
  return word
}

type TableOfContentsProps = {
  headings: HeadingType[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings || headings.length < 4) return null

  return (
    <ul className="hidden lg:block fixed lg:left-0 list-none ml-0 markdown-toc">
      {headings.map((heading, i) => (
        <li
          key={i}
          className={"font-bold toc-heading-depth-" + heading.depth}
          style={{ marginLeft: heading.depth + "rem" }}
        >
          <a className="text-gray-600" href={"#" + heading.value}>
            {truncate(heading.value)}
          </a>
        </li>
      ))}
    </ul>
  )
}
