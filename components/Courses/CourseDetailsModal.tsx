"use client"

import React from "react"
import { CoreCourseData } from "@/data/CoreCoursesData"

type CourseDetailsModalProps = {
  course: CoreCourseData | null
  isOpen: boolean
  onClose: () => void
}

export default function CourseDetailsModal({
  course,
  isOpen,
  onClose,
}: CourseDetailsModalProps) {
  if (!isOpen || !course) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        role="presentation"
        aria-hidden={!isOpen}
      />

      {/* Right Slide Panel Modal */}
      <div
        className={`fixed top-0 right-0 h-full bg-white dark:bg-[#1a1a1a] shadow-2xl dark:shadow-[0_-8px_32px_rgba(0,0,0,0.5)] z-50 w-full max-w-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto text-black dark:text-white`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 right-0 float-right p-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl bg-white dark:bg-[#1a1a1a] transition-all duration-300 hover:scale-110 focus:outline-2 focus:outline-offset-2 focus:outline-[#FFB81C]"
          aria-label="Close course details"
        >
          ×
        </button>

        {/* Course Header */}
        <div className="p-8 pt-4">
          <h2
            id="modal-title"
            className="text-4xl font-bold text-gray-900 dark:text-white mb-1 leading-tight"
          >
            {course.code.replace("CMPINF ", "CS ")}
          </h2>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-6 leading-relaxed">
            {course.title}
          </h3>

          {/* Term Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {course.terms_offered.fall && (
              <span className="px-3 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded">
                FALL
              </span>
            )}
            {course.terms_offered.spring && (
              <span className="px-3 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded">
                SPRING
              </span>
            )}
            {course.terms_offered.summer && (
              <span className="px-3 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded">
                SUMMER
              </span>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 pb-6 border-b border-gray-200 dark:border-gray-700 font-normal">
            {course.description}
          </p>

          {/* Credits */}
          <div className="mb-4 mt-6">
            <span className="font-semibold text-gray-900 dark:text-white text-sm">
              CREDITS:{" "}
            </span>
            <span className="text-gray-700 dark:text-gray-300 text-sm font-normal">
              {course.credits}
            </span>
          </div>

          {/* Prerequisites */}
          {course.prerequisites.length > 0 && (
            <div className="mb-4">
              <span className="font-semibold text-gray-900 dark:text-white text-sm">
                PRE-REQ:{" "}
              </span>
              {course.prerequisites.map((prereq, idx) => {
                // Extract course codes like CS 0401, CMPINF 0401, etc.
                const courseCodeMatch = prereq.match(
                  /((?:CS|CMPINF|COE|MATH|STAT)\s*\d{4})/g
                )
                if (courseCodeMatch) {
                  return (
                    <span
                      key={idx}
                      className="text-gray-600 dark:text-gray-300 text-sm font-normal"
                    >
                      {idx > 0 && ", "}
                      {courseCodeMatch.map((code, codeIdx) => {
                        const cleanCode = code.replace(/\s/g, "")
                        const courseId = cleanCode
                          .replace(/^(CS|CMPINF|COE)0?/, "")
                          .replace(/^MATH.*/, "")
                          .replace(/^STAT.*/, "")
                        const isCoreCS = [
                          "401",
                          "441",
                          "445",
                          "447",
                          "449",
                          "1501",
                          "1502",
                          "1503",
                          "220",
                          "230",
                          "280",
                        ].includes(courseId)

                        return (
                          <span key={codeIdx}>
                            {codeIdx > 0 && " or "}
                            {isCoreCS ? (
                              <a
                                href={`/courses/${cleanCode}`}
                                className="text-[#4A9EFF] dark:text-[#4A9EFF] hover:text-[#6ab8ff] dark:hover:text-[#6ab8ff] font-semibold transition-colors duration-300 hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-[#FFB81C]"
                              >
                                {code}
                              </a>
                            ) : (
                              <span>{code}</span>
                            )}
                          </span>
                        )
                      })}
                    </span>
                  )
                }
                return (
                  <span
                    key={idx}
                    className="text-gray-600 dark:text-gray-300 text-sm font-normal"
                  >
                    {prereq}
                  </span>
                )
              })}
            </div>
          )}

          {/* Co-requisites */}
          {course.corequisites.length > 0 && (
            <div className="mb-6">
              <span className="font-semibold text-gray-900 dark:text-white text-sm">
                CO-REQ:{" "}
              </span>
              {course.corequisites.map((coreq, idx) => {
                // Extract course codes like CS 0401, CMPINF 0401, etc.
                const courseCodeMatch = coreq.match(
                  /((?:CS|CMPINF|COE|MATH|STAT)\s*\d{4})/g
                )
                if (courseCodeMatch) {
                  return (
                    <span
                      key={idx}
                      className="text-gray-600 dark:text-gray-300 text-sm font-normal"
                    >
                      {idx > 0 && ", "}
                      {courseCodeMatch.map((code, codeIdx) => {
                        const cleanCode = code.replace(/\s/g, "")
                        const courseId = cleanCode
                          .replace(/^(CS|CMPINF|COE)0?/, "")
                          .replace(/^MATH.*/, "")
                          .replace(/^STAT.*/, "")
                        const isCoreCS = [
                          "401",
                          "441",
                          "445",
                          "447",
                          "449",
                          "1501",
                          "1502",
                          "1503",
                          "220",
                          "230",
                          "280",
                        ].includes(courseId)

                        return (
                          <span key={codeIdx}>
                            {codeIdx > 0 && " or "}
                            {isCoreCS ? (
                              <a
                                href={`/courses/${cleanCode}`}
                                className="text-[#4A9EFF] dark:text-[#4A9EFF] hover:text-[#6ab8ff] dark:hover:text-[#6ab8ff] font-semibold transition-colors duration-300 hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-[#FFB81C]"
                              >
                                {code}
                              </a>
                            ) : (
                              <span>{code}</span>
                            )}
                          </span>
                        )
                      })}
                    </span>
                  )
                }
                return (
                  <span
                    key={idx}
                    className="text-gray-600 dark:text-gray-300 text-sm font-normal"
                  >
                    {coreq}
                  </span>
                )
              })}
            </div>
          )}

          {/* Instructors */}
          {course.instructors.length > 0 && (
            <div className="mb-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <span className="font-semibold text-gray-900 dark:text-white block mb-2 text-sm">
                RECENT INSTRUCTORS
              </span>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1 font-normal">
                {course.instructors.map((instructor, idx) => (
                  <li key={idx}>{instructor}</li>
                ))}
              </ul>
            </div>
          )}

          {/* View Student Reviews Button - Only for CS courses */}
          {(course.code.startsWith("CS") ||
            course.code.startsWith("CMPINF")) && (
            <a
              href={`/courses/${course.id}`}
              className="block w-full text-center bg-[#4A9EFF] dark:bg-[#4A9EFF] text-white py-3 px-4 rounded-lg hover:bg-[#6ab8ff] dark:hover:bg-[#6ab8ff] transition-all duration-300 font-semibold text-sm mt-6 hover:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-[#FFB81C]"
            >
              View student reviews
            </a>
          )}
        </div>
      </div>
    </>
  )
}
