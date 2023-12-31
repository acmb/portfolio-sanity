import Image from "next/image"
import React, {
  cloneElement,
  ReactElement
} from "react"

import Container from "@/components/App/Container/Container.component"

import PatternTop from "@/assets/images/pattern-top.png"
import PatternBottom from "@/assets/images/pattern-bottom.png"

import styles from "./HeadingDivider.module.scss"

type HeadingDividerProps = {
  background?: boolean
  dividerLineBg?: "primary" | "secondary" | "tertiary"
  icon?: ReactElement
  pattern?: boolean
  title: string
}

export default function HeadingDivider({
  background,
  dividerLineBg,
  icon,
  pattern,
  title
}: HeadingDividerProps) {
  const getDividerLineBgClass = (
    dividerLineBg: "primary" | "secondary" | "tertiary" | undefined
  ) => {
    const dividerBgClasses = {
      primary: styles.dividerBgPrimary,
      secondary: styles.dividerBgSecondary,
      tertiary: styles.dividerBgTertiary
    }

    if (dividerLineBg && dividerBgClasses.hasOwnProperty(dividerLineBg)) {
      return dividerBgClasses[dividerLineBg]
    }

    return ""
  }

  return (
    <>
      {pattern && (
        <Image
          alt="Top pattern divider"
          className={`absolute w-full top-0 left-0 ${styles.dividerImage}`}
          height={32}
          loading="lazy"
          src={PatternTop}
          width={1400}
        />
      )}
      <div
        className={`relative ${background ? `pt-12 pb-8 ${styles.dividerBgWrapper}` : ""}`.trim()}
      >
        <Container>
          <h2 className={`font-medium ${styles.dividerHeading}`}>
            {title}
            <span className="block w-64">
              <span
                className={`relative inline-block text-center w-full h-1 ${styles.dividerLine}`}
              >
                {icon && (
                  cloneElement(icon, {
                    className: `absolute w-7 h-8 left-1/2 z-20 ${styles.dividerIcon}`
                  })
                )}
                <span
                  className={`absolute w-11 h-7 left-1/2 z-10 ${styles.dividerBg} ${getDividerLineBgClass(dividerLineBg)}`}
                />
              </span>
            </span>
          </h2>
        </Container>
        {background && (
          <span className={`absolute w-0 h-0 left-1/2 z-10 ${styles.triangle}`} />
        )}
      </div>
      {pattern && (
        <Image
          alt="Bottom pattern divider"
          className={`absolute w-full bottom-0 left-0 ${styles.dividerImage}`}
          height={32}
          loading="lazy"
          src={PatternBottom}
          width={1400}
        />
      )}
    </>
  )
}
