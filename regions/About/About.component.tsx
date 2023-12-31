import React from "react"

import { LightBulbIcon } from "@heroicons/react/24/solid"

import Container from "@/components/Container/Container.component"
import HeadingDivider from "@/components/HeadingDivider/HeadingDivider.component"
import Section from "@/components/Section/Section.component"

import styles from "./About.module.scss"

export default function About() {
  return (
    <Section
      dataPosition="about"
      sectionClassName={`pt-12 ${styles.wrapper}`}
    >
      <HeadingDivider
        dividerLineBg="secondary"
        icon={<LightBulbIcon />}
        title="About Myself"
      />
      <Container
        containerClassName={styles.containerWrapper}
      >
        <p>About</p>
      </Container>
    </Section>
  )
}
