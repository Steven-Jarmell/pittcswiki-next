import React from "react"
import { CourseInfoData } from "@/data/CourseInfoData"

type Course = {
  code: string
  name: string
}

type Tier = {
  name: string
  description: string
  color: string
  courses: Course[]
}

const DATA: Tier[] = [
  {
    name: "S Tier",
    description: "Rough",
    color:
      "bg-red-50 dark:bg-red-500/10 text-red-900 dark:text-red-100 border-l-4 border-red-500 dark:border-red-500",
    courses: [
      { code: "CS 1510", name: "Algorithm Design" },
      { code: "CS 1511", name: "Theory of Computation" },
    ],
  },
  {
    name: "A Tier",
    description: "A Tough Challenge",
    color:
      "bg-orange-50 dark:bg-orange-500/10 text-orange-900 dark:text-orange-100 border-l-4 border-orange-500 dark:border-orange-500",
    courses: [
      { code: "CS 1541", name: "Intro to Computer Architecture" },
      { code: "CS 1622", name: "Intro to Compiler Design" },
      { code: "CS 1651", name: "Advanced Systems Software" },
      { code: "CS 1652", name: "Data Communication and Computer Networks" },
      { code: "CS 1675", name: "Intro to Machine Learning" },
    ],
  },
  {
    name: "B Tier",
    description: "Quite a Challenge",
    color:
      "bg-yellow-50 dark:bg-yellow-500/10 text-yellow-900 dark:text-yellow-100 border-l-4 border-yellow-500 dark:border-yellow-500",
    courses: [
      { code: "CS 1566", name: "Intro to Computer Graphics" },
      { code: "CS 1571", name: "Intro to Artificial Intelligence" },
      { code: "CS 1645", name: "Intro to High Performance Computing Systems" },
      { code: "CS 1653", name: "Applied Crypto and Network Security" },
      { code: "CS 1657", name: "Privacy in Electronic Society" },
    ],
  },
  {
    name: "C Tier",
    description: "A Challenge",
    color:
      "bg-blue-50 dark:bg-blue-500/10 text-blue-900 dark:text-blue-100 border-l-4 border-blue-500 dark:border-blue-500",
    courses: [
      { code: "CS 1555", name: "Database Management Systems" },
      { code: "CS 1567", name: "Robotic System Design" },
      { code: "CS 1637", name: "Intro to Human Computer Interaction" },
      {
        code: "CS 1666",
        name: "Principles of Computer Game Design and Implementation",
      },
      { code: "CS 1671", name: "Human Language Technologies" },
      { code: "CS 1674", name: "Intro to Computer Vision" },
      { code: "CS 1678", name: "Intro to Deep Learning" },
      { code: "CS 1699", name: "Special Topics" },
    ],
  },
  {
    name: "D Tier",
    description: "Not Bad",
    color:
      "bg-green-50 dark:bg-green-500/10 text-green-900 dark:text-green-100 border-l-4 border-green-500 dark:border-green-500",
    courses: [
      { code: "CS 1520", name: "Programming Language for Web Applications" },
      { code: "CS 1530", name: "Software Engineering" },
      { code: "CS 1621", name: "Structure Programming Languages" },
      { code: "CS 1632", name: "Software Quality Assurance" },
      { code: "CS 1656", name: "Intro to Data Science" },
      { code: "CS 1660", name: "Intro to Cloud Computing" },
    ],
  },
]

const ElectivesRankingTable = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm my-8 bg-white dark:bg-[#1a1a1a]">
      <div className="grid grid-cols-[1fr,1.5fr] bg-slate-50 dark:bg-black/20 border-b border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-500 dark:text-slate-400">
        <div className="px-6 py-3">Course</div>
        <div className="px-6 py-3 border-l border-slate-200 dark:border-slate-800">
          Recent Professors
        </div>
      </div>

      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {DATA.map((tier) => (
          <div key={tier.name} className="group">
            {/* Tier Header */}
            <div
              className={`px-6 py-2 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 ${tier.color}`}
            >
              {tier.name}: {tier.description}
            </div>

            {/* Courses */}
            <div className="divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-transparent">
              {tier.courses.map((course) => {
                // Find course data
                const normalizedCode = course.code.replace(/\s+/g, "")
                const courseData = CourseInfoData.courses.find(
                  (c) => c.id === normalizedCode
                )
                const instructors = courseData?.instructors || []

                return (
                  <div
                    key={course.code}
                    className="grid grid-cols-[1fr,1.5fr] hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <div className="px-6 py-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                      <span className="font-mono text-slate-500 dark:text-slate-500 mr-2">
                        {course.code}
                      </span>
                      {course.name}
                    </div>
                    <div className="px-6 py-3 text-sm text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/50 flex flex-wrap gap-x-2 gap-y-1">
                      {instructors.length > 0 ? (
                        instructors.map((prof, i) => (
                          <span key={prof}>
                            {prof}
                            {i < instructors.length - 1 && (
                              <span className="text-slate-300 dark:text-slate-600">
                                ,
                              </span>
                            )}
                          </span>
                        ))
                      ) : (
                        <span className="text-slate-400 italic text-xs">
                          Check Course Explorer
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ElectivesRankingTable
