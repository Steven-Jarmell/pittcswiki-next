import matter from "gray-matter"

export type MDFrontMatterType = {
  title: string
  guides_blurb: string
  href: string
  search_tags: string
  related: string[]
  author: string
  order?: number
}

export const getMDFrontMatter = (md: string) => {
  const { data } = matter(md)

  return {
    title: data.title || "",
    guides_blurb: data.guides_blurb || "",
    href: "",
    search_tags: "",
    related: [""],
    author: "",
    order: data.order,
  } as MDFrontMatterType
}
