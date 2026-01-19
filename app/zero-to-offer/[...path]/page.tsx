import { redirect } from "next/navigation"

export default function ZeroToOfferRedirect({
  params,
}: {
  params: { path: string[] }
}) {
  const redirectPath = `/guides/zero-to-offer/${params.path.join("/")}`
  redirect(redirectPath)
}
