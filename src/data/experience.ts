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
    title: 'Software Development Intern',
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
      'Developed responsive full-stack web applications using the MERN stack, building RESTful APIs, database operations, and frontend-backend integrations.',
    highlights: [
      'Developed responsive full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
      'Built and integrated RESTful APIs for backend business logic and frontend-backend communication.',
      'Implemented MongoDB CRUD operations and data modeling.',
      'Applied Object-Oriented Programming, asynchronous programming, input validation, API error handling, debugging, and software testing practices.',
      'Collaborated using Git, participated in code reviews, and followed Agile software development workflows.',
    ],
  },
  {
    title: 'Adobe India Hackathon',
    org: 'Adobe',
    period: '2025',
    type: 'Hackathon',
    description:
      'Participated in Round 1 of the Adobe India Hackathon 2025, applying programming fundamentals, analytical reasoning, problem-solving, and coding skills.',
    highlights: [
      'Participated in the Online MCQ Assessment and Coding assessment.',
      'Applied problem-solving, programming fundamentals, analytical reasoning, and coding skills during the assessment.',
      'Represented IMS Engineering College (IMSEC).',
    ],
  },
  {
    title: 'Flipkart GRiD 6.0',
    org: 'Flipkart',
    period: '2024',
    type: 'Hackathon',
    description:
      'Participated in Level 1 of Flipkart GRiD 6.0 under the Software Development Track, completing the E-Commerce & Technology Quiz.',
    highlights: [
      'Participated in the Software Development Track.',
      'Completed Level 1: E-Commerce & Technology Quiz.',
      'Applied software development fundamentals, analytical thinking, problem-solving, and knowledge of e-commerce and technology concepts.',
    ],
  },
  {
    title: 'TATA Crucible Campus Quiz',
    org: 'Tata Group',
    period: '2025',
    type: 'Hackathon',
    description:
      'Participated in the Tata Crucible Campus Quiz 2025 as a representative of IMS Engineering College (IMSEC).',
    highlights: [
      'Participated in the Tata Crucible Campus Quiz 2025, organized by the Tata Group.',
      'Represented IMS Engineering College (IMSEC).',
      'Demonstrated knowledge of business, technology, current affairs, analytical reasoning, and problem-solving.',
    ],
  },
];
