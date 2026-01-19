import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb"
import { CheckCircle2, XCircle } from "lucide-react"

export const metadata = {
  title: "Requests for Projects | Pitt CSC",
  description: "A collection of project ideas for Pitt CSC students to build.",
}

type ProjectIdea = {
  title: string
  description: string
  tags: string[]
  formLink: string // Placeholder for now
}

const ProjectItem = ({ title, description, tags, formLink }: ProjectIdea) => (
  <div className="mb-8 border border-transparent border-b-gray-200 dark:border-b-gray-800 pb-8 last:border-0 hover:bg-gray-50 dark:hover:bg-transparent dark:hover:border-[#ffb81c] -mx-4 px-4 py-6 rounded-2xl transition-all duration-200">
    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
      {title}
    </h3>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
        >
          {tag}
        </span>
      ))}
    </div>
    <a
      href={formLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-sm font-semibold text-[#243e8b] dark:text-[#ffb81c] hover:underline"
    >
      I&apos;m interested in building this
      <svg
        className="ml-1 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  </div>
)

export default function RequestsForProjectsPage() {
  const projects: ProjectIdea[] = [
    {
      title: "Rec Center Crowd Pulse",
      description:
        "Nobody likes walking all the way to the new Rec Center just to find out it's packed. Build a system that tracks crowd density in real-time. This would involve working with Pitt staff to run data analytics on the badging system at the rec center. The goal is to give students a live 'busyness' score so they can optimize their workout times.",
      tags: ["Data Science", "Real-time Data", "Mobile App"],
      formLink: "https://forms.google.com/your-form-url", // TODO: Replace with actual form
    },
    {
      title: "Library Occupancy Monitor",
      description:
        "Finding a seat at Hillman during finals week is a battle. Create a solution that estimates how full different floors or sections of the library are. Similar to the Rec Center project, this could leverage Wi-Fi density data or NFC check-in tags at tables. A successful implementation would help students find quiet study spots instantly without wandering up and down the stairs.",
      tags: ["IoT", "Data Visualization", "API Integration"],
      formLink: "https://forms.google.com/your-form-url",
    },
    {
      title: "Campus Dine Optimizer",
      description:
        "Meal plans are expensive, and maximizing them is an art. Build a tool that scrapes or uses the DineOnCampus API to show what's serving where, but with a twist: optimize for nutritional value or specific dietary restrictions. It could also track current meal swipe usage and predict if a student will run out or have too many swipes left by the end of the semester.",
      tags: ["Web Scraping", "Data Analytics", "Nutrition"],
      formLink: "https://forms.google.com/your-form-url",
    },
    {
      title: "Pitt2Pit Travel Share",
      description:
        "Rides to the airport (PIT) are expensive for students. Pitt2Pit helps students coordinate travel pooling during peak times like Thanksgiving, Winter, and Spring breaks. Users input their flight times, and the algorithm groups them into optimal 'pods' to split Uber/Lyft costs or organize carpools. It solves the fragmented coordination that currently happens in random group chats.",
      tags: ["Matching Algorithm", "Social Graph", "Cost Sharing"],
      formLink: "https://forms.google.com/your-form-url",
    },
  ]

  return (
    <div className="article-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb slug="guides/skills/requests-for-projects" />

      <main className="mt-8">
        {/* Header */}
        <div className="mb-16 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Requests for Projects
            <span className="block text-[#ffb81c] text-lg sm:text-xl font-medium mt-2 tracking-normal">
              Spring 2026
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Inspired by{" "}
            <a
              href="https://www.ycombinator.com/rfs"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              YC&apos;s Request for Startups (RFS)
            </a>
            , this is a collection of ideas we&apos;d love to see built by the
            Pitt CSC community.
          </p>
        </div>

        {/* Project List */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 border-b-4 border-[#ffb81c] inline-block pb-2 text-gray-900 dark:text-white">
            The Ideas
          </h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectItem key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* About Sections */}
        <div className="grid md:grid-cols-2 gap-12 mb-32 border-t border-gray-100 dark:border-gray-800 pt-16">
          <div className="pr-8">
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              Who is this for?
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 text-[#243e8b] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Students looking to spend 5-10 hrs/week building something
                  real.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 text-[#243e8b] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Any skill level — from first-years to seniors.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 text-[#243e8b] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  People who want to solve actual campus problems.
                </span>
              </li>
            </ul>
          </div>
          <div className="md:border-l md:border-gray-100 dark:md:border-gray-800 md:pl-12">
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              Who is this not for?
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <XCircle className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Those just wanting a line item for their resume without
                  passion.
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Projects that will be abandoned after one week.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Submission */}
        <section className="bg-[#243e8b] rounded-2xl p-8 sm:p-12 text-center text-white mb-32">
          <h2 className="text-3xl font-bold mb-4">Have an idea we missed?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We know we don&apos;t have all the answers. If you have a burning
            problem you want to solve or a project idea that needs a team, add
            it to our list.
          </p>
          <a
            href="https://forms.google.com/your-submission-form-url" // TODO: Replace with actual submission form
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ffb81c] text-[#243e8b] dark:text-[#243e8b] font-bold text-lg px-8 py-3 rounded-full hover:bg-[#ffc840] transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            Submit an Idea
          </a>
        </section>
      </main>
    </div>
  )
}
