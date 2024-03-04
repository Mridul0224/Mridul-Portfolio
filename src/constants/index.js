import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
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
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Data Scientist',
    icon: frontend,
  },
  {
    title: 'Data Analyst',
    icon: backend,
  },
  {
    title: 'Project Manager',
    icon: ux,
  },
  {
    title: 'Strategist',
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
    name: 'Redux Toolkit',
    icon: redux,
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
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
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
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Data Scientist',
    company_name: 'Citigroup',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Dec 2023 - Present',
  },
  {
    title: 'Data Scientist | Analyst | Strategist ',
    company_name: 'Credit Suisse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2023 - Dec 2023',
  },
  {
    title: 'Data Scientist | Analyst | Lead',
    company_name: 'SAP Concur',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - May 2023',
  },
  {
    title: 'Data Scientist',
    company_name: 'Oval SoftTech',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2022 - Sep 2021',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Covid-19 Global Tracker',
    description: 'to provide insights on the vaccination rollout at a global scale, with a focus on quantifying the speed and scale of the vaccination program on a daily basis.',
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
    image: komikult,
    repo: 'https://github.com/Mridul0224/COVID-19-Vaccine-Tracker',
    demo: 'https://public.tableau.com/app/profile/mridul.ajaykumar/viz/GlobalCOVID-19VaccineTracker_17090117719510/CovidVaccineTracker',
  },
  {
    id: 'project-4',
    name: 'Sentiment Analysis',
    description: `A comprehensive Python project utilizing NLTK, VADER, and transformers for in-depth sentiment analysis on review datasets, showcasing NLP techniques from basic tokenization to advanced sentiment scoring with RoBERTa and BERT models.`,
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
    image: movie,
    repo: 'https://github.com/Mridul0224/Sentiment-Analysis/tree/main',
    demo: 'https://colab.research.google.com/drive/1xOepwCGracnrtFthbo1W8dZBtZydVuR8?usp=sharing'
   
  },
  {
    id: 'project-2',
    name: 'Finance Dashboard',
    description:
      'Empowering financial wellness, this Python application utilizes Pandas and Matplotlib for managing personal finances, providing deep analysis and user-friendly guidance to enhance budgeting and savings.',
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
    image: leaderboard,
    repo: 'https://github.com/Mridul0224/Python-Dashboard-Project',
    demo: 'https://colab.research.google.com/drive/1fZcEyLlY0SNHiADjUk3sGPEUzgHYcED3?usp=sharing',
  },
  {
    id: 'project-3',
    name:'Aircraft Review',
    description: 'Transforming aviation insights through an interactive dashboard that delivers comprehensive aircraft reviews, blending cutting-edge analytics with user-friendly design for unparalleled decision-making support.',
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
    image: math,
    repo: 'https://github.com/Mridul0224/Aircraft-Review-Dashboard/tree/main',
    demo: 'https://public.tableau.com/app/profile/mridul.ajaykumar/viz/AircraftReviewDashboard/AircraftReviewDashboard'
  },
  
  {
    id: 'project-5',
    name: 'Sales Insights Analysis',
    description:'Revolutionizing business strategy, this tool combines MySQL and Power BI for advanced sales analysis and visualization, offering insights to boost sales and market performance with an intuitive interface.',
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
    image: nyeusi,
    repo: 'https://github.com/Mridul0224/Sales-Data-Analysis',
    demo: 'https://app.powerbi.com/view?r=eyJrIjoiMjIwMzg4MDEtYTk4MS00NjlkLTkzOGEtMDc1NDNiZTQ4MDVmIiwidCI6ImYxYzY5NGY1LWQ5NzUtNGU1OC04OTYyLWRjNTA4YjZkMmM1OCIsImMiOjJ9',
  },
];


export { services, technologies, experiences, projects };
