import { EditIcon } from "@/svgs/EditIcon"

const GITHUB_BASE_URL = `https://github.com/pittcsc/pittcswiki-next/blob/main/data/`

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
      className="text-gray-600 dark:text-gray-400 hidden md:inline-flex items-center gap-1 hover:text-[#FFB81C] transition-colors duration-200"
      rel="noopener noreferrer"
      href={gitHubLink}
    >
      {EditIcon}
      <span>Edit this page on GitHub</span>
    </a>
  )
}

export default EditOnGithub
