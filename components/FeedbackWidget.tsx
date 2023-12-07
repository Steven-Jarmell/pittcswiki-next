"use client"

import { useState } from "react"
import FeedbackForm from "./FeedbackForm"
import FeedbackTitle from "./FeedbackTitle"
import { FeedbackStates } from "@/enums/FeedbackStates"

const FeedbackWidget = () => {
  const [formState, setFormState] = useState(FeedbackStates.DOC)

  return (
    <>
      <FeedbackTitle
        show={formState === FeedbackStates.DOC}
        onClick={() => setFormState(FeedbackStates.FORM)}
      />
      <FeedbackForm
        show={formState === FeedbackStates.FORM}
        setFormState={setFormState}
      />
      <div
        className={
          formState === FeedbackStates.THANK_YOU
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
