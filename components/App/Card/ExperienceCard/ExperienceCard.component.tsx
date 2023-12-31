"use client"

import Image from "next/image"
import React, { useState } from "react"

import useMediaQuery from "@/hooks/useMediaQuery"

import styles from "./ExperienceCard.module.scss"

type ExperienceCardProps = {
  companyIcon: string
  companyLogo: string
  companyName: string
  date: {
    current: boolean
    endDate?: string
    startDate: string
  }
  description: string[]
  role: string
  skills?: string[]
}

export default function ExperienceCard({
  companyIcon,
  companyLogo,
  companyName,
  date,
  description = [],
  role,
  skills = []
}: ExperienceCardProps) {
  const [showContent, setShowContent] = useState(false)
  const isDesktop = useMediaQuery(`(min-width: 1025px)`)
  const sortedSkills = skills.sort()

  const renderParagraphs = () => {
    return description.map((text, index) => {
      if (index >= 2) {
        return (
          <div
            className={`h-0 opacity-0 ${styles.hiddenContent} ${showContent ? styles.activeContent : ""}`.trim()}
            key={index}
          >
            <p
              className={`mb-4 font-light ${styles.description}`}
            >
              {text}
            </p>
          </div>
        )
      }

      return (
        <p
          className={`mb-4 font-light ${styles.description}`}
          key={index}
        >
          {text}
        </p>
      )
    })
  }

  const toggleContent = () => {
    setShowContent(!showContent)
  }

  return (
    <div className={`flex mb-5 ${styles.wrapper}`}>
      <div
        className={`relative p-4 rounded-lg ${styles.content}`}
      >
        <Image
          alt=""
          height={43}
          loading="lazy"
          src={companyLogo}
          width={143}
        />
        <h4
          className={`uppercase font-medium my-2.5 ${styles.heading}`}
        >
          {role}
        </h4>
        {!isDesktop && (
          <div
            className={`relative uppercase min-w-max ${styles.date}`}
          >
            {date.startDate}
            {" "}-{" "}
            {date.current ? (
              "current"
            ) : (
              <>
                {date.endDate}
              </>
            )}
          </div>
        )}
        {skills.length > 0 && (
          <ul className="flex mb-4">
            {sortedSkills.map((skill, index) => (
              <li
                className={`p-1 mt-1.5 mr-1.5 ${styles.listItem}`}
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        )}
        <div className={styles.copy}>
          {renderParagraphs()}
        </div>
        <button
          aria-label={`Read more about role at ${companyName}`}
          className={`flex relative items-center justify-center w-44 h-10 rounded-lg uppercase ${styles.button}`}
          onClick={toggleContent}
        >
          {!showContent ? (
            "Read more"
          ) : (
            "Read less"
          )}
          {" "}...
        </button>
      </div>
      <div
        className={`flex items-start w-min ${styles.iconDate}`}
      >
        <div
          className={`flex relative justify-center items-center rounded-full ${styles.iconWrapper}`}
        >
          <Image
            alt=""
            className={styles.icon}
            height={32}
            loading="lazy"
            src={companyIcon}
            width={32}
          />
        </div>
        {isDesktop && (
          <div
            className={`flex relative items-center uppercase min-w-max ${styles.date}`}
          >
            {date.startDate}
            {" "}-{" "}
            {date.current ? (
              "current"
            ) : (
              <>
                {date.endDate}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
