import { cleanCourseId, cleanCourseTitle } from "@/app/_utils/course-namer"
import RequirementsListing from "../Requirement/RequirementsListing"
import TermPills from "./TermPill"
import Link from "next/link"

interface CourseRequirements {
  [key: string]: {
    requirementsString: string
    prereq?: string[] | { or: string[] }
    coreq?: string[]
  }
}

const COURSE_REQUIREMENTS: CourseRequirements = require("@/app/_data/requirements.json")

const CourseQuickViewContent = ({
  id,
  description,
  title,
  terms_offered,
}: any) => {
  return (
    <>
      <h1 className="mb-2">{cleanCourseId(id)}</h1>
      <h2 className="mb-2">{cleanCourseTitle(title)}</h2>
      <TermPills termsMap={terms_offered} />
      <div className="mt-4 mb-2">
        <RequirementsListing requirements={COURSE_REQUIREMENTS[id]} />
      </div>
      <p className="text-xs overflow-auto">
        {description.length > 850
          ? description.substring(0, 800) + "…"
          : description}
      </p>
      <Link
        className="font-semibold btn btn-blue hover:text-white border-blue-200 p-2 text-center mt-auto"
        href={`/courses/${id}`}
      >
        View student reviews
      </Link>
    </>
  )
}

export default CourseQuickViewContent
