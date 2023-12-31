import React from "react"

import { BookOpenIcon } from "@heroicons/react/24/solid"

import Container from "@/components/Container/Container.component"
import HeadingDivider from "@/components/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/InnerSection/InnerSection.component"
import Section from "@/components/Section/Section.component"

import styles from "./Education.module.scss"

export default function Education() {
  return (
    <Section
      dataPosition="education"
    >
      <HeadingDivider
        background
        dividerLineBg="primary"
        icon={<BookOpenIcon />}
        title="Education Timeline"
      />
      <InnerSection
        innerContentClass={styles.wrapper}
      >
        <Container>
          <p>Education</p>
        </Container>
      </InnerSection>
    </Section>
  )
}
