'use client'
import { motion } from 'framer-motion'
import { socials } from '../lib/data'
import { useSectionInView } from '../lib/hooks'
import { RiDownloadLine } from 'react-icons/ri'
import Button from './ui/button'

export default function Intro() {
  const { ref } = useSectionInView('Accueil', 0.75)

  const renderedSocials = socials.map(({ name, icon: Icon, href }) => {
    return (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-white/50 hover:text-sjsu-gold transition-all"
      >
        <Icon className="text-2xl" />
      </a>
    )
  })

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-24 mb-24"
    >
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="md:text-7xl text-5xl font-bold sm:mb-4 mb-1 flex items-end">
          Pauline Benghouzi{' '}
          <span className="flex items-center gap-2 ml-4 -translate-y-1.5">
            {renderedSocials}
          </span>
        </h2>
        <h2 className="lg:text-3xl text-2xl font-semibold text-white/50 mb-8">
          Etudiante Informatique
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
        className="text-gray-400 text-lg mb-8 lg:w-[50%] md:w-[65%]"
      >
        Je m&apos;appelle Pauline, étudiante à l&apos;IUT de Blagnac, où je prépare
        un Bachelor Universitaire de Technologie.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        viewport={{ once: true }}
      >
        <Button
          href="/CV Pauline Benghouzi.pdf"
          className="md:text-lg group"
        >
          Télécharger mon CV
          <RiDownloadLine className="transition-transform group-hover:translate-y-1" />
        </Button>
      </motion.div>
    </section>
  )
}
