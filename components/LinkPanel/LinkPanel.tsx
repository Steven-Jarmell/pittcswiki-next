/**
 * Link Panel Component
 *
 * @author agrattan
 * @author Steven-Jarmell
 */

import LinkPanelItem from "./LinkPanelItem"
import { LinkPanelItemList } from "./LinkPanelItemList"

const LinkPanel = () => {
  return (
    <div className="my-12 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
      {LinkPanelItemList.map((item) => (
        <LinkPanelItem
          key={item.path}
          path={item.path}
          icon={item.icon}
          iconAlt={item.iconAlt}
          description={item.description}
          title={item.title}
        />
      ))}
    </div>
  )
}

export default LinkPanel
