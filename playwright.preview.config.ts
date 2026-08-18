import { defineConfig, devices } from "@playwright/test";

/**
 * E2E contra preview MITL (sin webServer local).
 * PREVIEW_URL=https://…-alexendros-team.vercel.app pnpm test:e2e:preview
 */
const previewURL =
  process.env.PREVIEW_URL ??
  "https://nuevowebsite-alexendrosdev-j6yxr9hji-alexendros-team.vercel.app";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  retries: 0,
  reporter: "list",
  use: {
    baseURL: previewURL,
    trace: "off",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile-chrome", use: { ...devices["Pixel 5"] } },
  ],
});
