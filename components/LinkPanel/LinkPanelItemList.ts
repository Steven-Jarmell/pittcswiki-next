import coursesIcon from "@/images/icons/courses.svg"
import academicsIcon from "@/images/icons/academic.svg"
import careerIcon from "@/images/icons/career.svg"
import guidesIcon from "@/images/icons/guides.svg"
import sitemapIcon from "@/images/icons/sitemap.svg"
import { LinkPanelItemType } from "./LinkPanelItem"

export const LinkPanelItemList: LinkPanelItemType[] = [
  {
    path: "/courses/",
    icon: coursesIcon,
    iconAlt: "Courses from the Noun Project",
    description:
      "Find the right course for you! Professor reviews, course testimonials, and more.",
    title: "Course Explorer",
  },
  {
    path: "/guides/",
    icon: guidesIcon,
    iconAlt: "Guide by Youmena from the Noun Project",
    description:
      "View all of our articles organized by topic. Check out popular ones and recently updated.",
    title: "Guides",
  },
  {
    path: "/guides/career/",
    icon: careerIcon,
    iconAlt: "Career by Thuy Nguyen from the Noun Project",
    description:
      "Read our carefully curated tips on how to land job offers and succeed in your career.",
    title: "Career",
  },
  {
    path: "/guides/academics/",
    icon: academicsIcon,
    iconAlt: "Academic by Pam Pyke from the Noun Project",
    description:
      "Thinking about a double major? Not sure what classes to take when? Curious about research? Learn the answers to all of your questions here!",
    title: "Academics",
  },
  {
    path: "/sitemap/",
    icon: sitemapIcon,
    iconAlt: "Sitemap by Adrien Coquet from the Noun Project",
    description:
      "We have a lot of content and its growing. Click here to see a list of everything we have.",
    title: "Sitemap",
  },
]
