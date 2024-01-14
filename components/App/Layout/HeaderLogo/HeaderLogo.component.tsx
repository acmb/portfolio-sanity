import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Sitewide } from "@/typings"

import styles from "./Headerlogo.module.scss"

type Props = {
  sitewide: Sitewide
}

export default function HeaderLogo({
  sitewide
}: Props) {
  return (
    <Link
      className={`flex items-center ${styles.wrapper}`}
      href={`#${sitewide.logoLink}`}
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
