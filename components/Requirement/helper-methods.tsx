import CourseLink from "./CourseLink"
import ListRequirementDots from "./ListRequirementDots"
import OrRequirementDots from "./OrRequirementDots"

export const requirementsToColor = (reqs: any, legend: any) => {
  return reqs.sort().map((id: any) => legend[id] || legend.OTHER)
}

export const requirementsToDotsJsx = (requirements: any, legend: any) => {
  if (!requirements) return null

  if (requirements.or) {
    return (
      <OrRequirementDots req={requirementsToColor(requirements.or, legend)} />
    )
  } else if (requirements.length > 0 || requirements.and) {
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
    const or = requirements.or.map((id: any, index: any) => (
      <>
        <CourseLink key={id} id={id} />
        {index < requirements.or.length - 1 && <span className="mr-1">OR</span>}
      </>
    ))
    return <span className="inline-block p-1 border">{or}</span>
  } else if (requirements.length > 0 || requirements.and) {
    const andReqs = requirements.and ? requirements.and : requirements
    const and = andReqs.map((currentReq: any, index: any) => {
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
    console.log("Error parsing requirements")
    return <span>Check the SCI Website!</span>
  }
}
