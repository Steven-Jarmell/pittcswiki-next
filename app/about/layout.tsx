import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Pitt CS Wiki"
}

export default function AboutLayout({
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
