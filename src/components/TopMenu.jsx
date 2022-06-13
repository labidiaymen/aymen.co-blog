import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const TopMenu = () => {
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
      </div>
    </>
  )
}

export default TopMenu
