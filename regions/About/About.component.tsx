"use client"

import Image from "next/image"
import { PortableText } from "@portabletext/react"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import { Sitewide } from "@/typings"
import { urlFor } from "@/sanity"

import useTotalExperience from "@/hooks/useTotalExperience"

import { LightBulbIcon } from "@heroicons/react/24/solid"

import Badge from "@/components/App/Badge/Badge.component"
import Container from "@/components/App/Container/Container.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./About.module.scss"

type Props = {
  heading: string
  sitewide: Sitewide
}

export default function About({
  heading,
  sitewide
}: Props) {
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
            duration: 0.8,
            ease: "easeInOut"
          }}
        >
          <HeadingDivider
            dividerLineBg="secondary"
            icon={<LightBulbIcon />}
            title={heading}
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
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut"
              }}
            >
              <PortableText
                value={sitewide?.aboutContent}
              />
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
                  delay: 0.8,
                  duration: 0.8,
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
                  delay: 1,
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              >
                <Image
                  alt="Rejaur Rahman"
                  height={458}
                  loading="lazy"
                  src={urlFor(sitewide?.aboutImage).url()}
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
