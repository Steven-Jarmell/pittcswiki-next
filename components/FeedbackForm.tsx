import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react"
import { FeedbackStates } from "@/enums/FeedbackStates"

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

type FeedbackFormProps = {
  setFormState: Dispatch<SetStateAction<string>>
  show: boolean
}

const FeedbackForm = ({ setFormState, show }: FeedbackFormProps) => {
  const [sentiment, setSentiment] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  const [sending, setSending] = useState(false)

  const handleSentimentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSentiment(e.target.value)
  }

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "feedback",
        sentiment,
        comment,
        location: window.location.href,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        setSending(false)
        setFormState(FeedbackStates.THANK_YOU)
      })
      .catch((error) => {
        console.error("Feedback submission failed:", error)
        setSending(false)
        setFormState(FeedbackStates.ERROR)
      })
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setFormState(FeedbackStates.DOC)}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white dark:bg-[#1a1a1a] rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transform transition-all">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Send Feedback
            </h3>
            <button
              onClick={() => setFormState(FeedbackStates.DOC)}
              className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300 transition-all"
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form
            name="feedback"
            data-netlify="true"
            action="/"
            data-netlify-honeypot="bot-field"
            method="post"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="feedback" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input
                  name="bot-field"
                  onChange={(e) => console.log(e.target.value)}
                />
              </label>
            </p>
            <input hidden name="location" readOnly />

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Rate your experience
              </label>
              <div className="grid grid-cols-3 gap-4">
                <label
                  className={`cursor-pointer flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
                    sentiment === "poor"
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-[#1a1a1a]"
                  }`}
                >
                  <input
                    type="radio"
                    name="sentiment"
                    value="poor"
                    onChange={handleSentimentChange}
                    className="sr-only"
                  />
                  <div className="text-3xl mb-2 transition-transform hover:scale-110">
                    😭
                  </div>
                  <span
                    className={`text-sm font-medium text-center ${
                      sentiment === "poor"
                        ? "text-red-700 dark:text-red-400"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    Poor
                  </span>
                </label>

                <label
                  className={`cursor-pointer flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
                    sentiment === "okay"
                      ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-[#1a1a1a]"
                  }`}
                >
                  <input
                    type="radio"
                    name="sentiment"
                    value="okay"
                    onChange={handleSentimentChange}
                    className="sr-only"
                  />
                  <div className="text-3xl mb-2 transition-transform hover:scale-110">
                    😐
                  </div>
                  <span
                    className={`text-sm font-medium text-center ${
                      sentiment === "okay"
                        ? "text-yellow-700 dark:text-yellow-400"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    Okay
                  </span>
                </label>

                <label
                  className={`cursor-pointer flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
                    sentiment === "great"
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-[#1a1a1a]"
                  }`}
                >
                  <input
                    type="radio"
                    name="sentiment"
                    value="great"
                    onChange={handleSentimentChange}
                    className="sr-only"
                  />
                  <div className="text-3xl mb-2 transition-transform hover:scale-110">
                    🤩
                  </div>
                  <span
                    className={`text-sm font-medium text-center ${
                      sentiment === "great"
                        ? "text-green-700 dark:text-green-400"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    Great
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your comments (optional)
              </label>
              <textarea
                name="comment"
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
                placeholder="Tell us what you think..."
                onChange={handleCommentChange}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setFormState(FeedbackStates.DOC)}
                className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={sending}
                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                {sending ? "Sending..." : "Send Feedback"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FeedbackForm
