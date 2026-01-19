import { FileTitlesType } from "@/app/guides/[...path]/page"

export const sortStrings = (a: FileTitlesType, b: FileTitlesType) => {
  // Sort by order if available
  if (a.order !== undefined || b.order !== undefined) {
    if (a.order !== undefined && b.order === undefined) return -1
    if (a.order === undefined && b.order !== undefined) return 1
    // @ts-ignore
    if (a.order !== b.order) return a.order - b.order
  }

  // Convert titles to lowercase for case-insensitive sorting
  const titleA = a.title.toLowerCase()
  const titleB = b.title.toLowerCase()

  if (titleA < titleB) {
    return -1
  } else if (titleA > titleB) {
    return 1
  } else {
    return 0
  }
}
