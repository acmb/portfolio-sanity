import Link from "next/link"
import React from "react"

import styles from "./HeaderMenu.module.scss"

export default function HeaderMenu() {
  const scrollToSection = (section: string) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault()

    const targetSection = document.querySelector(`[data-position="${section}"]`) as HTMLElement | null

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav className={styles.navbar}>
      <ul className="flex">
        <li>
          <Link
            aria-label="View home section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="#home"
            onClick={scrollToSection("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            aria-label="View about section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="#about"
            onClick={scrollToSection("about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            aria-label="View education section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="#education"
            onClick={scrollToSection("education")}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            aria-label="View experience section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="#experience"
            onClick={scrollToSection("experience")}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            aria-label="View skillset section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="#skillset"
            onClick={scrollToSection("skillset")}
          >
            Skillset
          </Link>
        </li>
        <li>
          <Link
            aria-label="View projects section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="#projects"
            onClick={scrollToSection("projects")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            aria-label="View testimonials section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="#testimonials"
            onClick={scrollToSection("testimonials")}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            aria-label="View contact section of page"
            className={`flex capitalize box-content ${styles.link}`}
            href="#contact"
            onClick={scrollToSection("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
