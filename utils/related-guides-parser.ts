type RelatedLink = {
  link: string
  title: string
}

export const relatedGuidesParser = (relatedLinks: string[]) => {
  const links: RelatedLink[] = []

  if (!relatedLinks || !relatedLinks.length || relatedLinks.length % 2 !== 0) {
    return []
  }

  for (let i = 0; i < relatedLinks.length; i += 2) {
    links.push({ title: relatedLinks[i], link: relatedLinks[i + 1] } as RelatedLink)
  }

  return links
}
