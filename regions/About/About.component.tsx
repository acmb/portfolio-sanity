"use client"

import Image from "next/image"
import React from "react"

import useTotalExperience from "@/hooks/useTotalExperience"

import { LightBulbIcon } from "@heroicons/react/24/solid"

import Badge from "@/components/App/Badge/Badge.component"
import Container from "@/components/App/Container/Container.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./About.module.scss"

export default function About() {
  const years = useTotalExperience()

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
        <div className={styles.left}>
          <p>People also know me as <span className={`font-bold ${styles.highlighted}`}>RONNY</span>.</p>
          <p><span className={`font-bold ${styles.highlighted}`}>labor omnia vincit</span> is latin phrase written which means <span>hardwork conquers all</span> which I truly believe and follow in every day to day activities.</p>
          <p>This has helped me build my repertoire and progress as <span className={`font-bold ${styles.highlighted}`}>Front End Web Developer</span>.</p>
          <p>By gaining <span className={`font-bold ${styles.highlighted}`}>over {years}+ years</span> commercial experience I have always shown to be a enthusiastic Developer with the eagerness to improve my current skillset, as well as going outside my comfort zone and finding creative solutions to any problems.</p>
        </div>
        <div className={styles.right}>
          <Badge />
          <Image
            alt="Rejaur Rahman"
            height={458}
            loading="lazy"
            src="https://loremflickr.com/592/458"
            width={592}
          />
        </div>
      </Container>
    </Section>
  )
}
