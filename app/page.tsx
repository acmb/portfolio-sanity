import React from "react"

import About from "@/regions/About/About.component"
import Contact from "@/regions/Contact/Contact.component"
import Education from "@/regions/Education/Education.component"
import Experience from "@/regions/Experience/Experience.component"
import Intro from "@/regions/Intro/Intro.component"
import Projects from "@/regions/Projects/Projects.component"
import Skillset from "@/regions/Skillset/Skillset.component"
import Testimonials from "@/regions/Testimonials/Testimonials.component"

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Education />
      <Experience />
      <Skillset />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}
