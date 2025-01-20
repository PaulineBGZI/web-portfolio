'use client'

import { Fragment } from 'react'
import Intro from './components/intro'
import About from './components/about'
import Skills from './components/skills'
import Experience from './components/experience'
import Contact from './components/contact'

export default function Home() {
  return (
    <Fragment>
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </Fragment>
  )
}
