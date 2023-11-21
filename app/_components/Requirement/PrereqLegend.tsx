import { cleanCourseId } from "@/app/_utils/course-namer"

const PrereqLegend = ({ legendData }: any) => {
  const legend = Object.keys(legendData)
    .sort()
    .map((courseId) => {
      return (
        <span key={courseId} className="inline-flex items-center">
          <span className="p-2 mr-2" style={{ color: legendData[courseId] }}>
            {courseId === "OTHER" ? "Other" : cleanCourseId(courseId)}
          </span>
        </span>
      )
    })

  return <div>{legend}</div>
}

export default PrereqLegend
