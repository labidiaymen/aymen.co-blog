import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useTheme } from "@skagami/gatsby-plugin-dark-mode"

const getSystemTheme = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"

const TopMenu = () => {
  const [theme, setTheme] = useTheme()
  const [mode, setMode] = React.useState(() => {
    if (typeof window === "undefined") return "auto"
    return localStorage.getItem("themeMode") || "auto"
  })

  React.useEffect(() => {
    if (mode !== "auto") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = e => setTheme(e.matches ? "dark" : "light")
    setTheme(mq.matches ? "dark" : "light")
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [mode, setTheme])

  const cycleMode = () => {
    const next = mode === "light" ? "dark" : mode === "dark" ? "auto" : "light"
    localStorage.setItem("themeMode", next)
    setMode(next)
    if (next === "light" || next === "dark") {
      setTheme(next)
    } else {
      setTheme(getSystemTheme())
    }
  }

  const icons = {
    light: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
    dark: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
    auto: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor"/></svg>,
  }
  const title = mode === "dark" ? "Dark mode (click for auto)" : mode === "light" ? "Light mode (click for dark)" : "Auto mode (click for light)"

  return (
    <>
      <div className="flex flex-row menu-header menu-bloc">
        <div className="basis-1/4 self-center">
          <Link to="/">
            <StaticImage
            className="hidden md:block"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/profile-pic.png"
              height={33}
              quality={95}
              alt="Profile picture"
            />
            <StaticImage
            className="md:hidden "
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/logo-aymen-labidi-smile.png"
              height={53}
              quality={95}
              alt="Profile picture"
            />
          </Link>
        </div>
        <div>
          <ul className="flex flex-wrap mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium menu-list">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/javascript"
                className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              >
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              >
                <span>Projects</span>
              </Link>
              <a className="block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"></a>
            </li>
            <li>
              <Link
                to="/events"
                className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              >
                <span>Events</span>
              </Link>
              <a className="block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"></a>
            </li>
            <li>
              <Link
                to="/thoughts"
                className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              >
                <span>Thoughts</span>
              </Link>
              <a className="block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"></a>
            </li>
            <li>
              <Link
                to="/pages/about/"
                className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              >
                <span>About</span>
              </Link>
              <a className="block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"></a>
            </li>
          </ul>
        </div>
        <div className="ml-auto self-center">
          <button
            className="theme-toggle"
            onClick={cycleMode}
            aria-label="Toggle theme"
            title={title}
          >
            {icons[mode]}
          </button>
        </div>
      </div>
    </>
  )
}

export default TopMenu
