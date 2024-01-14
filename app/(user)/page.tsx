import React from "react"

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

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <EducationHistory />
      <WorkExperience />
      <Skillset />
      <Projects />
      <Testimonials />
      <Contact />
      <FollowMe />
      <BackToTop />
    </>
  )
}
