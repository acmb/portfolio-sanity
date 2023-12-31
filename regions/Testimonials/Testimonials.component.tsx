import React from "react"

import { HandThumbUpIcon } from "@heroicons/react/24/solid"

import Container from "@/components/Container/Container.component"
import HeadingDivider from "@/components/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/InnerSection/InnerSection.component"
import Section from "@/components/Section/Section.component"

export default function Testimonials() {
  return (
    <Section
      dataPosition="testimonials"
      sectionClassName="relative"
    >
      <HeadingDivider
        background
        dividerLineBg="primary"
        icon={<HandThumbUpIcon />}
        pattern
        title="Testimonials"
      />
      <InnerSection>
        <Container>
          <p>Testimonials</p>
        </Container>
      </InnerSection>
    </Section>
  )
}
