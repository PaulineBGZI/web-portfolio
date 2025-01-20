import { skills, softskills } from '../lib/data'
import { useSectionInView, useWindowSizeHook } from '../lib/hooks'
import Header from './ui/header'
import IconCard from './ui/icon-card'
import { motion } from 'framer-motion'
import { projects } from '../lib/data'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'
import Project from './ui/project'
import { Fragment } from 'react'

export default function Skills() {
  const width = useWindowSizeHook()
  const threshold = width > 700 ? 0.2 : 0.1
  const { ref } = useSectionInView('Compétences et projets', threshold)

  const renderedSkills = skills.map((skill, i) => {
    return (
      <motion.li
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.05 + 0.5 }}
        viewport={{ once: true }}
        key={skill.name}
      >
        <IconCard {...skill} />
      </motion.li>
    )
  })

  const SoftSkills = softskills.map((skill, i) => {
    return (
      <motion.li
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.05 + 0.5 }}
        viewport={{ once: true }}
        key={skill.name}
      >
        <IconCard {...skill} />
      </motion.li>
    )
  })

  const renderedProjects = projects.map((project, i) => {
    return (
      <Fragment key={project.name}>
        <motion.li
          initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:block hidden"
        >
          <Project project={project} />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:hidden block"
        >
          <Project project={project} />
        </motion.li>
      </Fragment>
    )
  })

  return (
    <section
      ref={ref}
      id="skills"
      className="scroll-mt-24"
    >
      <Header>Compétences techniques</Header>
      <ul className="grid lg:grid-cols-10 md:grid-cols-5 grid-cols-4 gap-2">
        {renderedSkills}
      </ul> <br></br> <br></br>

      <Header>Savoir-être</Header>
      <ul className="grid lg:grid-cols-10 md:grid-cols-5 grid-cols-4 gap-2">
        {SoftSkills}
      </ul> <br></br> <br></br>

      <Header>Projets</Header>
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 md:auto-rows-fr">
        {renderedProjects}
        {projects.length % 2 !== 0 && (
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Link
              href={'https://github.com/aross2010'}
              className="h-full bg-transparent border border-sjsu-gold font-extrabold text-lg text-sjsu-gold hover:text-white hover:bg-sjsu-gold transition-all rounded-lg md:flex hidden flex-col items-center justify-center"
            >
              <h2 className="flex items-center gap-1">
                AND MORE ON GITHUB! <FaGithub />
              </h2>
            </Link>
          </motion.div>
        )}
      </ul>
      <form></form>
    </section>
  )
}
