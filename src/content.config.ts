import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    order: z.number().int().min(1).max(7),
    title: z.string().min(1),
    summary: z.string().min(1),
    feature: z.string().min(1),
    estimatedMinutes: z.number().int().positive(),
    status: z.enum(['fixture', 'draft', 'ready']).default('draft'),
  }),
});

export const collections = { lessons };
