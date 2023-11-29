import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guide | Pitt CS Wiki",
}

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="max-w-2xl mx-auto">{children}</div>
    </>
  )
}
