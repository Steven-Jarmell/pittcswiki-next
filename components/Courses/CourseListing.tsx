"use client"

import { useState } from "react"
import CourseControls from "./CourseControls"
import PrereqLegend from "../Requirement/PrereqLegend"
import Course from "./Course"
import CourseInteractiveListing from "./CourseInteractiveListing"
import CourseQuickView from "./CourseQuickView"
import { CSLegendData } from "@/enums/CSLegendData"

type CourseListingProps = {
  courseList: any
  courseCategories: any
}

const CourseListing = ({
  courseList,
  courseCategories,
}: CourseListingProps) => {
  const [state, setState] = useState({
    currentCourse: { id: "" },
    showTitles: false,
    showHidden: false,
    isPrereqFilterModeOn: false,
    termOfferedFilter: "OFF",
  })

  const [showCourseFilters, setShowCourseFilters] = useState(false)

  return (
    <div>
      <div className="my-4 content-center course-controls flex-none hidden md:block">
        <button
          className="btn"
          onClick={() => setShowCourseFilters(!showCourseFilters)}
        >
          {(showCourseFilters ? "Hide" : "Show") + " Course Filter Controls"}
        </button>
        {showCourseFilters && (
          <div className="mt-4 border px-2 py-3 md:flex align-center items-center">
            <CourseControls filters={state} setFilters={setState} />
          </div>
        )}
      </div>
      <div
        className={
          state.isPrereqFilterModeOn ? "mb-4 px-2 py-3 border p-1" : "hidden"
        }
      >
        <h4 className="mb-0">Filter by Requirement</h4>
        <p className="mb-1">
          We color coded each core class to make it easier to visualize which
          classes have which requirements.
        </p>
        <div className="inline-block mb-3">
          <PrereqLegend legendData={CSLegendData} />
        </div>
        <p className="mb-0">
          For example, this course has the prerequisites of CS 441 and CS 447
          based on its dot colors:
        </p>
        <Course
          key={"CS1622"}
          showTitle={state.showTitles}
          id="CS1622"
          title="INTRO TO COMPILERS"
          isSelected={state.currentCourse.id === "CS1622" ? true : false}
          onClick={() => null}
          isPrereqFilterModeOn={true}
          colorLegend={CSLegendData}
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-2/3 md:pr-1">
          <CourseInteractiveListing
            filters={state}
            setCurrentCourse={(course: any) =>
              setState({ ...state, currentCourse: course })
            }
            selectedCourseId={state.currentCourse.id}
            courseCategories={courseCategories}
            courses={courseList.courses}
          />
        </div>
        <div
          className="md:w-1/3 hidden md:flex flex-col sticky top-0"
          style={{
            height: "70vh",
            top: "2rem",
            minWidth: "25rem",
            maxHeight: "45rem",
          }}
        >
          <div className="flex flex-col h-full p-8 shadow-xl border rounded br-8">
            <CourseQuickView {...state.currentCourse}>
              <div>
                <h3>Click a course on the left to see details</h3>
                <p>
                  With the controls at the top, you can filter. If you want to
                  know more about a class, click view details after selecting
                  it. Dont forget the search bar at the top right of the page
                  works too!
                </p>
              </div>
            </CourseQuickView>
          </div>
        </div>
      </div>
      <p className="text-sm italic">
        This list was last updated on{" "}
        {new Date(courseList.metadata.generated).toDateString()}. For the most
        up to date information, look at{" "}
        <a href="http://courses.sci.pitt.edu/courses">
          Pitt{"'"}s official website
        </a>
        .
      </p>
    </div>
  )
}

export default CourseListing
