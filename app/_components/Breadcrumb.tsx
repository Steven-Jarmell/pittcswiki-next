import Link from "next/link"
import { BreadCrumbArrow } from "../_svgs/BreadCrumbArrow"

const Breadcrumb = ({ slug }: { slug: string }) => {
  let slugItems = slug.split("/")

  const breadcrumbs = slugItems.map((url, i) => {
    return i < slugItems.length - 1 ? (
      <span key={`breadcrumb_${url}`} className="flex">
        {BreadCrumbArrow}
        <Link
          className="uppercase"
          href={"/" + slugItems.slice(0, i + 1).join("/")}
        >
          {url}
        </Link>
      </span>
    ) : (
      <span className="uppercase flex" key={`breadcrumb_${url}`}>
        {BreadCrumbArrow}
        {url}
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
