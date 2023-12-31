import Link from "next/link"
import React from "react"

import styles from "./HeaderMenu.module.scss"

export default function HeaderMenu() {
  return (
    <nav className={styles.navbar}>
      <ul className="flex">
        <li>
          <Link
            aria-label="View home section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            aria-label="View about section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="/"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            aria-label="View education section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="/"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            aria-label="View experience section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="/"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            aria-label="View skillset section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="/"
          >
            Skillset
          </Link>
        </li>
        <li>
          <Link
            aria-label="View testimonials section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="/"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            aria-label="View contact section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="/"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
