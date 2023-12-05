import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { CourseInfoData } from "@/data/CourseInfoData"

// Pretty inefficient algorithm to check if the id is in the courses list
const checkIfValidPage = (id: string) => {
  for (let currentCourse of CourseInfoData.courses) {
    if (currentCourse.id === id) {
      return true
    }
  }
  return false
}

export function middleware(request: NextRequest) {
  // Check that a class page we route to is valid
  if (request.nextUrl.pathname.startsWith("/courses/")) {
    if (!checkIfValidPage(request.nextUrl.pathname.split("/")[2])) {
      return NextResponse.rewrite(new URL("/404", request.url))
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/courses/:path*",
}
