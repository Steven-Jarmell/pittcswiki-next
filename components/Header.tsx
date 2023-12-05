/**
 * Header Component
 *
 * @author varughese
 * @author Steven-Jarmell
 */

import Link from "next/link"
import Image from "next/image"

import logo from "@/images/pantherhandbook-mini.svg"
import Search from "./Search/Search"

const Header = (): JSX.Element => {
  return (
    <header className="flex flex-none h-16 px-8 mb-4 bg-pittblue pwiki-header">
      <div className="flex items-center flex-1 justify-between">
        <div className="flex items-center">
          <Link
            className="header-logo flex font-semibold text-white items-center"
            href="/"
          >
            <Image
              src={logo}
              alt=""
              className="w-10 md:mr-0 mr-4 max-w-[50px]"
            />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex items-center">
        <div className="relative w-full">
          <Search />
        </div>
      </div>
    </header>
  )
}

export default Header
