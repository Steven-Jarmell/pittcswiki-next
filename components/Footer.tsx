/**
 * Footer Component
 *
 * @author varughese
 * @author Steven-Jarmell
 * @author codingshreyash
 */

import Link from "next/link"

const Footer = (): JSX.Element => {
  return (
    <footer className="md:flex mt-auto text-center p-8 bg-gray-100 dark:bg-[#1a1a1a] border-t border-gray-200 dark:border-[#333333]">
      <div className="m-auto text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()}, Built with ❤️ by{" "}
        <Link
          className="text-gray-800 dark:text-[#fbbf24] font-bold hover:text-[#FFB81C] transition-colors duration-200"
          href="https://pittcsc.org"
          target="_blank"
        >
          PittCSC
        </Link>
        .{` `}
        <p className="mb-0 text-sm">
          <Link
            href="/about/"
            className="mr-2 text-gray-600 dark:text-gray-300 hover:text-[#FFB81C] transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="mailto:pittcsc+wiki@gmail.com"
            className="mr-2 text-gray-600 dark:text-gray-300 hover:text-[#FFB81C] transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="/sitemap/"
            className="mr-2 text-gray-600 dark:text-gray-300 hover:text-[#FFB81C] transition-colors duration-200"
          >
            Sitemap
          </Link>
          <Link
            href="/feedback/"
            className="mr-2 text-gray-600 dark:text-gray-300 hover:text-[#FFB81C] transition-colors duration-200"
          >
            Feedback
          </Link>
          <Link
            href="https://github.com/pittcsc/pittcswiki-next"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-[#FFB81C] transition-colors duration-200"
          >
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
