import CourseQuickViewContent from "./CourseQuickViewContent"

export type CourseQuickViewProps = {
  id: any
  description?: any
  title?: any
  terms_offered?: any
  children: any
}

const CourseQuickView = ({
  id,
  description,
  title,
  terms_offered,
  children,
}: CourseQuickViewProps) => {
  return id ? (
    <CourseQuickViewContent {...{ id, description, title, terms_offered }} />
  ) : (
    <div>{children}</div>
  )
}

export default CourseQuickView
