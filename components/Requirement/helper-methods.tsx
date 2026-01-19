import CourseLink from "./CourseLink"
import ListRequirementDots from "./ListRequirementDots"
import OrRequirementDots from "./OrRequirementDots"
import {
  Requirement,
  RequirementObject,
  RequirementsData,
} from "@/types/Requirements"

export const requirementsToColor = (reqs: any[], legend: any) => {
  return reqs.sort().map((id: any) => legend[id] || legend.OTHER)
}

export const requirementsToDotsJsx = (requirements: any, legend: any) => {
  if (!requirements) return null

  if (requirements.or) {
    return (
      <OrRequirementDots req={requirementsToColor(requirements.or, legend)} />
    )
  } else if (
    (Array.isArray(requirements) && requirements.length > 0) ||
    requirements.and
  ) {
    const reqs = requirements.and ? requirements.and : requirements
    return <ListRequirementDots req={requirementsToColor(reqs, legend)} />
  } else {
    return null
  }
}

export const requirementsTraverser = (requirements: any) => {
  if (!requirements) return null

  if (requirements.comment) {
    return <span>{requirements.comment}</span>
  }

  if (requirements.or) {
    const or = requirements.or.map((id: any, index: number) => (
      <span key={index}>
        {typeof id === "string" ? (
          <CourseLink id={id} />
        ) : (
          requirementsTraverser(id)
        )}
        {index < requirements.or.length - 1 && <span className="mr-1">OR</span>}
      </span>
    ))
    return <span className="inline-block p-1 border">{or}</span>
  } else if (
    (Array.isArray(requirements) && requirements.length > 0) ||
    requirements.and
  ) {
    const andReqs = requirements.and ? requirements.and : requirements
    const and = andReqs.map((currentReq: any, index: number) => {
      if (typeof currentReq === "string") {
        const id = currentReq
        return <CourseLink key={id} id={id} />
      } else {
        return (
          <span key={`and${index}`}>{requirementsTraverser(currentReq)}</span>
        )
      }
    })
    return <span>{and}</span>
  } else {
    // console.log("Error parsing requirements")
    // return <span>Check the SCI Website!</span>
    return null
  }
}
