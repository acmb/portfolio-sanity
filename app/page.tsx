import React from "react"

import About from "@/regions/About/About.component"
import Education from "@/regions/Education/Education.component"
import Intro from "@/regions/Intro/Intro.component"

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Education />
    </>
  )
}
