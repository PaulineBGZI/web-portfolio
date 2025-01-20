import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa6'
import { PiTennisBallFill } from 'react-icons/pi'
import html from '@/public/html.png'
import css from '@/public/css.png'
import typescript from '@/public/typescript.png'
import react from '@/public/react.png'
import mongodb from '@/public/mongo.png'
import javascript from '@/public/javascript.png'
import c from '@/public/c.png'
import java from '@/public/java.png'
import python from '@/public/python.png'
import git from '@/public/git.png'
import mysql from '@/public/mysql.png'
import sql from '@/public/sql.png'
import Cinema from '@/public/Cinema.png'
import Jeux from '@/public/Jeux.png'
import Nouilles from '@/public/Nouilles.png'
import Theatre from '@/public/Theatre.png'
import ESSP from '@/public/ESSP.png'
import IRAP from '@/public/IRAP.png'
import php from '@/public/php.png'
import recits from '@/public/recits.png'
import banque from '@/public/appli-bancaire.png'
import site from '@/public/site-web.png'
import bd from '@/public/BD.png'
import com from '@/public/com.png'
import agile from '@/public/agile.png'
import equipe from '@/public/equipe.png'
import projets from '@/public/projets.png'

export const links = [
  {
    hash: '#home',
    label: 'Accueil',
  },
  {
    hash: '#about',
    label: 'A propos',
  },
  {
    hash: '#skills',
    label: 'Compétences et projets',
  },
  {
    hash: '#experience',
    label: 'Expériences',
  },
  {
    hash: '#contact',
    label: 'Contact',
  },
] as const

export const socials = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/pauline-benghouzi-00a047297/',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/PaulineBGZI',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:pauline.benghouzi@gmail.com',
  },
] as const

export const interests = [
  
  {
    name: 'Culture Japonaise',
    image: Nouilles,
  },
  
  {
    name: 'Jeux en ligne',
    image: Jeux,
  },

  {
    name: 'Tennis',
    icon: PiTennisBallFill,
  },

  {
    name: 'Cinéma',
    image: Cinema,
  },
  {
    name: 'Théâtre',
    image: Theatre,
  },

] as const

export const skills = [
  {
    name: 'JavaScript',
    image: javascript,
  },
  {
    name: 'TypeScript',
    image: typescript,
  },
  {
    name: 'Python',
    image: python,
  },
  {
    name: 'Java',
    image: java,
  },

  {
    name: 'C',
    image: c,
  },
  {
    name: 'SQL',
    image: sql,
  },
  {
    name: 'PHP',
    image: php,
  },
  {
    name: 'HTML',
    image: html,
  },
  {
    name: 'CSS',
    image: css,
  },
  {
    name: 'MongoDB',
    image: mongodb,
  },
  {
    name: 'MySQL',
    image: mysql,
  },
  {
    name: 'React',
    image: react,
  },
  {
    name: 'Git',
    image: git,
  },
] as const

export const softskills = [
  {
    name: 'Communication professionnelle',
    image: com,
  },
  {
    name: 'Méthodes agiles',
    image: agile,
  },
    {
    name: 'Travail en équipe',
    image: equipe,
  },
  {
    name: 'Présentation de projets',
    image: projets,
  },
] as const

export const projects = [
  {
    name: 'Amélioration d\'un site web existant',
    image: recits,
    description:
      'Ce projet a consisté à améliorer un site web existant en optimisant son design et en ajoutant de nouvelles fonctionnalités.',
    tech: [
      {
        src: php,
        alt: 'php',
      },
      {
        src: html,
        alt: 'html',
      },
      {
        src: css,
        alt: 'css',
      },
    ],
    link: null,
  },
  {
    name: 'Développement d\' une application bancaire',
    image: banque,
    description:
      'Ce projet a consisté à développer une application bancaire permettant de gérer les comptes et les clients, ainsi que les opérations bancaires.',
    tech: [
      {
        src: java,
        alt: 'java',
      },
    ],
    link: null,
  },
  {
    name: 'Création d\' un site web pour une entreprise fictive',
    image: site,
    description:
      'Ce projet a consisté à créer un site web pour une entreprise fictive. Nous avons conçu et développé l\'ensemble du site, en veillant à ce qu\'il soit à la fois esthétique et fonctionnel.',
    tech: [
      {
        src: html,
        alt: 'html',
      },
      {
        src: css,
        alt: 'css',
      },
      {
        src: php,
        alt: 'php',
      },
      {
        src: sql,
        alt: 'sql',
      },
      {
        src: javascript,
        alt: 'javascript',
      },
    ],
    link: null,
  },
  {
    name: 'Création et gestion d\' une base de données',
    image: bd,
    description:
      'Ce projet a consisté à créer et gérer une base de données pour la gestion des ventes de véhicules, en veillant à ce qu\'elle soit à la fois fonctionnelle et efficace.',
    tech: [
      {
        src: sql,
        alt: 'sql',
      },
    ],
    link: null,
  },
]

export const experiences = [
  {
    title: 'Développeuse logiciel (Stage)',
    subtitle: 'IRAP',
    link: 'https://www.irap.omp.eu',
    image: IRAP,
    dates: 'Février - Avril 2023',
    description:
      'Développement d\'un module Python pour créer des bases de données astrophysiques spectroscopiques et collisionnelles.',
  },
  {
    title: 'Développeuse web (Alternance)',
    subtitle: 'ESSP',
    link: 'https://www.essp-sas.eu',
    image: ESSP,
    dates: 'Août 2024 - En cours',
    description:
    'Développement d\'une nouvelle interface web pour un outil existant et mise à jour de la version de la base de données suite à la nouvelle politique de sécurité.',
  }
]

export const footerLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/alex-ross-32b278236/',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://www.github.com/aross2010',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:@alex.ross@sjsu.edu',
  },
] as const
