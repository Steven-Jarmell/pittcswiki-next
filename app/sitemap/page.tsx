import Breadcrumb from "@/components/Breadcrumb"
import SiteMapList from "@/components/SiteMapList"
import Link from "next/link"

export default function SiteMapPage() {
  return (
    <>
      <Breadcrumb slug="sitemap" />
      <h1>Site Map</h1>
      <p>
        This lists every page on the wiki! If you are feeling overwhelmed, check
        out the <Link href="/guides/">guides listing page</Link>, or try using
        the search in the top right corner.
      </p>
      <SiteMapList />
    </>
  )
}
