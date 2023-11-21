import CourseQuickViewContent from "./CourseQuickViewContent"

const CourseQuickView = ({
    id,
    description,
    title,
    terms_offered,
    children,
  }: any) => {
    return id ? (
      <CourseQuickViewContent
        {...{ id, description, title, terms_offered }}
      />
    ) : (
      <div>{children}</div>
    )
  }

  export default CourseQuickView