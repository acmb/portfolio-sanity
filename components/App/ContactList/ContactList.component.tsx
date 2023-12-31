import Image from "next/image"
import React from "react"

import styles from "@/regions/Contact/Contact.module.scss"

type ContactListProps = {
  icon: string
  text: string
}

export default function ContactList({
  icon,
  text
}: ContactListProps) {
  return (
    <div
      className={styles.methodsBlock}
    >
      <div
        className={`flex relative items-center justify-center mx-auto rounded-full ${styles.methodsCircle}`}
      >
        <Image
          alt=""
          className={styles.icon}
          height={44}
          loading="lazy"
          src={icon}
          width={44}
        />
      </div>
      <span
        className={`block h-1.5 my-5 mx-auto ${styles.methodsSeperator}`}
      />
      <p className={`font-light text-center ${styles.methodsText}`}>
        {text}
      </p>
    </div>
  )
}