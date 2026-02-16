import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const languages = defineCollection({
  loader: glob({ pattern: '*/_meta.md', base: './src/content/languages' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.enum(['web', 'systems', 'app', 'scripting']),
    order: z.number().optional().default(0),
    description: z.string(),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      })
    ).optional(),
  }),
});

const features = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/languages' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = { languages, features };

