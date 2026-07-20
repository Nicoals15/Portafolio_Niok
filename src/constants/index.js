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
  }, {
    name: 'Next JS',
    icon: nextjs,
  }, {
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
const estudios = [
  {
    title: 'Tecnólogo en Análisis y Desarrollo de Software',
    school_name: 'SENA Servicio Nacional de Aprendizaje',
    icon: microverse, // Asegúrate de importar el ícono que prefieras en la parte superior
    iconBg: '#333333',
    date: 'Enero 2024 - presente',
  },
  {
    title: 'técnico en desarollo de software',
    school_name: 'SENA Servicio Nacional de Aprendizaje',
    icon: microverse,
    iconBg: '#333333',
    date: '2023 - 2024',
  },
  {
    title: 'Curso Desarrollo Web Full Stack',
    school_name: 'Talento tech bogota',
    icon: kelhel,
    iconBg: '#333333',
    date: '2023 - 2024',
  },
  {
    title: 'Bachiller Académico',
    school_name: 'Salesiano juan del rizzo ', 
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Noviembre 2021',
  },
];

 const referencias = [
  {
    name: "Sebastian sanchez bejarano",
    designation: "compañero de Desarrollo",
    company: "SENA",
    contact: "+57 315 4991661",
    email: "sebastiansanchez1236@gmail.com "
  },
  {
   name: "Johann moreno calixto",
    designation: "jefe de Desarrollo",
    company: "Group  cos",
    contact: "+57 300 000 0000",
    email: "cmartinez@ejemplo.com"
  },
  {
    name: "David guerrero",
    designation: "Web Master Lead UX/UI Designer",
    contact: "+57 315 5014556",
    
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
    name: 'Seleccion',
    description:
      'Aplicacion para llevar contratacion y proceso de seleccion de personal.',
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
    name: 'Dimension',
    description: 'Dimensionamiento para llevar estadisticas de seleccion de personas y cantidad de personas requeridas para la busqueda ',
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
    description: `Aplicativo de gestion de citas para una barberia con estadisticas en tiempo real.`,
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

export { services, technologies, experiences, projects, estudios, referencias };
