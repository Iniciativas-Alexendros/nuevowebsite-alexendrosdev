import { z } from "zod";

export const navigationItemSchema = z.object({
  label: z.string().min(1).max(40),
  href: z.string().min(1),
  external: z.boolean().optional(),
});

export const socialLinkSchema = z.object({
  label: z.string().min(1).max(40),
  href: z.url(),
});

export const personSchema = z.object({
  name: z.string().min(1).max(80),
  role: z.string().min(1).max(80).optional(),
  url: z.url().optional(),
});

export const siteConfigSchema = z.object({
  siteName: z.string().min(1).max(60),
  siteUrl: z.url(),
  defaultTitle: z.string().min(1).max(80),
  defaultDescription: z.string().min(1).max(200),
  locale: z.string().min(2).max(10),
  ogLocale: z.string().min(2).max(10),
  defaultOpenGraphImage: z.string().min(1),
  navigation: z.array(navigationItemSchema).min(1),
  footerNavigation: z.array(navigationItemSchema).default([]),
  socialLinks: z.array(socialLinkSchema).default([]),
  person: personSchema.optional(),
});

export type NavigationItem = z.infer<typeof navigationItemSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;
export type Person = z.infer<typeof personSchema>;
export type SiteConfig = z.infer<typeof siteConfigSchema>;
