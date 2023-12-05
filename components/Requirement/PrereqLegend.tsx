import { cleanCourseId } from "@/utils/course-namer"

type PrereqLegendProps = {
  legendData: any
}

const PrereqLegend = ({ legendData }: PrereqLegendProps) => {
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
