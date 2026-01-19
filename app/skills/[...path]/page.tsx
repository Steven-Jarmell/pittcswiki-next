import { redirect } from "next/navigation"

export default function SkillsRedirect({
  params,
}: {
  params: { path: string[] }
}) {
  const redirectPath = `/guides/skills/${params.path.join("/")}`
  redirect(redirectPath)
}
