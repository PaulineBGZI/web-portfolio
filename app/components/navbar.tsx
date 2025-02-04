'use client'
import { links } from '../lib/data'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useActiveSectionContext } from '../context/section-context'
import { useEffect, useState } from 'react'
import { useWindowSizeHook } from '../lib/hooks'

type Label = 'Accueil' | 'A Propos' | 'Compétences et projets' | 'Expériences' | 'Contact'

const labelAbbreviations: { [key in Label]?: string } = {
  'A Propos': 'Infos',
  'Compétences et projets': 'Compétences',
}

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  const width = useWindowSizeHook()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const linksContainer = document.getElementById('links-container')
    const activeLink = document.getElementById(activeSection)
    if (linksContainer && activeLink && width < 700) {
      setTimeout(() => {
        linksContainer.scrollTo({
          left: activeLink.offsetLeft - linksContainer.offsetWidth / 2,
          behavior: 'smooth',
        })
      }, 750)
    }
  }, [activeSection, width])

  const renderedLinks = links.map(({ hash, label }) => {
    const shortLabel = labelAbbreviations[label as Label] || label

    return (
      <li key={hash}>
        <Link
          href={hash}
          id={label}
          onClick={() => {
            setActiveSection(label)
            setTimeOfLastClick(Date.now())
            setIsMenuOpen(false)
          }}
          className={`rounded-full outline-none relative transition-all text-gray-400 font-medium px-2 py-1 flex ${
            activeSection == label
              ? 'text-white font-medium'
              : 'hover:bg-slate-700 hover:text-white'
          } sm:text-sm text-xs md:text-base`}
        >
          <span className="md:hidden">{shortLabel}</span>
          <span className="hidden md:inline">{label}</span>
          {label === activeSection && (
            <motion.span
              className="bg-sjsu-gold rounded-full absolute inset-0 -z-10"
              layoutId="activeSection"
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
            ></motion.span>
          )}
        </Link>
      </li>
    )
  })

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="md:rounded-full md:w-auto w-full max-w-full md:p-2 p-4 fixed md:top-6 top-0 left-1/2 outline-none transform -translate-x-1/2 sm:bg-slate-800/75 bg-slate-800/50 z-10 backdrop-blur-md"
    >
      <div className="md:hidden flex justify-between items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        id="links-container"
        className={`flex md:overflow-x-auto scroll-hide items-center gap-2 ${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex`}
      >
        {renderedLinks}
      </ul>
    </motion.nav>
  )
}
