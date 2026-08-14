import { z } from "zod";

export const slugSchema = z
  .string()
  .min(2, "El slug debe tener al menos 2 caracteres")
  .max(64, "El slug no debe superar 64 caracteres")
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "El slug debe ser kebab-case en minúsculas");

export const contentStatusSchema = z.enum(["draft", "review", "published", "archived"]);

export const seoMetadataSchema = z.object({
  title: z.string().min(1).max(80),
  description: z.string().min(1).max(200),
});

export const ctaSchema = z.object({
  label: z.string().min(1).max(40),
  href: z.string().min(1),
});

export type Slug = z.infer<typeof slugSchema>;
export type ContentStatus = z.infer<typeof contentStatusSchema>;
export type SeoMetadata = z.infer<typeof seoMetadataSchema>;
export type Cta = z.infer<typeof ctaSchema>;
