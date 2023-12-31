import React from "react"

import { UserGroupIcon } from "@heroicons/react/24/solid"

import HeadingDivider from "@/components/HeadingDivider/HeadingDivider.component"
import Section from "@/components/Section/Section.component"

export default function FollowMe() {
  return (
    <Section
      dataPosition="follow"
    >
      <HeadingDivider
        background
        dividerLineBg="primary"
        icon={<UserGroupIcon />}
        title="Follow Me or My Work"
      />
      <p>Follow Me or My Work</p>
    </Section>
  )
}
