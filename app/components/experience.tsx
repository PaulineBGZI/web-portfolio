'use client'
import Header from './ui/header'
import { experiences, formation } from '../lib/data'
import Timeline from './ui/timeline'
import { useSectionInView, useWindowSizeHook } from '../lib/hooks'

export default function Experience() {
  const width = useWindowSizeHook()
  const { ref } = useSectionInView('Expériences', width > 700 ? 0.5 : 0.3)

  return (
    <section ref={ref} id="experience" className="scroll-mt-24">
      <Header>Expériences</Header>
      <Timeline data={experiences} />

      {/* Ajout d'un espace uniquement sur téléphone */}
      <div className="h-4 max-sm:h-16" />

      <Header>Formation</Header>
      <Timeline data={formation} />
    </section>
  )
}
