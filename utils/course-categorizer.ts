import { CoursesDataType } from "@/types/CoursesDataType"
import { getNumFromCourseId } from "./course-namer"
import { CategoriesData } from "@/data/CategoriesData"

// This buckets courses into different types as specified in the
// categories.json file required above

const applyFilter = (courseMap: any, filter: any) => {
  let [start, end] = filter.split(" - ")
  ;[start, end] = [getNumFromCourseId(start), Number(end)]
  return Object.keys(courseMap)
    .map((id) => {
      const num = getNumFromCourseId(id)
      if (courseMap[id].used && num >= start && num <= end) {
        courseMap[id].used = false
        return courseMap[id].data
      }
      return false
    })
    .filter((course) => !!course)
}

export const courseCategorizer = (
  courseList: CoursesDataType[],
  categories = CategoriesData
) => {
  const courseMap = courseList.reduce((prev: any, current: any) => {
    prev[current.id] = { used: true, data: current }
    return prev
  }, {})

  let categorized = categories.map((category) => {
    category.courses = category.courses
      .flatMap((id: any) => {
        if (courseMap[id]) {
          courseMap[id].used = false
          return courseMap[id].data
        } else if (id.indexOf(" - ") >= 0) {
          // In the categories.json you can do a filter like
          // CS1509 - 1700
          return applyFilter(courseMap, id)
        }
      })
      .filter((course: CoursesDataType) => !!course)
    return category
  })

  return categorized
}
