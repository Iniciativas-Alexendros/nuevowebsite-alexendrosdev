import { z } from "zod";
import { contentStatusSchema, slugSchema } from "./shared";

export const technologyCategorySchema = z.enum([
  "lenguaje",
  "framework",
  "cms",
  "estilo",
  "herramienta",
]);

export const technologySchema = z.object({
  id: slugSchema,
  name: z.string().min(1).max(40),
  category: technologyCategorySchema,
  description: z.string().min(1),
  icon: z.string().min(1).optional(),
  website: z.url().optional(),
  relevance: z.string().optional(),
  featured: z.boolean().default(false),
  status: contentStatusSchema,
  relatedProjects: z.array(slugSchema).optional(),
  relatedServices: z.array(slugSchema).optional(),
});

export type TechnologyCategory = z.infer<typeof technologyCategorySchema>;
export type Technology = z.infer<typeof technologySchema>;
