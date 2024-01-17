"use client"

import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, {
  useRef,
  useState
} from "react"

import useMediaQuery from "@/hooks/useMediaQuery"

import styles from "./ExperienceCard.module.scss"

type ExperienceCardProps = {
  animation?: {
    opacity: number
    scale: number;
    x: number
    y: number
  }
  companyIcon: string
  companyLogo: string
  companyName: string
  contractType: boolean
  date: {
    current: boolean
    endDate?: string
    startDate: string
  }
  description: string[]
  role: string
  skills: string[]
}

export default function ExperienceCard({
  animation = {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0
  },
  companyIcon,
  companyLogo,
  companyName,
  contractType,
  date,
  description = [],
  role,
  skills = []
}: ExperienceCardProps) {
  const [showContent, setShowContent] = useState(false)
  const isDesktop = useMediaQuery(`(min-width: 1025px)`)
  const sortedSkills = skills.sort()

  const animatedCard = useRef(null)
  const isInViewCard = useInView(
    animatedCard, {
      once: true
    }
  )
  const {
    opacity,
    scale,
    x,
    y
  } = animation

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

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short"
    }

    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString(undefined, options)

    return `${formattedDate.toUpperCase()}`
  }

  return (
    <AnimatePresence>
      <motion.div
        animate={isInViewCard ? {
          opacity,
          scale,
          x,
          y
        } : {}}
        className={`flex mb-5 ${styles.wrapper}`}
        initial={{
          opacity: 0,
          scale: 0
        }}
        ref={animatedCard}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
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
          <h5
            className={`uppercase font-medium my-2.5 ${styles.roleType}`}
          >
            {contractType ? "Contract Role" : "Full-Time Role"}
          </h5>
          {!isDesktop && (
            <div
              className={`relative uppercase min-w-max ${styles.date}`}
            >
              {formatDate(date.startDate)}
              {" "}-{" "}
              {date.current ? (
                "current"
              ) : (
                <>
                  {formatDate(date.endDate || "")}
                </>
              )}
            </div>
          )}
          {skills.length > 0 && (
            <ul className="flex flex-wrap mb-4">
              {sortedSkills.map((skill, index) => (
                <li
                  className={`min-w-fit h-fit p-1 mt-1.5 mr-1.5 ${styles.listItem}`}
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
              {formatDate(date.startDate)}
              {" "}-{" "}
              {date.current ? (
                "current"
              ) : (
                <>
                  {formatDate(date.endDate || "")}
                </>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
