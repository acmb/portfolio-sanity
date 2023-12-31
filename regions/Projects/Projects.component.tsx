import React from "react"

import { HashtagIcon } from "@heroicons/react/24/solid"

import Container from "@/components/Container/Container.component"
import HeadingDivider from "@/components/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/InnerSection/InnerSection.component"
import Section from "@/components/Section/Section.component"

import styles from "./Projects.module.scss"

export default function Projects() {
  return (
    <Section
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
          <p>Projects</p>
        </Container>
      </InnerSection>
    </Section>
  )
}