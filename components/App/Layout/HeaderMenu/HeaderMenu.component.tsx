"use client"

import Link from "next/link"
import React, {
  useEffect,
  useState
} from "react"

import modalStyles from "@/components/App/Layout/HeaderModal/HeaderModal.module.scss"
import styles from "./HeaderMenu.module.scss"

interface Props {
  setOpen?: (open: boolean) => void
}

export default function HeaderMenu({ setOpen } : Props) {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (section: string) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault()

    setActiveSection(section)

    if (setOpen) {
      setOpen(false)
    }

    const targetSection = document.querySelector(`[data-position="${section}"]`) as HTMLElement | null

    if (targetSection) {
      const navbarHeight = window.innerWidth > 1025 ? 75 : 54

      const positionToScroll = targetSection.offsetTop - navbarHeight

      window.scrollTo({
        top: positionToScroll,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "skillset",
        "projects",
        "testimonials",
        "contact"
      ]

      const currentSection = sections.find(section => {
        const element = document.querySelector(`[data-position="${section}"]`)

        if (element) {
          const rect = element.getBoundingClientRect()

          return rect.top >= 0 && rect.top <= window.innerHeight / 2
        }

        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${modalStyles.navbar}`}>
      <ul className={`flex ${styles.list}`}>
        <li className={styles.listItem}>
          <Link
            aria-label="View home section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "home" ? styles.linkActive : ""}`.trim()}
            href="#home"
            onClick={scrollToSection("home")}
          >
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            aria-label="View about section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "about" ? styles.linkActive : ""}`.trim()}
            href="#about"
            onClick={scrollToSection("about")}
          >
            About
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            aria-label="View education section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "education" ? styles.linkActive : ""}`.trim()}
            href="#education"
            onClick={scrollToSection("education")}
          >
            Education
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            aria-label="View experience section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "experience" ? styles.linkActive : ""}`.trim()}
            href="#experience"
            onClick={scrollToSection("experience")}
          >
            Experience
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            aria-label="View skillset section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "skillset" ? styles.linkActive : ""}`.trim()}
            href="#skillset"
            onClick={scrollToSection("skillset")}
          >
            Skillset
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            aria-label="View projects section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "projects" ? styles.linkActive : ""}`.trim()}
            href="#projects"
            onClick={scrollToSection("projects")}
          >
            Projects
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            aria-label="View testimonials section of page"
            className={`flex capitalize box-content ${styles.link} ${activeSection === "testimonials" ? styles.linkActive : ""}`.trim()}
            href="#testimonials"
            onClick={scrollToSection("testimonials")}
          >
            Testimonials
          </Link>
        </li>
        <li className={styles.listItem}>
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
