"use client"

import Image from "next/image"
import { PortableText } from "@portabletext/react"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import {
  BaseImage,
  Sitewide
} from "@/typings"
import { urlFor } from "@/sanity"

import { LightBulbIcon } from "@heroicons/react/24/solid"

import Badge from "@/components/App/Badge/Badge.component"
import Container from "@/components/App/Container/Container.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./About.module.scss"

type Props = {
  addSectionColor: boolean
  displayInNav: boolean
  heading: string
  menuUrl: string
  sectionBackground: BaseImage
  sitewide: Sitewide
  title: string
}

export default function About({
  addSectionColor,
  displayInNav,
  heading,
  menuUrl,
  sectionBackground,
  sitewide,
  title
}: Props) {
  const dataPosition = displayInNav && menuUrl.length > 0 ? menuUrl : null

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
        dataPosition={dataPosition}
        sectionClassName={`relative overflow-hidden pt-12 ${styles.wrapper}`}
      >
        {!addSectionColor && sectionBackground && (
          <Image
            alt={`${title} region background image`}
            className="absolute top-0 left-0 w-full h-full object-cover"
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
            containerClassName={`relative ${styles.containerWrapper}`}
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
