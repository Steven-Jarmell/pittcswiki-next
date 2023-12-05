import Link from "next/link"
import CourseListing from "@/components/Courses/CourseListing"

import { CourseInfoData } from "@/data/CourseInfoData"
import { courseCategorizer } from "@/utils/course-categorizer"
import Breadcrumb from "@/components/Breadcrumb"

const categorizedCourses = courseCategorizer(CourseInfoData.courses)

export default function CoursesPage() {
  return (
    <>
      <Breadcrumb slug="courses" />
      <h1>Courses</h1>
      <p>
        If you are new to the CS classes,{" "}
        <span className="ml-2 bg-yellow-300 px-2 py-1">
          we suggest viewing our{" "}
          <Link href="/academics/scheduling">scheduling guide</Link>!
        </span>
      </p>
      <CourseListing
        courseList={CourseInfoData}
        courseCategories={categorizedCourses}
      />
    </>
  )
}
