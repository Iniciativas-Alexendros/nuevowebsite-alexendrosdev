import { z } from "zod";

export const contactChannelTypeSchema = z.enum(["email", "form", "calendar"]);

export const contactChannelSchema = z.object({
  type: contactChannelTypeSchema,
  label: z.string().min(1).max(40),
  href: z.string().min(1),
  visible: z.boolean(),
  priority: z.number().int().min(0),
  external: z.boolean().optional(),
  availability: z.string().max(200).optional(),
  privacyNote: z.string().max(200).optional(),
});

export const contactChannelsSchema = z.array(contactChannelSchema).min(1);

export type ContactChannelType = z.infer<typeof contactChannelTypeSchema>;
export type ContactChannel = z.infer<typeof contactChannelSchema>;
