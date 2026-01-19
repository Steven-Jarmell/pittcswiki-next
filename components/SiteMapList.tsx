import { getMDFrontMatter } from "@/utils/frontmatter-parser"
import { Dirent } from "fs"
import Link from "next/link"

type SiteMapTree = {
  title: string
  href: string
  id: number
  children: SiteMapTree[]
}

const sortAlphaByTitle = (a: SiteMapTree, b: SiteMapTree) => {
  if (a.title < b.title) return -1
  if (a.title > b.title) return 1
  return 0
}

const TreeView = ({ tree }: any) => {
  return (
    <ul className="list-disc mb-0">
      {tree.href && (
        <li>
          {/*<a href={tree.slug}>{tree.title}</a>*/}
          <Link href={tree.href} key={tree.id}>
            {tree.title}
          </Link>
        </li>
      )}
      {tree.children &&
        tree.children
          .sort(sortAlphaByTitle)
          .map((child: SiteMapTree) => (
            <TreeView key={child.id} tree={child} />
          ))}
    </ul>
  )
}

const CardView = ({ tree }: any) => {
  return (
    <>
      {tree.href && (
        <a
          href={tree.href}
          className="w-full h-32 p-4 border text-gray-800 bg-gray-200 shadow-sm transition-all duration-300 ease-out hover:border-l-4 hover:border-l-[#243e8b] dark:hover:border-l-[#FFB81C] hover:text-[#243e8b] dark:hover:text-[#FFB81C] hover:shadow-md hover:-translate-y-0.5"
        >
          {tree.title}
        </a>
      )}
      {tree.children &&
        tree.href !== "/courses/" &&
        tree.children.sort(sortAlphaByTitle).map((child: any) => (
          <a
            key={child.id}
            href={child.href}
            className="w-full h-32 p-4 border text-gray-800 bg-gray-200 shadow-sm transition-all duration-300 ease-out hover:border-l-4 hover:border-l-[#243e8b] dark:hover:border-l-[#FFB81C] hover:text-[#243e8b] dark:hover:text-[#FFB81C] hover:shadow-md hover:-translate-y-0.5"
          >
            {child.title}
          </a>
        ))}
    </>
  )
}

const SiteMapList = ({ type }: any) => {
  const fs = require("fs")
  const path = require("path")
  let id = 0

  const getPagesUnderRoute = (
    baseDirectory: string,
    route: string,
    currNode: SiteMapTree
  ) => {
    const pagesDirectory = path.join(baseDirectory, route)

    try {
      const files = fs.readdirSync(pagesDirectory, { withFileTypes: true })

      /* If the current directory corresponds to a pages directory, simply return */
      //if (files.some((file: Dirent) => file.name === 'page.tsx')) return

      const filteredFiles = files.filter(
        (file: Dirent) =>
          file.name.endsWith(".md") ||
          file.name.endsWith(".mdx") ||
          file.isDirectory()
      )

      /* Grab topic title from index.md file */
      const indexFile = filteredFiles.find((file: Dirent) =>
        file.name.endsWith("index.md")
      )
      if (indexFile) {
        const indexFileContents = fs.readFileSync(
          path.join(indexFile.path, indexFile.name),
          { encoding: "utf8" }
        )
        const indexFileMetadata = getMDFrontMatter(indexFileContents)
        currNode.title = indexFileMetadata.title
      }

      filteredFiles.forEach((file: Dirent) => {
        const relativeFilePath = path.join(route, file.name)
        const stats = fs.statSync(path.join(pagesDirectory, file.name))

        /* 
          If the child directory has brackets (meaning it's a subdirectory of a page and not it's own page) 
          or the sitemap itself, don't include them in the tree
        */
        if (file.name.match(/\[.+\]/) || file.name.includes("sitemap")) {
          return
        }
        /* Skip redirect folders and guides directory when processing app directory,
           since the actual content is added from data/guides */
        const redirectFolders = [
          "guides",
          "academics",
          "career",
          "skills",
          "zero-to-offer",
        ]
        if (
          baseDirectory.includes("app") &&
          redirectFolders.includes(file.name)
        ) {
          return
        }
        if (stats.isDirectory()) {
          let newNode: SiteMapTree = {
            title:
              file.name.charAt(0).toUpperCase() +
              file.name.substring(1).toLowerCase(),
            href: relativeFilePath,
            id: id++,
            children: [],
          }

          currNode.children.push(newNode)

          getPagesUnderRoute(baseDirectory, relativeFilePath, newNode)
        } else if (!file.name.endsWith("index.md")) {
          const fullFilePath = path.join(baseDirectory, relativeFilePath)
          const contents = fs.readFileSync(fullFilePath, { encoding: "utf8" })
          const guideData = getMDFrontMatter(contents)

          let newNode: SiteMapTree = {
            title: guideData.title,
            href: relativeFilePath,
            id: id++,
            children: [],
          }
          currNode.children.push(newNode)
        }
      })
    } catch (error) {
      console.error(`Error reading directory ${pagesDirectory}:`, error)
    }
  }

  let root: SiteMapTree = {
    title: "",
    href: "",
    id: id++,
    children: [],
  }

  /* Add Pages under "app" directory to tree */
  getPagesUnderRoute(path.join(process.cwd(), "app"), "", root)

  /* Add Markdown Pages under "data/guides" to tree */
  getPagesUnderRoute(path.join(process.cwd(), "data"), "guides", root)

  return type === "card" ? (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <CardView tree={root}></CardView>
    </div>
  ) : (
    <TreeView tree={root}></TreeView>
  )
}

export default SiteMapList
