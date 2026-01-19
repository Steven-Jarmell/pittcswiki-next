import { CSLegendData } from "@/enums/CSLegendData"
import Course from "./Course"
import { CourseListingState } from "./CourseListing"
import { CategoriesDataType } from "@/data/CategoriesData"

type CourseInteractiveListingProps = {
  setCurrentCourse: (course: { id: string }) => void
  filters: CourseListingState
  courseCategories: CategoriesDataType[]
  selectedCourseId: string
}

const CourseInteractiveListing = ({
  setCurrentCourse,
  filters: {
    showTitles,
    showHidden,
    termOfferedFilter,
    isPrereqFilterModeOn,
    searchTerm,
  },
  courseCategories,
  selectedCourseId,
}: CourseInteractiveListingProps) => {
  const normalizedSearch = searchTerm.trim().toLowerCase()
  const matchesSearch = (course: any) => {
    if (!normalizedSearch) return true
    const titleMatch = course.title?.toLowerCase().includes(normalizedSearch)
    const idMatch = course.id?.toLowerCase().includes(normalizedSearch)
    return titleMatch || idMatch
  }

  return courseCategories.map((category) => {
    const show = showHidden || category.display !== "hidden"
    const termFilteredCourses =
      termOfferedFilter === "OFF"
        ? category.courses
        : category.courses.filter(
            ({ terms_offered }: any) => terms_offered[termOfferedFilter]
          )
    const courses = termFilteredCourses.filter(matchesSearch)
    if (!show || courses.length === 0) return null
    return (
      <div key={category.name} className="mb-8">
        <h2 className="mb-2">{category.name}</h2>
        {category.description && (
          <p dangerouslySetInnerHTML={category.description}></p>
        )}
        <div>
          {courses.map((course: any) => (
            <Course
              key={course.id}
              showTitle={showTitles}
              {...course}
              onClick={() => setCurrentCourse(course)}
              isSelected={selectedCourseId === course.id}
              isPrereqFilterModeOn={isPrereqFilterModeOn}
              colorLegend={CSLegendData}
            />
          ))}
        </div>
      </div>
    )
  })
}

export default CourseInteractiveListing
