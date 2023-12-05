import Link from "next/link"
import { relatedGuidesParser } from "@/utils/related-guides-parser"

type RelatedGuidesProps = {
  related: any
}

const RelatedGuides = ({ related }: RelatedGuidesProps) => {
  const links = relatedGuidesParser(related)

  if (!links || links.length === 0) return null

  return (
    <div className="text-sm border-t border-b py-4">
      <h4 className="mb-1">Related Resources</h4>
      <ul className="mb-0">
        {links.map(({ link, title }: any, i: any) =>
          !link || !title ? null : (
            <li key={i}>
              <Link href={link}>{title}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default RelatedGuides
