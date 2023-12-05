export type CoursesDataType = {
  sci_href: string
  title: string
  id: string
  credits: number
  description: string
  requirements: string
  replaces?: string
  terms_offered: {
    SPRING: boolean
    FALL: boolean
    SUMMER: boolean
  }
}
