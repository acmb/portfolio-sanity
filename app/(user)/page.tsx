import React from "react"

import {
  Education,
  Experience,
  Project,
  Sitewide,
  Skill,
  Social,
  Testimonial
} from "@/typings"

import { fetchEducations } from "@/utils/fetchEducations"
import { fetchExperiences } from "@/utils/fetchExperiences"
import { fetchProjects } from "@/utils/fetchProjects"
import { fetchSitewide } from "@/utils/fetchSitewide"
import { fetchSkills } from "@/utils/fetchSkills"
import { fetchSocials } from "@/utils/fetchSocials"
import { fetchTestimonials } from "@/utils/fetchTestimonials"

import About from "@/regions/About/About.component"
import BackToTop from "@/components/App/BackToTop/BackToTop.component"
import Contact from "@/regions/Contact/Contact.component"
import EducationHistory from "@/regions/EducationHistory/EducationHistory.component"
import FollowMe from "@/regions/FollowMe/FollowMe.component"
import Intro from "@/regions/Intro/Intro.component"
import Projects from "@/regions/Projects/Projects.component"
import Skillset from "@/regions/Skillset/Skillset.component"
import Testimonials from "@/regions/Testimonials/Testimonials.component"
import WorkExperience from "@/regions/WorkExperience/WorkExperience.component"

export default async function Home() {
  const educations: Education[] = await fetchEducations();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const sitewide: Sitewide = await fetchSitewide();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const testimonials: Testimonial[] = await fetchTestimonials();

  return (
    <>
      <Intro
        sitewide={sitewide}
      />
      <About
        sitewide={sitewide}
      />
      <EducationHistory
        educations={educations}
      />
      <WorkExperience
        experiences={experiences}
      />
      <Skillset
        skills={skills}
      />
      <Projects
        projects={projects}
      />
      <Testimonials
        testimonials={testimonials}
      />
      <Contact
        sitewide={sitewide}
      />
      <FollowMe
        socials={socials}
      />
      <BackToTop />
    </>
  )
}
