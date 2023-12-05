type OrRequirementDotsProps = {
  req: any
}

const OrRequirementDots = ({ req }: OrRequirementDotsProps) => {
  const list = req.map((color: any, i: any) => (
    <span
      style={{ background: color }}
      className="course-req-dot"
      key={i}
    ></span>
  ))
  return <span className="flex-inline flex-col ">{list}</span>
}

export default OrRequirementDots
