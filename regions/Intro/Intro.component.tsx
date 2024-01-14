"use client"

import React from "react"
import Image from "next/image"
import {
  Cursor,
  useTypewriter
} from "react-simple-typewriter"

import { Sitewide } from "@/typings"

import Container from "@/components/App/Container/Container.component"
import Header from "@/components/App/Layout/Header/Header.component"
import IntroShapeBottom from "./IntroShapeBottom/IntroShapeBottom.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./Intro.module.scss"

type Props = {
  sitewide: Sitewide
}

export default function Intro({
  sitewide
}: Props) {
  const [text] = useTypewriter({
    delaySpeed: 2000,
    loop: true,
    words: sitewide.typingText
  })

  return (
    <Section
      dataPosition="home"
      sectionClassName={`flex ${styles.wrapper}`}
    >
      <div
        className={`relative w-full overflow-hidden ${styles.introBg}`}
        style={{
          backgroundColor: `${sitewide?.heroBgColor?.hex}`
        }}
      >
        <div className={styles.contentWrapper}>
          <Container
            containerClassName={styles.containerWrapper}
          >
            <div className={`relative z-10 text-center ${styles.text}`}>
              <h1 className={styles.heading}>
                {sitewide?.name}
              </h1>
              <h2 className={styles.subheading}>
                {sitewide?.subTitle}
                <span className={styles.textWrapper}>
                  <span
                    className={styles.subheadingText}
                  >
                    {text}
                  </span>
                  <Cursor
                    cursorColor={sitewide?.typingColor?.hex}
                  />
                </span>
              </h2>
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
      </div>
      <Header
        sitewide={sitewide}
      />
    </Section>
  )
}
