import type { Project } from '@/data/projects';

const displayTitles: Record<string, { name: string; subtitle?: string }> = {
  jango: { name: 'JANGO', subtitle: 'Enterprise Document Intelligence Platform' },
  'institutional-performance-analytics-system': {
    name: 'Institutional Performance Analytics System',
  },
  'ai-developer-toolbox': { name: 'AI Developer Toolbox' },
  cinematch: { name: 'CineMatch', subtitle: 'Movie Recommendation System' },
  'track-n-test': { name: 'DSA Progress Tracker', subtitle: 'Track-n-Test' },
};

export const projectOrder = [
  'jango',
  'institutional-performance-analytics-system',
  'ai-developer-toolbox',
  'cinematch',
  'track-n-test',
];

export function projectDisplay(project: Project) {
  return displayTitles[project.slug] ?? { name: project.title };
}

export function findSections(project: Project, headings: string[]) {
  return project.sections.filter((section) => headings.includes(section.heading));
}

export function sectionParagraphs(project: Project, headings: string[]) {
  return findSections(project, headings)[0]?.body ?? [];
}

export function orderedProjects(projects: Project[]) {
  return projectOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
}

export const jangoPipeline = [
  'PDF Upload',
  'Text Extraction',
  'Chunking',
  'Embeddings',
  'ChromaDB',
  'Semantic Retrieval',
  'Qwen3',
  'Answer',
];
