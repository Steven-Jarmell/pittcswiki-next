import Breadcrumb from "@/components/Breadcrumb"
import TermPill from "@/components/Courses/TermPill"
import RequirementsListing from "@/components/Requirement/RequirementsListing"
import { CourseInfoData } from "@/data/CourseInfoData"

interface CourseRequirements {
  [key: string]: {
    requirementsString: string
    prereq?: string[] | { or: string[] }
    coreq?: string[]
  }
}

const COURSE_REQUIREMENTS: CourseRequirements = require("@/data/requirements.json")

export default function CoursePage({ params }: { params: { id: string } }) {
  const CURRENT_COURSE_ID = params.id

  const courseData = CourseInfoData.courses.filter(
    ({ id }: any) => id === CURRENT_COURSE_ID
  )[0]
  const displayCourseId = courseData.id
  const courseTitle = courseData.title

  return (
    <div className="blog-post-container lg:w-[80vw] mx-auto">
      <Breadcrumb slug={`courses/${displayCourseId}`} />
      <div className="blog-post">
        <div className="frontmatter">
          <h1 className="title">{displayCourseId}</h1>
          <h2 className="sub-title">{courseTitle}</h2>
        </div>
        <TermPill termsMap={courseData.terms_offered} />
        <div className="my-4">
          <RequirementsListing
            requirements={COURSE_REQUIREMENTS[CURRENT_COURSE_ID]}
          />
        </div>
        <div className="mb-2">
          <span className="label">Course Description</span>
          <span>{courseData.description}</span>
        </div>
        <div className="mb-4">
          <span className="label">Credits:</span>
          <span>{courseData.credits}</span>
        </div>
        {courseData.replaces && (
          <p className="p-2 text-orange-600 bg-orange-200">
            Heads up, this course recently replaced {courseData.replaces} !
          </p>
        )}
        <a href={courseData.sci_href} target="_blank" rel="noopener noreferrer">
          View this course on Pitt{"'"}s Website
        </a>
        <h2 className="mt-4">Testimonials</h2>
        <div className="mb-4">Testimonial List Placeholder</div>
      </div>
    </div>
  )
}
