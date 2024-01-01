import Image from "next/image"
import Link from "next/link"
import React from "react"

import styles from "./Headerlogo.module.scss"

export default function HeaderLogo() {
  return (
    <Link
      className={`flex items-center ${styles.wrapper}`}
      href="/"
    >
      <Image
        alt=""
        height={43}
        src="https://loremflickr.com/43/43"
        width={43}
      />
    </Link>
  )
}
