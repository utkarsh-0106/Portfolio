export interface ExperienceItem {
  title: string;
  org: string;
  period: string;
  type: 'Training' | 'Hackathon' | 'Technical Learning' | 'Academic Project';
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Full Stack Web Development Training',
    org: 'Self-directed + Online Program',
    period: '2023 — 2024',
    type: 'Training',
    description:
      'Completed an intensive full stack development program covering both backend and frontend engineering, building and shipping real projects along the way.',
    highlights: [
      'Built REST APIs with Node.js, Express, and Spring Boot.',
      'Designed and queried relational and document databases.',
      'Shipped full stack projects with React frontends.',
    ],
  },
  {
    title: 'Adobe India Hackathon',
    org: 'Adobe',
    period: '2024',
    type: 'Hackathon',
    description:
      'Competed in a national-level hackathon, building a working solution under tight time constraints against teams from across the country.',
    highlights: [
      'Rapidly prototyped and shipped a feature-complete solution.',
      'Collaborated under pressure with strict deadlines.',
      'Gained exposure to real-world product thinking and scope management.',
    ],
  },
  {
    title: 'Flipkart GRiD',
    org: 'Flipkart',
    period: '2024',
    type: 'Hackathon',
    description:
      'Participated in Flipkart\'s GRiD challenge, solving engineering problems inspired by real e-commerce scale and complexity.',
    highlights: [
      'Tackled problems grounded in real-world systems at scale.',
      'Sharpened algorithmic and problem-solving speed.',
    ],
  },
  {
    title: 'HackVriksh',
    org: 'HackVriksh',
    period: '2024',
    type: 'Hackathon',
    description:
      'Built and pitched a project end-to-end at a competitive hackathon, taking it from idea to working demo.',
    highlights: [
      'Owned the full build — from concept to deployable demo.',
      'Practiced communicating technical ideas to a judging panel.',
    ],
  },
  {
    title: 'TATA Crucible',
    org: 'TATA',
    period: '2024',
    type: 'Hackathon',
    description:
      'Competed in the TATA Crucible business and tech quiz, testing breadth across technology, business, and current trends.',
    highlights: [
      'Developed broad awareness across tech and business domains.',
      'Sharpened quick-thinking and recall under time pressure.',
    ],
  },
  {
    title: 'IBM AI Fundamentals',
    org: 'IBM',
    period: '2024',
    type: 'Technical Learning',
    description:
      'Earned IBM\'s AI Fundamentals credential, building a structured understanding of artificial intelligence concepts and workflows.',
    highlights: [
      'Learned the AI lifecycle end to end.',
      'Understood where AI fits — and where it does not — in real products.',
    ],
  },
  {
    title: 'Academic Projects',
    org: 'Engineering Curriculum',
    period: '2022 — 2024',
    type: 'Academic Project',
    description:
      'Built a portfolio of academic projects spanning analytics, recommendation systems, and developer tooling — each chosen to stretch a different skill.',
    highlights: [
      'Institutional Performance Analytics System (Python, Streamlit).',
      'CineMatch movie recommendation system (ML, deployed on Render).',
      'Track-n-Test DSA progress tracker.',
      'AI Developer Toolbox (React, deployed on Vercel).',
    ],
  },
];
