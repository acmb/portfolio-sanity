"use client"

import React from "react"

import useMediaQuery from "@/hooks/useMediaQuery"
import useTotalExperience from "@/hooks/useTotalExperience"

import styles from "./Badge.module.scss"

export default function Badge() {
  const isTablet = useMediaQuery(`(min-width: 768px)`)
  const years = useTotalExperience()

  return isTablet ? (
    <div
      className={`absolute flex justify-center items-center text-center top-0 left-0 uppercase ${styles.badge}`}
    >
      <svg viewBox="0 0 210 210">
        <g stroke="none" fill="none">
          <path d="M22,104.5 C22,58.9365081 58.9365081,22 104.5,22 C150.063492,22 187,58.9365081 187,104.5" id="topBadgeText"></path>
          <path d="M22,104.5 C22,150.063492 58.9365081,187 104.5,187 C150.063492,187 187,150.063492 187,104.5" id="bottomBadgeText"></path>
        </g>
        <circle cx="105" cy="105" r="62" stroke="currentColor" strokeWidth="1" fill="none" />
        <text fontSize="20" fill="currentColor">
          <textPath startOffset="50%" textAnchor="middle" alignmentBaseline="middle" xlinkHref="#topBadgeText">web developer</textPath>
        </text>
        <text fontSize="20" fill="currentColor">
          <textPath startOffset="50%" textAnchor="middle" alignmentBaseline="middle" xlinkHref="#bottomBadgeText">experience</textPath>
        </text>
      </svg>

      <span
        className={`block uppercase z-10 ${styles.text}`}
      >
        {years}+ years
      </span>
    </div>
  ) : null
}
