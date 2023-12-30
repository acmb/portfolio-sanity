import React, { ReactNode } from "react"

type SectionProps = {
  children: ReactNode
  sectionClassName?: string
}

export default function Section({
  children,
  sectionClassName
}: SectionProps) {
  return (
    <section
      className={sectionClassName || undefined}
    >
      {children}
    </section>
  )
}
