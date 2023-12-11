import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guides | Pitt CS Wiki",
}

export default function GuidesLayout({
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
