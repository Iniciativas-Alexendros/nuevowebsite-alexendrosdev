import { z } from "zod";
import { contentStatusSchema, seoMetadataSchema, slugSchema } from "./shared";

export const projectVisibilitySchema = z.enum(["publico", "limitado", "privado"]);

export const projectImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
});

export const projectLinkSchema = z.object({
  label: z.string().min(1).max(40),
  href: z.string().min(1),
  external: z.boolean().optional(),
});

export const projectSchema = z
  .object({
    id: z.string().min(1),
    slug: slugSchema,
    title: z.string().min(1).max(80),
    shortDescription: z.string().min(1).max(200),
    summary: z.string().min(1),
    status: contentStatusSchema,
    visibility: projectVisibilitySchema,
    role: z.string().min(1),
    context: z.string().optional(),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    responsibilities: z.array(z.string().min(1)).optional(),
    technologies: z.array(slugSchema).min(1),
    highlights: z.array(z.string().min(1)).optional(),
    results: z.array(z.string().min(1)).optional(),
    images: z.array(projectImageSchema).optional(),
    links: z.array(projectLinkSchema).optional(),
    publishedAt: z.iso.date(),
    updatedAt: z.iso.date().optional(),
    featured: z.boolean().default(false),
    metadata: seoMetadataSchema,
    confidentialityNotice: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.visibility !== "publico" && !data.confidentialityNotice) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Los proyectos no públicos requieren confidentialityNotice",
        path: ["confidentialityNotice"],
      });
    }
  });

export type ProjectVisibility = z.infer<typeof projectVisibilitySchema>;
export type ProjectImage = z.infer<typeof projectImageSchema>;
export type ProjectLink = z.infer<typeof projectLinkSchema>;
export type Project = z.infer<typeof projectSchema>;
