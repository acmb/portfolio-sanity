"use client"

import Image from "next/image"
import React, {
  useId,
  useRef
} from "react"
import {
  Autoplay,
  Pagination
} from "swiper/modules"
import {
  Swiper,
  SwiperSlide
} from "swiper/react"

import { HandThumbUpIcon } from "@heroicons/react/24/solid"

import Container from "@/components/App/Container/Container.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/App/InnerSection/InnerSection.component"
import Section from "@/components/App/Section/Section.component"
import TestimonialsCard from "@/components/App/Card/TestimonialCard/TestimonialCard.component"

// eslint-disable-next-line import/no-unresolved, import/extensions
import "swiper/css"

import styles from "./Testimonials.module.scss"

import type SwiperCore from "swiper"

export default function Testimonials() {
  const id = useId()
  const swiperRef = useRef<SwiperCore>()

  return (
    <Section
      dataPosition="testimonials"
      sectionClassName="relative"
    >
      <HeadingDivider
        background
        dividerLineBg="primary"
        icon={<HandThumbUpIcon />}
        pattern
        title="Testimonials"
      />
      <InnerSection
        innerContentClass="relative overflow-hidden"
      >
        <Image
          alt=""
          className={`absolute top-0 left-0 w-full h-full ${styles.background}`}
          height={1080}
          loading="lazy"
          src="https://loremflickr.com/1920/1080"
          width={1920}
        />
        <Container>
          <p
            className={`relative mb-4 font-light ${styles.info}`}
          >
            Recommendations I have received on Linkedin from my network connections at the role they wrote the message. To view the full recommendation click on view quote in full link and sign in to Linkedin to view it on my profile.
          </p>
          <Swiper
            autoplay={{
              delay: 3500
            }}
            className={styles.slider}
            enabled
            loop
            modules={[Autoplay, Pagination]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            pagination={{
              el: `[data-id="${id}"]`,
              clickable: true
            }}
            slidesPerView="auto"
          >
            <SwiperSlide>
              <TestimonialsCard
                author={{
                  name: "Nick Wong",
                  role: "Delivery Lead at iTech Media"
                }}
                quote="Hard working, passionate and loyal are all characteristics I would associate with Ronny. I worked with Ronny for almost 3 years and he was always friendly, professional and did his best in trying to deliver what was asked from him. It was a pleasure working and knowing him and I wish him all the very best in the next chapter of his career."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard
                author={{
                  name: "Millie Salmon",
                  role: "Recruitment Consultant at Arrows"
                }}
                quote="Rejaur is a talented, friendly developer with lots of fantastic experience. He always conducts himself very professionally and is very easy to communicate with. After having lots of video calls and chats with Ronny, I have thoroughly enjoyed working with him and have no doubt that he will be an asset to his next team. I hope to work with Ronny more in the future to see his passion for his career develop."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard
                author={{
                  name: "Din Jomadar",
                  role: "Consultant at BecomeUK"
                }}
                quote="Rejaur is a very likeable and sympathetic developer. His strength on Umbraco technologies is top-notch. He will not disappoint. I highly recommend him to anyone without any reservation."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard
                author={{
                  name: "Jamie Hayden",
                  role: "Managing Director & IT Manager at J-COM Resources"
                }}
                quote="Rejaur is an intelligent talented developer , a lot better that your average candidate to deal with, he is very responsive, comes up[ with suggestions, takes advise on board, Dealing with Rejaur is a breath of fresh air from the norm…. Any specific questions on Rejaur feel free to contact me for a reference…"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard
                author={{
                  name: "Barry Fogarty",
                  role: "Certified Umbraco Developer (Worked at Best&Co externally)"
                }}
                quote="Ronny is a very dedicated individual who's always keen to learn and further his web development skills. He has always conducted himself very professionally and with enthusiasm even when in unfamiliar territory. I've enjoyed working with him very much over the past year and recommend him wholeheartedly. I've no doubt he will be a valued member of anyone's web development team."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard
                author={{
                  name: "Alastair MacKenzie",
                  role: "Freelancer (Worked at Best&Co externally)"
                }}
                quote="Ronny's a talented developer who picks up new technologies very quickly. He's very easy to communicate with and would be a great asset to any development team."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard
                author={{
                  name: "Kealan Shults",
                  role: "SAP Consultant at Next Ventures"
                }}
                quote="Rejaur is extremely dedicated to succeeding within web development. His passion for this area of work instantly stood out when speaking and meeting with him. As well as being passionate, he also showed solid understanding of front end technologies."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard
                author={{
                  name: "Colin Gibson",
                  role: "Software / Web Development Specialist at Cititec"
                }}
                quote="Having worked with Rejaur over the last few days it's very apparent how professional he is in all he does, beyond professionalism though he's a great person, friendly and funny. Wish Rejaur all the best going forward, I'm more than confident he will go on to achieve great things."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard
                author={{
                  name: "Mrunal Sachania",
                  role: "Service Desk Analyst at Charityshare Ltd"
                }}
                quote="Rejaur Rahman was one of the most dedicated professionals through his work at Argos. As I remember, Rejaur Rahman was a very productive person. Achievement oriented Stockroom Assistant with lots of knowledge in his field. Deadline oriented team player. Is always capable of adapting to new working environments."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard
                author={{
                  name: "Angela Meringolo",
                  role: "Marketing Team Leader at Anton Paar UK & Ireland"
                }}
                quote="Rejaur joined us at Anton Paar Ltd for an internship during the summer of 2014 to work on a database quality project. He successfully completed this, setting himself goals to exceed what required of him before the assigned deadlines. Throughout the internship, Rejaur completed all his assignments on time and never failed to provide the help required and to report promptly on his performance. He is a well organised and punctual individual. His honesty, humbleness and dedication make it easy to work with him."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard
                author={{
                  name: "Nadim Owadally",
                  role: "Associate Programmer Analyst at CSC"
                }}
                quote="Rejaur is a well-grounded and down to earth person. During University I was able to work with him in a number of modules. When taking lead he is a calculated risk taker, pragmatic team leader and realist who seems to grasp ideas whilst still taking note to the more acute details. I found this to be valuable, as it allowed our entire group to explore and understand nearly all possible perspectives to an idea and its numerous applications."
              />
            </SwiperSlide>
            <div
              className={`flex justify-center ${styles.pagination}`}
              data-id={id}
            />
          </Swiper>
        </Container>
      </InnerSection>
    </Section>
  )
}
