import React from "react"

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid"

import Container from "@/components/Container/Container.component"
import HeadingDivider from "@/components/HeadingDivider/HeadingDivider.component"
import Section from "@/components/Section/Section.component"

import styles from "./Contact.module.scss"

export default function Contact() {
  return (
    <Section
      dataPosition="contact"
      sectionClassName={`py-12 ${styles.wrapper}`}
    >
      <HeadingDivider
        dividerLineBg="tertiary"
        icon={<ChatBubbleOvalLeftEllipsisIcon />}
        title="Get In Touch"
      />
      <Container>
        <p>Contact</p>
      </Container>
    </Section>
  )
}
