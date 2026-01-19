import fs from "fs"
import path from "path"
import { CourseInfoData } from "../data/CourseInfoData"

const SCHOOL_ID = "U2Nob29sLTEyNDc=" // Base64 for "School-1247" (University of Pittsburgh)
// Actually RMP uses a specific ID for search.
// Let's use the standard search query.

// Known Authorization for RMP (often used in community packages)
const AUTH_TOKEN = "Basic dGVzdDp0ZXN0"

const SEARCH_QUERY = `
  query NewSearchTeachersPS($query: TeacherSearchQuery!) {
    newSearch {
      teachers(query: $query) {
        edges {
          node {
            id
            legacyId
            firstName
            lastName
            avgRating
            numRatings
            department
            school {
              id
              name
            }
          }
        }
      }
    }
  }
`

const NAME_OVERRIDES: Record<string, string> = {
  "Nadine v. F. u. Ludwigsdorff": "Nadine von Frankenberg",
}

const ID_OVERRIDES: Record<string, string> = {
  "Donald Bonidie": "141380",
}

const TEACHER_QUERY = `
  query TeacherNode($id: ID!) {
     node(id: $id) {
      ... on Teacher {
        id
        legacyId
        firstName
        lastName
        avgRating
        numRatings
        department
        school {
          id
          name
        }
      }
    }
  }
`

async function getTeacherById(legacyId: string) {
  const base64Id = Buffer.from(`Teacher-${legacyId}`).toString("base64")
  const response = await fetch("https://www.ratemyprofessors.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH_TOKEN,
    },
    body: JSON.stringify({
      query: TEACHER_QUERY,
      variables: { id: base64Id },
    }),
  })
  const data = await response.json()
  return data.data?.node
}

async function searchProfessor(name: string) {
  const searchName = NAME_OVERRIDES[name] || name
  const response = await fetch("https://www.ratemyprofessors.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH_TOKEN,
    },
    body: JSON.stringify({
      query: SEARCH_QUERY,
      variables: {
        query: {
          text: searchName,
          schoolID: "U2Nob29sLTEyNDc=", // University of Pittsburgh ID
        },
      },
    }),
  })

  const data = await response.json()
  return data.data?.newSearch?.teachers?.edges || []
}

async function main() {
  console.log("Starting RateMyProfessor update...")

  // Extract all instructors
  const instructors = new Set<string>()
  CourseInfoData.courses.forEach((course) => {
    course.instructors?.forEach((inst) => instructors.add(inst))
  })

  console.log(`Found ${instructors.size} unique instructors.`)

  const ratings: Record<string, any> = {}

  // For testing, just do the first 5 to verify it works
  // Real run:
  const instructorList = Array.from(instructors)

  // Optional: Load existing ratings to preserve manual fixes?
  // For now, we trust the script to fetch correct data with overrides.

  for (const instructor of instructorList) {
    // Basic rate limiting/politeness
    await new Promise((resolve) => setTimeout(resolve, 500))

    try {
      if (ID_OVERRIDES[instructor]) {
        console.log(
          `Fetching override ID for: ${instructor} (${ID_OVERRIDES[instructor]})`
        )
        const node = await getTeacherById(ID_OVERRIDES[instructor])
        if (node) {
          ratings[instructor] = {
            avgRating: node.avgRating,
            numRatings: node.numRatings,
            legacyId: node.legacyId,
            firstName: node.firstName,
            lastName: node.lastName,
            id: node.id,
          }
          console.log(
            `  Found (Override): ${node.firstName} ${node.lastName} (${node.avgRating})`
          )
          continue
        } else {
          console.log(`  Override ID not found.`)
        }
      }

      console.log(`Searching for: ${instructor}`)
      const results = await searchProfessor(instructor)

      if (results.length > 0) {
        // Find best match (exact name match preferred)
        // Instructors often have middle names or distinct formatting
        // logic: check if fullname contains the query parts
        // For now, accept the first result if it's from Pitt
        const node = results[0].node
        ratings[instructor] = {
          avgRating: node.avgRating,
          numRatings: node.numRatings,
          legacyId: node.legacyId,
          firstName: node.firstName,
          lastName: node.lastName,
          id: node.id,
        }
        console.log(
          `  Found: ${node.firstName} ${node.lastName} (${node.avgRating})`
        )
      } else {
        console.log(`  No results found.`)
      }
    } catch (error) {
      console.error(`  Error searching for ${instructor}:`, error)
    }
  }

  const outputPath = path.resolve(__dirname, "../data/rmp-ratings.json")
  fs.writeFileSync(outputPath, JSON.stringify(ratings, null, 2))
  console.log(`Saved ratings to ${outputPath}`)
}

main().catch(console.error)
