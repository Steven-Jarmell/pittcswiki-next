type ListRequirementDotsProps = {
  req: any
}

const ListRequirementDots = ({ req }: ListRequirementDotsProps) => {
  const list = req.map((color: any, i: any) => (
    <span
      style={{ background: color }}
      className="course-req-dot"
      key={i}
    ></span>
  ))
  return <span className="">{list}</span>
}

export default ListRequirementDots
