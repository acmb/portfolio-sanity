"use client"

import React from "react"
import Image from "next/image"
import {
  Cursor,
  useTypewriter
} from "react-simple-typewriter"

import Container from "@/components/Container/Container.component"
import IntroShapeBottom from "./IntroShapeBottom/IntroShapeBottom.component"
import Section from "@/components/Section/Section.component"

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

  return (
    <Section
      sectionClassName={`flex flex-wrap h-full ${styles.wrapper}`}
    >
      <div className={`relative w-full h-full overflow-hidden ${styles.introBg}`}>
        <div className={styles.contentWrapper}>
          <Container
            containerClassName={styles.containerWrapper}
          >
            <div className={`relative z-10 text-center ${styles.text}`}>
              <h1 className={styles.heading}>
                Rejaur Rahman
              </h1>
              <h2 className={styles.subheading}>
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
              </h2>
            </div>
          </Container>
        </div>
        <Image
          alt="Rejaur Rahman"
          className={`relative block top-0 left-0 my-0 mx-auto ${styles.introImage}`}
          height={950}
          priority
          src="https://placehold.co/950x916"
          width={916}
        />
        <div
          className={`absolute w-full h-full top-0 left-0 ${styles.overlay}`}
        />
        <div className={`absolute rotate-180 ${styles.shape}`}>
          <IntroShapeBottom />
        </div>
      </div>
    </Section>
  )
}
