import { useState } from "react"
import { SadFaceIcon } from "@/svgs/SadFaceIcon"
import { OkayFaceIcon } from "@/svgs/OkayFaceIcon"
import { GreatFaceIcon } from "@/svgs/GreatFaceIcon"
import { FeedbackStates } from "@/enums/FeedbackStates"

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

type FeedbackFormProps = {
  setFormState: any
  show: any
}

const FeedbackForm = ({ setFormState, show }: FeedbackFormProps) => {
  const [sentiment, setSentiment] = useState<string>("")

  const handleChange = (e: any) => {
    setSentiment(e.target.value)
  }

  const [sending, setSending] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setSending(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "feedback",
        sentiment,
        location: window.location,
      }),
    }).then(() => {
      setSending(false)
      setFormState(FeedbackStates.THANK_YOU)
    })
  }

  return (
    <div
      className={
        "w-full md:w-1/2 relative feedback-form " + (show ? "" : "hidden")
      }
    >
      <form
        name="feedback"
        data-netlify="true"
        action="/"
        data-netlify-honeypot="bot-field"
        method="post"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <input hidden name="location" onChange={handleChange} />
        <div
          style={{ bottom: "60px" }}
          className="absolute flex flex-col justify-between border bg-white shadow-md h-64 p-3 w-full"
        >
          <div className="text-left">
            <span> Rate your experience</span>
            <div className="flex justify-between">
              <div
                className={"sentiment " + (sentiment === "poor" && " active")}
              >
                <input
                  type="radio"
                  name="sentiment"
                  value="poor"
                  onChange={handleChange}
                />
                {SadFaceIcon}
                <span className="font-bold text-gray-800">Poor</span>
              </div>
              <div
                className={"sentiment " + (sentiment === "okay" && " active")}
              >
                <input
                  type="radio"
                  name="sentiment"
                  value="okay"
                  onChange={handleChange}
                />
                {OkayFaceIcon}
                <span className="font-bold text-gray-800">Okay</span>
              </div>
              <div
                className={"sentiment " + (sentiment === "great" && " active")}
              >
                <input
                  type="radio"
                  name="sentiment"
                  value="great"
                  onChange={handleChange}
                />
                {GreatFaceIcon}
                <span className="font-bold text-gray-800">Great</span>
              </div>
            </div>
          </div>
          <div className="text-left">
            <label className="w-full font-bold">
              Your comments (optional):
              <textarea
                name="comment"
                className="p-3 w-full flex border h-20 mt-auto"
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <button
            type="button"
            className="btn"
            onClick={() => setFormState(FeedbackStates.DOC)}
          >
            Cancel
          </button>

          <button
            className="btn btn-purple hover:shadow-xl ml-4 w-1/2"
            type="submit"
          >
            {sending ? "Sending..." : "Send Feedback!"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FeedbackForm
