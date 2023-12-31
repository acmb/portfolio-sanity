import React from "react"

import { BuildingOffice2Icon } from "@heroicons/react/24/solid"

import Container from "@/components/Container/Container.component"
import HeadingDivider from "@/components/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/InnerSection/InnerSection.component"
import Section from "@/components/Section/Section.component"

import styles from "./Experience.module.scss"

export default function Experience() {
  return (
    <Section>
      <HeadingDivider
        background
        dividerLineBg="primary"
        icon={<BuildingOffice2Icon />}
        title="Experience History"
      />
      <InnerSection
        innerContentClass={styles.wrapper}
      >
        <Container>
          <p>Experience</p>
        </Container>
      </InnerSection>
    </Section>
  )
}
