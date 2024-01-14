"use client"

import Link from "next/link"
import React, {
  useEffect,
  useState
} from "react"

import { Sitewide } from "@/typings"

import modalStyles from "@/components/App/Layout/HeaderModal/HeaderModal.module.scss"
import styles from "./HeaderMenu.module.scss"

interface Props {
  setOpen?: (open: boolean) => void
  sitewide: Sitewide
}

export default function HeaderMenu({
  setOpen,
  sitewide
} : Props) {
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
      const navbarHeight = window.innerWidth > 1025 ? 90 : 54

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
        {
          sitewide?.menu?.map((item) => (
            <li
              className={styles.listItem}
              key={item._key}
            >
            <Link
              aria-label={`View ${item.menuName} section of page`}
              className={`flex capitalize box-content ${styles.link} ${activeSection === item.slug ? styles.linkActive : ""}`.trim()}
              href={`#${item.slug}`}
              onClick={scrollToSection(`${item.slug}`)}
            >
              {item.menuName}
            </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
