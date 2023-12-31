import React from "react"

import About from "@/regions/About/About.component"
import Education from "@/regions/Education/Education.component"
import Experience from "@/regions/Experience/Experience.component"
import Intro from "@/regions/Intro/Intro.component"
import Projects from "@/regions/Projects/Projects.component"
import Skillset from "@/regions/Skillset/Skillset.component"

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Education />
      <Experience />
      <Skillset />
      <Projects />
    </>
  )
}
