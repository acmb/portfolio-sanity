import React from "react"

import { HashtagIcon } from "@heroicons/react/24/solid"

import Container from "@/components/Container/Container.component"
import HeadingDivider from "@/components/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/InnerSection/InnerSection.component"
import ProjectCard from "@/components/Card/ProjectCard/ProjectCard.component"
import Section from "@/components/Section/Section.component"

import styles from "./Projects.module.scss"

export default function Projects() {
  return (
    <Section
      dataPosition="projects"
      sectionClassName={styles.wrapper}
    >
      <HeadingDivider
        background
        dividerLineBg="primary"
        icon={<HashtagIcon />}
        title="Projects Showcase"
      />
      <InnerSection>
        <Container>
          <p
            className={`text-center ${styles.subheading}`}
          >
            All projects have been created by myself for educational purposes.
          </p>
          <div
            className="flex justify-center items-start flex-wrap"
          >
            <ProjectCard
              brandColor="#ca9300"
              coverImage="https://loremflickr.com/767/500"
              github={{
                display: true,
                url: "https://github.com/RejaurRahman/blog-camp"
              }}
              text="Next.js + Sanity.io Blog"
              title="Blog Camp"
              website={{
                display: true,
                url: "https://blog-camp.netlify.app/"
              }}
            />
            <ProjectCard
              brandColor="#ca9300"
              coverImage="https://loremflickr.com/767/500"
              github={{
                display: true,
                url: "https://github.com/RejaurRahman/blog-camp"
              }}
              text="Next.js + Sanity.io Blog"
              title="Blog Camp"
              website={{
                display: true,
                url: "https://blog-camp.netlify.app/"
              }}
            />
            <ProjectCard
              brandColor="#ca9300"
              coverImage="https://loremflickr.com/767/500"
              github={{
                display: true,
                url: "https://github.com/RejaurRahman/blog-camp"
              }}
              text="Next.js + Sanity.io Blog"
              title="Blog Camp"
              website={{
                display: true,
                url: "https://blog-camp.netlify.app/"
              }}
            />
            <ProjectCard
              brandColor="#ca9300"
              coverImage="https://loremflickr.com/767/500"
              github={{
                display: true,
                url: "https://github.com/RejaurRahman/blog-camp"
              }}
              text="Next.js + Sanity.io Blog"
              title="Blog Camp"
              website={{
                display: true,
                url: "https://blog-camp.netlify.app/"
              }}
            />
            <ProjectCard
              brandColor="#ca9300"
              coverImage="https://loremflickr.com/767/500"
              github={{
                display: true,
                url: "https://github.com/RejaurRahman/blog-camp"
              }}
              text="Next.js + Sanity.io Blog"
              title="Blog Camp"
              website={{
                display: true,
                url: "https://blog-camp.netlify.app/"
              }}
            />
          </div>
        </Container>
      </InnerSection>
    </Section>
  )
}
