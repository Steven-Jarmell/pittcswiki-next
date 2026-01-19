import * as fs from "fs"
import * as path from "path"
import * as cheerio from "cheerio"

// Types matching the existing data structure
type TermsOffered = {
  FALL: boolean
  SPRING: boolean
  SUMMER: boolean
}

type CourseData = {
  sci_href: string
  title: string
  id: string
  credits: number
  description: string
  requirements: string
  terms_offered: TermsOffered
  instructors: string[]
}

type CourseInfoDataType = {
  metadata: {
    generated: string
  }
  courses: CourseData[]
}

const BASE_URL = "https://courses.sci.pitt.edu"
const COURSES_URL = `${BASE_URL}/courses`

async function fetchPage(url: string): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
  }
  return response.text()
}

async function scrapeCourses() {
  console.log("Fetching course list...")
  const mainPageHtml = await fetchPage(COURSES_URL)
  const $ = cheerio.load(mainPageHtml)

  const courseLinks: string[] = []

  // Find all course links that start with /courses/view/
  // We filter for CS and CMPINF courses based on the ID in the link or text
  $('a[href^="/courses/view/"]').each((_, element) => {
    const href = $(element).attr("href")
    if (href) {
      // Check if it's a CS or CMPINF course
      if (href.includes("CS-") || href.includes("CMPINF-")) {
        courseLinks.push(href)
      }
    }
  })

  // Deduplicate links
  const uniqueLinks = Array.from(new Set(courseLinks))
  console.log(`Found ${uniqueLinks.length} potential courses.`)

  const courses: CourseData[] = []

  for (const link of uniqueLinks) {
    const fullUrl = `${BASE_URL}${link}`
    console.log(`Scraping ${fullUrl}...`)

    try {
      const detailHtml = await fetchPage(fullUrl)
      const $detail = cheerio.load(detailHtml)

      // Extract ID and Title
      // Find the H1 that contains the course code (e.g. "CS 0401")
      let headerText = ""
      let $header = $detail("h1").first()

      $detail("h1").each((_, el) => {
        const text = $detail(el).text().trim()
        if (text.match(/^[A-Z]+\s+\d+/)) {
          headerText = text
          $header = $detail(el)
          return false // break
        }
      })

      if (!headerText) {
        // Fallback: try to find it in the title tag or just skip
        console.warn(`Could not find course header for ${fullUrl}`)
        continue
      }

      const idMatch = headerText.match(/^([A-Z]+\s+\d+)\s+(.*)/)
      let id = ""
      let title = ""

      if (idMatch) {
        id = idMatch[1].replace(/\s+/g, "") // "CS0401"
        title = idMatch[2]
      } else {
        id = link.split("/").pop()?.replace("-", "") || ""
        title = headerText
      }

      // Extract Description
      let description = ""
      $header.nextAll("p").each((_, el) => {
        const text = $detail(el).text().trim()
        // Skip empty paragraphs or metadata paragraphs
        if (
          text &&
          !text.startsWith("Academic Career") &&
          !text.startsWith("Course Component")
        ) {
          description = text
          return false // break
        }
      })

      // Extract Credits
      const pageText = $detail("body").text()
      const creditsMatch = pageText.match(/Minimum Credits:\s*(\d+)/)
      const credits = creditsMatch ? parseInt(creditsMatch[1], 10) : 3

      // Extract Requirements
      const reqMatch = pageText.match(
        /Course Requirements:\s*([^]*?)(?:Minimum Credits|$)/
      )
      const requirements = reqMatch ? reqMatch[1].trim() : ""

      // Extract Terms Offered
      const termsOffered: TermsOffered = {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      }

      const currentSectionsText = $detail('h2:contains("Current Sections")')
        .nextAll()
        .text()
        .toUpperCase()

      if (currentSectionsText.includes("FALL")) termsOffered.FALL = true
      if (currentSectionsText.includes("SPRING")) termsOffered.SPRING = true
      if (currentSectionsText.includes("SUMMER")) termsOffered.SUMMER = true

      // Extract Instructors
      // Look for td elements with headers starting with "instructors-"
      const instructorsSet = new Set<string>()
      $detail('td[headers^="instructors-"]').each((_, el) => {
        const name = $detail(el).text().trim()
        if (name && name !== "To be announced") {
          instructorsSet.add(name)
        }
      })
      const instructors = Array.from(instructorsSet).sort()

      courses.push({
        sci_href: fullUrl,
        title,
        id,
        credits,
        description,
        requirements,
        terms_offered: termsOffered,
        instructors,
      })
    } catch (error) {
      console.error(`Error scraping ${fullUrl}:`, error)
    }
  }

  // Sort courses by ID
  courses.sort((a, b) => a.id.localeCompare(b.id))

  const data: CourseInfoDataType = {
    metadata: {
      generated: new Date().toISOString(),
    },
    courses,
  }

  const fileContent = `import { CoursesDataType } from "@/types/CoursesDataType"

export type CourseInfoDataType = {
  metadata: {
    generated: string
  }
  courses: CoursesDataType[]
}

export const CourseInfoData: CourseInfoDataType = ${JSON.stringify(
    data,
    null,
    2
  )}
`

  const outputPath = path.join(process.cwd(), "data", "CourseInfoData.ts")
  fs.writeFileSync(outputPath, fileContent)
  console.log(`Successfully wrote ${courses.length} courses to ${outputPath}`)
}

scrapeCourses().catch(console.error)
