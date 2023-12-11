import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Feedback + Q&A | Pitt CS Wiki",
}

export default function FeedbackLayout({
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
