type FreshnessDisclaimerType = {
  lastUpdated: string
}

const FreshnessDisclaimer = ({ lastUpdated }: FreshnessDisclaimerType) => {
  // How old do we consider something to display a banner? In  second
  const FRESHNESS_THRESHOLD_IN_DAYS = 1000
  const diff =
    (new Date().getTime() - new Date(lastUpdated).getTime()) /
    (1000 * 60 * 60 * 24)
  if (isNaN(diff) || diff < FRESHNESS_THRESHOLD_IN_DAYS) return null

  return (
    <p className="bg-orange-200 text-orange-800 p-4">
      Head{"'"}s up, this has not been updated in a while!
    </p>
  )
}

export default FreshnessDisclaimer
