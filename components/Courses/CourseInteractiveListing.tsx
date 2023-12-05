import { CSLegendData } from "@/enums/CSLegendData"
import Course from "./Course"

const CourseInteractiveListing = ({
  setCurrentCourse,
  filters: { showTitles, showHidden, termOfferedFilter, isPrereqFilterModeOn },
  courseCategories,
  selectedCourseId,
}: any) => {
  return courseCategories.map((category: any) => {
    const show = showHidden || category.display !== "hidden"
    const courses =
      termOfferedFilter === "OFF"
        ? category.courses
        : category.courses.filter(
            ({ terms_offered }: any) => terms_offered[termOfferedFilter]
          )
    return show ? (
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
    ) : null
  })
}

export default CourseInteractiveListing
