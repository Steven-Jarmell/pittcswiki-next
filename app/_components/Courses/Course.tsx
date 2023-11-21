import { CourseItemType } from "@/app/_types/CourseItemType"
import { cleanCourseId, cleanCourseTitle } from "@/app/_utils/course-namer"
import { CSLegendData } from "../Requirement/enum"
import RequirementDots from "../Requirement/RequirementDots"
import { useRouter } from "next/navigation"
import Link from "next/link"
import COURSE_REQUIREMENTS from "@/app/_data/requirements.json"

const Course = ({
  id,
  title,
  onClick,
  showTitle,
  isSelected,
  customCss,
  isPrereqFilterModeOn = false,
  colorLegend = {},
}: CourseItemType) => {
  const router = useRouter()

  // Supply a color legend if you would like to apply colors!
  const displayId = cleanCourseId(id)
  const displayTitle = cleanCourseTitle(title)
  const display = showTitle ? displayTitle : displayId
  const highlightColor = isPrereqFilterModeOn ? colorLegend[id] : null
  // this is confusing because it has the html for both mobile format and
  // regular
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={
          "hidden md:inline-block course-pill select-none" +
          (isSelected ? " selected" : "") +
          (showTitle || isPrereqFilterModeOn ? " w-auto " : "") +
          (customCss ? customCss : "")
        }
        style={
          highlightColor && {
            borderColor: highlightColor,
            boxShadow: `0px 0px 4px ${highlightColor}`,
          }
        }
        onClick={onClick}
        onDoubleClick={() => router.push(`/courses/${id}`)}
        onKeyDown={onClick}
      >
        {!highlightColor && isPrereqFilterModeOn && (
          <RequirementDots
            legend={CSLegendData}
            requirements={COURSE_REQUIREMENTS[id]}
          />
        )}
        {display}
      </div>
      <Link
        className={
          "md:hidden inline-block course-pill" +
          (showTitle || isPrereqFilterModeOn ? " w-auto " : "")
        }
        href={`/courses/${id}`}
      >
        {display}
      </Link>
    </>
  )
}

export default Course
