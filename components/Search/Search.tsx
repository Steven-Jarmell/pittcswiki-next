import Image from "next/image"

import searchIcon from "@/images/search-icon.svg"

const Search = () => {
  return (
    <div className="flex gap-2 bg-white border rounded items-center">
      <label htmlFor="search-bar" className="h-8 flex items-center ml-2">
        <Image src={searchIcon} alt="Search Icon" className="max-h-4 w-auto" />
      </label>
      <input id="search-bar" type="text" placeholder="Search" />
    </div>
  )
}

export default Search
