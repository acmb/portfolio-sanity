"use client"

import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import { UserGroupIcon } from "@heroicons/react/24/solid"

import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import Section from "@/components/App/Section/Section.component"
import SocialBox from "@/components/App/SocialBox/SocialBox.component"

import styles from "./FollowMe.module.scss"

export default function FollowMe() {
  const animatedWrapper = useRef(null)
  const isInViewWrapper = useInView(
    animatedWrapper, {
      once: true
    }
  )

  return (
    <AnimatePresence>
      <Section
        dataPosition="follow"
      >
        <HeadingDivider
          background
          dividerLineBg="primary"
          icon={<UserGroupIcon />}
          title="Follow Me or My Work"
        />
        <motion.div
          animate={isInViewWrapper ? {
            opacity: 1,
            y: 0
          } : {}}
          className={styles.wrapper}
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
          <SocialBox
            image="https://loremflickr.com/50/50"
            primaryColor="#6cc644"
            secondaryColor="#333"
            title="Github"
            url="https://github.com/RejaurRahman"
          />
          <SocialBox
            image="https://loremflickr.com/50/50"
            primaryColor="#0a66c2"
            secondaryColor="#f0b6a8"
            title="Linkedin"
            url="https://www.linkedin.com/in/rejaur-rahman-a938a657"
          />
        </motion.div>
      </Section>
    </AnimatePresence>
  )
}
