import { CourseInfoData } from "@/app/_data/CourseInfoData"
import { useRouter } from "next/navigation"

export default function CoursePage({ params }: { params: { id: string } }) {
  return <h1>{params.id} Page</h1>
}
