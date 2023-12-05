export const relatedGuidesParser = (relatedLinks: any) => {
  const links: any[] = []

  if (!relatedLinks || !relatedLinks.length || relatedLinks.length % 2 !== 0) {
    return links
  }

  for (let i = 0; i < relatedLinks.length; i += 2) {
    links.push({ title: relatedLinks[i], link: relatedLinks[i + 1] })
  }

  return links
}
