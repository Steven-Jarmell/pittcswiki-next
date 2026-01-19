import { TermsOfferedType } from "@/types/CoursesDataType"
import CourseQuickViewContent from "./CourseQuickViewContent"

export type CourseQuickViewProps = {
  id: string
  description?: string
  title?: string
  terms_offered?: TermsOfferedType
  instructors?: string[]
  children: React.ReactNode
}

const CourseQuickView = ({
  id,
  description,
  title,
  terms_offered,
  instructors,
  children,
}: CourseQuickViewProps) => {
  return id ? (
    <CourseQuickViewContent
      {...{ id, description, title, terms_offered, instructors }}
    />
  ) : (
    <div>{children}</div>
  )
}

export default CourseQuickView
