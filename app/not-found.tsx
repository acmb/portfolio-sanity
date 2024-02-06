import Image from "next/image"
import Link from "next/link"
import React from "react"

import { ArrowUpRightIcon } from "@heroicons/react/24/solid"

import Logo from "@/assets/images/logo.png"

import styles from "./not-found.module.scss"

export const revalidate = 30

export default function NotFound() {
  return (
    <div className={`flex mx-auto items-center justify-center ${styles.container}`}>
      <Link
        href="/"
      >
        <Image
          alt="Rejaur Rahman"
          height={96}
          src={Logo}
          width={96}
        />
      </Link>
      <h1
        className={`text-center ${styles.heading}`}
      >
        404
      </h1>
      <p
        className={`text-center ${styles.text}`}
      >
        You didn&apos;t break the internet, but we can&apos;t find what you are looking for.
      </p>
      <div className={`flex ${styles.buttonWrapper}`}>
        <Link
          className={`mt-5 p-3 flex items-center justify-center rounded-full ${styles.button}`}
          href="/"
        >
          Visit Homepage
          <ArrowUpRightIcon
            className={`ml-2 h-4 w-4 ${styles.icon}`}
          />
        </Link>
        <Link
          className={`mt-5 p-3 flex items-center justify-center rounded-full ${styles.button}`}
          href="/studio"
        >
          Visit Studio
          <ArrowUpRightIcon
            className={`ml-2 h-4 w-4 ${styles.icon}`}
          />
        </Link>
      </div>
    </div>
  )
}
