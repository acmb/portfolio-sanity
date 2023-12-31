import React from "react"

import { PaintBrushIcon } from "@heroicons/react/24/solid"

import HeadingDivider from "@/components/HeadingDivider/HeadingDivider.component"
import Section from "@/components/Section/Section.component"

export default function Skillset() {
  return (
    <Section>
      <HeadingDivider
        background
        dividerLineBg="primary"
        icon={<PaintBrushIcon />}
        title="Technical Palette"
      />
      <p>Skillset</p>
    </Section>
  )
}
