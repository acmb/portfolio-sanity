"use client"

import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import {
  ContactMethod,
  Sitewide
} from "@/typings"
import { urlFor } from "@/sanity"

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid"

import ContactList from "@/components/App/ContactList/ContactList.component"
import Container from "@/components/App/Container/Container.component"
import Form from "@/components/App/Form/Form.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./Contact.module.scss"

type Props = {
  contacts: ContactMethod[]
  heading: string
  sitewide: Sitewide
  subText: string
}

export default function Contact({
  contacts,
  heading,
  sitewide,
  subText
}: Props) {
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
            title={heading}
          />
          <Container
            containerClassName={`flex items-center ${styles.container}`}
          >
            <Form
              subText={subText}
            />
            <div className="flex flex-wrap items-center">
              <div className={`relative px-4 ${styles.left}`}>
                <p
                  className={`text-center font-light ${styles.subCopy}`}
                >
                  {sitewide?.contactListText}
                </p>
                <div className={`flex ${styles.methods}`}>
                  {contacts.map((contact: ContactMethod) => (
                    <ContactList
                      key={contact._id}
                      icon={urlFor(contact?.icon).url()}
                      text={contact?.title}
                      type={contact?.type}
                    />
                  ))}
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
                    src={urlFor(sitewide?.locationArea).url()}
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
