import Link from "next/link"
import CourseListing from "@/components/Courses/CourseListing"

import { CourseInfoData } from "@/data/CourseInfoData"
import { CoreCoursesData } from "@/data/CoreCoursesData"
import { courseCategorizer } from "@/utils/course-categorizer"
import Breadcrumb from "@/components/Breadcrumb"

// Merge CoreCoursesData into CourseInfoData
const mergedCourses = CourseInfoData.courses.map((course) => {
  // Try to find matching core course data
  // CoreCoursesData keys are like "401", "445" etc.
  // course.id is like "CS0401", "CS0445"
  // We need to extract the number part and remove leading zeros (e.g. "CS0445" -> "445")
  const courseNumber = parseInt(course.id.replace(/\D/g, ""), 10).toString()
  const coreData = CoreCoursesData[courseNumber]

  if (coreData) {
    return {
      ...course,
      description: coreData.description || course.description,
      instructors: coreData.instructors,
    }
  }
  return course
})

const categorizedCourses = courseCategorizer(mergedCourses)

export default function CoursesPage() {
  return (
    <>
      <Breadcrumb slug="courses" />
      <h1>Courses</h1>
      <p>
        If you are new to the CS classes,{" "}
        <span className="scheduling-guide-highlight">
          we suggest viewing our{" "}
          <Link href="/academics/scheduling">scheduling guide</Link>!
        </span>
      </p>
      <CourseListing
        courseList={{ ...CourseInfoData, courses: mergedCourses }}
        courseCategories={categorizedCourses}
      />
    </>
  )
}
