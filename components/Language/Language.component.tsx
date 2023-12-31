import Image from "next/image"
import React from "react"

import styles from "./Language.module.scss"

type LanguageProps = {
  brandColor: string
  icon: string
  title: string
}

export default function Language({
  brandColor,
  icon,
  title
}: LanguageProps) {
  return (
    <div
      aria-label={title}
      className={`relative w-full px-4 ${styles.language}`}
    >
      <div className="my-4">
        <div
          className={`flex relative items-center justify-center rounded-full mx-auto overflow-hidden ${styles.circle}`}
        >
          <span
            className={`absolute top-0 left-0 rounded-full ${styles.background}`}
            style={{backgroundColor: `${brandColor}`}}
          />
          <Image
            alt={title}
            className="relative"
            height={100}
            loading="lazy"
            src={icon}
            width={100}
          />
        </div>
        <div
          className={`flex justify-center text-center ${styles.label}`}
        >
          <span
            className={`block relative w-fit py-1.5 px-4 font-light z-10 ${styles.text}`}
            style={{backgroundColor: `${brandColor}`}}
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  )
}
