"use client"

import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import {
  BaseImage,
  Color,
  Experience
} from "@/typings"
import { urlFor } from "@/sanity"

import { BuildingOffice2Icon } from "@heroicons/react/24/solid"

import Container from "@/components/App/Container/Container.component"
import ExperienceCard from "@/components/App/Card/ExperienceCard/ExperienceCard.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/App/InnerSection/InnerSection.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./WorkExperience.module.scss"

type Props = {
  addSectionColor: boolean
  displayInNav: boolean
  experiences: Experience[]
  heading: string
  menuUrl: string
  sectionBackground: BaseImage
  sectionColor?: Color
  title: string
}

export default function WorkExperience({
  addSectionColor,
  displayInNav,
  experiences,
  heading,
  menuUrl,
  sectionBackground,
  sectionColor,
  title
}: Props) {
  const dataPosition = displayInNav && menuUrl.length > 0 ? menuUrl : null

  const animatedWrapper = useRef(null)
  const isInViewWrapper = useInView(
    animatedWrapper, {
      once: true
    }
  )

  return (
    <AnimatePresence>
      <Section
        dataPosition={dataPosition}
      >
        <HeadingDivider
          background
          dividerLineBg="primary"
          icon={<BuildingOffice2Icon />}
          title={heading}
        />
        <InnerSection
          innerContentClass="relative overflow-hidden"
          sectionColor={addSectionColor ? sectionColor?.hex : undefined}
        >
          {!addSectionColor && sectionBackground && (
            <Image
              alt={`${title} region background image`}
              className={`absolute top-0 left-0 w-full h-full ${styles.background}`}
              height={1080}
              loading="lazy"
              src={urlFor(sectionBackground.asset).url()}
              width={1920}
            />
          )}
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
              containerClassName={`relative overflow-hidden pt-5 ${styles.container}`}
            >
              {experiences.map((experience: Experience) => (
                <ExperienceCard
                  companyIcon={urlFor(experience?.companyIcon).url()}
                  companyLogo={urlFor(experience?.companyLogo).url()}
                  companyName={experience?.company}
                  contractType={experience?.contractRole}
                  date={{
                    current: experience?.currentlyWorkplace,
                    endDate: !experience?.currentlyWorkplace && experience.dateEnded,
                    startDate: experience?.dateStarted
                  }}
                  description={experience?.description}
                  key={experience._id}
                  role={experience?.role}
                  skills={experience?.technologies.map(skill => skill.title) || []}
                />
              ))}
            </Container>
          </motion.div>
        </InnerSection>
      </Section>
    </AnimatePresence>
  )
}
