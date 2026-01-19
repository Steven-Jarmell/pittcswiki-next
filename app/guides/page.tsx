import Breadcrumb from "@/components/Breadcrumb"
import Link from "next/link"
import GuidesListing from "@/components/GuidesListing"
import SiteMapList from "@/components/SiteMapList"

export default function GuidesPage() {
  return (
    <div className="article-container">
      <Breadcrumb slug="guides" />
      <div className="article-content-wrapper">
        <h1 className="article-title">Guides</h1>
        <ul>
          <li>
            Considering the CS Major or a freshmen?{" "}
            <Link href="/guides/academics/prospective">Click here</Link>
          </li>
          <li>
            Looking for course reviews? <Link href="/courses/">Click here</Link>
          </li>
          <li>
            Want to learn how to land internship and job offers?{" "}
            <Link href="/guides/zero-to-offer/">Click here</Link>
          </li>
        </ul>
        <p>
          Below are collections of guides organized by topic. You can also use
          the search bar at the top right to search for articles, classes and
          more!
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
              <Link href={"/guides/academics/scheduling"}>Scheduling</Link>
            </li>
            <li>
              <Link href={"/courses"}>Course Explorer</Link>
            </li>
            <li>
              <Link href={"/guides/zero-to-offer"}>Zero to Offer</Link>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2>Full Guide Listing</h2>
          <SiteMapList />
        </div>
        <p>
          Still curious about something but cannot find it? Please let us know
          and we can add it! <Link href="/feedback">Fill out this form.</Link>
        </p>
      </div>
    </div>
  )
}
