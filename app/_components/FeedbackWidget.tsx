import { useState } from "react"
import FeedbackForm, { States } from "./FeedbackForm"
import FeedbackTitle from "./FeedbackTitle"

const FeedbackWidget = () => {
  const [formState, setFormState] = useState(States.DOC)

  return (
    <>
      <FeedbackTitle
        show={formState === States.DOC}
        onClick={() => setFormState(States.FORM)}
      />
      <FeedbackForm
        show={formState === States.FORM}
        setFormState={setFormState}
      />
      <div
        className={
          formState === States.THANK_YOU
            ? "bg-pink-400 p-4 text-pink-900"
            : "hidden"
        }
      >
        Thanks! Your feedback makes the wiki better!
      </div>
    </>
  )
}

export default FeedbackWidget
