type FeedbackTitleProps = {
  onClick: any
  show: any
}

const FeedbackTitle = ({ onClick, show }: FeedbackTitleProps) => (
  <button
    onClick={onClick}
    className={
      "btn inline-flex bg-pittgold items-center font-semibold py-2 px-2 border rounded" +
      (show ? "" : "hidden")
    }
  >
    Was this helpful?
  </button>
)

export default FeedbackTitle
