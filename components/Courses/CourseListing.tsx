"use client"

import { useEffect, useMemo, useState } from "react"
import CourseControls from "./CourseControls"
import PrereqLegend from "../Requirement/PrereqLegend"
import Course from "./Course"
import CourseInteractiveListing from "./CourseInteractiveListing"
import CourseQuickView from "./CourseQuickView"
import { CSLegendData } from "@/enums/CSLegendData"
import { CourseInfoDataType } from "@/data/CourseInfoData"
import { CategoriesDataType } from "@/data/CategoriesData"

type CourseListingProps = {
  courseList: CourseInfoDataType
  courseCategories: CategoriesDataType[]
}

export type CourseListingState = {
  currentCourse: { id: string }
  showTitles: boolean
  showHidden: boolean
  isPrereqFilterModeOn: boolean
  termOfferedFilter: string
  searchTerm: string
}

const COURSE_FILTERS_KEY = "pittcs-course-filters"

const CourseListing = ({
  courseList,
  courseCategories,
}: CourseListingProps) => {
  const [state, setState] = useState<CourseListingState>(() => ({
    currentCourse: { id: "" },
    showTitles: false,
    showHidden: false,
    isPrereqFilterModeOn: false,
    termOfferedFilter: "OFF",
    searchTerm: "",
  }))

  const [hasHydratedFilters, setHasHydratedFilters] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const stored = window.localStorage.getItem(COURSE_FILTERS_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setState((prev) => ({
          ...prev,
          ...parsed,
          termOfferedFilter: parsed.termOfferedFilter || "OFF",
        }))
      }
    } catch (error) {
      console.warn("Unable to load course filter preferences", error)
    } finally {
      setHasHydratedFilters(true)
    }
  }, [])

  useEffect(() => {
    if (!hasHydratedFilters || typeof window === "undefined") return
    const { currentCourse, ...preferences } = state
    try {
      window.localStorage.setItem(
        COURSE_FILTERS_KEY,
        JSON.stringify(preferences)
      )
    } catch (error) {
      console.warn("Unable to save course filter preferences", error)
    }
  }, [
    state.searchTerm,
    state.showTitles,
    state.showHidden,
    state.isPrereqFilterModeOn,
    state.termOfferedFilter,
    hasHydratedFilters,
    state,
  ])

  return (
    <div>
      <CourseControls filters={state} setFilters={setState} />
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
          key="CS1622"
          showTitle={state.showTitles}
          id="CS1622"
          title="INTRO TO COMPILERS"
          isSelected={state.currentCourse.id === "CS1622" ? true : false}
          onClick={() => null}
          isPrereqFilterModeOn={true}
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-start">
        <div className="md:w-2/3 md:pr-1">
          <CourseInteractiveListing
            filters={state}
            setCurrentCourse={(course: { id: string }) =>
              setState({ ...state, currentCourse: course })
            }
            selectedCourseId={state.currentCourse.id}
            courseCategories={courseCategories}
          />
        </div>
        <div
          className="md:w-1/3 hidden md:flex flex-col sticky top-0 mt-12"
          style={{
            height: "auto",
            top: "5rem",
            minWidth: "25rem",
            maxHeight: "35rem",
          }}
        >
          <div className="flex flex-col p-8 shadow-xl border rounded br-8 dark:bg-[rgba(255,255,255,0.12)] dark:border-[rgba(255,255,255,0.2)] backdrop-blur-md">
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
        This page is dynamically pulled from{" "}
        <a href="https://courses.sci.pitt.edu/courses">courses.sci.pitt.edu</a>{" "}
        on a weekly frequency. In the case of a mistake or error, look at Pitt
        {"'"}s official website and/or check PeopleSoft.
      </p>
    </div>
  )
}

export default CourseListing
