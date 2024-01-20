"use client"

import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, {
  useId,
  useRef
} from "react"
import {
  Navigation,
  Pagination
} from "swiper/modules"
import {
  Swiper,
  SwiperSlide
} from "swiper/react"

import { Education } from "@/typings"
import { urlFor } from "@/sanity"

import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { BookOpenIcon } from "@heroicons/react/24/solid"

import Container from "@/components/App/Container/Container.component"
import EducationCard from "@/components/App/Card/EducationCard/EducationCard.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/App/InnerSection/InnerSection.component"
import Section from "@/components/App/Section/Section.component"

// eslint-disable-next-line import/no-unresolved, import/extensions
import "swiper/css"

import styles from "./EducationHistory.module.scss"

import type SwiperCore from "swiper"

type Props = {
  educations: Education[]
}

export default function EducationHistory({
  educations
}: Props) {
  const id = useId()
  const swiperRef = useRef<SwiperCore>()

  const animatedWrapper = useRef(null)
  const isInViewWrapper = useInView(
    animatedWrapper, {
      once: true
    }
  )

  const renderNextButton = () => {
    return (
      <button
        aria-label="Right Slider Arrow Icon"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRightIcon
          className={`w-16 h-16 ${styles.button}`}
        />
      </button>
    )
  }

  const renderPrevButton = () => {
    return (
      <button
        aria-label="Left Slider Arrow Icon"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeftIcon
          className={`w-16 h-16 ${styles.button}`}
        />
      </button>
    )
  }

  return (
    <AnimatePresence>
      <Section
        dataPosition="education"
      >
        <HeadingDivider
          background
          dividerLineBg="primary"
          icon={<BookOpenIcon />}
          title="Education Timeline"
        />
        <InnerSection
          innerContentClass={styles.wrapper}
        >
          <motion.div
            animate={isInViewWrapper ? {
              opacity: 1,
              x: 0
            } : {}}
            initial={{
              opacity: 0,
              x: -100
            }}
            ref={animatedWrapper}
            transition={{
              duration: 0.8,
              ease: "easeInOut"
            }}
          >
            <Container>
              <Swiper
                autoHeight
                className={styles.slider}
                enabled
                loop
                modules={[
                  Navigation,
                  Pagination
                ]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper
                }}
                pagination={{
                  el: `[data-id="${id}"]`,
                  clickable: true
                }}
                slidesPerView="auto"
              >
                <div
                  className="flex justify-between items-center"
                >
                  {renderPrevButton()}
                  <div
                    className={styles.pagination}
                    data-id={id}
                  />
                  {renderNextButton()}
                </div>
                {educations.map((education: Education) => (
                  <SwiperSlide
                    className={styles.slide}
                    key={education._id}
                  >
                    <EducationCard
                      boxImage={urlFor(education?.companyIcon).url()}
                      brandColor={education?.brandColor.hex}
                      buttonPDF={education?.certificateUrl}
                      companyName={education?.companyName}
                      courseTitle={education?.title}
                      date={{
                        current: education?.currentlyStudying,
                        endDate: !education.currentlyStudying && education?.dateEnded,
                        startDate: education?.dateStarted
                      }}
                      languages={education?.languages || undefined}
                      location={education?.location}
                      mainImage={urlFor(education?.buildingImage).url()}
                      modules={education?.modules}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </motion.div>
        </InnerSection>
      </Section>
    </AnimatePresence>
  )
}
