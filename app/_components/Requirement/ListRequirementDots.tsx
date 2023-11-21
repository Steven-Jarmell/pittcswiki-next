const ListRequirementDots = ({ req }: any) => {
  const list = req.map(({ color, i }: any) => (
    <span
      style={{ background: color }}
      className="course-req-dot"
      key={i}
    ></span>
  ))
  return <span className="">{list}</span>
}

export default ListRequirementDots
