import Header from './ui/header'
import profilePic from '@/public/profile-pic.jpeg'
import { interests } from '../lib/data'
import Image from 'next/image'
import Link from 'next/link'
import IconCard from './ui/icon-card'
import { useSectionInView } from '../lib/hooks'
import { motion } from 'framer-motion'

export default function About() {
  const { ref } = useSectionInView('A propos', 0.5)

  const renderedInterests = interests.map((interest, i) => {
    return (
      <motion.li
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.05 + 0.5 }}
        viewport={{ once: true }}
        key={interest.name}
      >
        <IconCard {...interest} />
      </motion.li>
    )
  })

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-24"
    >
      <Header>A propos de moi</Header>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-8">
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg text-justify"
          >
          Passionnée par le développement web, j&apos;ai l&apos;objectif de devenir 
          développeuse full stack, avec l&apos;ambition de créer 
          des expériences numériques à la fois innovantes et accessibles.
          <br />
          <br />
          Après l&apos;obtention de mon BUT Informatique, je souhaite poursuivre 
          mes études dans le domaine du développement web afin d&apos;acquérir 
          de nouvelles compétences et approfondir mon apprentissage.
          J&apos;ai un intérêt particulier pour les technologies front-end et 
          l&apos;amélioration de l&apos;expérience utilisateur.
          <br />
          <br />
          Actuellement, je suis développeuse web en alternance à {' '}
          <Link
            href={'https://www.essp-sas.eu'}
            target="_blank"
            className="hover:text-sjsu-gold transition-colors font-semibold"
          >
            l&apos;ESSP
          </Link>{' '}
          pour le développement d&apos;une nouvelle interface utilisateur.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="justify-center items-center p-4 lg:flex hidden"
        >
          <Image
            src={profilePic}
            alt="Pauline Benghouzi"
            className="rounded-xl shadow-xl shadow-slate-900 lg:h-72 h-56 w-auto brightness-90"
          />
        </motion.div>
      </div>
      <motion.h2
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold tracking-wider text-gray-400 mb-4"
      >
        Centres d&apos;intérêt
      </motion.h2>
      <ul className="grid lg:grid-cols-7 grid-cols-2 gap-2">
        {renderedInterests}
      </ul>
    </section>
  )
}
