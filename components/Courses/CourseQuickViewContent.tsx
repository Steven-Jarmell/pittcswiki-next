import { cleanCourseId, cleanCourseTitle } from "@/utils/course-namer"
import RequirementsListing from "../Requirement/RequirementsListing"
import TermPills from "./TermPill"
import Link from "next/link"
import { TermsOfferedType } from "@/types/CoursesDataType"
import rmpRatings from "@/data/rmp-ratings.json"

interface CourseRequirements {
  [key: string]: {
    requirementsString: string
    prereq?: string[] | { or: string[] }
    coreq?: string[]
  }
}

const COURSE_REQUIREMENTS: CourseRequirements = require("@/data/requirements.json")

type CourseQuickViewContentProps = {
  id: string
  description?: string
  title?: string
  terms_offered?: TermsOfferedType
  instructors?: string[]
}

const CourseQuickViewContent = ({
  id,
  description,
  title,
  terms_offered,
  instructors,
}: CourseQuickViewContentProps) => {
  return (
    <>
      <h1 className="mb-2">{cleanCourseId(id)}</h1>
      <h2 className="mb-2">{cleanCourseTitle(title ? title : "")}</h2>
      {instructors && instructors.length > 0 && (
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-semibold">Current Professor(s):</span>{" "}
          {[...instructors]
            .sort((a, b) => {
              const ratingA = (rmpRatings as any)[a]
              const ratingB = (rmpRatings as any)[b]
              const scoreA = ratingA ? ratingA.avgRating : -1
              const scoreB = ratingB ? ratingB.avgRating : -1
              return scoreB - scoreA
            })
            .map((instructor, i) => {
              const rating = (rmpRatings as any)[instructor]

              let style: React.CSSProperties = {}
              let className =
                "hover:underline text-gray-600 dark:text-gray-400 transition-colors"

              if (rating && rating.avgRating > 0) {
                const { light, dark } = getRatingColor(rating.avgRating)
                style = {
                  "--rating-color-light": light,
                  "--rating-color-dark": dark,
                } as React.CSSProperties
                className =
                  "hover:underline font-bold text-[var(--rating-color-light)] dark:text-[var(--rating-color-dark)] transition-colors"
              }

              return (
                <span key={instructor}>
                  {i > 0 && ", "}
                  {rating ? (
                    <a
                      href={`https://www.ratemyprofessors.com/professor/${rating.legacyId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                      style={style}
                      title={`${rating.numRatings} ratings`}
                    >
                      {instructor} ({rating.avgRating})
                    </a>
                  ) : (
                    instructor
                  )}
                </span>
              )
            })}
        </p>
      )}
      {terms_offered && <TermPills termsMap={terms_offered} />}
      <div className="mt-4 mb-2">
        <RequirementsListing requirements={COURSE_REQUIREMENTS[id]} />
      </div>
      <p className="text-xs overflow-auto text-gray-700 dark:text-gray-300">
        {description && description.length > 850
          ? description?.substring(0, 800) + "…"
          : description}
      </p>
    </>
  )
}

function getRatingColor(rating: number) {
  // 1.0 (Red) -> 3.0 (Yellow) -> 5.0 (Green)
  const clamp = (val: number, min: number, max: number) =>
    Math.min(Math.max(val, min), max)

  // Colors (R, G, B)
  const redLight = [220, 38, 38] // red-600
  const yellowLight = [202, 138, 4] // yellow-600
  const greenLight = [22, 163, 74] // green-600

  const redDark = [248, 113, 113] // red-400
  const yellowDark = [250, 204, 21] // yellow-400
  const greenDark = [74, 222, 128] // green-400

  const interpolate = (start: number[], end: number[], factor: number) => {
    return start.map((startVal, i) =>
      Math.round(startVal + (end[i] - startVal) * factor)
    )
  }

  let lightRgb, darkRgb

  if (rating <= 3) {
    // Interpolate between Red and Yellow
    const t = clamp((rating - 1) / 2, 0, 1) // (rating - 1) / (3 - 1)
    lightRgb = interpolate(redLight, yellowLight, t)
    darkRgb = interpolate(redDark, yellowDark, t)
  } else {
    // Interpolate between Yellow and Green
    const t = clamp((rating - 3) / 2, 0, 1) // (rating - 3) / (5 - 3)
    lightRgb = interpolate(yellowLight, greenLight, t)
    darkRgb = interpolate(yellowDark, greenDark, t)
  }

  return {
    light: `rgb(${lightRgb.join(",")})`,
    dark: `rgb(${darkRgb.join(",")})`,
  }
}

export default CourseQuickViewContent
