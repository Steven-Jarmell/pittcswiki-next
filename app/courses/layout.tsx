import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pitt CS Course Exploration | Pitt CS Wiki",
}

export default function CoursesLayout({
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
