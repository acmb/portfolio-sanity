import Image from "next/image"
import React from "react"

import { PaintBrushIcon } from "@heroicons/react/24/solid"

import Container from "@/components/Container/Container.component"
import HeadingDivider from "@/components/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/InnerSection/InnerSection.component"
import Language from "@/components/Language/Language.component"
import Section from "@/components/Section/Section.component"

import styles from "./Skillset.module.scss"

export default function Skillset() {
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
          alt="Code viewed on Editor"
          className={`absolute top-0 left-0 w-full h-full ${styles.background}`}
          height={1080}
          loading="lazy"
          src="https://loremflickr.com/1920/1080"
          width={1920}
        />
        <Container
          containerClassName="flex items-start flex-wrap justify-center"
        >
          <Language
            brandColor="#075b8a"
            icon="https://loremflickr.com/100/100"
            title="AJAX"
          />
          <Language
            brandColor="#7952b3"
            icon="https://loremflickr.com/100/100"
            title="Bootstrap"
          />
          <Language
            brandColor="#00947e"
            icon="https://loremflickr.com/100/100"
            title="Bulma"
          />
          <Language
            brandColor="#2965f1"
            icon="https://loremflickr.com/100/100"
            title="CSS3"
          />
          <Language
            brandColor="#002d64"
            icon="https://loremflickr.com/100/100"
            title="Docker"
          />
          <Language
            brandColor="#074e68"
            icon="https://loremflickr.com/100/100"
            title="Foundation"
          />
          <Language
            brandColor="#11081f"
            icon="https://loremflickr.com/100/100"
            title="Gatsby.JS"
          />
          <Language
            brandColor="#202020"
            icon="https://loremflickr.com/100/100"
            title="GraphQL"
          />
          <Language
            brandColor="#e48632"
            icon="https://loremflickr.com/100/100"
            title="Grunt.JS"
          />
          <Language
            brandColor="#9a2829"
            icon="https://loremflickr.com/100/100"
            title="Gulp.JS"
          />
          <Language
            brandColor="#ef652a"
            icon="https://loremflickr.com/100/100"
            title="HTML5"
          />
          <Language
            brandColor="#dab92d"
            icon="https://loremflickr.com/100/100"
            title="JavaScript"
          />
          <Language
            brandColor="#0769ad"
            icon="https://loremflickr.com/100/100"
            title="jQuery"
          />
          <Language
            brandColor="#00c1d0"
            icon="https://loremflickr.com/100/100"
            title="Kubernetes"
          />
          <Language
            brandColor="#a8b9c0"
            icon="https://loremflickr.com/100/100"
            title="Next.JS"
          />
          <Language
            brandColor="#282c34"
            icon="https://loremflickr.com/100/100"
            title="React.JS"
          />
          <Language
            brandColor="#63c2ba"
            icon="https://loremflickr.com/100/100"
            title="Responsive Web Design"
          />
          <Language
            brandColor="#c03226"
            icon="https://loremflickr.com/100/100"
            title="Sanity.io"
          />
          <Language
            brandColor="#bf4080"
            icon="https://loremflickr.com/100/100"
            title="SASS"
          />
          <Language
            brandColor="#db7533"
            icon="https://loremflickr.com/100/100"
            title="SQL"
          />
          <Language
            brandColor="#271fe0"
            icon="https://loremflickr.com/100/100"
            title="Strapi.io"
          />
          <Language
            brandColor="#94dae2"
            icon="https://loremflickr.com/100/100"
            title="Tailwind CSS"
          />
          <Language
            brandColor="#3178c6"
            icon="https://loremflickr.com/100/100"
            title="TypeScript"
          />
          <Language
            brandColor="#1762a5"
            icon="https://loremflickr.com/100/100"
            title="Webpack"
          />
          <Language
            brandColor="#0073aa"
            icon="https://loremflickr.com/100/100"
            title="WordPress"
          />
        </Container>
      </InnerSection>
    </Section>
  )
}
