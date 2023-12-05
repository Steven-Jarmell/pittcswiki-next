import Link from "next/link"
import { BreadCrumbArrow } from "@/svgs/BreadCrumbArrow"

type BreadcrumbProps = {
  slug: string
}

const Breadcrumb = ({ slug }: BreadcrumbProps) => {
  let slugItems = slug.split("/")

  const breadcrumbs = slugItems.map((url: string, i: number) => {
    return i < slugItems.length - 1 ? (
      <span
        key={`breadcrumb_${url}`}
        className="flex items-center justify-center"
      >
        <div>{BreadCrumbArrow}</div>
        <Link
          className="uppercase"
          href={"/" + slugItems.slice(0, i + 1).join("/")}
        >
          {url}
        </Link>
      </span>
    ) : (
      <span className="uppercase flex items-center" key={`breadcrumb_${url}`}>
        {BreadCrumbArrow}
        {url.replace(".mdx", "").replace(".md", "")}
      </span>
    )
  })

  return (
    <div className="breadcrumbs flex flex-wrap items-center mb-3">
      <span className="flex items-center">
        <Link href={"/"}>HOME</Link>
      </span>
      {breadcrumbs}
    </div>
  )
}

export default Breadcrumb
