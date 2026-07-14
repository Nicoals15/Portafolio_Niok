import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  Barbertech,
  typescript,
  html,
  biblioteca,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  nextjs,
  python,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre mí',
  },
  {
    id: 'projects',
    title: 'Proyectos',
  },
  {
    id: 'contact',
    title: 'Contacto',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },{
    name: 'Next JS', 
    icon: nextjs,
  },{ 
    name: 'Python', 
    icon: python 
  }
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Redes Humanas',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Octubre 2023 - Abril 2024',
  },
  {
    title: 'Full stack Developer',
    company_name: 'Group cos',
    icon: microverse,
    iconBg: '#333333',
    date: 'Febrero 2026 - Agosto 2026',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Biblioteca',
    description: 'Biblioteca para campañas donde se busca informacion sobre campañas asignadas.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: biblioteca,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'SYC_COS',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: biblioteca,
    repo: '',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'Dimension_cos',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: biblioteca,
    repo: '',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Barbertech',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: Barbertech,
    repo: '',
    demo: '',
  },
  
];

export { services, technologies, experiences, projects };
