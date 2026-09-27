/**
 * Verified knowledge base for the "Ask My Portfolio" assistant.
 *
 * Ground rules for this file:
 * 1. Every fact below is either derived at runtime from the existing portfolio data
 *    files, or written here verbatim from copy that already ships in this repo.
 * 2. Nothing may be added that the portfolio does not already state. If a detail is
 *    not documented (test counts, user numbers, deployment scale, degree title),
 *    it is listed as "not documented" so the assistant can say so out loud.
 * 3. Imports are deliberately RELATIVE, not `@/` aliased, because this module is
 *    compiled into the serverless function at /api/ask as well as the browser bundle.
 */
import { profile } from './profile.js';
import { projects, type Project } from './projects.js';
import { displayedSkillCategories } from './skills.js';
import { experiences } from './experience.js';
import { certifications } from './certifications.js';
import { jangoPipeline, orderedProjects, projectDisplay } from '../lib/projectView.js';

export interface AssistantSource {
  id: string;
  label: string;
  /** Internal route, only when the portfolio actually has a page for it. */
  path?: string;
}

export interface AssistantProject {
  slug: string;
  name: string;
  subtitle?: string;
  tagline: string;
  summary: string;
  year: string;
  role: string;
  problem: string[];
  solution: string[];
  architecture: string[];
  technologies: string[];
  features: string[];
  learning: string[];
  pipeline?: string[];
  links: { label: string; url: string; type: 'github' | 'live' | 'video' }[];
  notDocumented: string[];
  source: AssistantSource;
  keywords: string[];
}

/* -------------------------------------------------------------------------- */
/* Project notes — only the "not documented" gaps, which the assistant must     */
/* be able to surface. Everything else is derived from src/data/projects.ts.     */
/* -------------------------------------------------------------------------- */

const projectGaps: Record<string, string[]> = {
  jango: [
    'No automated test count, coverage figure, or test framework is documented for this project.',
    'No user count, latency, throughput, or production traffic claim is documented.',
    'No live demo URL is published for this project — only the GitHub repository.',
    'Upload size limits, chunk sizes, and token limits are not documented in the portfolio.',
  ],
  'ai-developer-toolbox': [
    'The number of tools, API endpoints, or integrations is not documented in the portfolio.',
    'No usage, traffic, or performance metrics are documented.',
  ],
  'institutional-performance-analytics-system': [
    'Record counts, row counts, dataset sizes, and test counts are not documented in the portfolio.',
    'The number of data sources or adapters is not documented in the portfolio.',
  ],
  cinematch: [
    'Dataset size, model accuracy, precision/recall, and evaluation results are not documented in the portfolio.',
  ],
  'track-n-test': [
    'The number of tracked problems or users is not documented in the portfolio.',
  ],
};

const CASE_SECTIONS = {
  problem: ['Problem', 'Business Problem', 'Technical Problem'],
  architecture: ['Architecture'],
  stack: ['Tech Stack', 'Technology Stack'],
  features: ['Features', 'Key Features'],
  learning: ['Learning', 'Key Learnings'],
} as const;

function sectionBody(project: Project, headings: readonly string[]): string[] {
  const wanted = new Set(headings);
  return project.sections.filter((section) => wanted.has(section.heading)).flatMap((section) => section.body);
}

export const assistantProjects: AssistantProject[] = orderedProjects(projects).map((project) => {
  const display = projectDisplay(project);
  const technologyLines = sectionBody(project, CASE_SECTIONS.stack);

  return {
    slug: project.slug,
    name: display.name,
    subtitle: display.subtitle,
    tagline: project.tagline,
    summary: project.summary,
    year: project.year,
    role: project.role,
    problem: sectionBody(project, CASE_SECTIONS.problem),
    solution: [project.tagline, ...sectionBody(project, CASE_SECTIONS.architecture)],
    architecture: [...sectionBody(project, CASE_SECTIONS.architecture), ...technologyLines],
    technologies: [...project.tags],
    features: sectionBody(project, CASE_SECTIONS.features),
    learning: sectionBody(project, CASE_SECTIONS.learning),
    pipeline: project.slug === 'jango' ? jangoPipeline : undefined,
    links: project.links.map((link) => ({ label: link.label, url: link.url, type: link.type })),
    notDocumented: projectGaps[project.slug] ?? [],
    source: {
      id: `project:${project.slug}`,
      label: display.name,
      path: `/projects/${project.slug}`,
    },
    keywords: [
      display.name,
      display.subtitle ?? '',
      project.title,
      project.tagline,
      ...project.tags,
      ...project.sections.map((section) => section.heading),
    ],
  };
});

/* -------------------------------------------------------------------------- */
/* Sections                                                                    */
/* -------------------------------------------------------------------------- */

export interface KnowledgeSection {
  id: string;
  title: string;
  /** One-line label used for the "Sources" chips under an answer. */
  facts: string[];
  keywords: string[];
  source: AssistantSource;
}

const skillLines = displayedSkillCategories.map(
  (category) => `${category.title}: ${category.skills.map((skill) => skill.name).join(', ')}.`
);

const experienceLines = experiences.map(
  (item) =>
    `${item.title} — ${item.org} (${item.period}, ${item.type}). ${item.description} Verified responsibilities: ${item.highlights.join(' ')}`
);

const certificationLines = certifications.map(
  (cert) => `${cert.title} — ${cert.issuer}, ${cert.date}. Skills covered: ${cert.skills.join(', ')}.`
);

const metricLines = profile.heroStats.map((stat) => `${stat.value} ${stat.label}`);

const sectionDefinitions: Omit<KnowledgeSection, 'facts' | 'keywords'>[] = [
  {
    id: 'profile',
    title: 'Profile',
    source: { id: 'profile', label: 'Profile', path: '/about' },
  },
  {
    id: 'education',
    title: 'Education',
    source: { id: 'education', label: 'Education', path: '/about' },
  },
  {
    id: 'focus',
    title: 'Focus',
    source: { id: 'focus', label: 'Focus', path: '/about' },
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    source: { id: 'skills', label: 'Technical Skills', path: '/skills' },
  },
  {
    id: 'experience',
    title: 'Experience',
    source: { id: 'experience', label: 'Experience', path: '/experience' },
  },
  {
    id: 'certifications',
    title: 'Certifications',
    source: { id: 'certifications', label: 'Certifications', path: '/certifications' },
  },
  {
    id: 'metrics',
    title: 'Verified Metrics',
    source: { id: 'metrics', label: 'Verified Metrics' },
  },
  {
    id: 'contact',
    title: 'Contact',
    source: { id: 'contact', label: 'Contact', path: '/contact' },
  },
  {
    id: 'engineering-approach',
    title: 'Engineering Approach',
    source: { id: 'engineering-approach', label: 'Engineering Approach', path: '/skills' },
  },
];

const sectionContent: Record<string, { facts: string[]; keywords: string[] }> = {
  profile: {
    facts: [
      `Name: ${profile.name}.`,
      `Role: ${profile.title}.`,
      `Focus area: ${profile.focus}.`,
      `Tagline: ${profile.tagline}`,
      `Based in ${profile.city}.`,
      'Current academic stage: Computer Science undergraduate, class of 2027.',
    ],
    keywords: [
      'name', 'who', 'about', 'role', 'title', 'identity', 'utkarsh', 'maheshwari', 'undergraduate',
      'student', 'based', 'location', 'ghaziabad', 'india', 'focus', 'tagline', 'summary', 'profile',
    ],
  },
  education: {
    facts: [
      'Computer Science undergraduate, 2023 — 2027, graduating 2027.',
      'College referenced in the portfolio: IMS Engineering College (IMSEC) — represented in the Adobe India Hackathon 2025 and the TATA Crucible Campus Quiz 2025.',
      'Coursework named in the portfolio: DSA, algorithms, OOP, DBMS, operating systems, and computer networks.',
      'Not documented: the exact degree title (for example B.Tech), institute department, CGPA, or specific course list beyond the subjects named above.',
    ],
    keywords: [
      'education', 'degree', 'college', 'university', 'school', 'ims', 'imsec', 'ims engineering college',
      'student', 'undergraduate', 'btech', 'b.tech', 'b tech', 'graduating', 'graduation', '2027', 'course',
      'coursework', 'cgpa', 'grades',
    ],
  },
  focus: {
    facts: [
      `Focus: ${profile.focus}.`,
      'Currently exploring: Backend Architecture, RAG & LLM Applications, System Design, Problem Solving.',
      'Builds reliable APIs, data-driven systems, and AI-powered applications.',
      'Described work areas: backend architecture, AI engineering, problem solving, system design.',
    ],
    keywords: [
      'specialize', 'specialise', 'specialization', 'focus', 'interested', 'working on', 'exploring',
      'backend', 'ai', 'engineering', 'system design', 'architecture', 'expertise', 'strong', 'good at',
      'backend engineering', 'ai engineering',
    ],
  },
  skills: {
    facts: [
      ...skillLines,
      'Skills listed here are the ones the portfolio presents; the Skills page deliberately hides entries that are not evidenced by shipped projects or internships.',
      'Not documented: production experience with container orchestration, Kubernetes, or cloud platform services (for example AWS, GCP, Azure). These are not part of the presented skill set.',
    ],
    keywords: [
      'skill', 'skills', 'stack', 'tech', 'technology', 'technologies', 'tool', 'tools', 'language',
      'languages', 'framework', 'frameworks', 'library', 'libraries', 'database', 'databases', 'programming',
      'backend', 'frontend', 'database', 'databases', 'used', 'uses', 'use', 'proficient', 'experience with',
      ...displayedSkillCategories.flatMap((category) => category.skills.map((skill) => skill.name.toLowerCase())),
    ],
  },
  experience: {
    facts: [
      'Internship count stated in the portfolio: 2.',
      ...experienceLines,
      'Hackathon and competition entries are participation records, not employment or internships.',
      'Not documented: team sizes, direct manager responsibilities, production deployments owned, or business impact metrics.',
    ],
    keywords: [
      'experience', 'internship', 'internships', 'apprenticeship', 'job', 'jobs', 'work', 'worked',
      'working', 'employment', 'employer', 'company', 'companies', 'role', 'roles', 'responsibility',
      'responsibilities', 'professional', 'career', 'hackathon', 'competition', 'quiz', 'volunteer',
      'elevanceskills', 'cetpa', 'ibm', 'skillsbuild', 'nasccom', 'adobe', 'flipkart', 'tata', 'crucible',
      'mern', 'node', 'express', 'mongodb', 'firebase', 'next.js', 'redux',
    ],
  },
  certifications: {
    facts: [
      ...certificationLines,
      'Not documented: certification credential IDs, issuing verification links, or expiry dates for any certification.',
    ],
    keywords: [
      'certification', 'certifications', 'certificate', 'certificates', 'course', 'courses', 'credential',
      'credentials', 'ibm', 'adobe', 'flipkart', 'hackvriksh', 'tata', 'tenzorx', 'nascom', 'training',
      'license', 'accreditation',
    ],
  },
  metrics: {
    facts: [
      ...metricLines.map((metric) => `Verified metric: ${metric}.`),
      'These three figures are the only numeric metrics stated in the portfolio.',
      'Not documented: user counts, request volumes, latency, uptime, model accuracy, dataset sizes, revenue, or any other performance or scale number.',
    ],
    keywords: [
      'metric', 'metrics', 'number', 'numbers', 'how many', 'count', 'counted', 'solved', 'dsa', 'problems',
      'leetcode', 'tests', 'test', 'testing', 'automated', 'experience', 'stat', 'stats', 'statistics',
      'performance', 'scale', 'users', 'accuracy', 'percentage', '500', 'two internships',
    ],
  },
  contact: {
    facts: [
      `Email: ${profile.email}`,
      `Phone: ${profile.phone}`,
      `Location: ${profile.city}`,
      `GitHub: ${profile.github}`,
      `LinkedIn: ${profile.linkedin}`,
      `LeetCode: ${profile.leetcode}`,
      `Resume: ${profile.resumeUrl}`,
      'A contact form on the portfolio sends messages through EmailJS.',
    ],
    keywords: [
      'contact', 'contact', 'reach', 'reach out', 'email', 'mail', 'phone', 'call', 'whatsapp', 'message',
      'hire', 'hiring', 'available', 'availability', 'resume', 'cv', 'github', 'linkedin', 'leetcode',
      'social', 'links', 'talk', 'connect', 'form',
    ],
  },
  'engineering-approach': {
    facts: [
      'Fundamentals: strong focus on DSA, algorithms, OOP, DBMS, operating systems, and networking.',
      'Backend first: design APIs, authentication, data models, and application logic.',
      'Build with AI: use RAG, LLMs, and retrieval systems to build useful AI applications.',
      'Ship and improve: test, debug, deploy, and continuously improve the system.',
      'Design deliberately: clear APIs, data models, and maintainable structure.',
      'Build with evidence: testing, validation, and measurable system behavior.',
      'Ship end-to-end: from backend logic to usable interfaces and deployment.',
      'Stated learning path: C++ / DSA → Python / Backend → FastAPI / REST APIs → SQL / Databases → RAG / LLM Applications → React / Frontend → System Design.',
    ],
    keywords: [
      'approach', 'methodology', 'philosophy', 'principles', 'process', 'workflow', 'style', 'how do you work',
      'how you work', 'engineering', 'practice', 'practices', 'habits', 'testing', 'debug', 'deploy',
      'system design', 'code review', 'agile',
    ],
  },
};

export const assistantSections: KnowledgeSection[] = sectionDefinitions.map((definition) => ({
  ...definition,
  ...sectionContent[definition.id],
}));

/* -------------------------------------------------------------------------- */
/* Assistant identity + guardrails                                             */
/* -------------------------------------------------------------------------- */

export const assistantIdentity = {
  owner: profile.name,
  focus: profile.focus,
  role: profile.title,
  /** Used verbatim when the supplied context cannot support an answer. */
  refusal:
    "I don't have verified information about that in Utkarsh's portfolio.",
  groundingNote:
    'Answers are generated from verified portfolio information only. Anything not documented in the portfolio is reported as not documented, never estimated.',
} as const;

/* -------------------------------------------------------------------------- */
/* Source registry (for answer attribution)                                    */
/* -------------------------------------------------------------------------- */

export const assistantSources: AssistantSource[] = [
  ...assistantSections.map((section) => section.source),
  ...assistantProjects.map((project) => project.source),
];

export function findAssistantSource(id: string): AssistantSource | undefined {
  return assistantSources.find((source) => source.id === id);
}

/* -------------------------------------------------------------------------- */
/* Starter prompts                                                             */
/* -------------------------------------------------------------------------- */

export interface SuggestedQuestion {
  id: string;
  label: string;
  question: string;
}

export const assistantSuggestedQuestions: SuggestedQuestion[] = [
  {
    id: 'jango-overview',
    label: 'How does JANGO work?',
    question: 'How does JANGO work?',
  },
  {
    id: 'jango-rag',
    label: 'Explain the RAG architecture.',
    question: 'Explain the RAG architecture used in JANGO.',
  },
  {
    id: 'backend',
    label: 'Backend technologies',
    question: 'What backend technologies does Utkarsh use?',
  },
  {
    id: 'ai-projects',
    label: 'AI projects',
    question: 'Which projects involve AI, and what AI work is in them?',
  },
  {
    id: 'internships',
    label: 'Internships',
    question: 'Tell me about his internships and what he built there.',
  },
  {
    id: 'testing',
    label: 'Testing experience',
    question: 'What testing experience does he have?',
  },
  {
    id: 'analytics',
    label: 'Institutional analytics system',
    question: 'Tell me about the Institutional Performance Analytics System.',
  },
  {
    id: 'python-projects',
    label: 'Projects using Python',
    question: 'Show me the projects that use Python.',
  },
  {
    id: 'react-projects',
    label: 'Projects using React',
    question: 'What did he build with React?',
  },
  {
    id: 'contact',
    label: 'Contact details',
    question: 'How can I contact him?',
  },
];
