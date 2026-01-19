import { redirect } from "next/navigation"

export default function AcademicsRedirect({
  params,
}: {
  params: { path: string[] }
}) {
  const redirectPath = `/guides/academics/${params.path.join("/")}`
  redirect(redirectPath)
}
