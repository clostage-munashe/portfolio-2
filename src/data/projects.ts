export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'VisionLux Eye Clinic App',
    description:
      'A modern eye clinic management app that streamlines patient appointments, medical records, and billing processes.',
    image: '/visionlux-logo.svg',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 5,
    title: 'JB Technologies Website',
    description:
      'A responsive company website for a telecommunications and technology business, showcasing services, projects, case studies, and contact details.',
    image: '/jb-technologies (2).png',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    githubUrl: '',
    liveUrl: 'https://jb-technologies.onrender.com',
  },
  {
    id: 3,
    title: 'Parcel Express',
    description:
      'A parcel delivery platform designed to make it easier for people to send and receive packages through bus transport networks in Zimbabwe.',
    image: '/parcelxpress-logo.svg',
    tags: ['React', 'JavaScript', 'API', 'CSS'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 4,
    title: 'SmartQueue Zimbabwe',
    description:
      'A healthcare queue and appointment management system designed to help patients book appointments, manage queues, and connect with health services more efficiently.',
    image: '/smartqueue.jpg',
    tags: ['React', 'TypeScript', 'Node.js', 'Database'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 2,
    title: 'TravelZim - Zimbabwe Tourism Guide App',
    description:
      'A tourism platform helping travelers discover Zimbabwe destinations, plan trips, and access important travel information.',
    image: '/travelzim.jpg',
    tags: ['React', 'API', 'CSS'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 6,
    title: 'Memorial Marketplace',
    description:
      'A digital marketplace connecting families with funeral products and services, providing a simple way to discover and compare options.',
    image: '/memorial-marketplace.jpg',
    tags: ['React', 'TypeScript', 'API', 'CSS'],
    githubUrl: '',
    liveUrl: '',
  },
];

export const featuredProjects = projects.slice(0, 3);
