"use client"

import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import useTotalExperience from "@/hooks/useTotalExperience"

import { LightBulbIcon } from "@heroicons/react/24/solid"

import Badge from "@/components/App/Badge/Badge.component"
import Container from "@/components/App/Container/Container.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./About.module.scss"

export default function About() {
  const years = useTotalExperience()

  const animatedBadge = useRef(null)
  const animatedImage = useRef(null)
  const animatedWrapper = useRef(null)

  const isInViewBadge = useInView(
    animatedBadge, {
      once: true
    }
  )
  const isInViewImage = useInView(
    animatedImage, {
      once: true
    }
  )
  const isInViewWrapper = useInView(
    animatedWrapper, {
      once: true
    }
  )

  return (
    <AnimatePresence>
      <Section
        dataPosition="about"
        sectionClassName={`pt-12 ${styles.wrapper}`}
      >
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
            delay: 0.1,
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <HeadingDivider
            dividerLineBg="secondary"
            icon={<LightBulbIcon />}
            title="About Myself"
          />
          <Container
            containerClassName={styles.containerWrapper}
          >
            <motion.div
              animate={isInViewWrapper ? {
                opacity: 1,
                x: 0,
                y: 0
              } : {}}
              className={styles.left}
              initial={{
                x: -100,
                y: 100
              }}
              ref={animatedWrapper}
              transition={{
                delay: 0.2,
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              <p>People also know me as <span className={`font-bold ${styles.highlighted}`}>RONNY</span>.</p>
              <p><span className={`font-bold ${styles.highlighted}`}>labor omnia vincit</span> is latin phrase written which means <span>hardwork conquers all</span> which I truly believe and follow in every day to day activities.</p>
              <p>This has helped me build my repertoire and progress as <span className={`font-bold ${styles.highlighted}`}>Front End Web Developer</span>.</p>
              <p>By gaining <span className={`font-bold ${styles.highlighted}`}>over {years}+ years</span> commercial experience I have always shown to be a enthusiastic Developer with the eagerness to improve my current skillset, as well as going outside my comfort zone and finding creative solutions to any problems.</p>
            </motion.div>
            <div className={styles.right}>
              <motion.div
                animate={isInViewBadge ? {
                  opacity: 1
                } : {}}
                initial={{
                  opacity: 0
                }}
                ref={animatedBadge}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                <Badge />
              </motion.div>
              <motion.div
                animate={isInViewImage ? {
                  opacity: 1,
                  y: 0
                } : {}}
                initial={{
                  opacity: 0,
                  y: 50
                }}
                ref={animatedImage}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                <Image
                  alt="Rejaur Rahman"
                  height={458}
                  loading="lazy"
                  src="https://loremflickr.com/592/458"
                  width={592}
                />
              </motion.div>
            </div>
          </Container>
        </motion.div>
      </Section>
    </AnimatePresence>
  )
}
