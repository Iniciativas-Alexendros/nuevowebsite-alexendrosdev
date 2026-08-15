import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";
import { getPublishedServices, getPublishedProjects } from "@/lib/content";

const staticPaths = [
  "/",
  ...siteConfig.navigation.map((item) => item.href),
  ...siteConfig.footerNavigation.map((item) => item.href),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePaths = getPublishedServices().map((s) => `/servicios/${s.slug}`);
  const projectPaths = getPublishedProjects().map((p) => `/proyectos/${p.slug}`);

  const allPaths = [...new Set([...staticPaths, ...servicePaths, ...projectPaths])];

  return allPaths.map((path) => ({
    url: absoluteUrl(path),
    priority:
      path === "/"
        ? 1
        : path.startsWith("/servicios/") || path.startsWith("/proyectos/")
          ? 0.9
          : 0.8,
  }));
}
