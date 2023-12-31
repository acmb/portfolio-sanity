import React from "react"

import { HashtagIcon } from "@heroicons/react/24/solid"

import Container from "@/components/App/Container/Container.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/App/InnerSection/InnerSection.component"
import ProjectCard from "@/components/App/Card/ProjectCard/ProjectCard.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./Projects.module.scss"

export default function Projects() {
  return (
    <Section
      dataPosition="projects"
      sectionClassName={styles.wrapper}
    >
      <HeadingDivider
        background
        dividerLineBg="primary"
        icon={<HashtagIcon />}
        title="Projects Showcase"
      />
      <InnerSection>
        <Container>
          <p
            className={`text-center ${styles.subheading}`}
          >
            All projects have been created by myself for educational purposes.
          </p>
          <div
            className="flex justify-center items-start flex-wrap"
          >
            <ProjectCard
              backgroundText="React Shopping to do list project where you can add shopping items. Once shopping items are added they can be filtered by categories as well delete them. Users have option to complete items. Data is stored in firebase."
              brandColor="#800517"
              coverImage="https://loremflickr.com/767/500"
              futureUseText="Allow users to create list, which will be the first screen and then users can add shopping items. Users can archive list and view archived list."
              github={{
                display: true,
                url: "https://github.com/RejaurRahman/blog-camp"
              }}
              skills={[
                "React",
                "Stripe",
                "Firebase",
                "Test 1"
              ]}
              text="Next.js + Sanity.io Blog 1"
              title="Blog Camp 1"
              website={{
                display: true,
                url: "https://blog-camp.netlify.app/"
              }}
            />
            <ProjectCard
              backgroundText="Restaurant ecommerce website integrated Stripe for payment and food items stored in Firebase Database, as well as Redux for centralized state management."
              brandColor="#4a0fcb"
              coverImage="https://loremflickr.com/767/500"
              github={{
                display: true,
                url: "https://github.com/RejaurRahman/blog-camp"
              }}
              skills={[
                "React",
                "Stripe",
                "Firebase",
                "Test 2"
              ]}
              text="Next.js + Sanity.io Blog 2"
              title="Blog Camp 2"
              website={{
                display: true,
                url: "https://blog-camp.netlify.app/"
              }}
            />
            <ProjectCard
              backgroundText="Personal blog with ability to leave comment which displays after approval. Ability to add pages like About and Contact page with Form Builder component as well as search functionality."
              brandColor="#ca9300"
              coverImage="https://loremflickr.com/767/500"
              futureUseText="Live-as-you-type previewing of draft CMS content."
              skills={[
                "React",
                "Stripe",
                "Firebase",
                "Test 3"
              ]}
              text="Next.js + Sanity.io Blog 3"
              title="Blog Camp 3"
              website={{
                display: true,
                url: "https://blog-camp.netlify.app/"
              }}
            />
            <ProjectCard
              backgroundText="Vue.JS project used to create animal profiles which can be navigated through based on the Discover Zone allocated in data JSON file. Created accordion, mouse hover functionalities on images, Meta-data structure for Analytics purposes in future and many more using Vue.JS."
              brandColor="#53900f"
              coverImage="https://loremflickr.com/767/500"
              github={{
                display: true,
                url: "https://github.com/RejaurRahman/blog-camp"
              }}
              skills={[
                "React",
                "Stripe",
                "Firebase",
                "Test 4"
              ]}
              text="Next.js + Sanity.io Blog 4"
              title="Blog Camp 4"
              website={{
                display: true,
                url: "https://blog-camp.netlify.app/"
              }}
            />
            <ProjectCard
              backgroundText="Boostrap CSS Framework used to create e-commerce html restaurant website."
              brandColor="#5680e9"
              coverImage="https://loremflickr.com/767/500"
              futureUseText="Re-platform using Gatsby.JS (React Framework) and incorporate with Netlify as the CMS."
              github={{
                display: true,
                url: "https://github.com/RejaurRahman/blog-camp"
              }}
              skills={[
                "React",
                "Stripe",
                "Firebase",
                "Test 5"
              ]}
              text="Next.js + Sanity.io Blog 5"
              title="Blog Camp 5"
              website={{
                display: true,
                url: "https://blog-camp.netlify.app/"
              }}
            />
          </div>
        </Container>
      </InnerSection>
    </Section>
  )
}
