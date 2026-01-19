import { Dispatch, SetStateAction } from "react"
import { CourseListingState } from "./CourseListing"
import { Search } from "lucide-react"

type ToggleKey = "showTitles" | "isPrereqFilterModeOn" | "showHidden"

type CourseControlsProps = {
  filters: CourseListingState
  setFilters: Dispatch<SetStateAction<CourseListingState>>
}

const CourseControls = ({ filters, setFilters }: CourseControlsProps) => {
  const termOptions = [
    { value: "FALL", label: "Fall" },
    { value: "SPRING", label: "Spring" },
    { value: "SUMMER", label: "Summer" },
  ]

  const handleSetTermOffered = (value: string) => {
    setFilters({ ...filters, termOfferedFilter: value })
  }

  const clearTermFilter = () => {
    setFilters({ ...filters, termOfferedFilter: "OFF" })
  }

  const handleToggle = (name: ToggleKey) => {
    const nextFilters = { ...filters, [name]: !filters[name] }
    if (name === "showHidden" && !filters.showHidden) {
      nextFilters.termOfferedFilter = "OFF"
    }
    setFilters(nextFilters)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, searchTerm: e.target.value })
  }

  const renderToggle = (label: string, name: ToggleKey) => (
    <button
      type="button"
      onClick={() => handleToggle(name)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
        filters[name] ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"
      }`}
      role="switch"
      aria-checked={filters[name]}
      aria-label={label}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          filters[name] ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  )

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-[#1a1a1a] lg:flex-row lg:items-center lg:justify-between">
      {/* Search Section */}
      <div className="relative w-full lg:w-72">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
          <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="search"
          placeholder="Search courses..."
          value={filters.searchTerm}
          onChange={handleSearchChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-0 dark:border-[rgba(255,255,255,0.2)] dark:bg-[rgba(255,255,255,0.12)] dark:text-white dark:placeholder-gray-400 dark:focus:border-[#FFB81C] backdrop-blur-md"
        />
      </div>

      {/* Filters Section */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
        {/* Semester Filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Semester:
          </span>
          <div className="flex flex-wrap gap-2">
            {termOptions.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => handleSetTermOffered(value)}
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors border ${
                  filters.termOfferedFilter === value
                    ? "bg-blue-100 text-blue-800 border-transparent dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                    : "bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200 dark:border-[rgba(255,255,255,0.2)] dark:bg-[rgba(255,255,255,0.12)] dark:text-gray-300 dark:hover:bg-[rgba(255,255,255,0.2)] backdrop-blur-md"
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={clearTermFilter}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors border ${
                filters.termOfferedFilter === "OFF"
                  ? "bg-gray-800 text-white border-transparent dark:bg-white dark:text-gray-900"
                  : "bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200 dark:border-[rgba(255,255,255,0.2)] dark:bg-[rgba(255,255,255,0.12)] dark:text-gray-300 dark:hover:bg-[rgba(255,255,255,0.2)] backdrop-blur-md"
              }`}
            >
              All
            </button>
          </div>
        </div>

        {/* Toggles */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            {renderToggle("Show Titles", "showTitles")}
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Titles
            </span>
          </div>
          <div className="flex items-center gap-2">
            {renderToggle("Requirements Filter", "isPrereqFilterModeOn")}
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Reqs
            </span>
          </div>
          <div className="flex items-center gap-2">
            {renderToggle("Show Hidden", "showHidden")}
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Hidden
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseControls
