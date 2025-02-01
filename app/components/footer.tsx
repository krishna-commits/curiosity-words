import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full pt-7 mt-[3rem]">
      <div className="container flex items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
        <span className="mx-1.5">•</span>
          <span>Krishna Neupane from 1995</span>
          <span className="mx-1.5">•</span>
          <Link className="underline hover:text-gray-900 dark:hover:text-gray-50" href="https://krishnaneupane.com/#contact">
            Contact Me
          </Link>
        </div>
      </div>
    </footer>
  )
}
