"use client"

import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid"

import ContactList from "@/components/App/ContactList/ContactList.component"
import Container from "@/components/App/Container/Container.component"
import Form from "@/components/App/Form/Form.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./Contact.module.scss"

export default function Contact() {
  const animatedImage = useRef(null)
  const animatedWrapper = useRef(null)

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
        dataPosition="contact"
        sectionClassName={`py-12 ${styles.wrapper}`}
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
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut"
          }}
        >
          <HeadingDivider
            dividerLineBg="tertiary"
            icon={<ChatBubbleOvalLeftEllipsisIcon />}
            title="Get In Touch"
          />
          <Container
            containerClassName={`flex items-center ${styles.container}`}
          >
            <Form />
            <div className="flex flex-wrap items-center">
              <div className={`relative px-4 ${styles.left}`}>
                <p
                  className={`text-center font-light ${styles.subCopy}`}
                >
                  Other ways to contact me are mentioned below:
                </p>
                <div className={`flex ${styles.methods}`}>
                  <ContactList
                    icon="https://loremflickr.com/44/44"
                    text="rejaur-rahman@hotmail.co.uk"
                  />
                  <ContactList
                    icon="https://loremflickr.com/44/44"
                    text="Contact me via email or Linkedin to get my mobile number"
                  />
                  <ContactList
                    icon="https://loremflickr.com/44/44"
                    text="Based in Enfield Island Village, London ... Shown on this section"
                  />
                </div>
              </div>
              <motion.div
                animate={isInViewImage ? {
                  opacity: 1,
                  y: 0
                } : {}}
                className={`relative px-4 ${styles.right}`}
                initial={{
                  opacity: 0,
                  y: 100
                }}
                ref={animatedImage}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              >
                <div className={`relative mx-auto ${styles.imageWrapper}`}>
                  <Image
                    alt="Area Location where I live"
                    className="relative z-10"
                    height={532}
                    loading="lazy"
                    src="https://loremflickr.com/1280/532"
                    width={1280}
                  />
                  <div className={`absolute w-full h-full ${styles.shadow}`} />
                </div>
              </motion.div>
            </div>
          </Container>
        </motion.div>
      </Section>
    </AnimatePresence>
  )
}
