import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const lessonsDirectory = new URL('../src/content/lessons/', import.meta.url);
const expectedLessons = [
  '1-feature-customers.md',
  '2-feature-tickets.md',
  '3-feature-attachments.md',
  '4-feature-activity.md',
  '5-feature-sla.md',
  '6-feature-dashboard.md',
  '7-feature-ui-ux.md',
];
const requiredPhases = ['Research', 'Plan', 'Implement', 'Review'];

const errors = [];
const files = (await readdir(lessonsDirectory)).filter((file) => file.endsWith('.md')).sort();

for (const expected of expectedLessons) {
  if (!files.includes(expected)) {
    errors.push(`Missing expected lesson file: ${expected}`);
  }
}

for (const unexpected of files.filter((file) => !expectedLessons.includes(file))) {
  errors.push(`Unexpected lesson filename: ${unexpected}`);
}

const parseFrontmatter = (source, filename) => {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!match) {
    errors.push(`${filename}: frontmatter must start and end with --- fences`);
    return {};
  }

  const values = {};
  for (const line of match[1].split('\n')) {
    const field = line.match(/^([A-Za-z][\w]*):\s*(.+)$/);
    if (!field) continue;
    const [, key, rawValue] = field;
    const value = rawValue.trim().replace(/^['"]|['"]$/g, '');
    values[key] = /^\d+$/.test(value) ? Number(value) : value;
  }
  return values;
};

const headingPattern = /^##\s+(Research|Plan|Implement|Review)\s*$/gm;
const promptPattern = /^```prompt(?:\s+[^\n]*)?\n([\s\S]*?)\n```/gm;

for (const filename of expectedLessons) {
  const source = await readFile(join(lessonsDirectory.pathname, filename), 'utf8');
  const metadata = parseFrontmatter(source, filename);
  const expectedOrder = Number(filename.match(/^(\d+)/)?.[1]);

  for (const field of ['order', 'title', 'summary', 'feature', 'estimatedMinutes', 'status']) {
    if (metadata[field] === undefined || metadata[field] === '') {
      errors.push(`${filename}: missing required frontmatter field "${field}"`);
    }
  }

  if (metadata.order !== expectedOrder) {
    errors.push(`${filename}: order must be ${expectedOrder}`);
  }
  if (!Number.isInteger(metadata.estimatedMinutes) || metadata.estimatedMinutes <= 0) {
    errors.push(`${filename}: estimatedMinutes must be a positive integer`);
  }
  if (!['fixture', 'draft', 'ready'].includes(metadata.status)) {
    errors.push(`${filename}: status must be fixture, draft, or ready`);
  }

  const headings = [...source.matchAll(headingPattern)].map((match) => match[1]);
  if (headings.join('|') !== requiredPhases.join('|')) {
    errors.push(`${filename}: headings must contain exactly this ordered sequence: ${requiredPhases.join(', ')}`);
  }

  const phaseRanges = [...source.matchAll(headingPattern)].map((match, index, matches) => ({
    name: match[1],
    start: match.index + match[0].length,
    end: matches[index + 1]?.index ?? source.length,
  }));
  for (const phase of phaseRanges) {
    const body = source.slice(phase.start, phase.end);
    if (!promptPattern.test(body)) {
      errors.push(`${filename}: ${phase.name} must contain at least one \`\`\`prompt fenced block`);
    }
    promptPattern.lastIndex = 0;
  }
}

if (errors.length > 0) {
  console.error('Lesson content validation failed:\n- ' + errors.join('\n- '));
  process.exit(1);
}

console.log(`Validated ${expectedLessons.length} workshop lessons and their RPI prompt blocks.`);
