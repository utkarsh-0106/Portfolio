export interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    title: 'IBM AI Fundamentals',
    issuer: 'IBM',
    date: '2026',
    skills: ['Artificial Intelligence', 'AI Lifecycle', 'Ethics in AI'],
  },
  {
    title: 'IBM Getting Started with AI',
    issuer: 'IBM',
    date: '2026',
    skills: ['Machine Learning', 'Python', 'Watson'],
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Online Program',
    date: '2026',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Adobe India Hackathon',
    issuer: 'Adobe',
    date: '2025',
    skills: ['Rapid Prototyping', 'Product Thinking', 'Team Collaboration'],
  },
  {
    title: 'Flipkart GRiD',
    issuer: 'Flipkart',
    date: '2024',
    skills: ['Algorithms', 'Systems Design', 'Problem Solving'],
  },
  {
    title: 'HackVriksh',
    issuer: 'HackVriksh',
    date: '2025',
    skills: ['End-to-end Build', 'Pitching', 'Demo Engineering'],
  },
  {
    title: 'TATA Crucible',
    issuer: 'TATA',
    date: '2025',
    skills: ['Tech & Business Awareness', 'Quick Thinking'],
  },
  {
  title: 'TenzorX National AI Hackathon 2026',
  issuer: 'Poonawalla Fincorp (via Unstop)',
  date: '2026',
  skills: ['Artificial Intelligence','Hackathon Participation','Problem Solving','Team Collaboration'],
},
{
  title: 'Nation Building Case Study Competition',
  issuer: 'Nation with NaMo',
  date: '2026',
  skills: [
    'Case Study Analysis',
    'Strategic Thinking',
    'Problem Solving',
    'Business Analysis'
  ],
},
];
