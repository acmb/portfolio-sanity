"use client"

import Image from "next/image"
import React, { useState } from "react"

import { PaintBrushIcon } from "@heroicons/react/24/solid"

import Container from "@/components/App/Container/Container.component"
import FilterButton from "@/components/App/Language/FilterButton/FilterButton.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/App/InnerSection/InnerSection.component"
import Language from "@/components/App/Language/Language.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./Skillset.module.scss"

export default function Skillset() {
  const [activeCategory, setActiveCategory] = useState("all")

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
    <Section
      dataPosition="skillset"
    >
      <HeadingDivider
        background
        dividerLineBg="primary"
        icon={<PaintBrushIcon />}
        title="Technical Palette"
      />
      <InnerSection
        innerContentClass="relative overflow-hidden"
      >
        <Image
          alt=""
          className={`absolute top-0 left-0 w-full h-full ${styles.background}`}
          height={1080}
          loading="lazy"
          src="https://loremflickr.com/1920/1080"
          width={1920}
        />
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
            <FilterButton
              category="html-css"
              isActive={activeCategory === "html-css"}
              label="Html/Css"
              setActiveFilter={handleCategoryChange}
            />
            <FilterButton
              category="js"
              isActive={activeCategory === "js"}
              label="JS"
              setActiveFilter={handleCategoryChange}
            />
            <FilterButton
              category="cms"
              isActive={activeCategory === "cms"}
              label="CMS"
              setActiveFilter={handleCategoryChange}
            />
            <FilterButton
              category="other"
              isActive={activeCategory === "other"}
              label="Other"
              setActiveFilter={handleCategoryChange}
            />
          </div>
          <Language
            brandColor="#075b8a"
            category="js"
            icon="https://loremflickr.com/100/100"
            title="AJAX"
          />
          <Language
            brandColor="#7952b3"
            category="html-css"
            icon="https://loremflickr.com/100/100"
            title="Bootstrap"
          />
          <Language
            brandColor="#00947e"
            category="html-css"
            icon="https://loremflickr.com/100/100"
            title="Bulma"
          />
          <Language
            brandColor="#2965f1"
            category="html-css"
            icon="https://loremflickr.com/100/100"
            title="CSS3"
          />
          <Language
            brandColor="#002d64"
            category="other"
            icon="https://loremflickr.com/100/100"
            title="Docker"
          />
          <Language
            brandColor="#074e68"
            category="html-css"
            icon="https://loremflickr.com/100/100"
            title="Foundation"
          />
          <Language
            brandColor="#11081f"
            category="js"
            icon="https://loremflickr.com/100/100"
            title="Gatsby.JS"
          />
          <Language
            brandColor="#202020"
            category="other"
            icon="https://loremflickr.com/100/100"
            title="GraphQL"
          />
          <Language
            brandColor="#e48632"
            category="js"
            icon="https://loremflickr.com/100/100"
            title="Grunt.JS"
          />
          <Language
            brandColor="#9a2829"
            category="js"
            icon="https://loremflickr.com/100/100"
            title="Gulp.JS"
          />
          <Language
            brandColor="#ef652a"
            category="html-css"
            icon="https://loremflickr.com/100/100"
            title="HTML5"
          />
          <Language
            brandColor="#dab92d"
            category="js"
            icon="https://loremflickr.com/100/100"
            title="JavaScript"
          />
          <Language
            brandColor="#0769ad"
            category="js"
            icon="https://loremflickr.com/100/100"
            title="jQuery"
          />
          <Language
            brandColor="#00c1d0"
            category="other"
            icon="https://loremflickr.com/100/100"
            title="Kubernetes"
          />
          <Language
            brandColor="#a8b9c0"
            category="js"
            icon="https://loremflickr.com/100/100"
            title="Next.JS"
          />
          <Language
            brandColor="#282c34"
            category="js"
            icon="https://loremflickr.com/100/100"
            title="React.JS"
          />
          <Language
            brandColor="#63c2ba"
            category="html-css"
            icon="https://loremflickr.com/100/100"
            title="Responsive Web Design"
          />
          <Language
            brandColor="#c03226"
            category="cms"
            icon="https://loremflickr.com/100/100"
            title="Sanity.io"
          />
          <Language
            brandColor="#bf4080"
            category="html-css"
            icon="https://loremflickr.com/100/100"
            title="SASS"
          />
          <Language
            brandColor="#db7533"
            category="other"
            icon="https://loremflickr.com/100/100"
            title="SQL"
          />
          <Language
            brandColor="#271fe0"
            category="cms"
            icon="https://loremflickr.com/100/100"
            title="Strapi.io"
          />
          <Language
            brandColor="#94dae2"
            category="html-css"
            icon="https://loremflickr.com/100/100"
            title="Tailwind CSS"
          />
          <Language
            brandColor="#3178c6"
            category="js"
            icon="https://loremflickr.com/100/100"
            title="TypeScript"
          />
          <Language
            brandColor="#1762a5"
            category="other"
            icon="https://loremflickr.com/100/100"
            title="Webpack"
          />
          <Language
            brandColor="#0073aa"
            category="cms"
            icon="https://loremflickr.com/100/100"
            title="WordPress"
          />
        </Container>
      </InnerSection>
    </Section>
  )
}
