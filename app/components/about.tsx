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
          className="text-gray-400 text-lg"
        >
          Passionnée par le développement web, je me forme pour devenir 
          développeuse front-end et back-end, avec l'ambition de créer 
          des {' '}
          <Link
            href="/#projects"
            className="hover:text-sjsu-gold transition-colors font-semibold"
          >
            expériences numériques{' '}
          </Link>
          à la fois innovantes et accessibles.
          <br />
          <br />
          Après l’obtention de mon BUT Informatique, je souhaite poursuivre 
          mes études dans le domaine du développement web afin d’acquérir 
          de nouvelles compétences et approfondir mon apprentissage.
          J’ai un intérêt particulier pour les technologies front-end et 
          l’amélioration de l’expérience utilisateur.
          <br />
          <br />
          Actuellement, je suis développeuse web en alternance à {' '}
          <Link
            href={'https://www.essp-sas.eu'}
            target="_blank"
            className="hover:text-sjsu-gold transition-colors font-semibold"
          >
            l'ESSP
          </Link>{' '}
          pour le développement d'une nouvelle interface web.
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
        Interests
      </motion.h2>
      <ul className="grid lg:grid-cols-8 grid-cols-4 gap-2">
        {renderedInterests}
      </ul>
    </section>
  )
}
