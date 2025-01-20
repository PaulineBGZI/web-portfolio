import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa6'
import { PiTennisBallFill } from 'react-icons/pi'
import html from '@/public/html.png'
import css from '@/public/css.png'
import flask from '@/public/flask.png'
import typescript from '@/public/typescript.png'
import react from '@/public/react.png'
import next from '@/public/next.png'
import tailwind from '@/public/tailwind.png'
import node from '@/public/node.png'
import express from '@/public/express.png'
import mongodb from '@/public/mongo.png'
import javascript from '@/public/javascript.png'
import c from '@/public/c.png'
import java from '@/public/java.png'
import python from '@/public/python.png'
import git from '@/public/git.png'
import maria from '@/public/maria.png'
import mysql from '@/public/mysql.png'
import vscode from '@/public/vscode.png'
import sql from '@/public/sql.png'
import prisma from '@/public/prisma.png'
import vercel from '@/public/vercel.png'
import split from '@/public/split.png'
import spotlefy from '@/public/spotlefy.png'
import spotify from '@/public/spotify.png'
import cinefindPersonal from '@/public/cinefind_me.png'
import tmdb from '@/public/tmdb.png'
import jinja from '@/public/jinja.png'
import cron from '@/public/cron.png'
import reddit from '@/public/reddit.png'
import discogs from '@/public/discogs.png'
import rpi from '@/public/rpi.png'
import vinylBot from '@/public/vinyl-bot.png'
import scikit from '@/public/scikit.png'
import pandas from '@/public/pandas.png'
import twitterBot from '@/public/twitter-bot.png'
import Cinema from '@/public/Cinema.png'
import Jeux from '@/public/Jeux.png'
import Nouilles from '@/public/Nouilles.png'
import Tennis from '@/public/Tennis.png'
import Theatre from '@/public/Theatre.png'
import ESSP from '@/public/ESSP.png'
import IRAP from '@/public/IRAP.png'

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
    label: 'Expérience',
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

export const projects = [
  {
    name: 'Amélioration d\'un site web existant',
    image: twitterBot,
    description:
      'As the ML engineer of this project, I developed a model to classify Twitter accounts as bots or humans, utilizing advanced data preprocessing, feature selection, and predictive analysis for high accuracy',
    tech: [
      {
        src: python,
        alt: 'python',
      },
      {
        src: flask,
        alt: 'flask',
      },
      {
        src: scikit,
        alt: 'scikit',
      },
      {
        src: pandas,
        alt: 'pandas',
      },
    ],
    link: null,
    code: 'https://github.com/aross2010/twitter-bot-detector',
  },
  {
    name: 'Vinyl Bot',
    image: vinylBot,
    description:
      'A set of automated Python scripts that deliver real-time email notifications for desired vinyl record releases, seamlessly integrating with Discogs to track records from your wantlist.',
    tech: [
      {
        src: python,
        alt: 'python',
      },
      {
        src: jinja,
        alt: 'jinja',
      },
      {
        src: rpi,
        alt: 'rpi',
      },
      {
        src: cron,
        alt: 'cron',
      },
      {
        src: discogs,
        alt: 'discogs',
      },
      {
        src: reddit,
        alt: 'reddit',
      },
    ],
    link: null,
    code: 'https://github.com/aross2010/vinyl-bot',
  },
  {
    name: 'Spotlefy',
    image: spotlefy,
    description:
      'A web application that intergrates the Spotify API to allow users to create and customize their own Heardle games.',
    tech: [
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: react,
        alt: 'react',
      },
      {
        src: next,
        alt: 'next',
      },
      {
        src: tailwind,
        alt: 'tailwind',
      },
      {
        src: vercel,
        alt: 'vercel',
      },
      {
        src: spotify,
        alt: 'spotify',
      },
    ],
    link: 'https://spotlefy.vercel.app/',
    code: 'https://github.com/aross2010/spotlefy',
  },
  {
    name: 'Split',
    image: split,
    description:
      'A full-stack web application for users to log workouts and track progress through dynamic data visualizations.',
    tech: [
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: react,
        alt: 'react',
      },
      {
        src: next,
        alt: 'next',
      },
      {
        src: tailwind,
        alt: 'tailwind',
      },
      {
        src: mongodb,
        alt: 'mongodb',
      },
      {
        src: prisma,
        alt: 'prisma',
      },
      {
        src: vercel,
        alt: 'vercel',
      },
    ],
    link: 'https://splitv1.vercel.app/',
    code: 'https://github.com/aross2010/split',
  },
  {
    name: 'CineFind (Personal)',
    image: cinefindPersonal,
    description:
      'A web application that allows users to find films catering to their needs, leave reviews and discussion posts, create lists, and play the CineQ movie guessing game.',
    tech: [
      {
        src: javascript,
        alt: 'javascript',
      },
      {
        src: react,
        alt: 'react',
      },
      {
        src: node,
        alt: 'node',
      },
      {
        src: express,
        alt: 'express',
      },
      {
        src: vercel,
        alt: 'vercel',
      },
      {
        src: tmdb,
        alt: 'tmdb',
      },
    ],
    link: 'https://cinefind.vercel.app/',
    code: 'https://github.com/aross2010/cinefind',
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
    title: 'Développeuse web',
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
