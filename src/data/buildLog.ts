import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';

export type BuildLogKind = 'Project' | 'Experience';

export interface BuildLogEntry {
  id: string;
  period: string;
  year: number;
  kind: BuildLogKind;
  title: string;
  organization?: string;
  summary: string;
  href: string;
  tags: string[];
}

const projectEntries: BuildLogEntry[] = projects.map((project) => ({
  id: `project-${project.slug}`,
  period: project.year,
  year: Number(project.year),
  kind: 'Project',
  title: project.title,
  summary: project.summary,
  href: `/projects/${project.slug}`,
  tags: project.tags.slice(0, 4),
}));

const experienceEntries: BuildLogEntry[] = experiences.map((experience, index) => {
  const yearMatch = experience.period.match(/\d{4}/);
  const year = yearMatch ? Number(yearMatch[0]) : 0;

  return {
    id: `experience-${index}`,
    period: experience.period,
    year,
    kind: 'Experience',
    title: experience.title,
    organization: experience.org,
    summary: experience.description,
    href: '/experience',
    tags: experience.highlights.slice(0, 2),
  };
});

/**
 * The Build Log is intentionally derived from existing portfolio data.
 * It does not invent commit dates, launch dates, usage metrics, or milestones
 * that are not represented in the source data.
 */
export const buildLogEntries: BuildLogEntry[] = [
  ...experienceEntries,
  ...projectEntries,
].sort((a, b) => {
  if (b.year !== a.year) return b.year - a.year;
  return a.kind === 'Experience' ? -1 : 1;
});

export const buildLogPreview = buildLogEntries.slice(0, 5);
