"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import Link from "next/link"

export type LinkPanelItemType = {
  path: string
  icon: any
  iconAlt: string
  description: string
  title: string
}

const LinkPanelItem = ({
  path,
  icon,
  iconAlt,
  description,
  title,
}: LinkPanelItemType) => {
  const router = useRouter()

  return (
    <div
      className="link-panel-item p-4 pt-6 m-3 max-w-xs text-center text-sm flex-[1_1_30%] flex-col text-black hover:cursor-pointer hover:shadow-[0_0_35px_-2px_rgba(0,0,0,0.2)]"
      onClick={() => router.push(path)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          router.push(path)
        }
      }}
      role="button"
      tabIndex={0}
    >
      <Image
        className="w-16 mx-auto m-[0_auto] h-16 ease-in-out duration-300"
        alt={iconAlt}
        src={icon}
      />
      <h3 className="mb-1">{title}</h3>
      <p className="flex-[1_0_auto]">
        {description} <Link href={path}>Learn more.</Link>
      </p>
    </div>
  )
}

export default LinkPanelItem
