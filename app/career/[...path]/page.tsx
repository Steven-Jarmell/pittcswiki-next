import { redirect } from "next/navigation"

export default function CareerRedirect({
  params,
}: {
  params: { path: string[] }
}) {
  const redirectPath = `/guides/career/${params.path.join("/")}`
  redirect(redirectPath)
}
