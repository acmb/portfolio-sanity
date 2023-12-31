import React, { ReactNode } from "react"

type SectionProps = {
  children: ReactNode
  dataPosition: string
  sectionClassName?: string
}

export default function Section({
  children,
  dataPosition,
  sectionClassName
}: SectionProps) {
  return (
    <section
      className={sectionClassName || undefined}
      data-position={dataPosition}
    >
      {children}
    </section>
  )
}
