export interface ExperienceItem {
  title: string;
  org: string;
  period: string;
  type: 'Apprenticeship' | 'Internship' | 'Training' | 'Hackathon' | 'Technical Learning' | 'Academic Project';
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Full Stack Web Development Intern',
    org: 'ElevanceSkills',
    period: 'Sep 2026 - Present',
    type: 'Internship',
    description:
      'Working on a full stack web application, implementing backend APIs, authentication, social features, and security-focused functionality.',
    highlights: [
      'Developed REST APIs using Node.js, Express, MongoDB, and Mongoose.',
      'Implemented Firebase Admin authentication with backend token verification and protected API routes.',
      'Built social features including posts, likes, comments, shares, follows, friend requests, and notifications.',
      'Implemented posting quotas, rate limiting, media validation, and authorization for protected operations.',
      'Integrated Next.js and Redux frontend features with backend REST APIs for the Public Space module.',
      'Created and executed backend tests covering authentication, posting, authorization, and social functionality.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'CETPA Infotech — IBM SkillsBuild & NASSCOM Program',
    period: 'June 2026 - Aug 2026',
    type: 'Apprenticeship',
    description:
      'Architected and delivered responsive frontend components and modular backend microservices in an agile environment, focusing on clean code architecture and resilient API design.',
    highlights: [
      'Built responsive UI components and modular Node.js backend services.',
      'Implemented robust API error-handling logic and input validation middleware to increase system resilience.',
      'Practiced OOP principles, asynchronous programming patterns, and strict peer code reviews via Git.',
    ],
  },
  {
    title: 'Adobe India Hackathon',
    org: 'Adobe',
    period: '2025',
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
    period: '2025',
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
    period: '2025',
    type: 'Hackathon',
    description:
      'Competed in the TATA Crucible business and tech quiz, testing breadth across technology, business, and current trends.',
    highlights: [
      'Developed broad awareness across tech and business domains.',
      'Sharpened quick-thinking and recall under time pressure.',
    ],
  },
  {
    title: 'Academic Projects',
    org: 'Engineering Curriculum',
    period: '2023 — 2026',
    type: 'Academic Project',
    description:
      'Built a portfolio of academic projects spanning analytics, recommendation systems, and developer tooling — each chosen to stretch a different skill.',
    highlights: [
      'Institutional Performance Analytics System (Python, Streamlit).',
      'AI Developer Toolbox (React, deployed on Vercel).',
      'CineMatch movie recommendation system (ML, deployed on Render).',
      'Track-n-Test DSA progress tracker.',
    ],
  },
];
