"use client"

import React, { useRef } from "react"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import Image from "next/image"
import {
  Cursor,
  useTypewriter
} from "react-simple-typewriter"

import Container from "@/components/App/Container/Container.component"
import Header from "@/components/App/Layout/Header/Header.component"
import IntroShapeBottom from "./IntroShapeBottom/IntroShapeBottom.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./Intro.module.scss"

export default function Intro() {
  const [text] = useTypewriter({
    delaySpeed: 2000,
    loop: true,
    words: [
      "front-end web developer",
      "magician in my spare time",
      "part-time cook at home"
    ]
  })

  const animatedName = useRef(null)
  const animatedSubtitle = useRef(null)
  const animatedWrapper = useRef(null)

  const isInViewName = useInView(
    animatedName, {
      once: true
    }
  )
  const isInViewSubtitle = useInView(
    animatedName, {
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
        dataPosition="home"
        sectionClassName={`flex ${styles.wrapper}`}
      >
        <div
          className={`relative w-full overflow-hidden ${styles.introBg}`}
          style={{
            backgroundColor: "#393341"
          }}
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
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
            <div className={styles.contentWrapper}>
              <Container
                containerClassName={styles.containerWrapper}
              >
                <div className={`relative z-10 text-center ${styles.text}`}>
                  <motion.h1
                    animate={isInViewName ? {
                      opacity: 1,
                      x: 0
                    } : {}}
                    className={styles.heading}
                    initial={{
                      opacity: 0,
                      x: 200
                    }}
                    ref={animatedName}
                    transition={{
                      delay: 0.2,
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    Rejaur Rahman
                  </motion.h1>
                  <motion.h2
                    animate={isInViewName ? {
                      opacity: 1,
                      x: 0
                    } : {}}
                    className={styles.subheading}
                    initial={{
                      opacity: 0,
                      x: -200
                    }}
                    ref={animatedSubtitle}
                    transition={{
                      delay: 0.4,
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    I live and breathe being a
                    <span className={styles.textWrapper}>
                      <span
                        className={styles.subheadingText}
                      >
                        {text}
                      </span>
                      <Cursor
                        cursorColor="#d8137d"
                      />
                    </span>
                  </motion.h2>
                </div>
              </Container>
            </div>
            <Image
              alt=""
              className={`relative block top-0 left-0 my-0 mx-auto ${styles.introImage}`}
              height={950}
              priority
              src="https://loremflickr.com/950/916"
              width={916}
            />
            <div
              className={`absolute w-full h-full top-0 left-0 ${styles.overlay}`}
            />
            <div className={`absolute rotate-180 ${styles.shape}`}>
              <IntroShapeBottom />
            </div>
          </motion.div>
        </div>
        <Header />
      </Section>
    </AnimatePresence>
  )
}
