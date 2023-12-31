import React, { ReactNode } from "react"

type InnerSectionProps = {
  children: ReactNode
  innerContentClass?: string
}

export default function InnerSection({
  children,
  innerContentClass
}: InnerSectionProps) {
  return (
    <div className={`py-12 ${innerContentClass || undefined}`.trim()}>
      {children}
    </div>
  )
}
