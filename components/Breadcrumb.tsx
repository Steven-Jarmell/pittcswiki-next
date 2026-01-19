import Link from "next/link"
import { BreadCrumbArrow } from "@/svgs/BreadCrumbArrow"

type BreadcrumbProps = {
  slug: string
}

/**
 * Format a slug item into readable text
 * e.g., "zero-to-offer" -> "Zero to Offer"
 */
const formatBreadcrumbText = (text: string): string => {
  return text
    .replace(".mdx", "")
    .replace(".md", "")
    .split("-")
    .map((word) => {
      if (word.toLowerCase() === "csc") return "CSC"
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(" ")
}

const Breadcrumb = ({ slug }: BreadcrumbProps) => {
  let slugItems = slug.split("/")

  const breadcrumbs = slugItems.map((url: string, i: number) => {
    const formattedText = formatBreadcrumbText(url)

    return i < slugItems.length - 1 ? (
      <span
        key={`breadcrumb_${url}`}
        className="flex items-center justify-center"
      >
        <span className="mx-1 text-gray-400">/</span>
        <Link
          href={"/" + slugItems.slice(0, i + 1).join("/")}
          className="hover:text-[#FFB81C] transition-colors duration-200"
        >
          {formattedText}
        </Link>
      </span>
    ) : (
      <span className="flex items-center" key={`breadcrumb_${url}`}>
        <span className="mx-1 text-gray-400">/</span>
        <span className="text-gray-600 dark:text-gray-400">
          {formattedText}
        </span>
      </span>
    )
  })

  return (
    <nav
      className="breadcrumb-nav flex flex-wrap items-center text-sm"
      aria-label="breadcrumb"
    >
      <Link href={"/"} className="hover:text-blue-500 transition-colors">
        Home
      </Link>
      {breadcrumbs}
    </nav>
  )
}

export default Breadcrumb
