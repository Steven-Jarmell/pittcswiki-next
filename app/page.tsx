"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import CampusBackground from "@/images/pittcampus.jpg"
import Logo from "@/images/logo.svg"
import { RightArrowSvg } from "@/svgs/RightArrowSvg"
import LinkPanel from "@/components/LinkPanel/LinkPanel"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    checkDarkMode()

    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const lightGradient = `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.3) 78%, rgba(255,255,255,0.8) 90%, #fafbfc 100%), url('${CampusBackground.src}')`
  const darkGradient = `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.3) 78%, rgba(0,0,0,0.7) 90%, #0f0f0f 100%), url('${CampusBackground.src}')`

  return (
    <main>
      {/* Hero Section with Background Image and Gradient Fade */}
      <div
        className="hero-section relative overflow-hidden bg-[#fafbfc] dark:bg-[#0f0f0f]"
        style={{
          backgroundImage: isDark ? darkGradient : lightGradient,
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginTop: "-20px",
          paddingTop: "5rem",
          paddingBottom: "3rem",
          backgroundPosition: "center top",
          backgroundColor: isDark ? "#0f0f0f" : "#fafbfc",
        }}
      >
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center items-center">
            <div className="hidden md:block self-end h-64 bg-white dark:bg-[#2a2a2a] p-6 shadow-2xl dark:shadow-2xl w-1/2 border border-gray-200 dark:border-[#404040]">
              <h1 className="text-black dark:text-white font-bold">
                The Pitt CS Wiki
              </h1>
              <p className="text-gray-800 dark:text-[#cccccc]">
                A collection of course testimonials, guides, career prep
                resources, and much more!
              </p>
              <Link
                href="/guides/"
                className="btn inline-flex bg-pittgold items-center font-semibold py-2 px-2 border rounded"
              >
                Get Started {RightArrowSvg}
              </Link>
            </div>
            <div className="w-1/2">
              <Image
                src={Logo}
                className="ml-auto max-w-sm -mb-12 w-auto"
                alt="Pitt CS Wiki Logo"
              />
            </div>
          </div>
          <div className="md:hidden mt-12 text-center px-4">
            <h1 className="text-black dark:text-white font-bold">
              The Pitt CS Wiki
            </h1>
            <p className="text-gray-800 dark:text-[#cccccc]">
              A collection of course testimonials, guides, career prep
              resources, and much more!
            </p>
            <Link
              href="/guides/"
              className="btn inline-flex bg-pittgold items-center font-semibold py-2 px-2 border rounded"
            >
              Get Started {RightArrowSvg}
            </Link>
          </div>
        </div>
      </div>

      {/* LinkPanel Section */}
      <div className="w-full bg-[#fafbfc] dark:bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <LinkPanel />
        </div>
      </div>
    </main>
  )
}
