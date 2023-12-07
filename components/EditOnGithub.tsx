import { EditIcon } from "@/svgs/EditIcon"

const GITHUB_BASE_URL = `https://github.com/Steven-Jarmell/pittcswiki-next/blob/main/data/`

type EditOnGithubProps = {
  slug: string
  isIndexPage: boolean
}

const EditOnGithub = ({ slug, isIndexPage }: EditOnGithubProps) => {
  const parts = slug.split("/").filter((s) => s)
  let githubFileLink = parts.join("/")
  if (isIndexPage) {
    githubFileLink += "/index"
  }

  const gitHubLink = `${GITHUB_BASE_URL}${githubFileLink}`

  return (
    <a
      target="_blank"
      className="text-gray-600 hidden md:inline"
      rel="noopener noreferrer"
      href={gitHubLink}
    >
      {EditIcon} Edit this page on GitHub
    </a>
  )
}

export default EditOnGithub
