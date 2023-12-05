import { FileTitlesType } from "@/app/guides/[...path]/page"

export const sortStrings = (a: FileTitlesType, b: FileTitlesType) => {
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
