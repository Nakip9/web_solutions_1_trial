import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('فريق إراتيك'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
    color: z.string().default('#00D4FF'),
    order: z.number().default(999),
  }),
});

export const collections = {
  blog,
  services,
};
