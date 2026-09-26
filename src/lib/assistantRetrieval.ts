/**
 * Lightweight local retrieval over the verified portfolio knowledge base.
 *
 * Design constraints (intentional):
 * - No vector database, no embeddings, no external search service. The corpus is a
 *   few kilobytes of structured TypeScript, so a keyword index with IDF weighting
 *   is both faster and fully deterministic.
 * - Server-only. Nothing in `src/` imports this module, so it never reaches the
 *   browser bundle; it is compiled into the /api/ask serverless function.
 * - Imports are relative so the function can be bundled without the Vite `@/` alias.
 */
import {
  assistantIdentity,
  assistantProjects,
  assistantSections,
  type AssistantProject,
  type AssistantSource,
} from '../data/portfolioAssistant';

export interface RetrievedChunk {
  id: string;
  sourceId: string;
  title: string;
  text: string;
  score: number;
}

export interface RetrievalResult {
  chunks: RetrievedChunk[];
  sources: AssistantSource[];
  /** False when nothing in the verified corpus matches the question. */
  grounded: boolean;
}

const MAX_CHUNKS = 6;
const MAX_CONTEXT_CHARS = 2800;
const MIN_SCORE = 1.1;
const MIN_COVERAGE = 0.2;

const STOPWORDS = new Set([
  'a', 'about', 'all', 'also', 'am', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'been', 'being', 'but',
  'by', 'can', 'could', 'did', 'do', 'does', 'doing', 'done', 'for', 'from', 'had', 'has', 'have', 'he',
  'her', 'here', 'him', 'his', 'how', 'i', 'if', 'in', 'into', 'is', 'it', 'its', 'me', 'more', 'most',
  'much', 'my', 'of', 'on', 'one', 'only', 'or', 'our', 'out', 'over', 'please', 'she', 'so', 'some',
  'such', 'than', 'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'this', 'those',
  'to', 'too', 'up', 'us', 'use', 'used', 'uses', 'using', 'very', 'was', 'we', 'were', 'what', 'when',
  'where', 'which', 'while', 'who', 'whom', 'why', 'will', 'with', 'would', 'you', 'your',
]);

/** Questions that are never answerable from an engineering portfolio. */
const OUT_OF_SCOPE_PATTERNS = [
  'favorite', 'favourite', 'hobby', 'hobbies', 'salary', 'ctc', 'married', 'single', 'girlfriend',
  'boyfriend', 'wife', 'husband', 'age', 'birthday', 'date of birth', 'capital of', 'weather',
  'horoscope', 'zodiac', 'religion', 'caste', 'crush', 'dream job', 'bike', 'car', 'food',
  'favourite movie', 'net worth',
];

interface Document {
  id: string;
  sourceId: string;
  title: string;
  /** Weighted terms: title, names, tags, section headings. */
  keywords: string;
  body: string;
  /** Phrases that should strongly indicate this document. */
  aliases?: string[];
}

function tokenize(value: string): string[] {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9+#.]+/g, ' ')
    .split(/\s+/)
    .map((token) => token.replace(/^[.+#]+|[.+#]+$/g, ''))
    .filter((token) => token.length > 1 && !STOPWORDS.has(token));
}

function bullets(lines: string[], limit = 8): string {
  return lines.slice(0, limit).map((line) => `- ${line}`).join('\n');
}

function projectDocuments(project: AssistantProject): Document[] {
  const base = {
    sourceId: project.source.id,
    title: project.name,
    aliases: [project.name, project.slug.replace(/-/g, ' '), project.slug, project.subtitle ?? project.name]
      .filter(Boolean)
      .map((alias) => alias.toLowerCase()),
  };

  const keywordText = [
    project.name,
    project.subtitle ?? '',
    project.year,
    project.role,
    ...project.technologies,
    ...(project.pipeline ?? []),
  ].join(' ');

  const documents: Document[] = [
    {
      ...base,
      id: `${project.slug}:overview`,
      keywords: `${keywordText} ${project.name} ${project.subtitle ?? ''}`,
      body: [
        `${project.name}${project.subtitle ? ` — ${project.subtitle}` : ''} (${project.year}, ${project.role}).`,
        `Tagline: ${project.tagline}`,
        `Summary: ${project.summary}`,
        `Technologies: ${project.technologies.join(', ')}.`,
        `Problem: ${bullets(project.problem, 3)}`,
        `Features: ${bullets(project.features, 6)}`,
        `Repository: ${project.links.map((link) => `${link.label} ${link.url}`).join('; ')}`,
        `Not documented: ${project.notDocumented.slice(0, 2).join(' ')}`,
      ].join('\n'),
    },
  ];

  if (project.architecture.length > 0) {
    documents.push({
      ...base,
      id: `${project.slug}:architecture`,
      keywords: `${keywordText} architecture stack technologies implementation pipeline`,
      body: [
        `Architecture and stack for ${project.name}:`,
        bullets(project.architecture, 8),
        project.pipeline ? `Document flow: ${project.pipeline.join(' -> ')}.` : '',
      ]
        .filter(Boolean)
        .join('\n'),
    });
  }

  if (project.learning.length > 0) {
    documents.push({
      ...base,
      id: `${project.slug}:learning`,
      keywords: `${keywordText} learning challenges future improvements`,
      body: [`What ${project.name} taught:`, bullets(project.learning, 4)].join('\n'),
    });
  }

  return documents;
}

function buildDocuments(): Document[] {
  const documents: Document[] = assistantProjects.flatMap(projectDocuments);

  for (const section of assistantSections) {
    documents.push({
      id: `section:${section.id}`,
      sourceId: section.source.id,
      title: section.title,
      keywords: `${section.title} ${section.keywords.join(' ')}`,
      body: [`${section.title}:`, bullets(section.facts, 12)].join('\n'),
    });
  }

  return documents;
}

let cached: { documents: Document[]; documentFrequency: Map<string, number> } | null = null;
let technologyIndex: Map<string, Set<string>> | null = null;

function getIndex() {
  if (cached) return cached;

  const documents = buildDocuments();
  const documentFrequency = new Map<string, number>();
  for (const document of documents) {
    for (const token of new Set(tokenize(`${document.keywords} ${document.body}`))) {
      documentFrequency.set(token, (documentFrequency.get(token) ?? 0) + 1);
    }
  }

  cached = { documents, documentFrequency };
  return cached;
}

/** Canonical project <-> technology index, derived from project tags. */
function getTechnologyIndex(): Map<string, Set<string>> {
  if (technologyIndex) return technologyIndex;

  const index = new Map<string, Set<string>>();
  for (const project of assistantProjects) {
    for (const technology of project.technologies) {
      for (const token of tokenize(technology)) {
        const slugs = index.get(token) ?? new Set<string>();
        slugs.add(project.slug);
        index.set(token, slugs);
      }
    }
  }

  technologyIndex = index;
  return index;
}

const PROJECT_INTENT = new Set([
  'project', 'projects', 'build', 'built', 'building', 'made', 'make', 'created', 'develop',
  'developed', 'shipped', 'work', 'works', 'application', 'applications', 'app', 'apps',
  'system', 'systems', 'tool', 'tools', 'platform', 'platforms', 'portfolio',
]);

/**
 * Rank adjustment so "what did he build with React" or "show me projects using Python"
 * surface the matching project instead of a certification or skills page that merely
 * mentions the same technology name.
 */
function projectBoost(documentId: string, queryTokens: string[]): number {
  if (!documentId.includes(':')) return 1;
  const slug = documentId.split(':')[0];
  let boost = 1;

  if (queryTokens.some((token) => PROJECT_INTENT.has(token))) boost *= 1.3;

  const technologies = getTechnologyIndex();
  for (const token of queryTokens) {
    if (technologies.get(token)?.has(slug)) {
      boost *= 1.7;
      break;
    }
  }

  return boost;
}

function idf(token: string, total: number, documentFrequency: Map<string, number>): number {
  const seen = documentFrequency.get(token) ?? 0;
  return Math.log((total + 1) / (seen + 0.5));
}

function scoreDocument(
  document: Document,
  queryTokens: string[],
  rawQuestion: string,
  total: number,
  documentFrequency: Map<string, number>
): { score: number; matched: number } {
  const keywordTokens = new Set(tokenize(document.keywords));
  const bodyTokens = new Set(tokenize(document.body));
  const aliases = (document.aliases ?? []).map((alias) => alias.toLowerCase());
  const normalizedQuestion = rawQuestion.toLowerCase();

  let score = 0;
  let matched = 0;

  for (const token of queryTokens) {
    const weight = idf(token, total, documentFrequency);
    const inKeywords = keywordTokens.has(token);
    const inBody = bodyTokens.has(token);

    if (inKeywords || inBody) matched += 1;
    if (inKeywords) score += weight * 2.4;
    if (inBody) score += weight;
  }

  // Alias matches are reserved for project names and slugs. Generic words such as
  // "experience" or "metrics" appear in many questions, so they must not trigger
  // the proper-noun bonus that a project name earns.
  const aliasHit = aliases.find(
    (alias) => alias.length > 2 && normalizedQuestion.includes(alias)
  );
  if (aliasHit) {
    score += 4 + Math.min(aliasHit.length, 12) * 0.2;
    matched += 1;
  }

  return { score, matched };
}

export function isOutOfScopeQuestion(question: string): boolean {
  const normalized = question.toLowerCase();
  return OUT_OF_SCOPE_PATTERNS.some((pattern) => normalized.includes(pattern));
}

/**
 * Retrieves the most relevant verified context for a question.
 * Returns `grounded: false` when the question cannot be supported by the corpus.
 */

function detectAssistantIntent(question: string): string {
  const q = question.toLowerCase();

  if (
    /\b(what projects|which projects|projects has|projects have|built|portfolio projects)\b/.test(q)
  ) {
    return 'projects';
  }

  if (
    /\b(jango|enterprise document|document intelligence|rag project)\b/.test(q)
  ) {
    return 'jango';
  }

  if (
    /\b(institutional|performance analytics|ipas|analytics system)\b/.test(q)
  ) {
    return 'institutional';
  }

  if (
    /\b(ai developer toolbox|developer toolbox)\b/.test(q)
  ) {
    return 'ai-toolbox';
  }

  if (
    /\b(cinematch|movie recommendation|movie recommender)\b/.test(q)
  ) {
    return 'cinematch';
  }

  if (
    /\b(dsa tracker|progress tracker|leetcode|dsa problems|coding problems)\b/.test(q)
  ) {
    return 'dsa';
  }

  if (
    /\b(skill|skills|technology|technologies|tech stack|programming language|backend stack)\b/.test(q)
  ) {
    return 'skills';
  }

  if (
    /\b(experience|internship|internships|intern|worked|work experience)\b/.test(q)
  ) {
    return 'experience';
  }

  if (
    /\b(about you|about utkarsh|who is utkarsh|who are you|education|college|degree)\b/.test(q)
  ) {
    return 'profile';
  }

  return 'general';
}

function getIntentAllowedSections(intent: string): Set<string> | null {
  switch (intent) {
    case 'projects':
      return new Set(['projects', 'metrics']);

    case 'jango':
      return new Set(['projects']);

    case 'institutional':
      return new Set(['projects']);

    case 'ai-toolbox':
      return new Set(['projects']);

    case 'cinematch':
      return new Set(['projects']);

    case 'dsa':
      return new Set(['projects', 'metrics', 'profile']);

    case 'skills':
      return new Set(['skills']);

    case 'experience':
      return new Set(['experience']);

    case 'profile':
      return new Set(['profile', 'education', 'focus']);

    default:
      return null;
  }
}


function isProjectListQuestion(question: string): boolean {
  const q = question.toLowerCase();

  return (
    /\bwhat projects\b/.test(q) ||
    /\bwhich projects\b/.test(q) ||
    /\bprojects has\b/.test(q) ||
    /\bprojects have\b/.test(q) ||
    /\bportfolio projects\b/.test(q)
  );
}

function isExperienceQuestion(question: string): boolean {
  const q = question.toLowerCase();

  return /\b(experience|internship|internships|intern|worked|work experience)\b/.test(q);
}

function buildProjectListResult(): RetrievalResult {
  const chunks: RetrievedChunk[] = assistantProjects.map((project) => ({
    id: project.source.id,
    sourceId: project.source.id,
    title: project.name,
    text: [
      `${project.name}${project.year ? ` (${project.year})` : ''}.`,
      project.tagline ? ` ${project.tagline}` : '',
      project.technologies?.length
        ? ` Technologies: ${project.technologies.join(', ')}.`
        : '',
    ].join(''),
    score: 10,
  }));

  return {
    chunks,
    sources: assistantProjects.map((project) => project.source),
    grounded: chunks.length > 0,
  };
}

function buildExperienceResult(): RetrievalResult {
  const section = assistantSections.find(
    (item) => item.source.id === 'experience'
  );

  if (!section) {
    return {
      chunks: [],
      sources: [],
      grounded: false,
    };
  }

  return {
    chunks: [
      {
        id: 'experience',
        sourceId: 'experience',
        title: section.source.label,
        text: section.facts.join('\n- '),
        score: 10,
      },
    ],
    sources: [section.source],
    grounded: true,
  };
}

export function retrieveAssistantContext(question: string): RetrievalResult {
  const empty: RetrievalResult = { chunks: [], sources: [], grounded: false };

  if (isOutOfScopeQuestion(question)) return empty;

  if (isProjectListQuestion(question)) {
    return buildProjectListResult();
  }

  if (isExperienceQuestion(question)) {
    return buildExperienceResult();
  }

  const queryTokens = Array.from(new Set(tokenize(question)));

  if (queryTokens.length === 0) return empty;

  const { documents, documentFrequency } = getIndex();

  const normalizedQuestion = question.trim().toLowerCase();

  /*
   * Intent routing:
   *
   * Keep category questions inside the appropriate verified
   * knowledge section instead of allowing generic profile/project
   * documents to compete for the same ranking pool.
   */
  let allowedSourceIds: Set<string> | null = null;

  if (
    /\b(what projects|which projects|projects has|projects have|portfolio projects)\b/.test(
      normalizedQuestion
    )
  ) {
    allowedSourceIds = new Set(
      documents
        .filter((document) => document.sourceId.startsWith('project:'))
        .map((document) => document.sourceId)
    );
  } else if (
    /\b(jango|enterprise document|document intelligence|rag project)\b/.test(
      normalizedQuestion
    )
  ) {
    allowedSourceIds = new Set(['project:jango']);
  } else if (
    /\b(institutional|performance analytics|ipas|analytics system)\b/.test(
      normalizedQuestion
    )
  ) {
    allowedSourceIds = new Set(['project:institutional-performance-analytics-system']);
  } else if (
    /\b(ai developer toolbox|developer toolbox)\b/.test(normalizedQuestion)
  ) {
    allowedSourceIds = new Set(['project:ai-developer-toolbox']);
  } else if (
    /\b(cinematch|movie recommendation|movie recommender)\b/.test(
      normalizedQuestion
    )
  ) {
    allowedSourceIds = new Set(['project:cinematch']);
  } else if (
    /\b(dsa tracker|progress tracker|leetcode|dsa problems|coding problems)\b/.test(
      normalizedQuestion
    )
  ) {
    allowedSourceIds = new Set([
      'project:dsa-progress-tracker',
      'metrics',
      'profile',
    ]);
  } else if (
    /\b(skill|skills|technology|technologies|tech stack|programming language|backend stack)\b/.test(
      normalizedQuestion
    )
  ) {
    allowedSourceIds = new Set(['skills']);
  } else if (
    /\b(experience|internship|internships|intern|worked|work experience)\b/.test(
      normalizedQuestion
    )
  ) {
    allowedSourceIds = new Set(['experience']);
  } else if (
    /\b(about you|about utkarsh|who is utkarsh|who are you|education|college|degree)\b/.test(
      normalizedQuestion
    )
  ) {
    allowedSourceIds = new Set(['profile', 'education', 'focus']);
  }

  const candidateDocuments =
    allowedSourceIds === null
      ? documents
      : documents.filter((document) => allowedSourceIds!.has(document.sourceId));

  const scored = candidateDocuments
    .map((document) => {
      const { score, matched } = scoreDocument(
        document,
        queryTokens,
        question,
        documents.length,
        documentFrequency
      );

      const coverage = matched / queryTokens.length;
      const boost = projectBoost(document.id, queryTokens);

      return {
        document,
        raw: score * boost,
        coverage,
        score: score * boost * (0.55 + coverage),
      };
    })
    .filter((entry) => entry.raw > 0)
    .sort((a, b) => b.score - a.score);

  const best = scored[0];

  if (!best || best.raw < MIN_SCORE) return empty;

  if (best.coverage < MIN_COVERAGE) return empty;

  const chunks: RetrievedChunk[] = [];
  const sources: AssistantSource[] = [];
  const seenSources = new Set<string>();

  const relevanceFloor = Math.max(
    MIN_SCORE * 0.55,
    best.raw * 0.34
  );

  const maxChunks =
    normalizedQuestion.includes('what projects') ||
    normalizedQuestion.includes('which projects') ||
    normalizedQuestion.includes('projects has') ||
    normalizedQuestion.includes('projects have')
      ? 5
      : allowedSourceIds?.size === 1
        ? 3
        : MAX_CHUNKS;

  let budget = MAX_CONTEXT_CHARS;

  for (const entry of scored) {
    if (chunks.length >= maxChunks) break;

    if (entry.raw < relevanceFloor) break;

    const text = entry.document.body.trim();

    const chunk: RetrievedChunk = {
      id: entry.document.id,
      sourceId: entry.document.sourceId,
      title: entry.document.title,
      text,
      score: entry.score,
    };

    if (text.length > budget) {
      if (budget < 400) break;

      chunk.text = `${text.slice(0, budget).trimEnd()}…`;

      chunks.push(chunk);
      break;
    }

    budget -= text.length;
    chunks.push(chunk);

    if (!seenSources.has(entry.document.sourceId)) {
      seenSources.add(entry.document.sourceId);

      const source = findSource(entry.document.sourceId);

      if (source) {
        sources.push(source);
      }
    }
  }

  if (chunks.length === 0) return empty;

  return {
    chunks,
    sources,
    grounded: true,
  };
}

function findSource(sourceId: string): AssistantSource | undefined {
  const fromProject = assistantProjects.find((project) => project.source.id === sourceId);
  if (fromProject) return fromProject.source;
  return assistantSections.find((section) => section.source.id === sourceId)?.source;
}

/** Renders retrieved chunks into the exact string handed to the model. */
export function formatContext(result: RetrievalResult): string {
  if (!result.grounded) {
    return `No verified portfolio section matches this question. Relevant knowledge owner: ${assistantIdentity.owner}.`;
  }

  return result.chunks
    .map((chunk, index) => `[${index + 1}] ${chunk.title}\n${chunk.text}`)
    .join('\n\n');
}
