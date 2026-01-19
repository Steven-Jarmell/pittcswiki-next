import * as fs from "fs"

async function fetchHtml() {
  const url = "https://courses.sci.pitt.edu/courses/view/CS-1666"
  const response = await fetch(url)
  const text = await response.text()
  fs.writeFileSync("temp_course_page.html", text)
  console.log("Saved HTML to temp_course_page.html")
}

fetchHtml()
