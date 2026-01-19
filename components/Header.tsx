"use client"

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
import ThemeToggle from "./ThemeToggle"

const Header = (): JSX.Element => {
  return (
    <header
      className="header flex flex-none mb-4 bg-pittblue pwiki-header items-center justify-between sticky top-0 z-50"
      role="banner"
    >
      <div className="flex items-center">
        <Link
          className="header-logo flex font-semibold text-white items-center"
          href="/"
          aria-label="Pitt CS Wiki Home"
        >
          <Image
            src={logo}
            alt="Pitt CS Wiki Logo"
            className="pitt-logo md:mr-0 mr-4"
          />
        </Link>
      </div>
      <div className="header-right flex items-center">
        <Search />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
