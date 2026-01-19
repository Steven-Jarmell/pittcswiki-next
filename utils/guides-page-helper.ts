import path from "path"
import { promises as fs } from "fs"
import { FileTitlesType } from "@/app/guides/[...path]/page"
import { getMDFrontMatter } from "@/utils/frontmatter-parser"

export const GetFolderInformation = async (curPath: string) => {
  // Validate path to prevent directory traversal attacks
  const safeBasePath = path.resolve(process.cwd(), "data/guides")
  const safePath = path.resolve(safeBasePath, curPath)
  if (!safePath.startsWith(safeBasePath + path.sep)) {
    throw new Error("Invalid path: directory traversal attempted")
  }

  // Get the names of the files and folders in this folder
  const folderContents = await fs.readdir(safePath)

  let fileInfo: string[] = []
  let folderInfo: string[] = []

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
    const filePath = path.resolve(safePath, fileName)
    // Ensure file is within the allowed directory
    if (!filePath.startsWith(safeBasePath + path.sep)) {
      continue // Skip files outside the allowed directory
    }
    const curFile = await fs.readFile(filePath, "utf-8")

    // Get its frontmatter
    let fileFrontMatter: any = getMDFrontMatter(curFile)

    fileTitles.push({
      title: fileFrontMatter.title,
      href: "/guides/" + curPath + "/" + fileName,
      order: fileFrontMatter.order,
    })
  }

  // Get information for the folders
  for (let folderName of folderInfo) {
    const folderPath = path.resolve(safePath, folderName, "index.md")
    // Ensure folder is within the allowed directory
    if (!folderPath.startsWith(safeBasePath + path.sep)) {
      continue // Skip folders outside the allowed directory
    }
    let folderIndexFile = await fs.readFile(folderPath, "utf-8")

    // Get the frontmatter from the index
    const folderFileFrontMatter = getMDFrontMatter(folderIndexFile)

    // Add it as a title
    fileTitles.push({
      title: folderFileFrontMatter.title,
      href: `/guides/${curPath}/${folderName}`,
      order: folderFileFrontMatter.order,
    })
  }

  return fileTitles
}
