import Breadcrumb from "@/app/_components/Breadcrumb"
import Link from "next/link"
import GuidesListing from "../_components/GuidesListing"

export default function GuidesPage() {
  return (
    <div className="lg:w-[80vw] mx-auto">
      <Breadcrumb slug="guides" />
      <h1>Guides</h1>
      <ul>
        <li>
          Considering the CS Major or a freshmen?{" "}
          <Link href="/academics/prospective">Click here</Link>
        </li>
        <li>
          Looking for course reviews? <Link href="/courses/">Click here</Link>
        </li>
        <li>
          Want to learn how to land internship and job offers?{" "}
          <Link href="/zero-to-offer/">Click here</Link>
        </li>
      </ul>
      <p>
        Below are collections of guides organized by topic. You can also use the
        search bar at the top right to search for articles, classes and more!
      </p>
      <GuidesListing />
      <p>
        If you ever have any questions or feedback, you can ask by visiting{" "}
        <Link href="/feedback">this link!</Link>
      </p>
      <div>
        <h2>Popular</h2>
        <ul>
          <li>
            <Link href={"/academics/scheduling"}>Scheduling</Link>
          </li>
          <li>
            <Link href={"/courses"}>Course Explorer</Link>
          </li>
          <li>
            <Link href={"/zero-to-offer"}>Zero to Offer</Link>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2>Full Guide Listing</h2>
        {/* Site List Component goes here */}
      </div>
      <p>
        Still curious about something but cannot find it? Please let us know and
        we can add it! <Link href="/feedback">Fill out this form.</Link>
      </p>
    </div>
  )
}
