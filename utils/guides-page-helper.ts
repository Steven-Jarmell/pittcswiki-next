import path from "path"
import { promises as fs } from "fs"
import { FileTitlesType } from "@/app/guides/[...path]/page"
import { getMDFrontMatter } from "@/utils/frontmatter-parser"

export const GetFolderInformation = async (curPath: string) => {
    // Get the names of the files and folders in this folder
  const folderContents = await fs.readdir(
    path.join(process.cwd(), `/data/guides/${curPath}`)
  )

  let fileInfo: String[] = []
  let folderInfo: String[] = []

  // Files end in either .md or .mdx, folders have no ending
  folderContents.forEach((item: string) => {
    if (!item.includes("md")) {
      // It's a file
      folderInfo.push(item)
    } else {
      // It's a folder
      if (item !== "index.md") {
        fileInfo.push(item)
      }
    }
  })

  // Initialize array to hold return information
  let fileTitles: FileTitlesType[] = []

  // Get information for each file
  for (let fileName of fileInfo) {
    // Import file
    const curFile = await fs.readFile(
      process.cwd() + `/data/guides/${curPath}/${fileName}`,
      "utf-8"
    )

    // Get its frontmatter
    let fileFrontMatter: any = getMDFrontMatter(curFile)

    fileTitles.push({
      title: fileFrontMatter.title,
      href: "/guides/" + curPath + "/" + fileName,
    })
  }

  // Get information for the folders
  for (let folderName of folderInfo) {
    let folderIndexFile = await fs.readFile(
      process.cwd() + `/data/guides/${curPath}/${folderName}/index.md`,
      "utf-8"
    )

    // Get the frontmatter from the index
    const folderFileFrontMatter = getMDFrontMatter(folderIndexFile)

    // Add it as a title
    fileTitles.push({
      title: folderFileFrontMatter.title,
      href: `${curPath}/${folderName}`,
    })
  }

  return fileTitles
}
