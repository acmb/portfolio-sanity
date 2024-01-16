"use client"

import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import { Project } from "@/typings"
import { urlFor } from "@/sanity"

import { HashtagIcon } from "@heroicons/react/24/solid"

import Container from "@/components/App/Container/Container.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/App/InnerSection/InnerSection.component"
import ProjectCard from "@/components/App/Card/ProjectCard/ProjectCard.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./Projects.module.scss"

type Props = {
  projects: Project[]
}

export default function Projects({
  projects
}: Props) {
  const animatedWrapper = useRef(null)
  const isInViewWrapper = useInView(
    animatedWrapper, {
      once: true
    }
  )

  return (
    <AnimatePresence>
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
                {projects.map((project: Project) => (
                  <ProjectCard
                    backgroundText={project?.projectBackground}
                    brandColor={project?.brandColor.hex}
                    coverImage={urlFor(project?.coverImage).url()}
                    futureUseText={project?.futureUse || undefined}
                    github={{
                      url: project?.codeURL
                    }}
                    key={project._id}
                    skills={[
                      "React",
                      "Stripe",
                      "Firebase",
                      "Test 1"
                    ]}
                    text={project?.summary}
                    title={project?.title}
                    website={{
                      url: project?.previewURL
                    }}
                  />
                ))}
              </div>
            </Container>
          </InnerSection>
        </motion.div>
      </Section>
    </AnimatePresence>
  )
}
