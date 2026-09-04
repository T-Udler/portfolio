import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    role: z.string().optional(),
    tools: z.array(z.string()).default([]),
    videoUrl: z.string().url().optional(),
    date: z.coerce.date().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
