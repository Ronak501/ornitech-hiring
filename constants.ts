import { Job } from './types';

export const DEPARTMENTS = ['All', 'Engineering', 'Design', 'Product', 'Marketing', 'Sales'];
export const LOCATIONS = ['All', 'Remote', 'San Francisco, CA', 'New York, NY', 'London, UK'];

export const MOCK_JOBS: Job[] = [
  {
    id: 'eng-001',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    postedAt: '2023-10-25',
    description: 'Ornitech is looking for a Senior Frontend Engineer to lead the development of our next-generation user interfaces. You will work closely with design and product teams to build highly responsive, accessible, and performant web applications.',
    responsibilities: [
      'Architect and develop scalable frontend applications using React and TypeScript.',
      'Collaborate with UX/UI designers to implement intuitive user experiences.',
      'Optimize applications for maximum speed and scalability.',
      'Mentor junior engineers and contribute to engineering best practices.',
      'Participate in code reviews and architectural discussions.'
    ],
    requirements: [
      '5+ years of experience in frontend development.',
      'Deep expertise in React, TypeScript, and modern CSS (Tailwind, CSS-in-JS).',
      'Strong understanding of web performance optimization techniques.',
      'Experience with state management libraries (Redux, Zustand, etc.).',
      'Excellent communication and teamwork skills.'
    ],
    benefits: [
      'Competitive salary and equity package.',
      'Comprehensive health, dental, and vision insurance.',
      'Unlimited PTO and flexible working hours.',
      'Home office stipend.',
      'Annual learning and development budget.'
    ]
  },
  {
    id: 'des-001',
    title: 'Product Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
    postedAt: '2023-10-20',
    description: 'We are seeking a talented Product Designer to shape the future of Ornitech\'s core products. You will be responsible for the end-to-end design process, from user research and wireframing to high-fidelity prototyping and handoff.',
    responsibilities: [
      'Conduct user research to understand customer needs and pain points.',
      'Create wireframes, user flows, and interactive prototypes.',
      'Design elegant and intuitive user interfaces for web and mobile platforms.',
      'Collaborate closely with product managers and engineers to ensure successful implementation.',
      'Maintain and evolve our design system.'
    ],
    requirements: [
      '3+ years of experience in product design or UX/UI design.',
      'A strong portfolio demonstrating your design process and problem-solving skills.',
      'Proficiency in Figma and other design tools.',
      'Solid understanding of user-centered design principles.',
      'Experience working in an agile development environment.'
    ],
    benefits: [
      'Competitive salary and equity package.',
      'Comprehensive health, dental, and vision insurance.',
      'Unlimited PTO and flexible working hours.',
      'Catered lunches and fully stocked kitchen (in-office).',
      'Annual learning and development budget.'
    ]
  },
  {
    id: 'prod-001',
    title: 'Senior Product Manager',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-time',
    postedAt: '2023-10-15',
    description: 'Ornitech is looking for a strategic and execution-oriented Senior Product Manager to lead a key product area. You will define the product vision, strategy, and roadmap, and work cross-functionally to deliver value to our users.',
    responsibilities: [
      'Define and communicate the product vision and strategy.',
      'Gather and analyze user feedback, market trends, and competitive intelligence.',
      'Develop and manage the product roadmap, prioritizing features based on impact and effort.',
      'Write clear and concise product requirements and user stories.',
      'Collaborate with engineering, design, and marketing teams to launch new features.'
    ],
    requirements: [
      '5+ years of experience in product management, preferably in B2B SaaS.',
      'Proven track record of successfully launching and scaling products.',
      'Strong analytical and problem-solving skills.',
      'Excellent communication and stakeholder management skills.',
      'Technical background or strong understanding of software development is a plus.'
    ],
    benefits: [
      'Competitive salary and equity package.',
      'Comprehensive health, dental, and vision insurance.',
      'Unlimited PTO and flexible working hours.',
      'Home office stipend.',
      'Annual learning and development budget.'
    ]
  },
  {
    id: 'eng-002',
    title: 'Backend Engineer (Go)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    postedAt: '2023-10-28',
    description: 'Join our core infrastructure team to build robust, high-performance microservices that power Ornitech\'s platform. You will be working with Go, Kubernetes, and various cloud technologies.',
    responsibilities: [
      'Design, build, and maintain scalable backend services in Go.',
      'Optimize database queries and system performance.',
      'Implement robust API endpoints for internal and external use.',
      'Ensure system reliability and uptime through proper monitoring and alerting.'
    ],
    requirements: [
      '3+ years of backend engineering experience.',
      'Strong proficiency in Go (Golang).',
      'Experience with relational databases (PostgreSQL) and caching (Redis).',
      'Familiarity with containerization and orchestration (Docker, Kubernetes).'
    ],
    benefits: [
      'Competitive salary and equity package.',
      'Comprehensive health, dental, and vision insurance.',
      'Unlimited PTO and flexible working hours.',
      'Home office stipend.'
    ]
  },
  {
    id: 'mkt-001',
    title: 'Growth Marketing Manager',
    department: 'Marketing',
    location: 'London, UK',
    type: 'Full-time',
    postedAt: '2023-10-10',
    description: 'We are looking for a data-driven Growth Marketing Manager to accelerate our user acquisition and retention efforts. You will experiment across various channels to find scalable growth levers.',
    responsibilities: [
      'Develop and execute growth strategies across paid and organic channels.',
      'Design and run A/B tests to optimize conversion rates.',
      'Analyze marketing data to identify trends and opportunities.',
      'Manage marketing budgets and track ROI.'
    ],
    requirements: [
      '4+ years of experience in growth marketing or performance marketing.',
      'Strong analytical skills and proficiency with data analysis tools.',
      'Experience managing paid advertising campaigns (Google Ads, LinkedIn, etc.).',
      'Creative mindset with a focus on experimentation.'
    ],
    benefits: [
      'Competitive salary and equity package.',
      'Comprehensive health, dental, and vision insurance.',
      'Unlimited PTO and flexible working hours.',
      'Annual learning and development budget.'
    ]
  }
];