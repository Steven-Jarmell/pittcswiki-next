"use client"

/**
 * Link Panel Component
 *
 * @author agrattan
 * @author Steven-Jarmell
 */

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import coursesIcon from "@/images/icons/courses.svg"
import academicsIcon from "@/images/icons/academic.svg"
import careerIcon from "@/images/icons/career.svg"
import guidesIcon from "@/images/icons/guides.svg"
import sitemapIcon from "@/images/icons/sitemap.svg"

const LinkPanel = () => {
  const router = useRouter()

  return (
    <div
      id="blurb-grid"
      className="my-12 flex flex-col items-center flex-wrap md:flex-row justify-center"
    >
      <div
        className="quick-blurb"
        onClick={() => router.push("/courses/")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push("/courses/")
          }
        }}
        role="button"
        tabIndex={0}
      >
        <Image
          className="w-16 mx-auto"
          alt="Courses from the Noun Project"
          src={coursesIcon}
        />
        <h3>Course Explorer</h3>
        <p>
          Find the right course for you! Professor reviews, course testimonials,
          and more. <Link href="/courses/">Learn more.</Link>
        </p>
      </div>
      <div
        className="quick-blurb"
        onClick={() => router.push("/guides/")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push("/guides/")
          }
        }}
        role="button"
        tabIndex={0}
      >
        <Image src={guidesIcon} alt="guide by Youmena from the Noun Project" />
        <h3>Guides</h3>
        <p>
          View all of our articles organized by topic. Check out popular ones
          and recently updated. <Link href="/guides/">Learn more.</Link>
        </p>
      </div>
      <div
        className="quick-blurb"
        onClick={() => router.push("/career/")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push("/career/")
          }
        }}
        role="button"
        tabIndex={0}
      >
        <Image
          src={careerIcon}
          alt="career by Thuy Nguyen from the Noun Project"
        />
        <h3>Career</h3>
        <p>
          Read our carefully curated tips on how to land job offers and succeed
          in your career. <Link href="/career/">Learn more.</Link>
        </p>
      </div>
      <div
        className="quick-blurb"
        onClick={() => router.push("/academics/")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push("/academics/")
          }
        }}
        role="button"
        tabIndex={0}
      >
        <Image
          src={academicsIcon}
          alt="academic by pam pyke from the Noun Project"
        />
        <h3>Academics</h3>
        <p>
          Thinking about a double major? Not sure what classes to take when?
          Curious about research? Learn the answers to all of your questions
          here! <Link href="/academics/">Learn more.</Link>
        </p>
      </div>
      <div
        className="quick-blurb"
        onClick={() => router.push("/sitemap/")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push("/sitemap/")
          }
        }}
        role="button"
        tabIndex={0}
      >
        <Image
          src={sitemapIcon}
          alt="Sitemap by Adrien Coquet from the Noun Project"
        />
        <h3>Sitemap</h3>
        <p>
          We have a lot of content and its growing. Click here to see a list of
          everything we have. <Link href="/sitemap/">Learn more.</Link>
        </p>
      </div>
    </div>
  )
}

export default LinkPanel
