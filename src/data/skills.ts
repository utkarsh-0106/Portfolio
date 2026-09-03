export interface Skill {
  name: string;
  icon: string; // svg path data (24x24 viewBox, single-color, currentColor)
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

// Icons sourced from simple-icons (single-color, 24x24 viewBox, use currentColor)
export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    description: 'Languages I think and solve problems in.',
    skills: [
      { name: 'C++', icon: '...' },
      { name: 'Java', icon: '...' },
      { name: 'Python', icon: '...' },
      { name: 'JavaScript', icon: '...' },
      { name: 'TypeScript', icon: '...' },
      { name: 'SQL', icon: '...' },
    ],
  },

  {
    title: 'Backend',
    description: 'APIs, authentication, and application services.',
    skills: [
      { name: 'FastAPI', icon: '...' },
      { name: 'Spring Boot', icon: '...' },
      { name: 'Node.js', icon: '...' },
      { name: 'Express.js', icon: '...' },
      { name: 'Flask', icon: '...' },
      { name: 'REST APIs', icon: '...' },
      { name: 'JWT', icon: '...' },
    ],
  },

  {
    title: 'Frontend',
    description: 'Interfaces that feel effortless.',
    skills: [
      { name: 'React', icon: '...' },
      { name: 'TypeScript', icon: '...' },
      { name: 'JavaScript', icon: '...' },
      { name: 'HTML5', icon: '...' },
      { name: 'CSS3', icon: '...' },
      { name: 'Tailwind CSS', icon: '...' },
    ],
  },

  {
    title: 'Database',
    description: 'Where state lives and queries stay fast.',
    skills: [
      { name: 'PostgreSQL', icon: '...' },
      { name: 'MySQL', icon: '...' },
      { name: 'MongoDB', icon: '...' },
      { name: 'SQLite', icon: '...' },
      { name: 'ChromaDB', icon: '...' },
    ],
  },

  {
    title: 'AI & ML',
    description: 'Building intelligent applications with modern AI.',
    skills: [
      { name: 'RAG', icon: '...' },
      { name: 'LangChain', icon: '...' },
      { name: 'Ollama', icon: '...' },
      { name: 'Qwen3', icon: '...' },
      { name: 'Scikit-learn', icon: '...' },
      { name: 'Pandas', icon: '...' },
      { name: 'NumPy', icon: '...' },
      { name: 'Streamlit', icon: '...' },
    ],
  },

  {
    title: 'Core CS',
    description: "The fundamentals that don't go out of style.",
    skills: [
      { name: 'Data Structures', icon: '...' },
      { name: 'Algorithms', icon: '...' },
      { name: 'OOP', icon: '...' },
      { name: 'DBMS', icon: '...' },
      { name: 'Operating Systems', icon: '...' },
      { name: 'Computer Networks', icon: '...' },
    ],
  },

  {
    title: 'Tools & Deployment',
    description: 'Tools I use to build, test, and ship.',
    skills: [
      { name: 'Git', icon: '...' },
      { name: 'GitHub', icon: '...' },
      { name: 'Docker', icon: '...' },
      { name: 'Postman', icon: '...' },
      { name: 'VS Code', icon: '...' },
      { name: 'Maven', icon: '...' },
      { name: 'Vercel', icon: '...' },
      { name: 'Render', icon: '...' },
    ],
  },
];