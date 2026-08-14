import { z } from "zod";
import { ctaSchema, contentStatusSchema, seoMetadataSchema, slugSchema } from "./shared";

export const serviceSchema = z.object({
  id: z.string().min(1),
  slug: slugSchema,
  title: z.string().min(1).max(80),
  shortDescription: z.string().min(1).max(200),
  description: z.string().min(1),
  audience: z.string().min(1),
  problemsSolved: z.array(z.string().min(1)).min(1),
  scope: z.array(z.string().min(1)).min(1),
  deliverables: z.array(z.string().min(1)).min(1),
  process: z.array(z.string().min(1)).optional(),
  technologies: z.array(slugSchema).optional(),
  exclusions: z.array(z.string().min(1)).optional(),
  cta: ctaSchema,
  featured: z.boolean().default(false),
  status: contentStatusSchema,
  metadata: seoMetadataSchema,
  openGraphImage: z.string().min(1).optional(),
});

export type Service = z.infer<typeof serviceSchema>;
