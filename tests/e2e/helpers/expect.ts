import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export async function expectPathname(page: Page, pathname: string): Promise<void> {
  await expect.poll(() => new URL(page.url()).pathname).toBe(pathname);
}

export function headerTokens(value: string | null, separator = ","): string[] {
  return (value ?? "")
    .split(separator)
    .map((token) => token.trim().toLowerCase())
    .filter(Boolean);
}

export function mediaType(contentType: string | null): string {
  return (contentType ?? "").split(";")[0]?.trim().toLowerCase() ?? "";
}
