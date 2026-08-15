import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

const staticPaths = [
  "/",
  ...siteConfig.navigation.map((item) => item.href),
  ...siteConfig.footerNavigation.map((item) => item.href),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const allPaths = [...new Set(staticPaths)];

  return allPaths.map((path) => ({
    url: absoluteUrl(path),
    priority: path === "/" ? 1 : 0.8,
  }));
}
