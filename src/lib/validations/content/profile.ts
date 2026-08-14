import { z } from "zod";
import { contentStatusSchema, seoMetadataSchema } from "./shared";

export const profileSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1).max(80),
  title: z.string().min(1).max(120),
  summary: z.string().min(1),
  bio: z.array(z.string().min(1)).min(1),
  location: z.string().optional(),
  languages: z.array(z.string().min(1)).optional(),
  links: z
    .array(
      z.object({
        label: z.string().min(1).max(40),
        href: z.string().min(1),
      })
    )
    .optional(),
  status: contentStatusSchema,
  metadata: seoMetadataSchema,
});

export type Profile = z.infer<typeof profileSchema>;
