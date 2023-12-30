import React from "react"
import Image from "next/image"

import Container from "@/components/Container/Container.component"

import styles from "./Intro.module.scss"

export default function Intro() {
  return (
    <section className="flex flex-wrap h-full">
      <div className={`relative w-full h-full overflow-hidden ${styles.introBg}`}>
        <div className={styles.contentWrapper}>
          <Container
            containerClassName={`flex h-full items-center justify-center ${styles.containerWrapper}`}
          >
            <div className={`relative z-10 text-center ${styles.text}`}>
              <h1 className={`capitalize ${styles.heading}`}>
                Rejaur Rahman
              </h1>
              <h2 className={`font-bold capitalize ${styles.subheading}`}>
                I live and breathe being a
                <span
                  className={`flex justify-center uppercase mt-4 ${styles.subheadingText}`}
                >
                  front-end web developer
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
      </div>
    </section>
  )
}
