type CourseControlsProps = {
  filters: any
  setFilters: any
}

const CourseControls = ({ filters, setFilters }: CourseControlsProps) => {
  const handleSetTermOffered = (e: any) => {
    setFilters({ ...filters, termOfferedFilter: e.target.value })
  }

  const turnOffTermOfferedFilter = () => {
    setFilters({ ...filters, termOfferedFilter: "OFF" })
  }

  const handleCheckbox = (e: any) => {
    const newFilters = { ...filters, [e.target.name]: e.target.checked }
    if (e.target.name === "showHidden" && e.target.checked)
      newFilters.termOfferedFilter = "OFF"
    setFilters(newFilters)
  }

  return (
    <div className="">
      <div className="md:flex align-center items-center">
        <label>
          <input
            type="checkbox"
            name="showTitles"
            checked={filters.showTitles}
            onChange={handleCheckbox}
          />
          Show Course Titles
        </label>
        <label>
          <input
            type="checkbox"
            name="isPrereqFilterModeOn"
            checked={filters.isPrereqFilterModeOn}
            onChange={handleCheckbox}
          />
          Filter Based on Requirements
        </label>
        <label>
          <input
            type="checkbox"
            name="showHidden"
            checked={filters.showHidden}
            onChange={handleCheckbox}
          />
          Show Hidden Classes
        </label>
      </div>
      <div className="mt-2">
        <span className="ml-2 font-bold">Offered in:</span>
        <div className="ml-2" id="term_offered">
          <button
            value="FALL"
            className={
              "btn bg-white md:w-20 small " +
              (filters.termOfferedFilter === "FALL" && "active")
            }
            name="term_offered"
            onClick={handleSetTermOffered}
          >
            Fall
          </button>
          <button
            className={
              "btn bg-white md:w-20 small " +
              (filters.termOfferedFilter === "SPRING" && "active")
            }
            value="SPRING"
            name="term_offered"
            onClick={handleSetTermOffered}
          >
            Spring
          </button>
          <button
            className={
              "btn bg-white md:w-20 small " +
              (filters.termOfferedFilter === "SUMMER" && "active")
            }
            value="SUMMER"
            name="term_offered"
            onClick={handleSetTermOffered}
          >
            Summer
          </button>
          <button
            className={
              filters.termOfferedFilter === "OFF"
                ? "hidden"
                : "ml-1 small bg-red-100 btn"
            }
            onClick={turnOffTermOfferedFilter}
          >
            Clear Term Offered Filter
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseControls
