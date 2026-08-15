import { z } from "zod";
import { contentStatusSchema, seoMetadataSchema, slugSchema } from "./shared";

export const legalSectionSchema = z.object({
  heading: z.string().min(1).max(120).optional(),
  paragraphs: z.array(z.string().min(1)).min(1),
});

export const legalDocumentSchema = z.object({
  id: z.string().min(1),
  slug: slugSchema,
  title: z.string().min(1).max(80),
  status: contentStatusSchema,
  updatedAt: z.iso.date(),
  sections: z.array(legalSectionSchema).min(1),
  metadata: seoMetadataSchema,
});

export type LegalSection = z.infer<typeof legalSectionSchema>;
export type LegalDocument = z.infer<typeof legalDocumentSchema>;
