import React from "react"

import { BuildingOffice2Icon } from "@heroicons/react/24/solid"

import Container from "@/components/App/Container/Container.component"
import ExperienceCard from "@/components/App/Card/ExperienceCard/ExperienceCard.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/App/InnerSection/InnerSection.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./Experience.module.scss"

export default function Experience() {
  return (
    <Section
      dataPosition="experience"
    >
      <HeadingDivider
        background
        dividerLineBg="primary"
        icon={<BuildingOffice2Icon />}
        title="Experience History"
      />
      <InnerSection
        innerContentClass={styles.wrapper}
      >
        <Container
          containerClassName={`relative overflow-hidden pt-5 ${styles.container}`}
        >
          <ExperienceCard
            companyIcon="https://loremflickr.com/32/32"
            companyLogo="https://loremflickr.com/143/43"
            companyName="Propeller"
            date={{
              current: true,
              startDate: "nov 2022"
            }}
            description={[
              "The main part of my role is focused on developing performant, React-based projects for exciting brands.",
              "Delivered on time and on budget, whilst showcasing modern transitioning websites from creative design files.",
              "The first project I was working on was rebuilding the Propeller website using Next.JS and WordPress to make it modern-looking and performant from speed perspective.",
              "I am currently part of a small team focusing on deploying 1000 websites for pub chain whilst taking the lead on template foundation and structure to repurpose across multiple WordPress theme templates."
            ]}
            role="Senior Front End Developer"
            skills={[
              "React",
              "Stripe",
              "Firebase",
              "Test 1"
            ]}
          />
          <ExperienceCard
            companyIcon="https://loremflickr.com/32/32"
            companyLogo="https://loremflickr.com/143/43"
            companyName="Propeller"
            date={{
              current: true,
              startDate: "jan 2023"
            }}
            description={[
              "The main part of my role is focused on developing performant, React-based projects for exciting brands.",
              "Delivered on time and on budget, whilst showcasing modern transitioning websites from creative design files.",
              "The first project I was working on was rebuilding the Propeller website using Next.JS and WordPress to make it modern-looking and performant from speed perspective.",
              "I am currently part of a small team focusing on deploying 1000 websites for pub chain whilst taking the lead on template foundation and structure to repurpose across multiple WordPress theme templates."
            ]}
            role="Senior Front End Developer"
            skills={[
              "React",
              "Stripe",
              "Firebase",
              "Test 2"
            ]}
          />
          <ExperienceCard
            companyIcon="https://loremflickr.com/32/32"
            companyLogo="https://loremflickr.com/143/43"
            companyName="Propeller"
            date={{
              current: true,
              startDate: "feb 2023"
            }}
            description={[
              "The main part of my role is focused on developing performant, React-based projects for exciting brands.",
              "Delivered on time and on budget, whilst showcasing modern transitioning websites from creative design files.",
              "The first project I was working on was rebuilding the Propeller website using Next.JS and WordPress to make it modern-looking and performant from speed perspective.",
              "I am currently part of a small team focusing on deploying 1000 websites for pub chain whilst taking the lead on template foundation and structure to repurpose across multiple WordPress theme templates."
            ]}
            role="Senior Front End Developer"
            skills={[
              "React",
              "Stripe",
              "Firebase",
              "Test 3"
            ]}
          />
          <ExperienceCard
            companyIcon="https://loremflickr.com/32/32"
            companyLogo="https://loremflickr.com/143/43"
            companyName="Propeller"
            date={{
              current: true,
              startDate: "mar 2023"
            }}
            description={[
              "The main part of my role is focused on developing performant, React-based projects for exciting brands.",
              "Delivered on time and on budget, whilst showcasing modern transitioning websites from creative design files.",
              "The first project I was working on was rebuilding the Propeller website using Next.JS and WordPress to make it modern-looking and performant from speed perspective.",
              "I am currently part of a small team focusing on deploying 1000 websites for pub chain whilst taking the lead on template foundation and structure to repurpose across multiple WordPress theme templates."
            ]}
            role="Senior Front End Developer"
            skills={[
              "React",
              "Stripe",
              "Firebase",
              "Test 4"
            ]}
          />
          <ExperienceCard
            companyIcon="https://loremflickr.com/32/32"
            companyLogo="https://loremflickr.com/143/43"
            companyName="Propeller"
            date={{
              current: true,
              startDate: "apr 2023"
            }}
            description={[
              "The main part of my role is focused on developing performant, React-based projects for exciting brands.",
              "Delivered on time and on budget, whilst showcasing modern transitioning websites from creative design files.",
              "The first project I was working on was rebuilding the Propeller website using Next.JS and WordPress to make it modern-looking and performant from speed perspective.",
              "I am currently part of a small team focusing on deploying 1000 websites for pub chain whilst taking the lead on template foundation and structure to repurpose across multiple WordPress theme templates."
            ]}
            role="Senior Front End Developer"
            skills={[
              "React",
              "Stripe",
              "Firebase",
              "Test 5"
            ]}
          />
          <ExperienceCard
            companyIcon="https://loremflickr.com/32/32"
            companyLogo="https://loremflickr.com/143/43"
            companyName="Propeller"
            date={{
              current: true,
              startDate: "may 2023"
            }}
            description={[
              "The main part of my role is focused on developing performant, React-based projects for exciting brands.",
              "Delivered on time and on budget, whilst showcasing modern transitioning websites from creative design files.",
              "The first project I was working on was rebuilding the Propeller website using Next.JS and WordPress to make it modern-looking and performant from speed perspective.",
              "I am currently part of a small team focusing on deploying 1000 websites for pub chain whilst taking the lead on template foundation and structure to repurpose across multiple WordPress theme templates."
            ]}
            role="Senior Front End Developer"
            skills={[
              "React",
              "Stripe",
              "Firebase",
              "Test 6"
            ]}
          />
        </Container>
      </InnerSection>
    </Section>
  )
}
