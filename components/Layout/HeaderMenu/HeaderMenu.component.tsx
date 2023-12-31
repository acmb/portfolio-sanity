"use client"

import Link from "next/link"
import React, { useState } from "react"

import styles from "./HeaderMenu.module.scss"

export default function HeaderMenu() {
  const [activeSection, setActiveSection] = useState("")

  const scrollToSection = (section: string) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault()

    setActiveSection(section)

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
            className={`flex capitalize box-content ${styles.link} ${activeSection === "home" ? styles.linkActive : ""}`.trim()}
            href="#home"
            onClick={scrollToSection("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            aria-label="View about section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "about" ? styles.linkActive : ""}`.trim()}
            href="#about"
            onClick={scrollToSection("about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            aria-label="View education section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "education" ? styles.linkActive : ""}`.trim()}
            href="#education"
            onClick={scrollToSection("education")}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            aria-label="View experience section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "experience" ? styles.linkActive : ""}`.trim()}
            href="#experience"
            onClick={scrollToSection("experience")}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            aria-label="View skillset section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "skillset" ? styles.linkActive : ""}`.trim()}
            href="#skillset"
            onClick={scrollToSection("skillset")}
          >
            Skillset
          </Link>
        </li>
        <li>
          <Link
            aria-label="View projects section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "projects" ? styles.linkActive : ""}`.trim()}
            href="#projects"
            onClick={scrollToSection("projects")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            aria-label="View testimonials section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "testimonials" ? styles.linkActive : ""}`.trim()}
            href="#testimonials"
            onClick={scrollToSection("testimonials")}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            aria-label="View contact section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "contact" ? styles.linkActive : ""}`.trim()}
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
