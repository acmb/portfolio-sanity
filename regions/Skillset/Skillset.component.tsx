"use client"

import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, {
  useRef,
  useState
} from "react"

import {
  Skill,
  SkillCategory
} from "@/typings"
import { urlFor } from "@/sanity"

import { PaintBrushIcon } from "@heroicons/react/24/solid"

import Container from "@/components/App/Container/Container.component"
import FilterButton from "@/components/App/Language/FilterButton/FilterButton.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/App/InnerSection/InnerSection.component"
import Language from "@/components/App/Language/Language.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./Skillset.module.scss"

type Props = {
  displayInNav: boolean
  heading: string
  menuUrl: string
  skills: Skill[]
  skillCategories: SkillCategory[]
}

export default function Skillset({
  displayInNav,
  heading,
  menuUrl,
  skills,
  skillCategories
}: Props) {
  const dataPosition = displayInNav && menuUrl.length > 0 ? menuUrl : ""

  const [activeCategory, setActiveCategory] = useState("all")

  const animatedWrapper = useRef(null)
  const isInViewWrapper = useInView(
    animatedWrapper, {
      once: true
    }
  )

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)

    const languageElements = document.querySelectorAll("[data-category]")

    languageElements.forEach((element) => {
      const htmlElement = element as HTMLElement

      if (htmlElement.getAttribute("data-category") === category || category === "all") {
        htmlElement.style.display = ""
      } else {
        htmlElement.style.display = "none"
      }
    })
  }

  return (
    <AnimatePresence>
      <Section
        dataPosition={dataPosition}
      >
        <HeadingDivider
          background
          dividerLineBg="primary"
          icon={<PaintBrushIcon />}
          title={heading}
        />
        <InnerSection
          innerContentClass="relative overflow-hidden"
        >
          <Image
            alt="Skillset region background image"
            className={`absolute top-0 left-0 w-full h-full ${styles.background}`}
            height={1080}
            loading="lazy"
            src="https://loremflickr.com/1920/1080"
            width={1920}
          />
          <motion.div
            animate={isInViewWrapper ? {
              opacity: 1,
              y: 0
            } : {}}
            initial={{
              opacity: 0,
              y: 100
            }}
            ref={animatedWrapper}
            transition={{
              delay: 0.2,
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <Container
              containerClassName="flex items-start flex-wrap justify-center"
            >
              <div
                className={`flex relative justify-center w-full mb-4 ${styles.filter}`}
              >
                <FilterButton
                  category="all"
                  isActive={activeCategory === "all"}
                  label="All"
                  setActiveFilter={handleCategoryChange}
                />
                {skillCategories.map((category: SkillCategory) => (
                  <FilterButton
                    category={category?.slug}
                    isActive={activeCategory === category?.slug}
                    key={category._id}
                    label={category?.title}
                    setActiveFilter={handleCategoryChange}
                  />
                ))}
              </div>
              {skills.map((skill: Skill) => (
                <Language
                  activeSkill={skill?.activeSkill}
                  brandColor={skill?.brandColor.hex}
                  category={skill?.category?.slug}
                  key={skill._id}
                  icon={urlFor(skill?.logo).url()}
                  title={skill?.title}
                />
              ))}
            </Container>
          </motion.div>
        </InnerSection>
      </Section>
    </AnimatePresence>
  )
}
