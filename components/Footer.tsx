/**
 * Footer Component
 *
 * @author varughese
 * @author Steven-Jarmell
 */

import Link from "next/link"

const Footer = (): JSX.Element => {
  return (
    <footer className="md:flex mt-auto text-center p-8 bg-gray-100">
      <div className="m-auto text-gray-600">
        © {new Date().getFullYear()}, Built with ❤️ by{" "}
        <Link
          className="text-gray-800 font-bold"
          href="https://pittcsc.org"
          target="_blank"
        >
          PittCSC
        </Link>
        .{` `}
        <p className="mb-0 text-sm">
          <Link href="/about/" className="mr-2">
            About
          </Link>
          <Link href="mailto:pittcsc+wiki@gmail.com" className="mr-2">
            Contact
          </Link>
          <Link href="/sitemap/" className="mr-2">
            Sitemap
          </Link>
          <Link href="/feedback/" className="mr-2">
            Feedback
          </Link>
          <Link href="https://github.com/PittCSWiki/pittcswiki" target="_blank">
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
