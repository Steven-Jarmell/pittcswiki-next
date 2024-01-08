import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap | Pitt CS Wiki",
}

export default function SitemapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>{children}</div>
    </>
  )
}
