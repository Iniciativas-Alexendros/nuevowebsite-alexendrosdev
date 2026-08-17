import { defineConfig, devices } from "@playwright/test";

const baseURL = "http://localhost:3000";

const projects: { name: string; use: (typeof devices)[string] }[] = [
  { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  { name: "mobile-chrome", use: { ...devices["Pixel 5"] } },
];

if (process.env.CI || process.env.E2E_WEBKIT) {
  projects.push({ name: "webkit", use: { ...devices["Desktop Safari"] } });
}

if (process.env.E2E_FIREFOX) {
  projects.push({ name: "firefox", use: { ...devices["Desktop Firefox"] } });
}

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects,
  webServer: {
    command: "pnpm build && pnpm start",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
