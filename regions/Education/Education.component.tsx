"use client"

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

import styles from "./Education.module.scss"

import type SwiperCore from "swiper"

export default function Education() {
  const id = useId()
  const swiperRef = useRef<SwiperCore>()

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
            <SwiperSlide className={styles.slide}>
              <EducationCard
                boxImage="https://loremflickr.com/32/32"
                brandColor="#e52dad"
                companyName="Just IT Training"
                courseTitle="Development Professional Programme"
                date={{
                  current: false,
                  endDate: "04/2014",
                  startDate: "09/2015"
                }}
                location="Algate, London"
                mainImage="https://loremflickr.com/530/298"
                modules="HTML5 Fundamentals, JavaScript Fundamentals, Introduction to CSS and HTML5 Advanced Topics and Building HTML5 and JavaScript Apps with MVVM and Knockout."
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <EducationCard
                boxImage="https://loremflickr.com/32/32"
                brandColor="#10793f"
                buttonPDF="#"
                companyName="Excel With Business"
                courseTitle="EWB Online App Design Course, Online Completion Certificate"
                date={{
                  current: false,
                  endDate: "02/2014",
                  startDate: "02/2014"
                }}
                location="Online"
                mainImage="https://loremflickr.com/530/298"
                modules="HTML, Introduction to CSS, User Interface Design, eCommerce, Social Media Integration and Search Engine Optimization."
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <EducationCard
                boxImage="https://loremflickr.com/32/32"
                brandColor="#10793f"
                buttonPDF="#"
                companyName="Excel With Business"
                courseTitle="EWB Online Web Design Course, Online Completion Certificate"
                date={{
                  current: false,
                  endDate: "12/2013",
                  startDate: "02/2014"
                }}
                location="Online"
                mainImage="https://loremflickr.com/530/298"
                modules="HTML, Introduction to CSS, User Interface Design, eCommerce, Social Media Integration and Search Engine Optimization."
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <EducationCard
                boxImage="https://loremflickr.com/32/32"
                brandColor="#9c5fb5"
                companyName="University of Hertfordshire"
                courseTitle="BA/BSc (Hons) Joint Honours Degree in Computing / Business"
                date={{
                  current: false,
                  endDate: "09/2010",
                  startDate: "07/2013"
                }}
                languages="PHP, SQL, Oracle, HTML, CSS, ASP.NET and Java."
                location="Hatfield, Hertfordshire"
                mainImage="https://loremflickr.com/530/298"
                modules="Programming Principles, Data Management and Applications, Information Technology Development Exercise and Web Application Development A (Design)."
              />
            </SwiperSlide>
          </Swiper>
        </Container>
      </InnerSection>
    </Section>
  )
}
