import { RequirementsData } from "@/types/Requirements"
import { requirementsTraverser } from "./helper-methods"

type RequirementsListingProps = {
  requirements: {
    prereq?: RequirementsData
    coreq?: RequirementsData
    requirementsString?: string
  }
}

const RequirementsListing = ({ requirements }: RequirementsListingProps) => {
  if (!requirements) {
    return null
  }

  const { prereq, coreq, requirementsString } = requirements

  if (
    prereq &&
    Array.isArray(prereq) &&
    (prereq.length === 0 || prereq[0] === "TODO")
  ) {
    return requirementsString ? (
      <div>
        <span className="font-bold">PRE-REQ: </span> Check the SCI Website
      </div>
    ) : null
  }

  if (!prereq && !coreq) {
    return requirementsString ? (
      <div>
        <span className="font-bold">PRE-REQ: </span> {requirementsString}
      </div>
    ) : null
  }

  const prereqJsx = prereq && (
    <span>
      <span className="font-bold">PRE-REQ: </span>{" "}
      {requirementsTraverser(prereq)}
    </span>
  )

  const coreqJsx = coreq && (
    <span>
      <span className="font-bold">CO-REQ: </span> {requirementsTraverser(coreq)}
    </span>
  )

  return (
    <span className="requirements-listing">
      {prereqJsx} {coreqJsx}
    </span>
  )
}

export default RequirementsListing
