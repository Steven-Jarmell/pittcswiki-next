const OrRequirementDots = ({ req }: any) => {
  const list = req.map((color, i) => (
    <span
      style={{ background: color }}
      className="course-req-dot"
      key={i}
    ></span>
  ))
  return <span className="flex-inline flex-col ">{list}</span>
}

export default OrRequirementDots
