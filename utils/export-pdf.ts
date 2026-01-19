export interface PDFExportOptions {
  title: string
  author?: string
  publishDate?: string
  content: string
}

export const exportGuideToPDF = async (options: PDFExportOptions) => {
  const html2pdf = (await import("html2pdf.js")).default
  const { title, author, publishDate, content } = options

  // Create a temporary container with styled content
  const container = document.createElement("div")
  container.style.padding = "40px"
  container.style.fontFamily = "Arial, sans-serif"
  container.style.lineHeight = "1.6"
  container.style.color = "#000"
  container.style.backgroundColor = "#fff"

  // Add title
  const titleElement = document.createElement("h1")
  titleElement.textContent = title
  titleElement.style.fontSize = "28px"
  titleElement.style.marginBottom = "20px"
  titleElement.style.fontWeight = "bold"
  container.appendChild(titleElement)

  // Add metadata
  if (author || publishDate) {
    const metaElement = document.createElement("div")
    metaElement.style.fontSize = "12px"
    metaElement.style.color = "#666"
    metaElement.style.marginBottom = "30px"
    metaElement.style.paddingBottom = "20px"
    metaElement.style.borderBottom = "1px solid #ccc"

    const parts = []
    if (author) parts.push(`By: ${author}`)
    if (publishDate) parts.push(`Published ${publishDate}`)
    metaElement.textContent = parts.join(" | ")
    container.appendChild(metaElement)
  }

  // Add content
  // Note: content is from sanitized markdown rendering (rehypeRaw is not used),
  // so innerHTML is safe here as it only contains safe HTML tags from react-markdown
  const contentElement = document.createElement("div")
  contentElement.innerHTML = content
  contentElement.style.fontSize = "12px"

  // Style headings in PDF
  const headings = contentElement.querySelectorAll("h2, h3, h4, h5, h6")
  headings.forEach((heading) => {
    const level = parseInt(heading.tagName[1])
    const sizes = [24, 20, 16, 14, 12, 11]
    ;(heading as HTMLElement).style.fontSize = `${sizes[level - 1]}px`
    ;(heading as HTMLElement).style.marginTop = "20px"
    ;(heading as HTMLElement).style.marginBottom = "10px"
    ;(heading as HTMLElement).style.fontWeight = "bold"
  })

  // Style lists
  const lists = contentElement.querySelectorAll("ul, ol")
  lists.forEach((list) => {
    ;(list as HTMLElement).style.marginLeft = "20px"
    ;(list as HTMLElement).style.marginBottom = "10px"
  })

  // Style blockquotes
  const blockquotes = contentElement.querySelectorAll("blockquote")
  blockquotes.forEach((blockquote) => {
    ;(blockquote as HTMLElement).style.borderLeft = "4px solid #ddd"
    ;(blockquote as HTMLElement).style.paddingLeft = "15px"
    ;(blockquote as HTMLElement).style.marginLeft = "0"
    ;(blockquote as HTMLElement).style.color = "#666"
  })

  // Style code blocks
  const codeBlocks = contentElement.querySelectorAll("pre, code")
  codeBlocks.forEach((code) => {
    ;(code as HTMLElement).style.backgroundColor = "#f5f5f5"
    ;(code as HTMLElement).style.padding = "10px"
    ;(code as HTMLElement).style.borderRadius = "4px"
    ;(code as HTMLElement).style.fontFamily = "monospace"
    ;(code as HTMLElement).style.fontSize = "11px"
  })

  container.appendChild(contentElement)

  // PDF export options
  const opt = {
    margin: 10,
    filename: `${title.replace(/\s+/g, "-").toLowerCase()}.pdf`,
    image: { type: "png" as const, quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: "portrait" as const, unit: "mm", format: "a4" },
  }

  // Generate PDF
  try {
    await html2pdf().set(opt).from(container).save()
  } catch (error) {
    console.error("Error exporting PDF:", error)
    throw error
  }
}
